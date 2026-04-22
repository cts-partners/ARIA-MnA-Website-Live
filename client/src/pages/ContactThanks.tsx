import { useEffect } from "react";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import {
  CheckCircle2,
  CalendarDays,
  Cpu,
  Rocket,
  Info,
  ArrowRight,
  ExternalLink,
  Clock,
  Shield,
  Mail,
} from "lucide-react";

// ── Intent config ──────────────────────────────────────────────────────────
type IntentKey = "info" | "demo" | "tech" | "trial";

interface IntentConfig {
  key: IntentKey;
  icon: React.ReactNode;
  color: string;
  headline: string;
  subhead: string;
  timeline: string[];
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
}

const INTENT_CONFIG: Record<IntentKey, IntentConfig> = {
  info: {
    key: "info",
    icon: <Info className="h-8 w-8" />,
    color: "#4FC3F7",
    headline: "Your request is on its way.",
    subhead:
      "A member of the ARIA team will review your inquiry and reach out within one business day.",
    timeline: [
      "Request received and logged",
      "Routed to the right ARIA specialist",
      "You'll hear from us within 1 business day",
      "We'll answer every question — no sales pressure",
    ],
    primaryCTA: { label: "Explore the Platform", href: "/platform" },
    secondaryCTA: { label: "Read the Architecture overview", href: "/architecture" },
  },
  demo: {
    key: "demo",
    icon: <CalendarDays className="h-8 w-8" />,
    color: "#FFB000",
    headline: "Demo request confirmed.",
    subhead:
      "Our team will reach out within one business day to schedule a personalized walkthrough tailored to your firm's workflow.",
    timeline: [
      "Request received and confirmed",
      "Our team reviews your firm profile",
      "Calendar invite sent within 1 business day",
      "Live demo — 45 minutes, tailored to your use case",
    ],
    primaryCTA: { label: "Preview the Platform", href: "/platform" },
    secondaryCTA: { label: "See Deal Sourcing in action", href: "/deal-sourcing" },
  },
  tech: {
    key: "tech",
    icon: <Cpu className="h-8 w-8" />,
    color: "#A78BFA",
    headline: "Technical session requested.",
    subhead:
      "Our engineering team will reach out within one business day to schedule your deep-dive session.",
    timeline: [
      "Request received and confirmed",
      "Matched with the right ARIA engineer",
      "Pre-session questionnaire sent",
      "90-minute technical deep-dive scheduled",
    ],
    primaryCTA: { label: "Read the Architecture overview", href: "/architecture" },
    secondaryCTA: { label: "Explore the Platform modules", href: "/platform" },
  },
  trial: {
    key: "trial",
    icon: <Rocket className="h-8 w-8" />,
    color: "#34D399",
    headline: "Welcome to ARIA.",
    subhead:
      "Your 14-day free trial is being provisioned. You'll receive an activation email within the next few minutes.",
    timeline: [
      "Trial account provisioned",
      "Activation email sent to your work inbox",
      "Onboarding guide delivered",
      "Dedicated onboarding call scheduled within 2 business days",
    ],
    primaryCTA: { label: "Check your inbox", href: "mailto:" },
    secondaryCTA: { label: "Explore the Platform while you wait", href: "/platform" },
  },
};

// ── Component ──────────────────────────────────────────────────────────────
export default function ContactThanks() {
  const [location] = useLocation();

  // Parse intent from query string
  const params = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const intentParam = params.get("intent") as IntentKey | null;
  const config = INTENT_CONFIG[intentParam ?? "info"] ?? INTENT_CONFIG.info;

  // Analytics
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__ariaTrack?.("contact_thanks_viewed", { intent: config.key });
      if ((window as any).gtag) {
        (window as any).gtag("event", "conversion", {
          event_category: "contact",
          event_label: config.key,
        });
      }
    }
  }, [config.key]);

  return (
    <PageLayout
      title={`${config.headline} — ARIA M&A Intelligence`}
      description={config.subhead}
    >
      <section className="min-h-[calc(100vh-5rem)] flex items-start py-20 px-4">
        <div className="max-w-xl w-full">

          {/* Icon + check */}
          <div className="flex items-center mb-8">
            <div
              className="relative w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: `${config.color}18`, border: `2px solid ${config.color}44` }}
            >
              <span style={{ color: config.color }} aria-hidden="true">
                {config.icon}
              </span>
              <span
                className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: config.color }}
                aria-hidden="true"
              >
                <CheckCircle2 className="h-4 w-4 text-black" />
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl font-light text-white mb-3"
            style={{ fontFamily: "Outfit, sans-serif", letterSpacing: "-0.01em" }}
          >
            {config.headline}
          </h1>
          <p className="text-[#B8C8DC] leading-relaxed mb-10">
            {config.subhead}
          </p>

          {/* Micro-timeline */}
          <div
            className="rounded-xl border p-6 mb-8"
            style={{ borderColor: `${config.color}33`, background: `${config.color}08` }}
          >
            <h2
              className="text-sm font-medium mb-4 uppercase tracking-widest"
              style={{ color: config.color, fontFamily: "Outfit, sans-serif" }}
            >
              What happens next
            </h2>
            <ol className="space-y-3">
              {config.timeline.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: `${config.color}22`, color: config.color }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm text-[#A0B4C8] leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href={config.primaryCTA.href}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all duration-150"
              style={{ background: config.color, color: config.key === "demo" ? "#000" : "#fff" }}
            >
              {config.key === "trial" ? (
                <Mail className="h-4 w-4" aria-hidden="true" />
              ) : (
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              )}
              {config.primaryCTA.label}
            </a>
            <a
              href={config.secondaryCTA.href}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium border border-[#1E2D45] text-[#B8C8DC] hover:text-white hover:border-[#253550] transition-all duration-150"
            >
              {config.secondaryCTA.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Trust strip */}
          <div className="border-t border-[#1E2D45] pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-[#6B7A8D]">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#4FC3F7]" aria-hidden="true" />
                Replies within 1 business day
              </div>
              <span className="hidden sm:block text-[#1E2D45]">|</span>
              <div className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-[#4FC3F7]" aria-hidden="true" />
                Information Barriers protect every engagement
              </div>
            </div>
            <div className="mt-3">
              <a
                href="https://www.cts-partners.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#66E0FF] hover:text-white transition-colors"
              >
                Brought to you by Convergence Technology Solutions
                <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
