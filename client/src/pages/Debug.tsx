import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";

// ─── Analytics stub ───────────────────────────────────────────────────────────
function trackEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    console.debug("[ARIA Analytics]", event, data);
  }
}

type HeroVariant = "primary" | "variantA" | "variantB";

const variantDescriptions: Record<HeroVariant, { name: string; description: string; headline: string }> = {
  primary: {
    name: "Primary (Recommended)",
    description: "Outcome-led hero. Leads with analyst time savings, CTS subhead.",
    headline: "Your analysts spend 60% of their time on tasks ARIA handles in minutes.",
  },
  variantA: {
    name: "Variant A — Category-Led",
    description: "Category-creation framing. Positions ARIA as a new category (Agentic AI M&A OS).",
    headline: "The Agentic AI Operating System for M&A.",
  },
  variantB: {
    name: "Variant B — Specificity-Led",
    description: "Outcome-specific framing. Leads with a measurable timeline outcome.",
    headline: "From target list to signed LOI in 30% less time.",
  },
};

export default function Debug() {
  const [currentVariant, setCurrentVariant] = useState<HeroVariant>("primary");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("aria_hero_variant") as HeroVariant | null;
    if (stored && variantDescriptions[stored]) {
      setCurrentVariant(stored);
    }
  }, []);

  function applyVariant(variant: HeroVariant) {
    localStorage.setItem("aria_hero_variant", variant);
    setCurrentVariant(variant);
    setSaved(true);
    trackEvent("debug_variant_set", { variant });
    setTimeout(() => setSaved(false), 2000);
  }

  function clearVariant() {
    localStorage.removeItem("aria_hero_variant");
    setCurrentVariant("primary");
    setSaved(true);
    trackEvent("debug_variant_cleared");
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <PageLayout>
      <section className="min-h-screen bg-[#000000] pt-24 pb-20">
        <div className="container max-w-2xl">
          {/* Header */}
          <div className="mb-8">
            <Link href="/">
              <button className="flex items-center gap-2 text-sm text-[#7A8FA8] hover:text-white transition-colors mb-6">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to homepage
              </button>
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FF3D00] bg-[rgba(255,61,0,0.08)] mb-4">
              <span className="label-caps text-[#FF3D00]">Internal Tool — Not for Production</span>
            </div>
            <h1 className="text-3xl font-black text-white mb-2" style={{ letterSpacing: "-0.02em" }}>
              A/B Hero Variant Debug
            </h1>
            <p className="text-sm text-[#7A8FA8]">
              Toggle the homepage hero variant for internal testing. Setting is stored in localStorage and persists across page refreshes.
            </p>
          </div>

          {/* Variant cards */}
          <div className="space-y-4 mb-8">
            {(Object.keys(variantDescriptions) as HeroVariant[]).map((variant) => {
              const info = variantDescriptions[variant];
              const isActive = currentVariant === variant;
              return (
                <button
                  key={variant}
                  onClick={() => applyVariant(variant)}
                  className={`w-full text-left p-5 rounded-xl border transition-all ${
                    isActive
                      ? "border-[#FFB000] bg-[rgba(255,176,0,0.06)]"
                      : "border-[#1E2D45] bg-[#0D1425] hover:border-[#253550]"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {isActive && (
                          <CheckCircle2 className="h-4 w-4 text-[#FFB000] flex-shrink-0" aria-hidden="true" />
                        )}
                        <span className={`text-sm font-bold ${isActive ? "text-[#FFB000]" : "text-white"}`}>
                          {info.name}
                        </span>
                      </div>
                      <p className="text-xs text-[#7A8FA8] mb-2">{info.description}</p>
                      <p className="text-sm text-[#B8C8DC] italic">"{info.headline}"</p>
                    </div>
                    <span className={`label-caps flex-shrink-0 ${isActive ? "text-[#FFB000]" : "text-[#1E2D45]"}`}>
                      {isActive ? "ACTIVE" : variant.toUpperCase()}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Link href="/">
              <button className="btn-orange px-5 py-2.5 rounded-md text-sm font-bold text-black">
                View homepage
              </button>
            </Link>
            <button
              onClick={clearVariant}
              className="btn-cyan-outline px-5 py-2.5 rounded-md text-sm font-semibold"
            >
              Reset to default
            </button>
          </div>

          {saved && (
            <div className="mt-4 flex items-center gap-2 text-sm text-[#66E0FF]">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Variant saved. Reload the homepage to see the change.
            </div>
          )}

          {/* Analytics reference */}
          <div className="mt-12 p-5 rounded-xl border border-[#1E2D45] bg-[#0D1425]">
            <h2 className="text-sm font-bold text-white mb-3">Analytics Events</h2>
            <p className="text-xs text-[#7A8FA8] mb-2">
              The following events are fired to <code className="text-[#4FC3F7]">console.debug</code> (stub). Wire to your analytics provider:
            </p>
            <ul className="space-y-1.5 text-xs text-[#7A8FA8]">
              <li><code className="text-[#FFB000]">hero_variant_shown</code> — fires on homepage load with <code>{"{ variant }"}</code></li>
              <li><code className="text-[#FFB000]">cta_click</code> — fires on any CTA with <code>{"{ cta, variant }"}</code></li>
              <li><code className="text-[#FFB000]">persona_tab_click</code> — fires on persona toggle with <code>{"{ persona }"}</code></li>
              <li><code className="text-[#FFB000]">workflow_tile_click</code> — fires on workflow tile click with <code>{"{ workflow }"}</code></li>
              <li><code className="text-[#FFB000]">debug_variant_set</code> — fires here with <code>{"{ variant }"}</code></li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
