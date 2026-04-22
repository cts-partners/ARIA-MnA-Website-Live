import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Search, FileText, Brain, Briefcase, Globe, BarChart3, Radio, Users, ArrowRight, Bot } from "lucide-react";

// Category color map (matches agents table)
// Sourcing=rose #F87171 | Diligence=cyan #4FC3F7 | Sell-Side=amber #FBBF24
// Valuation=aqua #66E0FF | Marketplace=emerald #34D399 | Knowledge=violet #A78BFA
const modules = [
  // ── Sourcing (3 modules) ──────────────────────────────────────────
  {
    icon: <Search className="h-6 w-6" />,
    title: "Deal Sourcing",
    description: "AI agents continuously scan markets, score opportunities against your investment thesis, and generate first-pass memos — without analyst hours.",
    href: "/deal-sourcing",
    category: "Sourcing",
    color: "#F87171",
    colorClass: "text-[#F87171]",
    bgClass: "bg-[rgba(248,113,113,0.08)]",
    borderClass: "border-[rgba(248,113,113,0.2)] hover:border-[rgba(248,113,113,0.45)]",
  },
  {
    icon: <Radio className="h-6 w-6" />,
    title: "Market Signals",
    description: "Real-time monitoring of public signals that indicate M&A readiness — leadership changes, growth inflections, distress indicators, and regulatory filings.",
    href: "/deal-sourcing",
    category: "Sourcing",
    color: "#F87171",
    colorClass: "text-[#F87171]",
    bgClass: "bg-[rgba(248,113,113,0.08)]",
    borderClass: "border-[rgba(248,113,113,0.2)] hover:border-[rgba(248,113,113,0.45)]",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Deal CRM",
    description: "Full deal pipeline management, relationship tracking, and workflow automation across the complete deal lifecycle from sourcing to close.",
    href: "/deal-sourcing",
    category: "Sourcing",
    color: "#F87171",
    colorClass: "text-[#F87171]",
    bgClass: "bg-[rgba(248,113,113,0.08)]",
    borderClass: "border-[rgba(248,113,113,0.2)] hover:border-[rgba(248,113,113,0.45)]",
  },
  // ── Diligence (1 module) ─────────────────────────────────────────
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Due Diligence",
    description: "Eight specialized agents run diligence workstreams in parallel — financial, legal, tech, ESG, and more. Hours, not weeks.",
    href: "/due-diligence",
    category: "Diligence",
    color: "#4FC3F7",
    colorClass: "text-[#4FC3F7]",
    bgClass: "bg-[rgba(79,195,247,0.08)]",
    borderClass: "border-[rgba(79,195,247,0.2)] hover:border-[rgba(79,195,247,0.45)]",
  },
  // ── Sell-Side (1 module) ─────────────────────────────────────────
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Sell-Side Prep",
    description: "Generate CIMs, match qualified buyers, and track engagement analytics — built for advisors running multiple mandates simultaneously.",
    href: "/sell-side",
    category: "Sell-Side",
    color: "#FBBF24",
    colorClass: "text-[#FBBF24]",
    bgClass: "bg-[rgba(251,191,36,0.08)]",
    borderClass: "border-[rgba(251,191,36,0.2)] hover:border-[rgba(251,191,36,0.45)]",
  },
  // ── Valuation (1 module) ─────────────────────────────────────────
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Valuation Engine",
    description: "Guided step-by-step wizard with real-time calculations, comparable transaction benchmarking, and AI-validated data quality scoring.",
    href: "/valuation",
    category: "Valuation",
    color: "#66E0FF",
    colorClass: "text-[#66E0FF]",
    bgClass: "bg-[rgba(102,224,255,0.08)]",
    borderClass: "border-[rgba(102,224,255,0.2)] hover:border-[rgba(102,224,255,0.45)]",
  },
  // ── Marketplace (1 module) ───────────────────────────────────────
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Marketplace",
    description: "Curated deal flow from vetted sources. AI-powered buyer-seller matching with tiered access controls and confidentiality management.",
    href: "/marketplace",
    category: "Marketplace",
    color: "#34D399",
    colorClass: "text-[#34D399]",
    bgClass: "bg-[rgba(52,211,153,0.08)]",
    borderClass: "border-[rgba(52,211,153,0.2)] hover:border-[rgba(52,211,153,0.45)]",
  },
  // ── Knowledge (1 module) ─────────────────────────────────────────
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Opportunity Map",
    description: "Dynamic view of your opportunities and their range of business relationships — companies, investors, advisors, and deals mapped automatically.",
    href: "/architecture",
    category: "Knowledge",
    color: "#A78BFA",
    colorClass: "text-[#A78BFA]",
    bgClass: "bg-[rgba(167,139,250,0.08)]",
    borderClass: "border-[rgba(167,139,250,0.2)] hover:border-[rgba(167,139,250,0.45)]",
  },
];

// Ordered to match module card sequence: Sourcing → Diligence → Sell-Side → Valuation → Marketplace → Knowledge
const agents = [
  // Sourcing (rose)
  { name: "Company Profiler Agent", type: "Sourcing" },
  { name: "Outreach Optimization Agent", type: "Sourcing" },
  { name: "Signal Detection Agent", type: "Sourcing" },
  { name: "Thesis Matching Agent", type: "Sourcing" },
  // Diligence (cyan)
  { name: "Customer Validation Agent", type: "Diligence" },
  { name: "ESG Compliance Agent", type: "Diligence" },
  { name: "Financial Analysis Agent", type: "Diligence" },
  { name: "HR & Culture Agent", type: "Diligence" },
  { name: "IP Assessment Agent", type: "Diligence" },
  { name: "Legal Review Agent", type: "Diligence" },
  { name: "Market Sizing Agent", type: "Diligence" },
  { name: "Tech Stack Audit Agent", type: "Diligence" },
  // Sell-Side (amber)
  { name: "Buyer Matching Agent", type: "Sell-Side" },
  { name: "CIM Generator Agent", type: "Sell-Side" },
  { name: "Engagement Tracking Agent", type: "Sell-Side" },
  // Valuation (aqua)
  { name: "Asset Valuation Agent", type: "Valuation" },
  { name: "Comparable Analysis Agent", type: "Valuation" },
  { name: "DCF Valuation Agent", type: "Valuation" },
  // Marketplace (emerald)
  { name: "Data Quality Agent", type: "Marketplace" },
  { name: "Deal Matching Agent", type: "Marketplace" },
  // Knowledge (violet)
  { name: "Entity Resolution Agent", type: "Knowledge" },
  { name: "GraphRAG Search Agent", type: "Knowledge" },
  { name: "Relationship Mapping Agent", type: "Knowledge" },
];

const typeColors: Record<string, string> = {
  Diligence:   "text-[#4FC3F7] bg-[rgba(79,195,247,0.12)] border border-[rgba(79,195,247,0.25)]",   // cyan-blue
  Knowledge:   "text-[#A78BFA] bg-[rgba(167,139,250,0.12)] border border-[rgba(167,139,250,0.25)]", // violet
  Marketplace: "text-[#34D399] bg-[rgba(52,211,153,0.12)] border border-[rgba(52,211,153,0.25)]",  // emerald
  "Sell-Side": "text-[#FBBF24] bg-[rgba(251,191,36,0.12)] border border-[rgba(251,191,36,0.25)]",  // amber
  Sourcing:    "text-[#F87171] bg-[rgba(248,113,113,0.12)] border border-[rgba(248,113,113,0.25)]", // rose
  Valuation:   "text-[#66E0FF] bg-[rgba(102,224,255,0.12)] border border-[rgba(102,224,255,0.25)]", // aqua
};

export default function Platform() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 px-4 relative" aria-labelledby="platform-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <h1 id="platform-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">
            ARIA Platform Overview
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed">
            <span className="text-[#B8C8DC]">One platform. </span><span className="text-gradient-blue font-semibold">Eight modules. Every workflow covered.</span><span className="text-[#B8C8DC]"> Specialized AI agents, a knowledge graph, and GraphRAG search — purpose-built for mid-market M&amp;A. Click any module to explore its capabilities in depth.</span>
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16 px-4 bg-[#000000]" aria-labelledby="modules-heading">
        <div className="container-wide">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
            {modules.map((mod) => {
              const moduleAgents = agents.filter(a => a.type === mod.category);
              return (
                <div key={mod.title} className="relative group" role="listitem">
                  <Link href={mod.href}>
                    <div
                      className={`bg-[#0D1425] border rounded-xl p-6 cursor-pointer h-full flex flex-col transition-all duration-200 ${mod.borderClass}`}
                    >
                      {/* Icon */}
                      <div
                        className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${mod.bgClass} ${mod.colorClass}`}
                        aria-hidden="true"
                      >
                        {mod.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-white mb-2 font-display leading-snug group-hover:text-[#A8EDFF] transition-colors">
                        {mod.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[#B8C8DC] leading-relaxed flex-1">
                        {mod.description}
                      </p>

                      {/* Explore link */}
                      <div className={`flex items-center gap-1.5 mt-4 text-xs font-semibold ${mod.colorClass} opacity-0 group-hover:opacity-100 transition-opacity`}>
                        Explore <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </div>
                    </div>
                  </Link>

                  {/* Hover agent panel — appears below the card */}
                  {moduleAgents.length > 0 && (
                    <div
                      className="absolute top-full left-0 right-0 mt-2 z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 -translate-y-1 group-hover:translate-y-0"
                      role="tooltip"
                      aria-label={`Agents in ${mod.title}`}
                    >
                      {/* Arrow pointing up */}
                      <div className="flex justify-center">
                        <div className="w-3 h-3 rotate-45 -mb-1.5" style={{ backgroundColor: '#0A1020', borderLeft: `1px solid ${mod.color}`, borderTop: `1px solid ${mod.color}` }} aria-hidden="true" />
                      </div>
                      <div className={`bg-[#0A1020] border rounded-xl p-4 shadow-2xl`}
                        style={{ borderColor: mod.color, boxShadow: `0 0 24px ${mod.color}22` }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Bot className="h-3.5 w-3.5" style={{ color: mod.color }} aria-hidden="true" />
                          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: mod.color }}>
                            {moduleAgents.length} Agent{moduleAgents.length !== 1 ? 's' : ''}
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {moduleAgents.map(agent => (
                            <li key={agent.name} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: mod.color }} aria-hidden="true" />
                              {agent.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Agents Table */}
      <section className="py-16 px-4 bg-[#0D1425]" aria-labelledby="agents-heading">
        <div className="container-wide">
          <div className="mb-8">
            <h2 id="agents-heading" className="text-2xl font-bold text-white mb-2 font-display">
              Specialized AI Agents
            </h2>
            <p className="text-[#B8C8DC]">
              Each agent is purpose-built for a specific M&A task, trained on deal data, and continuously improving.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#1E2D45]">
            <table className="w-full text-sm" role="table" aria-label="ARIA AI agents with accuracy metrics">
              <thead>
                <tr className="border-b border-[#1E2D45] bg-[#0A1020]">
                  <th className="text-left px-6 py-4 text-[#7A8FA8] font-semibold uppercase tracking-wide text-xs" scope="col">Agent</th>
                  <th className="text-left px-6 py-4 text-[#7A8FA8] font-semibold uppercase tracking-wide text-xs" scope="col">Category</th>

                </tr>
              </thead>
              <tbody>
                {agents.map((agent, i) => (
                  <tr
                    key={agent.name}
                    className={`border-b border-[#1A2640] ${i % 2 === 0 ? "bg-[#0D1425]" : "bg-[#0A1020]"}`}
                  >
                    <td className="px-6 py-4 text-white font-medium">{agent.name}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[agent.type] || ""}`}>
                        {agent.type}
                      </span>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#000000]" aria-labelledby="platform-cta-heading">
        <div className="container-wide">
          <h2 id="platform-cta-heading" className="text-2xl font-bold text-white mb-3 font-display">
            Ready to see it in action?
          </h2>
          <p className="text-[#B8C8DC] mb-8 text-base">Explore a guided demo or start your 14-day free trial.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact?intent=demo">
              <button className="btn-cyan-outline px-8 py-3 rounded-md text-sm font-semibold">
                Book a Guided Demo
              </button>
            </Link>
            <Link href="/contact?intent=trial">
              <button className="btn-orange px-8 py-3 rounded-md text-sm font-bold text-black flex items-center gap-2">
                Start Free Trial <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
