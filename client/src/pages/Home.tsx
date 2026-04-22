import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Search, FileText, Brain, Briefcase, Globe, BarChart3,
  Shield, CheckCircle2, XCircle, ChevronRight,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";

// ─── Analytics stub ───────────────────────────────────────────────────────────
function trackEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    console.debug("[ARIA Analytics]", event, data);
  }
}

// ─── Star Glyph Component ─────────────────────────────────────────────────────
function StarGlyph({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {[0, 45, 90, 135].map((angle) => (
        <line
          key={angle}
          x1="12" y1="2" x2="12" y2="22"
          stroke="#66E0FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="1.5" fill="#66E0FF" />
    </svg>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: "10×", label: "Deal screening throughput per analyst" },
  { value: "48 hrs", label: "Full diligence cycle (vs. 4–6 weeks manual)" },
  { value: "< 2 hrs", label: "CIM generation from uploaded financials" },
  { value: "3×", label: "More thesis-matched opportunities surfaced" },
  { value: "60%", label: "Reduction in analyst hours per deal" },
  { value: "100%", label: "Auditable, citation-backed AI outputs" },
];

// ─── Workflow Modules ─────────────────────────────────────────────────────────
const modules = [
  {
    icon: <Search className="h-5 w-5" aria-hidden="true" />,
    title: "Deal Sourcing",
    subtitle: "Continuous, thesis-driven origination",
    description: "AI agents scan public and private sources against your thesis, score opportunities, and draft first-look memos. Your partners see only the 5% worth reviewing.",
    cta: "Explore Deal Sourcing",
    href: "/deal-sourcing",
    color: "#4FC3F7",
  },
  {
    icon: <FileText className="h-5 w-5" aria-hidden="true" />,
    title: "Due Diligence",
    subtitle: "8 workstreams. In parallel. In hours.",
    description: "Financial, legal, commercial, tech, HR, IP, ESG, and market-sizing agents work simultaneously, and cite every source. Your diligence binder writes itself.",
    cta: "Explore Due Diligence",
    href: "/due-diligence",
    color: "#4FC3F7",
  },
  {
    icon: <Briefcase className="h-5 w-5" aria-hidden="true" />,
    title: "Sell-Side Prep",
    subtitle: "CIM, buyer list, and teaser in one afternoon",
    description: "Upload financials; ARIA drafts a board-ready CIM, builds a ranked buyer list, and tracks engagement across the auction.",
    cta: "Explore Sell-Side",
    href: "/sell-side",
    color: "#66E0FF",
  },
  {
    icon: <BarChart3 className="h-5 w-5" aria-hidden="true" />,
    title: "Valuation",
    subtitle: "Multi-methodology valuation in 15 minutes",
    description: "DCF, comps, precedents, and asset-based, calculated in parallel with live comparable-transaction benchmarks. AI-scored data quality, optional advisor review.",
    cta: "Get Your Valuation",
    href: "/contact",
    color: "#4FC3F7",
  },
  {
    icon: <Brain className="h-5 w-5" aria-hidden="true" />,
    title: "Opportunity Map",
    subtitle: "Your firm's relationships mapped",
    description: "Every company, sponsor, advisor, and executive you've ever touched, connected and queryable. Find the warm intro, the conflict, or the competitor in seconds.",
    cta: "Explore the Graph",
    href: "/how-it-works",
    color: "#66E0FF",
  },
  {
    icon: <Globe className="h-5 w-5" aria-hidden="true" />,
    title: "Marketplace",
    subtitle: "Vetted deal flow confidentially matched",
    description: "AI-validated listings from direct owners, advisors, and our valuation funnel, matched to your thesis and screened before you see them.",
    cta: "Explore the Marketplace",
    href: "/marketplace",
    color: "#4FC3F7",
  },
];

// ─── Personas ─────────────────────────────────────────────────────────────────
const personas = [
  {
    id: "pe",
    label: "Private Equity & Growth Equity",
    description: "Thesis-driven sourcing, parallel diligence, and portfolio-wide monitoring. Partners see more at-bats; associates get their weekends back.",
    cta: "Buy-Side Workflows",
    href: "/deal-sourcing",
    color: "#4FC3F7",
  },
  {
    id: "banks",
    label: "Investment Banks & Sell-Side",
    description: "CIM generation, ranked buyer matching, auction management, and engagement analytics in one platform. Run tighter processes with smaller teams.",
    cta: "Sell-Side Workflows",
    href: "/sell-side",
    color: "#4FC3F7",
  },
  {
    id: "advisors",
    label: "Independent M&A Advisors",
    description: "Punch above your weight. Institutional-grade valuation, diligence, and buyer matching, at a seat-based price.",
    cta: "Advisor Workflows",
    href: "/marketplace",
    color: "#66E0FF",
  },
  {
    id: "corpdev",
    label: "Corporate Development",
    description: "Continuous M&A pipeline management integrated with your strategic thesis and existing CRM.",
    cta: "Corp Dev Workflows",
    href: "/deal-sourcing",
    color: "#66E0FF",
  },
];

// ─── Architecture Steps ───────────────────────────────────────────────────────
const archSteps = [
  {
    step: "1",
    title: "Ingest",
    desc: "Upload a CIM, data room, or target list. ARIA parses every document, extracts entities, and reconciles against your firm's history.",
    color: "#4FC3F7",
  },
  {
    step: "2",
    title: "Understand",
    desc: "Every deal is mapped into a living knowledge graph: companies, investors, advisors, executives, and relationships, continuously updated.",
    color: "#66E0FF",
  },
  {
    step: "3",
    title: "Reason",
    desc: "Specialized agents pull from the graph and your documents to run diligence workstreams, score opportunities, and generate memos, in parallel.",
    color: "#4FC3F7",
  },
  {
    step: "4",
    title: "Deliver",
    desc: "Every output is citation-backed, auditable, and editable. You ship a CIM, an IC memo, or a diligence report. Not a chat transcript.",
    color: "#66E0FF",
  },
];

// ─── Comparison Table ─────────────────────────────────────────────────────────
const comparisonRows = [
  {
    capability: "Deal Sourcing",
    stack: "Saved searches and analyst-curated lists. Miss-rate high, latency in weeks.",
    aria: "Agents scan 24/7, score against your thesis, and draft first-look memos only on qualified hits.",
  },
  {
    capability: "Due Diligence",
    stack: "4–6 weeks of analyst time per target. Siloed workstreams, manual roll-up.",
    aria: "8 parallel agents complete a full diligence cycle in <48 hours, citation-backed, edit-ready.",
  },
  {
    capability: "Relationship Intel",
    stack: "Tribal knowledge, LinkedIn searches, and outdated CRM fields.",
    aria: "Knowledge graph maps every company, person, and deal your firm has ever touched, queryable.",
  },
  {
    capability: "Market Signals",
    stack: "Google Alerts, analyst reports, conference gossip.",
    aria: "Real-time signal detection on leadership changes, funding events, growth inflections, and distress.",
  },
  {
    capability: "CIM Generation",
    stack: "2–3 weeks of associate time per mandate.",
    aria: "CIM drafted in <2 hours from uploaded financials, board-ready after review.",
  },
  {
    capability: "Buyer Matching",
    stack: "Personal rolodex + static PitchBook filters.",
    aria: "AI-scored buyer list with engagement tracking and outreach automation.",
  },
  {
    capability: "Audit Trail",
    stack: "\"Where did that number come from?\"",
    aria: "Every AI output cites its source document, passage, and agent.",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  const [activePersona, setActivePersona] = useState("pe");

  useEffect(() => {
    trackEvent("page_view", { page: "home" });
  }, []);

  const activePersonaData = personas.find((p) => p.id === activePersona)!;

  return (
    <PageLayout
      title="ARIA — The Operating System for Mid-Market M&A"
      description="ARIA is the first agentic AI platform purpose-built for PE sponsors, investment banks, and sell-side advisors. Specialized AI agents run sourcing, diligence, CIM generation, and valuation in parallel."
    >

      {/* ════════════════════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative flex items-center justify-center overflow-hidden bg-[#000000]"
        aria-labelledby="hero-heading"
      >
        {/* Gradient orbs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #1E3A8A, transparent 70%)" }} />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #4FC3F7, transparent 70%)" }} />
        </div>

        <div className="container relative z-10 pt-20 pb-16">
          {/* Eyebrow */}
          <div className="fade-up fade-up-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E3A8A] bg-[rgba(30,58,138,0.15)] mb-8">
            <StarGlyph size={12} />
            <span className="label-caps text-[#66E0FF]">The Operating System for Mid-Market M&A</span>
          </div>

          {/* H1 */}
          <h1
            id="hero-heading"
            className="fade-up fade-up-2 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6 max-w-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="block">Close more deals.</span>
            <span className="block text-gradient-blue">In less time.</span>
            <span className="block text-white">Amplifying your team with ARIA AI.</span>
          </h1>

          {/* Subhead */}
          <p className="fade-up fade-up-3 text-lg sm:text-xl text-[#B8C8DC] leading-relaxed max-w-2xl mb-6">
            ARIA is the first agentic AI platform purpose-built for PE sponsors, investment banks, and sell-side advisors. Specialized AI agents run sourcing, diligence, CIM generation, and valuation in parallel, compressing the deal lifecycle from months to days, while your team stays in the driver's seat.
          </p>

          {/* Built for */}
          <div className="fade-up fade-up-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#7A8FA8] mb-10">
            <span className="font-semibold text-[#B8C8DC]">Built for:</span>
            <span>Mid-market PE funds ($100M–$5B AUM)</span>
            <span className="text-[#1E2D45]">•</span>
            <span>Boutique &amp; bulge-bracket sell-side shops</span>
            <span className="text-[#1E2D45]">•</span>
            <span>Independent M&amp;A advisors</span>
          </div>

          {/* CTAs */}
          <div className="fade-up fade-up-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
            <Link href="/contact?intent=trial">
              <button
                className="btn-orange px-8 py-3.5 rounded-md text-sm font-black text-black flex items-center gap-2"
                onClick={() => trackEvent("cta_click", { cta: "hero_trial" })}
              >
                Start 14-Day Trial
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </Link>
            <Link href="/how-it-works">
              <button
                className="btn-cyan-outline px-8 py-3.5 rounded-md text-sm font-semibold flex items-center gap-2"
                onClick={() => trackEvent("cta_click", { cta: "hero_how_it_works" })}
              >
                See How It Works
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="fade-up fade-up-5 flex flex-wrap items-center gap-6 text-sm text-[#A0B4C8] font-medium">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#66E0FF]" aria-hidden="true" />
              SOC 2 Type II
            </span>
            <span className="w-px h-4 bg-[#2A3F5A]" aria-hidden="true"></span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66E0FF]" aria-hidden="true"></span>
              Enterprise SSO
            </span>
            <span className="w-px h-4 bg-[#2A3F5A]" aria-hidden="true"></span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66E0FF]" aria-hidden="true"></span>
              Deal-grade data segregation
            </span>
            <span className="w-px h-4 bg-[#2A3F5A]" aria-hidden="true"></span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66E0FF]" aria-hidden="true"></span>
              99.9% uptime SLA
            </span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          STATS STRIP
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0D1425] border-y border-[#1E2D45] py-10" aria-label="Platform performance metrics">
        <div className="container-wide">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl font-black text-[#4FC3F7] mb-1">{stat.value}</div>
                <div className="text-xs text-[#7A8FA8] leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PLATFORM — ONE PLATFORM, FULL DEAL LIFECYCLE
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#000000]" aria-labelledby="platform-heading">
        <div className="container">
          <div className="mb-12">
            <span className="label-caps text-[#66E0FF] block mb-3">One Platform. The Full Deal Lifecycle.</span>
            <h2 id="platform-heading" className="text-3xl sm:text-4xl font-black text-white mb-5" style={{ letterSpacing: "-0.02em" }}>
              Stop stitching together ten tools.
            </h2>
            <p className="text-lg text-[#B8C8DC] max-w-2xl">
              Stop stitching together PitchBook, Excel models, data rooms, buyer lists, email threads, and CRM notes. ARIA is the single system of record for every deal you source, diligence, value, and close.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod) => (
              <Link key={mod.href + mod.title} href={mod.href}>
                <div
                  className="card-glass card-hover rounded-xl p-6 h-full cursor-pointer group"
                  onClick={() => trackEvent("module_tile_click", { module: mod.title })}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: `${mod.color}18`, color: mod.color }}
                  >
                    {mod.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{mod.title}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: mod.color }}>{mod.subtitle}</p>
                  <p className="text-sm text-[#7A8FA8] leading-relaxed mb-4">{mod.description}</p>
                  <span className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: mod.color }}>
                    {mod.cta} <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PERSONA SECTION — BUILT FOR EVERY SEAT
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#0D1425]" aria-labelledby="persona-heading">
        <div className="container">
          <div className="mb-10">
            <span className="label-caps text-[#66E0FF] block mb-3">Built for Every Seat at the Deal Table</span>
            <h2 id="persona-heading" className="text-3xl sm:text-4xl font-black text-white" style={{ letterSpacing: "-0.02em" }}>
              Whether you're sourcing, advising, selling, or valuing.
            </h2>
            <p className="text-lg text-[#B8C8DC] mt-4 max-w-xl">
              ARIA has a purpose-built workflow for your role. Not a generic chatbot asked to do ten jobs.
            </p>
          </div>

          {/* Tab bar */}
          <div
            className="flex flex-wrap gap-2 mb-10"
            role="tablist"
            aria-label="Select your role"
          >
            {personas.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={activePersona === p.id}
                aria-controls={`persona-panel-${p.id}`}
                onClick={() => {
                  setActivePersona(p.id);
                  trackEvent("persona_tab_click", { persona: p.id });
                }}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activePersona === p.id
                    ? "text-white"
                    : "text-[#7A8FA8] hover:text-white bg-transparent hover:bg-[rgba(255,255,255,0.04)]"
                }`}
                style={activePersona === p.id ? { background: "linear-gradient(135deg, #1E3A8A, #4FC3F7)" } : {}}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Active persona panel */}
          <div
            id={`persona-panel-${activePersonaData.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activePersonaData.id}`}
            className="max-w-2xl"
          >
            <div className="card-glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">{activePersonaData.label}</h3>
              <p className="text-[#B8C8DC] leading-relaxed mb-8">{activePersonaData.description}</p>
              <Link href={activePersonaData.href}>
                <button
                  className="btn-cyan-outline px-6 py-3 rounded-md text-sm font-semibold flex items-center gap-2"
                  onClick={() => trackEvent("persona_cta_click", { persona: activePersonaData.id })}
                >
                  {activePersonaData.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          THE DIFFERENTIATOR — AGENTIC AI PURPOSE-BUILT FOR DEAL WORK
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#000000]" aria-labelledby="diff-heading">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="label-caps text-[#66E0FF] block mb-3">The Differentiator</span>
            <h2 id="diff-heading" className="text-3xl sm:text-4xl font-black text-white mb-5" style={{ letterSpacing: "-0.02em" }}>
              Agentic AI purpose-built for deal work.
            </h2>
            <p className="text-lg text-[#B8C8DC] leading-relaxed">
              ARIA isn't a chat interface on top of a generic model. It's embedded into your deal workflow. Specialized AI agents, each trained for a specific M&A task, reason over your firm's knowledge graph, cite every source, and hand off work to each other the way an associate hands work to a VP. You don't context-switch to ARIA; ARIA works alongside you inside the pipeline, data room, and CRM you already use.
            </p>
          </div>

          {/* 4-step flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {archSteps.map((step, i) => (
              <div key={i} className="relative card-glass rounded-xl p-6">
                <div className="text-4xl font-black mb-3" style={{ color: '#4FC3F7' }}>{step.step}</div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-[#7A8FA8] leading-relaxed">{step.desc}</p>
                {i < archSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-[#1E2D45]" aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Two trust bullets */}
          <div className="flex flex-wrap gap-6 text-sm text-[#7A8FA8]">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#4FC3F7]" aria-hidden="true" />
              Multi-LLM architecture (OpenAI, Anthropic, open-source). No model lock-in.
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#4FC3F7]" aria-hidden="true" />
              Your deal data never trains foundation models.
            </span>
          </div>

          <div className="mt-8">
            <Link href="/how-it-works">
              <button className="btn-cyan-outline px-6 py-3 rounded-md text-sm font-semibold flex items-center gap-2">
                See the full architecture
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          COMPARISON TABLE — ARIA VS. YOUR CURRENT STACK
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#0D1425]" aria-labelledby="comparison-heading">
        <div className="container">
          <div className="mb-12">
            <span className="label-caps text-[#66E0FF] block mb-3">Competitive Clarity</span>
            <h2 id="comparison-heading" className="text-3xl sm:text-4xl font-black text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
              ARIA vs. your current stack.
            </h2>
            <p className="text-[#B8C8DC] max-w-2xl">The same workflows, but cost, cycle time, and quality all go in the right direction.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#1E2D45]">
            <table className="w-full min-w-[600px]" role="table">
              <thead>
                <tr className="border-b border-[#1E2D45]">
                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#7A8FA8] bg-[#0D1425] w-[22%]" scope="col">Capability</th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#FF3D00] bg-[#0D1425] w-[39%]" scope="col">
                    PitchBook + Excel + Email + CRM
                  </th>
                  <th className="text-left px-5 py-4 text-sm font-bold text-[#4FC3F7] bg-[rgba(79,195,247,0.05)] w-[39%]" scope="col">
                    <span className="flex items-center gap-1.5"><StarGlyph size={12} /> ARIA</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={`border-b border-[#1E2D45] ${i % 2 === 0 ? "bg-[#000000]" : "bg-[#060C18]"}`}>
                    <td className="px-5 py-4 text-sm font-semibold text-white">{row.capability}</td>
                    <td className="px-5 py-4 text-sm text-[#7A8FA8]">
                      <span className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-[#FF3D00] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {row.stack}
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

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA BAND
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "#000000" }}
        aria-labelledby="final-cta-heading"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-15"
            style={{ background: "radial-gradient(ellipse, #1E3A8A, transparent 70%)" }} />
        </div>
        <div className="container relative z-10">
          <StarGlyph size={32} className="mb-6 glow-star" />
          <h2 id="final-cta-heading" className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            See ARIA on one of your live deals.
          </h2>
          <p className="text-lg text-[#B8C8DC] max-w-xl mb-10">
            Spin up a self-serve 14-day trial with your own data and see ARIA on one of your live deals, no sales call required to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact?intent=trial">
              <button
                className="btn-orange px-10 py-4 rounded-md text-base font-black text-black flex items-center gap-3"
                onClick={() => trackEvent("cta_click", { cta: "final_trial" })}
              >
                Start 14-Day Trial
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </Link>
            <Link href="/contact?intent=demo">
              <button
                className="btn-cyan-outline px-10 py-4 rounded-md text-base font-semibold flex items-center gap-3"
                onClick={() => trackEvent("cta_click", { cta: "final_demo" })}
              >
                AI Guided Demo
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </Link>
          </div>
          <p className="text-xs text-[#7A8FA8] mt-8">
            SOC 2 Type II • Enterprise SSO • Deal-grade data segregation • 99.9% uptime SLA
          </p>
        </div>
      </section>

    </PageLayout>
  );
}
