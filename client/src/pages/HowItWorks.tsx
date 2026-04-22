import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Shield, CheckCircle2 } from "lucide-react";
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

const tabs = ["GraphRAG Flow", "AI Agents", "Modules", "Security"];

const graphRAGSteps = [
  { step: "1", title: "Document Ingestion", desc: "Upload CIMs, data rooms, financials, or target lists. ARIA's ingestion layer parses PDFs, Excel, Word, and structured data, extracting entities, relationships, and key metrics automatically.", color: "#4FC3F7" },
  { step: "2", title: "Knowledge Indexing", desc: "Extracted entities — companies, executives, investors, advisors, deals — are mapped into a persistent knowledge graph. Every node is linked to its source document and passage.", color: "#66E0FF" },
  { step: "3", title: "Hybrid Search", desc: "When an agent needs information, it queries the graph using both semantic vector search and structured graph traversal. This hybrid approach finds the right answer even when the question is ambiguous.", color: "#4FC3F7" },
  { step: "4", title: "Agentic Action", desc: "Specialized agents pull from the graph, reason over the results, and produce structured outputs — memos, models, reports, buyer lists — with every claim linked back to its source.", color: "#66E0FF" },
];

const agentCategories = [
  {
    category: "Sourcing Agents",
    color: "#4FC3F7",
    agents: [
      { name: "Thesis Matching Agent", desc: "Scores every target against your investment thesis across sector, size, geography, and growth profile." },
      { name: "Company Profiler Agent", desc: "Builds comprehensive profiles from public filings, news, and proprietary databases." },
      { name: "Signal Detection Agent", desc: "Monitors for M&A readiness signals: leadership changes, funding events, growth inflections, distress." },
      { name: "Outreach Optimization Agent", desc: "Personalizes and sequences outreach for maximum engagement rates." },
    ],
  },
  {
    category: "Diligence Agents",
    color: "#66E0FF",
    agents: [
      { name: "Financial Diligence Agent", desc: "Normalizes financials, builds LTM/NTM bridges, flags anomalies, benchmarks margins." },
      { name: "Legal & Compliance Agent", desc: "Reviews contracts, flags change-of-control triggers, summarizes regulatory exposure." },
      { name: "Commercial Diligence Agent", desc: "Sizes markets, scores competitive positioning, stress-tests revenue assumptions." },
      { name: "Technology Diligence Agent", desc: "Audits tech stack, identifies technical debt, flags IP and open-source risks." },
      { name: "HR & Org Diligence Agent", desc: "Maps org structure, identifies key-person risk, benchmarks comp." },
      { name: "IP & Data Diligence Agent", desc: "Catalogs patents, trademarks, and trade secrets; assesses data asset quality." },
      { name: "ESG & Regulatory Agent", desc: "Screens for environmental liabilities, governance red flags, regulatory exposure." },
      { name: "Market Sizing Agent", desc: "Bottom-up and top-down TAM/SAM/SOM models with cited data sources." },
    ],
  },
  {
    category: "Sell-Side Agents",
    color: "#4FC3F7",
    agents: [
      { name: "CIM Generation Agent", desc: "Drafts board-ready CIMs from uploaded financials in under 2 hours." },
      { name: "Buyer Matching Agent", desc: "Scores and ranks buyers on strategic fit, financial capacity, relationship warmth, and process readiness." },
      { name: "Engagement Tracking Agent", desc: "Monitors buyer behavior: CIM opens, time-in-doc, NDA requests, meeting scheduling." },
      { name: "Auction Management Agent", desc: "Manages process timelines, milestone tracking, and advisor alerts." },
    ],
  },
  {
    category: "Knowledge Agents",
    color: "#66E0FF",
    agents: [
      { name: "Relationship Graph Agent", desc: "Maps every company, executive, investor, and advisor your firm has touched." },
      { name: "Market Intelligence Agent", desc: "Continuously updates sector knowledge from public filings, news, and research." },
      { name: "Comparable Transaction Agent", desc: "Maintains a live database of comparable transactions with AI-scored relevance." },
    ],
  },
  {
    category: "Marketplace Agents",
    color: "#4FC3F7",
    agents: [
      { name: "Listing Validation Agent", desc: "Validates financials and company claims before a listing goes live." },
      { name: "Thesis Match Agent", desc: "Matches marketplace listings to registered buyer theses in real time." },
      { name: "NDA Workflow Agent", desc: "Manages confidentiality agreements and information release sequencing." },
    ],
  },
  {
    category: "Valuation Agents",
    color: "#66E0FF",
    agents: [
      { name: "DCF Agent", desc: "Builds discounted cash flow models with scenario sensitivity tables." },
      { name: "Comps Agent", desc: "Pulls and scores comparable public company multiples with relevance weighting." },
      { name: "Precedent Transaction Agent", desc: "Identifies and scores precedent transactions from the knowledge graph." },
      { name: "Asset-Based Valuation Agent", desc: "Calculates asset-based value for capital-intensive or distressed situations." },
    ],
  },
];

const modules = [
  { name: "Deal Sourcing", desc: "Thesis management, continuous scanning, signal detection, first-look memo generation.", href: "/deal-sourcing" },
  { name: "Due Diligence", desc: "8 parallel workstreams, data room integration, IC memo auto-generation.", href: "/due-diligence" },
  { name: "Sell-Side Prep", desc: "CIM generation, buyer matching, teaser distribution, engagement analytics.", href: "/sell-side" },
  { name: "Valuation Engine", desc: "Multi-methodology valuation with live comparable transaction benchmarks.", href: "/contact" },
  { name: "Knowledge Graph", desc: "Relationship mapping, market intelligence, comparable transaction database.", href: "/how-it-works" },
  { name: "Marketplace", desc: "Validated deal flow, thesis matching, NDA workflow, process management.", href: "/marketplace" },
  { name: "Deal CRM", desc: "Pipeline management, relationship tracking, workflow automation.", href: "/contact" },
  { name: "Analytics & Reporting", desc: "Fund-level pipeline analytics, deal velocity metrics, team productivity.", href: "/contact" },
];

const securityItems = [
  { title: "SOC 2 Type II certified", desc: "Annual third-party audit of security, availability, and confidentiality controls." },
  { title: "Information barriers by design", desc: "Buyer and seller data are architecturally separated at the database level, not just by policy." },
  { title: "Deal-grade data segregation", desc: "Each deal is isolated in its own encrypted namespace. Your data never touches another firm's." },
  { title: "Enterprise SSO", desc: "SAML 2.0 and OIDC support for Okta, Azure AD, Google Workspace, and other identity providers." },
  { title: "Zero-retention AI", desc: "Your deal data never trains foundation models. ARIA uses your data to serve you, not to improve models for competitors." },
  { title: "Audit trail on every output", desc: "Every AI-generated finding is logged with the agent, timestamp, source document, and passage." },
  { title: "Role-based access control", desc: "Granular permissions by deal, workstream, and user role. Partners see what partners should see." },
  { title: "99.9% uptime SLA", desc: "Enterprise-grade infrastructure with redundancy, failover, and a contractual uptime commitment." },
  { title: "Data residency options", desc: "US and EU data residency available for regulated institutions." },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <PageLayout
      title="How It Works — ARIA M&A Intelligence Platform"
      description="ARIA's GraphRAG architecture, 23 specialized AI agents, 8 platform modules, and enterprise security model explained."
    >
      <div className="bg-[#000000] border-b border-[#1E2D45]">
        <div className="container py-4">
          <Link href="/"><span className="inline-flex items-center gap-2 text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Back to Home</span></Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#000000] overflow-hidden" aria-labelledby="hiw-hero-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"><div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #1E3A8A, transparent 70%)" }} /></div>
        <div className="container relative z-10 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E3A8A] bg-[rgba(30,58,138,0.15)] mb-6"><StarGlyph size={12} /><span className="label-caps text-[#66E0FF]">Platform Architecture</span></div>
          <h1 id="hiw-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>How It Works</h1>
          <p className="text-2xl sm:text-3xl font-black text-[#4FC3F7] mb-6" style={{ letterSpacing: "-0.01em" }}>GraphRAG + 23 specialized agents + your deal data.</p>
          <p className="text-lg text-[#B8C8DC] max-w-2xl mb-10 leading-relaxed">ARIA isn't a chat interface on top of a generic model. It's a purpose-built agentic platform with a persistent knowledge graph at its core, specialized agents for every M&A workstream, and enterprise-grade security throughout.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact?intent=trial"><button className="btn-orange px-8 py-3.5 rounded-md text-sm font-black text-black flex items-center gap-2">Start 14-Day Trial<ArrowRight className="h-4 w-4" aria-hidden="true" /></button></Link>
            <Link href="/contact?intent=demo"><button className="btn-cyan-outline px-8 py-3.5 rounded-md text-sm font-semibold">Request a Technical Demo</button></Link>
          </div>
        </div>
      </section>

      {/* Tab navigation */}
      <div className="sticky top-20 z-40 bg-black/95 border-b border-[#1E2D45]">
        <div className="container">
          <div className="flex gap-1 overflow-x-auto py-2" role="tablist" aria-label="Platform sections">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`hiw-panel-${i}`}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 text-sm font-medium whitespace-nowrap rounded-md transition-all ${activeTab === i ? "text-white bg-[rgba(79,195,247,0.12)] border border-[#4FC3F7]" : "text-[#7A8FA8] hover:text-white"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GraphRAG Flow */}
      {activeTab === 0 && (
        <section id="hiw-panel-0" role="tabpanel" aria-labelledby="tab-0" className="py-20 bg-[#000000]">
          <div className="container">
            <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">Core Architecture</span><h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>GraphRAG: Retrieval-Augmented Generation with a Knowledge Graph.</h2><p className="text-[#B8C8DC] max-w-2xl">Standard RAG retrieves documents. GraphRAG retrieves relationships. For M&A, where context is everything, the difference is significant.</p></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mb-12">
              {graphRAGSteps.map((step, i) => (
                <div key={i} className="card-glass rounded-xl p-6">
                  <div className="text-4xl font-black mb-3" style={{ color: "#4FC3F7" }}>{step.step}</div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[#7A8FA8] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="max-w-2xl card-glass rounded-xl p-6">
              <h3 className="text-base font-bold text-white mb-4">Why GraphRAG for M&A?</h3>
              <div className="space-y-3">
                {["M&A is fundamentally about relationships — between companies, people, and deals. A knowledge graph captures those relationships natively.", "Standard vector search finds similar text. Graph traversal finds connected entities — the warm intro, the conflict, the prior deal.", "Every agent output is citation-backed to a specific document, passage, and graph node. No hallucinations, no unsourced claims.", "The graph grows with every deal you run. Your firm's institutional knowledge compounds over time."].map((point, i) => (
                  <div key={i} className="flex items-start gap-3"><CheckCircle2 className="h-4 w-4 text-[#4FC3F7] flex-shrink-0 mt-0.5" aria-hidden="true" /><p className="text-sm text-[#B8C8DC]">{point}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* AI Agents */}
      {activeTab === 1 && (
        <section id="hiw-panel-1" role="tabpanel" aria-labelledby="tab-1" className="py-20 bg-[#000000]">
          <div className="container">
            <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">23 Specialized Agents</span><h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Every agent purpose-built for its workstream.</h2><p className="text-[#B8C8DC] max-w-xl">ARIA doesn't use a single general-purpose model for everything. Each agent is fine-tuned for its specific M&A task, with its own prompt architecture, tool set, and evaluation criteria.</p></div>
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Agent categories">
              {agentCategories.map((cat, i) => (
                <button key={i} role="tab" aria-selected={activeCategory === i} onClick={() => setActiveCategory(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeCategory === i ? "text-white" : "text-[#7A8FA8] hover:text-white"}`}
                  style={activeCategory === i ? { background: "linear-gradient(135deg, #1E3A8A, #4FC3F7)" } : {}}>
                  {cat.category} ({cat.agents.length})
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
              {agentCategories[activeCategory].agents.map((agent, i) => (
                <div key={i} className="card-glass rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: agentCategories[activeCategory].color }} aria-hidden="true" />
                    <h3 className="text-sm font-bold text-white">{agent.name}</h3>
                  </div>
                  <p className="text-xs text-[#7A8FA8] leading-relaxed pl-4">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modules */}
      {activeTab === 2 && (
        <section id="hiw-panel-2" role="tabpanel" aria-labelledby="tab-2" className="py-20 bg-[#000000]">
          <div className="container">
            <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">8 Platform Modules</span><h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>One platform. The full deal lifecycle.</h2><p className="text-[#B8C8DC] max-w-xl">Each module is a standalone product. Together, they cover every stage of the M&A process from first signal to close.</p></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {modules.map((mod, i) => (
                <Link key={i} href={mod.href}>
                  <div className="card-glass rounded-xl p-5 h-full cursor-pointer group">
                    <div className="text-xs font-black text-[#7A8FA8] mb-2">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[#4FC3F7] transition-colors">{mod.name}</h3>
                    <p className="text-xs text-[#7A8FA8] leading-relaxed">{mod.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Security */}
      {activeTab === 3 && (
        <section id="hiw-panel-3" role="tabpanel" aria-labelledby="tab-3" className="py-20 bg-[#000000]">
          <div className="container">
            <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">Enterprise Security</span><h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Deal-grade security. Not startup-grade.</h2><p className="text-[#B8C8DC] max-w-xl">M&A is one of the most sensitive workflows in finance. ARIA is built to the standard that institutional buyers, sell-side advisors, and their counsel expect.</p></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
              {securityItems.map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3"><Shield className="h-4 w-4 text-[#4FC3F7] flex-shrink-0" aria-hidden="true" /><h3 className="text-sm font-bold text-white">{item.title}</h3></div>
                  <p className="text-xs text-[#7A8FA8] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="relative py-20 bg-[#0D1425] overflow-hidden" aria-labelledby="hiw-cta-heading">
        <div className="container relative z-10">
          <h2 id="hiw-cta-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>See the architecture in action.</h2>
          <p className="text-[#B8C8DC] max-w-xl mb-8">Request a technical demo and we'll walk through the GraphRAG flow, agent architecture, and security model with your team.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact?intent=demo"><button className="btn-orange px-8 py-3.5 rounded-md text-sm font-black text-black flex items-center gap-2">Request Technical Demo<ArrowRight className="h-4 w-4" aria-hidden="true" /></button></Link>
            <Link href="/contact?intent=trial"><button className="btn-cyan-outline px-8 py-3.5 rounded-md text-sm font-semibold">Start 14-Day Trial</button></Link>
          </div>
          <p className="text-xs text-[#7A8FA8] mt-6">SOC 2 Type II • Enterprise SSO • Deal-grade data segregation • 99.9% uptime SLA</p>
        </div>
      </section>
    </PageLayout>
  );
}
