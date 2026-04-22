import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter, processContactSubmission } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database and notification modules
vi.mock("./db", () => ({
  getDb: vi.fn().mockResolvedValue(null), // no DB in test env
}));

vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

// ── tRPC contact.submit ────────────────────────────────────────────────────
describe("contact.submit (tRPC)", () => {
  it("accepts a valid contact submission and returns success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      company: "Apex Capital",
      title: "Managing Director",
      industry: "Private Equity",
      phone: "+1 555 000 0000",
      demoType: "deal-sourcing",
      message: "Looking forward to seeing ARIA in action.",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects submission with missing required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        firstName: "",
        email: "jane@example.com",
        company: "Apex Capital",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        firstName: "Jane",
        email: "not-an-email",
        company: "Apex Capital",
      })
    ).rejects.toThrow();
  });

  it("uses default values for optional fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      firstName: "John",
      email: "john@example.com",
      company: "Summit PE",
    });

    expect(result).toEqual({ success: true });
  });
});

// ── processContactSubmission (shared helper) ───────────────────────────────
describe("processContactSubmission (shared helper)", () => {
  it("returns success for a valid info intent submission", async () => {
    const result = await processContactSubmission({
      intent: "info",
      firstName: "Alice",
      lastName: "Walker",
      email: "alice@bigfirm.com",
      company: "Big Firm LLC",
      companySize: "51–200",
      industry: "Private Equity",
    });
    expect(result).toEqual({ success: true });
  });

  it("returns success for a demo intent submission", async () => {
    const result = await processContactSubmission({
      intent: "demo",
      firstName: "Bob",
      email: "bob@pe.com",
      company: "Meridian Capital",
      industry: "Private Equity",
      companySize: "11–50",
      message: "Interested in deal sourcing demo.",
      utm: { utm_source: "google", utm_campaign: "aria-demo" },
      referrer: "https://google.com",
    });
    expect(result).toEqual({ success: true });
  });

  it("returns success for a trial intent submission", async () => {
    const result = await processContactSubmission({
      intent: "trial",
      firstName: "Carol",
      email: "carol@searchfund.com",
      company: "Horizon Search",
      industry: "Search Fund / ETA",
      companySize: "1–10",
    });
    expect(result).toEqual({ success: true });
  });
});

// ── auth.logout ────────────────────────────────────────────────────────────
describe("auth.logout", () => {
  it("clears session cookie on logout", async () => {
    const clearedCookies: Array<{ name: string; options: Record<string, unknown> }> = [];
    const ctx: TrpcContext = {
      user: {
        id: 1,
        openId: "test-user",
        email: "test@example.com",
        name: "Test User",
        loginMethod: "manus",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
        lastSignedIn: new Date(),
      },
      req: { protocol: "https", headers: {} } as TrpcContext["req"],
      res: {
        clearCookie: (name: string, options: Record<string, unknown>) => {
          clearedCookies.push({ name, options });
        },
      } as unknown as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);
    const result = await caller.auth.logout();

    expect(result).toEqual({ success: true });
    expect(clearedCookies).toHaveLength(1);
    expect(clearedCookies[0]?.options).toMatchObject({ maxAge: -1 });
  });
});
