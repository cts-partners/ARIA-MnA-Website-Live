import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import { ArrowRight, BarChart3, CheckCircle2, ChevronRight, Zap } from "lucide-react";

const wizardSteps = [
  { id: 1, title: "Business Profile", desc: "Industry, business model, geography, years in operation" },
  { id: 2, title: "Financial Data", desc: "Revenue, EBITDA, growth rate, recurring revenue %" },
  { id: 3, title: "Market Position", desc: "Market share, competitive moat, customer concentration" },
  { id: 4, title: "Growth Drivers", desc: "Pipeline, expansion opportunities, product roadmap" },
  { id: 5, title: "Risk Factors", desc: "Customer churn, key person dependency, regulatory exposure" },
  { id: 6, title: "Valuation Output", desc: "Range, methodology, comparable analysis, AI confidence" },
];

const methodologies = [
  {
    name: "EV/EBITDA Multiple",
    desc: "Enterprise value relative to EBITDA, benchmarked against sector comps",
    range: "8.5x – 12.5x",
    color: "oklch(0.72 0.14 200)",
  },
  {
    name: "Revenue Multiple",
    desc: "Enterprise value relative to ARR/revenue for high-growth companies",
    range: "3.2x – 5.8x",
    color: "oklch(0.65 0.18 280)",
  },
  {
    name: "DCF Analysis",
    desc: "Discounted cash flow with AI-modeled terminal value and WACC",
    range: "$18M – $26M",
    color: "oklch(0.78 0.15 75)",
  },
  {
    name: "Comparable Transactions",
    desc: "Recent M&A transactions in the same sector and size range",
    range: "$20M – $28M",
    color: "oklch(0.70 0.18 150)",
  },
];

const dataQualityChecks = [
  { check: "Revenue reconciliation", status: "pass" },
  { check: "EBITDA add-back validation", status: "pass" },
  { check: "Working capital normalization", status: "pass" },
  { check: "Customer concentration analysis", status: "warning" },
  { check: "Growth rate plausibility", status: "pass" },
  { check: "Comparable selection", status: "pass" },
  { check: "Market size validation", status: "pass" },
  { check: "Risk factor completeness", status: "warning" },
];

const valuationFeatures = [
  {
    title: "Guided Input Wizard",
    desc: "Step-by-step prompts with contextual help. No financial modeling expertise required.",
    color: "oklch(0.72 0.14 200)",
  },
  {
    title: "Real-Time Calculations",
    desc: "Valuation range updates instantly as you enter data. See the impact of each variable.",
    color: "oklch(0.65 0.18 280)",
  },
  {
    title: "AI Data Validation",
    desc: "Data Quality Agent flags inconsistencies, outliers, and missing inputs before finalizing.",
    color: "oklch(0.78 0.15 75)",
  },
  {
    title: "Comparable Analysis",
    desc: "Comparable Analysis Agent benchmarks against recent transactions in your sector.",
    color: "oklch(0.70 0.18 150)",
  },
  {
    title: "Multi-Method Output",
    desc: "EV/EBITDA, Revenue Multiple, DCF, and Comparable Transactions — all in one report.",
    color: "oklch(0.60 0.20 25)",
  },
  {
    title: "Exportable Report",
    desc: "Professional PDF report suitable for board presentations, LOI discussions, and advisors.",
    color: "oklch(0.72 0.14 200)",
  },
];

export default function Valuation() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 px-4 relative" aria-labelledby="valuation-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[oklch(0.18_0.020_240)] text-[oklch(0.65_0.18_280)]" aria-hidden="true">
              <BarChart3 className="h-5 w-5" />
            </div>
            <span className="text-xs font-medium text-[oklch(0.60_0.010_240)] uppercase tracking-widest">
              Guided Wizard · Real-Time Calculations · AI-Validated
            </span>
          </div>
          <h1 id="valuation-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">
            Valuation Engine
          </h1>
          <p className="text-[oklch(0.60_0.010_240)] max-w-2xl text-lg">
            Know what your company is worth. A TurboTax-style guided wizard with real-time calculations, AI-validated data quality, and multi-methodology output.
          </p>
        </div>
      </section>

      {/* Wizard Preview */}
      <section className="py-16 px-4 bg-background" aria-labelledby="wizard-heading">
        <div className="container-wide">
          <h2 id="wizard-heading" className="text-2xl font-bold text-white mb-3 font-display">
            Guided Valuation Wizard
          </h2>
          <p className="text-[oklch(0.60_0.010_240)] mb-10">
            Six steps from business profile to valuation range. No financial modeling expertise required.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Step Navigator */}
            <div className="lg:col-span-1">
              <nav aria-label="Valuation wizard steps">
                <ol className="space-y-2">
                  {wizardSteps.map((step) => (
                    <li key={step.id}>
                      <button
                        onClick={() => setActiveStep(step.id)}
                        className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border transition-all duration-150 ${
                          activeStep === step.id
                            ? "border-[oklch(0.78_0.15_75/0.5)] bg-[oklch(0.78_0.15_75/0.06)]"
                            : "border-[oklch(0.22_0.018_240)] bg-[oklch(0.13_0.018_240)] hover:border-[oklch(0.30_0.025_240)]"
                        }`}
                        aria-current={activeStep === step.id ? "step" : undefined}
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 font-display ${
                            activeStep === step.id
                              ? "bg-[oklch(0.78_0.15_75)] text-[oklch(0.10_0.015_240)]"
                              : step.id < activeStep
                              ? "bg-[oklch(0.70_0.18_150/0.2)] text-[oklch(0.70_0.18_150)]"
                              : "bg-[oklch(0.22_0.018_240)] text-[oklch(0.72_0.010_240)]"
                          }`}
                        >
                          {step.id < activeStep ? <CheckCircle2 className="h-4 w-4" aria-label="Completed" /> : step.id}
                        </div>
                        <div>
                          <div className={`text-sm font-medium ${activeStep === step.id ? "text-white" : "text-[oklch(0.65_0.010_240)]"}`}>
                            {step.title}
                          </div>
                          <div className="text-xs text-[oklch(0.70_0.010_240)] mt-0.5">{step.desc}</div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* Step Content */}
            <div className="lg:col-span-2">
              <div className="bg-[oklch(0.13_0.018_240)] border border-[oklch(0.22_0.018_240)] rounded-2xl p-8">
                {activeStep < 6 ? (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-display">
                      Step {activeStep}: {wizardSteps[activeStep - 1]?.title}
                    </h3>
                    <p className="text-sm text-[oklch(0.60_0.010_240)] mb-8">{wizardSteps[activeStep - 1]?.desc}</p>

                    {/* Mock form fields */}
                    <div className="space-y-4 mb-8">
                      {activeStep === 1 && (
                        <>
                          <div>
                            <label className="block text-xs font-medium text-[oklch(0.60_0.010_240)] mb-2 uppercase tracking-wide">Industry</label>
                            <div className="h-10 bg-[oklch(0.18_0.020_240)] border border-[oklch(0.22_0.018_240)] rounded-lg px-3 flex items-center text-sm text-[oklch(0.70_0.010_240)]">
                              Select your industry...
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-[oklch(0.60_0.010_240)] mb-2 uppercase tracking-wide">Business Model</label>
                            <div className="h-10 bg-[oklch(0.18_0.020_240)] border border-[oklch(0.22_0.018_240)] rounded-lg px-3 flex items-center text-sm text-[oklch(0.70_0.010_240)]">
                              SaaS / Subscription...
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-[oklch(0.60_0.010_240)] mb-2 uppercase tracking-wide">Years in Operation</label>
                            <div className="h-10 bg-[oklch(0.18_0.020_240)] border border-[oklch(0.22_0.018_240)] rounded-lg px-3 flex items-center text-sm text-[oklch(0.70_0.010_240)]">
                              Enter years...
                            </div>
                          </div>
                        </>
                      )}
                      {activeStep === 2 && (
                        <>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-medium text-[oklch(0.60_0.010_240)] mb-2 uppercase tracking-wide">TTM Revenue</label>
                              <div className="h-10 bg-[oklch(0.18_0.020_240)] border border-[oklch(0.22_0.018_240)] rounded-lg px-3 flex items-center text-sm text-[oklch(0.70_0.010_240)]">$0.0M</div>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-[oklch(0.60_0.010_240)] mb-2 uppercase tracking-wide">TTM EBITDA</label>
                              <div className="h-10 bg-[oklch(0.18_0.020_240)] border border-[oklch(0.22_0.018_240)] rounded-lg px-3 flex items-center text-sm text-[oklch(0.70_0.010_240)]">$0.0M</div>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-[oklch(0.60_0.010_240)] mb-2 uppercase tracking-wide">YoY Growth Rate</label>
                              <div className="h-10 bg-[oklch(0.18_0.020_240)] border border-[oklch(0.22_0.018_240)] rounded-lg px-3 flex items-center text-sm text-[oklch(0.70_0.010_240)]">0%</div>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-[oklch(0.60_0.010_240)] mb-2 uppercase tracking-wide">Recurring Revenue %</label>
                              <div className="h-10 bg-[oklch(0.18_0.020_240)] border border-[oklch(0.22_0.018_240)] rounded-lg px-3 flex items-center text-sm text-[oklch(0.70_0.010_240)]">0%</div>
                            </div>
                          </div>
                        </>
                      )}
                      {activeStep > 2 && (
                        <div className="py-8">
                          <div className="text-[oklch(0.72_0.010_240)] text-sm">
                            Step {activeStep} inputs — available in the live platform
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <Button
                        variant="outline"
                        onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                        disabled={activeStep === 1}
                        className="border-[oklch(0.30_0.025_240)] text-white hover:bg-[oklch(0.18_0.020_240)] bg-transparent disabled:opacity-40"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={() => setActiveStep(Math.min(6, activeStep + 1))}
                        className="bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.13_75)] text-[oklch(0.10_0.015_240)] font-semibold"
                      >
                        {activeStep === 5 ? "Calculate Valuation" : "Next"} <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Valuation Output */
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Zap className="h-5 w-5 text-[oklch(0.78_0.15_75)]" aria-hidden="true" />
                      <h3 className="text-xl font-semibold text-white font-display">Valuation Output</h3>
                    </div>

                    <div className="bg-[oklch(0.10_0.015_240)] border border-[oklch(0.78_0.15_75/0.3)] rounded-xl p-6 mb-6">
                      <div className="text-xs text-[oklch(0.60_0.010_240)] uppercase tracking-widest mb-2">Estimated Enterprise Value</div>
                      <div className="text-4xl font-bold text-gradient-gold font-display">$18M – $26M</div>
                      <div className="text-sm text-[oklch(0.72_0.010_240)] mt-2">Based on 4 valuation methodologies</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {methodologies.map((m) => (
                        <div key={m.name} className="bg-[oklch(0.10_0.015_240)] border border-[oklch(0.22_0.018_240)] rounded-lg p-4">
                          <div className="text-xs text-[oklch(0.72_0.010_240)] mb-1">{m.name}</div>
                          <div className="text-lg font-bold font-display" style={{ color: m.color }}>{m.range}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <div className="text-xs font-medium text-[oklch(0.72_0.010_240)] uppercase tracking-wide mb-3">Data Quality Checks</div>
                      <div className="grid grid-cols-2 gap-2">
                        {dataQualityChecks.map((check) => (
                          <div key={check.check} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full shrink-0 ${check.status === "pass" ? "bg-[oklch(0.70_0.18_150)]" : "bg-[oklch(0.78_0.15_75)]"}`} aria-hidden="true" />
                            <span className="text-xs text-[oklch(0.65_0.010_240)]">{check.check}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.13_75)] text-[oklch(0.10_0.015_240)] font-semibold glow-gold">
                        Get Full Valuation Report <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-[oklch(0.12_0.018_240)]" aria-labelledby="val-features-heading">
        <div className="container-wide">
          <h2 id="val-features-heading" className="text-2xl font-bold text-white mb-8 font-display">
            What makes ARIA Valuation different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valuationFeatures.map((feat) => (
              <div key={feat.title} className="bg-[oklch(0.13_0.018_240)] border border-[oklch(0.22_0.018_240)] rounded-xl p-6 card-hover">
                <div className="w-2 h-2 rounded-full mb-4" style={{ background: feat.color }} aria-hidden="true" />
                <h3 className="text-base font-semibold text-white mb-2 font-display">{feat.title}</h3>
                <p className="text-sm text-[oklch(0.75_0.010_240)] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-background">
        <div className="container-wide">
          <Link href="/contact">
            <Button className="bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.13_75)] text-[oklch(0.10_0.015_240)] font-semibold px-8 glow-gold">
              Get Your Company Valuation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
