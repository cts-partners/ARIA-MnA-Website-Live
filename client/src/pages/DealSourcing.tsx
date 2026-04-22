import { Link } from "wouter";
import { ArrowRight, CheckCircle2, XCircle, ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";

function StarGlyph({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {[0, 45, 90, 135].map((angle) => (
        <line key={angle} x1="12" y1="2" x2="12" y2="22" stroke="#66E0FF" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${angle} 12 12)`} />
      ))}
      <circle cx="12" cy="12" r="1.5" fill="#66E0FF" />
    </svg>
  );
}

const stats = [
  { value: "3×", label: "More thesis-matched opportunities surfaced per month" },
  { value: "60%", label: "Reduction in associate time on list-building and screening" },
  { value: "94%", label: "Thesis-match accuracy on AI-scored opportunities" },
];

const funnelStages = [
  { label: "Identified", desc: "AI-identified opportunities matching investment thesis", count: "2,847", pct: "100%" },
  { label: "Screened", desc: "Passed initial AI screening and data validation", count: "412", pct: "14.5%" },
  { label: "Deep Dive", desc: "Under detailed analysis by AI agents", count: "89", pct: "3.1%" },
  { label: "Engaged", desc: "Active outreach and management meetings", count: "23", pct: "0.8%" },
  { label: "LOI / Closing", desc: "Letter of intent or closing process", count: "7", pct: "0.25%" },
];

const workflowSteps = [
  {
    num: "1",
    title: "Define your thesis",
    desc: "Sector, size, geography, growth profile, revenue model, exit horizon. Structured fields or natural language, ARIA parses either.",
  },
  {
    num: "2",
    title: "Agents scan continuously",
    desc: "Company Profiler, Signal Detection, and Thesis Matching agents process filings, news, funding events, and proprietary databases 24/7.",
  },
  {
    num: "3",
    title: "Scored and memo'd",
    desc: "Every qualifying target is scored against your thesis, enriched from the knowledge graph, and packaged as a first-look memo.",
  },
  {
    num: "4",
    title: "Your review, your call",
    desc: "Approve, pass, or route to diligence with one click. ARIA learns from every pass, the model gets smarter on your thesis.",
  },
  {
    num: "5",
    title: "Handoff to diligence",
    desc: "One-click handoff to the Due Diligence module with all source documents and a populated target profile.",
  },
];

const sourcingModels = [
  {
    title: "PE & Growth Equity",
    desc: "Continuous, thesis-driven origination at fund scale. Deliver partners a steady stream of qualified at-bats, not a list of 500 maybes.",
    cta: "Buy-Side Sourcing",
    color: "#4FC3F7",
  },
  {
    title: "Independent Sponsors & Search Funds",
    desc: "Institutional-grade sourcing without a research team. Compete with the firms that have 30 associates on staff.",
    cta: "Sponsor Sourcing",
    color: "#66E0FF",
  },
  {
    title: "Corp Dev & Strategic Buyers",
    desc: "Keep your strategic M&A pipeline live between formal processes. Signal-driven, not conference-driven.",
    cta: "Corp Dev Sourcing",
    color: "#4FC3F7",
  },
  {
    title: "Sell-Side Advisors (reverse sourcing)",
    desc: "Find the right advisor mandates to pitch. Know which owners are signaling a sale before your competitors do.",
    cta: "Advisor Sourcing",
    color: "#66E0FF",
  },
];

const comparisonRows = [
  {
    activity: "List-building",
    traditional: "Analyst runs PitchBook filters weekly; lists go stale in days.",
    aria: "Continuous scan of public, private, and web signals, always fresh.",
  },
  {
    activity: "Thesis scoring",
    traditional: "Subjective gut check during Monday pipeline review.",
    aria: "Every target scored against structured thesis criteria, with the reasoning shown.",
  },
  {
    activity: "First-look memos",
    traditional: "2–4 hours of associate time per memo.",
    aria: "AI-drafted in minutes from graph-enriched data, associate reviews, doesn't originate.",
  },
  {
    activity: "Signal monitoring",
    traditional: "Google Alerts + conference gossip.",
    aria: "Real-time agents flag leadership changes, funding, distress, and growth inflections.",
  },
  {
    activity: "Learning loop",
    traditional: "None. Pass reasons lost in email threads.",
    aria: "ARIA learns from every pass, accept, and close, model improves on your thesis.",
  },
];

export default function DealSourcing() {
  return (
    <PageLayout
      title="Deal Sourcing — ARIA M&A Intelligence Platform"
      description="Origination at institutional scale using specialized AI Agents. ARIA's sourcing agents scan public filings, private databases, and web signals 24/7, scoring every target against your thesis."
    >
      {/* Back link */}
      <div className="bg-[#000000] border-b border-[#1E2D45]">
        <div className="container py-4">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </span>
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#000000] overflow-hidden" aria-labelledby="ds-hero-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #1E3A8A, transparent 70%)" }} />
        </div>
        <div className="container relative z-10 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E3A8A] bg-[rgba(30,58,138,0.15)] mb-6">
            <StarGlyph size={12} />
            <span className="label-caps text-[#66E0FF]">Buy-Side · Deal Sourcing</span>
          </div>
          <h1 id="ds-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Deal Sourcing
          </h1>
          <p className="text-2xl sm:text-3xl font-black text-[#4FC3F7] mb-6" style={{ letterSpacing: "-0.01em" }}>
            Origination at institutional scale<br />using specialized AI Agents.
          </p>
          <p className="text-lg text-[#B8C8DC] max-w-2xl mb-10 leading-relaxed">
            ARIA's sourcing agents scan public filings, private databases, web signals, and your firm's own graph 24/7, scoring every target against your thesis and drafting first-look memos on the 5% worth reviewing. Your partners get a higher-quality top-of-funnel; your associates stop spending weekends on list-building.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact?intent=trial">
              <button className="btn-orange px-8 py-3.5 rounded-md text-sm font-black text-black flex items-center gap-2">
                Start 14-Day Trial
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </Link>
            <Link href="/contact?intent=demo">
              <button className="btn-cyan-outline px-8 py-3.5 rounded-md text-sm font-semibold">
                See how it works
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#0D1425] border-y border-[#1E2D45] py-10" aria-label="Deal sourcing metrics">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-black text-[#4FC3F7] mb-2">{s.value}</div>
                <div className="text-sm text-[#7A8FA8]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Funnel Visualization ── */}
      <section className="py-20 bg-[#000000]" aria-labelledby="funnel-heading">
        <div className="container">
          <div className="mb-12">
            <span className="label-caps text-[#66E0FF] block mb-3">Live Pipeline</span>
            <h2 id="funnel-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
              Your live pipeline top to bottom.
            </h2>
            <p className="text-[#B8C8DC] max-w-xl">
              Illustrative funnel for a mid-market growth-equity thesis. ARIA continuously tightens the funnel from raw signal to signed LOI, with every step logged and explainable.
            </p>
          </div>
          <div className="max-w-2xl space-y-3">
            {funnelStages.map((stage, i) => {
              const widths = ["100%", "80%", "55%", "35%", "20%"];
              return (
                <div key={i} className="card-glass rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-base font-bold text-white">{stage.label}</span>
                      <span className="text-xs text-[#7A8FA8] ml-3">{stage.desc}</span>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <span className="text-lg font-black text-[#4FC3F7]">{stage.count}</span>
                      <span className="text-xs text-[#7A8FA8] ml-2">{stage.pct}</span>
                    </div>
                  </div>
                  <div className="h-2 bg-[#1E2D45] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: widths[i], background: "linear-gradient(90deg, #1E3A8A, #4FC3F7)" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5-Step Workflow ── */}
      <section className="py-20 bg-[#0D1425]" aria-labelledby="workflow-heading">
        <div className="container">
          <div className="mb-12">
            <span className="label-caps text-[#66E0FF] block mb-3">The Workflow</span>
            <h2 id="workflow-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
              From thesis to term sheet without leaving the platform.
            </h2>
            <p className="text-[#B8C8DC]">Five steps. Zero tab-switching. Every output traceable back to the source.</p>
          </div>
          <div className="max-w-3xl space-y-4">
            {workflowSteps.map((step, i) => (
              <div key={i} className="card-glass rounded-xl p-6 flex items-start gap-5">
                <div className="text-4xl font-black flex-shrink-0 w-10 text-center" style={{ color: "#4FC3F7", lineHeight: 1 }}>
                  {step.num}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-[#7A8FA8] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sourcing Models ── */}
      <section className="py-20 bg-[#000000]" aria-labelledby="models-heading">
        <div className="container">
          <div className="mb-12">
            <span className="label-caps text-[#66E0FF] block mb-3">Every Sourcing Model</span>
            <h2 id="models-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
              Built for every sourcing model.
            </h2>
            <p className="text-[#B8C8DC] max-w-xl">
              The top-of-funnel problem looks different depending on where you sit. ARIA adapts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
            {sourcingModels.map((model, i) => (
              <div key={i} className="card-glass rounded-xl p-6">
                <h3 className="text-base font-bold text-white mb-2">{model.title}</h3>
                <p className="text-sm text-[#7A8FA8] leading-relaxed mb-4">{model.desc}</p>
                <Link href="/contact?intent=trial">
                  <span className="text-xs font-semibold flex items-center gap-1 cursor-pointer hover:gap-2 transition-all" style={{ color: model.color }}>
                    {model.cta} <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-20 bg-[#0D1425]" aria-labelledby="ds-comparison-heading">
        <div className="container">
          <div className="mb-12">
            <span className="label-caps text-[#66E0FF] block mb-3">Sourcing Activity</span>
            <h2 id="ds-comparison-heading" className="text-3xl sm:text-4xl font-black text-white" style={{ letterSpacing: "-0.02em" }}>
              ARIA vs. a traditional team.
            </h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#1E2D45]">
            <table className="w-full min-w-[560px]" role="table">
              <thead>
                <tr className="border-b border-[#1E2D45]">
                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#7A8FA8] bg-[#0D1425] w-[22%]" scope="col">Activity</th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#FF3D00] bg-[#0D1425] w-[39%]" scope="col">Traditional Team</th>
                  <th className="text-left px-5 py-4 text-sm font-bold text-[#4FC3F7] bg-[rgba(79,195,247,0.05)] w-[39%]" scope="col">ARIA</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={`border-b border-[#1E2D45] ${i % 2 === 0 ? "bg-[#000000]" : "bg-[#060C18]"}`}>
                    <td className="px-5 py-4 text-sm font-semibold text-white">{row.activity}</td>
                    <td className="px-5 py-4 text-sm text-[#7A8FA8]">
                      <span className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-[#FF3D00] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {row.traditional}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-[#4FC3F7] font-medium bg-[rgba(79,195,247,0.03)]">
                      <span className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#4FC3F7] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {row.aria}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative py-20 bg-[#000000] overflow-hidden" aria-labelledby="ds-cta-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #1E3A8A, transparent 70%)" }} />
        </div>
        <div className="container relative z-10">
          <h2 id="ds-cta-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            See ARIA on one of your live deals.
          </h2>
          <p className="text-[#B8C8DC] max-w-xl mb-8">
            Spin up a self-serve 14-day trial with your own data and see ARIA on one of your live deals, no sales call required to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact?intent=trial">
              <button className="btn-orange px-8 py-3.5 rounded-md text-sm font-black text-black flex items-center gap-2">
                Start 14-Day Trial
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </Link>
            <Link href="/contact?intent=demo">
              <button className="btn-cyan-outline px-8 py-3.5 rounded-md text-sm font-semibold">
                AI Guided Demo
              </button>
            </Link>
          </div>
          <p className="text-xs text-[#7A8FA8] mt-6">
            SOC 2 Type II • Enterprise SSO • Deal-grade data segregation • 99.9% uptime SLA
          </p>
        </div>
      </section>

    </PageLayout>
  );
}
