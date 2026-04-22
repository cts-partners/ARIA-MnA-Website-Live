import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import { contactSubmissions } from "../drizzle/schema";
import { notifyOwner } from "./_core/notification";
import type { Express, Request, Response } from "express";

// ── Shared contact submission logic ────────────────────────────────────────
export async function processContactSubmission(data: {
  intent?: string;
  firstName: string;
  lastName?: string;
  email: string;
  company: string;
  title?: string;
  industry?: string;
  phone?: string;
  companySize?: string;
  message?: string;
  utm?: Record<string, string>;
  referrer?: string;
  timestamp?: string;
}) {
  const db = await getDb();
  if (db) {
    await db.insert(contactSubmissions).values({
      firstName: data.firstName,
      lastName: data.lastName || null,
      email: data.email,
      company: data.company,
      title: data.title || null,
      industry: data.industry || null,
      phone: data.phone || null,
      demoType: data.intent || "info",
      message: [
        data.message,
        data.companySize ? `Company size: ${data.companySize}` : null,
        data.utm && Object.keys(data.utm).length > 0
          ? `UTM: ${JSON.stringify(data.utm)}`
          : null,
        data.referrer ? `Referrer: ${data.referrer}` : null,
      ]
        .filter(Boolean)
        .join("\n") || null,
    });
  }

  const intentLabel: Record<string, string> = {
    info: "Information Request",
    demo: "Demo Request",
    tech: "Technical Talk Request",
    trial: "30-Day Trial Signup",
  };

  await notifyOwner({
    title: `New ${intentLabel[data.intent ?? "info"] ?? "Contact"}: ${data.firstName} ${data.lastName ?? ""} — ${data.company}`,
    content: `
**New Contact Submission**

**Intent:** ${intentLabel[data.intent ?? "info"] ?? data.intent}
**Name:** ${data.firstName} ${data.lastName ?? ""}
**Email:** ${data.email}
**Company:** ${data.company}
**Title:** ${data.title || "N/A"}
**Industry:** ${data.industry || "N/A"}
**Company Size:** ${data.companySize || "N/A"}
**Phone:** ${data.phone || "N/A"}
**Message:** ${data.message || "None"}
**Referrer:** ${data.referrer || "Direct"}
**UTM:** ${data.utm ? JSON.stringify(data.utm) : "None"}
**Timestamp:** ${data.timestamp || new Date().toISOString()}
    `.trim(),
  });

  return { success: true };
}

// ── Register REST /api/contact endpoint ────────────────────────────────────
export function registerContactRoute(app: Express) {
  // Simple in-memory rate limiting (per IP, 5 submissions per 15 min)
  const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
  const RATE_LIMIT = 5;
  const WINDOW_MS = 15 * 60 * 1000;

  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const ip =
        (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
        req.socket.remoteAddress ||
        "unknown";

      // Rate limit
      const now = Date.now();
      const entry = rateLimitMap.get(ip);
      if (entry && now < entry.resetAt) {
        if (entry.count >= RATE_LIMIT) {
          return res.status(429).json({
            success: false,
            message: "Too many submissions. Please wait a few minutes and try again.",
          });
        }
        entry.count++;
      } else {
        rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
      }

      const body = req.body as {
        intent?: string;
        fields?: {
          firstName?: string;
          lastName?: string;
          email?: string;
          company?: string;
          title?: string;
          industry?: string;
          phone?: string;
          companySize?: string;
          message?: string;
        };
        utm?: Record<string, string>;
        referrer?: string;
        timestamp?: string;
      };

      const fields = body.fields ?? {};

      // Basic server-side validation
      if (!fields.firstName?.trim()) {
        return res.status(400).json({ success: false, message: "First name is required." });
      }
      if (!fields.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
        return res.status(400).json({ success: false, message: "Valid email is required." });
      }
      if (!fields.company?.trim()) {
        return res.status(400).json({ success: false, message: "Company is required." });
      }

      await processContactSubmission({
        intent: body.intent,
        firstName: fields.firstName,
        lastName: fields.lastName,
        email: fields.email,
        company: fields.company,
        title: fields.title,
        industry: fields.industry,
        phone: fields.phone,
        companySize: fields.companySize,
        message: fields.message,
        utm: body.utm,
        referrer: body.referrer,
        timestamp: body.timestamp,
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.error("[/api/contact] error:", err);
      return res.status(500).json({
        success: false,
        message: "An internal error occurred. Please try again.",
      });
    }
  });
}

// ── tRPC router ────────────────────────────────────────────────────────────
export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          firstName: z.string().min(1, "First name is required"),
          lastName: z.string().optional().default(""),
          email: z.string().email("Valid email required"),
          company: z.string().min(1, "Company is required"),
          title: z.string().optional().default(""),
          industry: z.string().optional().default(""),
          phone: z.string().optional().default(""),
          demoType: z.string().optional().default("full-platform"),
          message: z.string().optional().default(""),
        })
      )
      .mutation(async ({ input }) => {
        return processContactSubmission({
          intent: input.demoType,
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          company: input.company,
          title: input.title,
          industry: input.industry,
          phone: input.phone,
          message: input.message,
        });
      }),
  }),
});

export type AppRouter = typeof appRouter;
