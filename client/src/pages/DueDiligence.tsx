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
  { value: "48 hrs", label: "Full diligence cycle (vs. 4–6 weeks manual)" },
  { value: "8", label: "Parallel AI workstreams running simultaneously" },
  { value: "97%", label: "Source-citation accuracy across all outputs" },
];

const agents = [
  { name: "Financial Diligence Agent", accuracy: 97, time: "4–6 hrs", desc: "Normalizes financials, builds LTM/NTM bridges, flags accounting anomalies, and benchmarks margins against sector comps." },
  { name: "Legal & Compliance Agent", accuracy: 94, time: "3–5 hrs", desc: "Reviews contracts, identifies change-of-control triggers, flags pending litigation, and summarizes regulatory exposure." },
  { name: "Commercial Diligence Agent", accuracy: 92, time: "5–8 hrs", desc: "Sizes the addressable market, scores competitive positioning, and stress-tests revenue concentration and churn assumptions." },
  { name: "Technology Diligence Agent", accuracy: 91, time: "4–6 hrs", desc: "Audits tech stack, identifies technical debt, assesses scalability, and flags IP ownership and open-source license risks." },
  { name: "HR & Org Diligence Agent", accuracy: 89, time: "2–4 hrs", desc: "Maps org structure, identifies key-person dependencies, benchmarks comp against market, and flags retention risk." },
  { name: "IP & Data Diligence Agent", accuracy: 93, time: "3–5 hrs", desc: "Catalogs patents, trademarks, and trade secrets; assesses data asset quality and privacy compliance posture." },
  { name: "ESG & Regulatory Agent", accuracy: 88, time: "2–3 hrs", desc: "Screens for environmental liabilities, governance red flags, and sector-specific regulatory exposure." },
  { name: "Market Sizing Agent", accuracy: 90, time: "3–4 hrs", desc: "Bottom-up and top-down TAM/SAM/SOM models with cited data sources and scenario sensitivity tables." },
];

const beforeAfterRows = [
  { item: "Financial model review", before: "3–5 days, 1 associate", after: "4–6 hours, AI agent + 30-min review" },
  { item: "Contract review", before: "1–2 weeks, outside counsel", after: "3–5 hours, Legal Agent + attorney spot-check" },
  { item: "Market sizing", before: "1 week, analyst + consultant", after: "3–4 hours, Market Agent with cited sources" },
  { item: "IC memo", before: "2–3 days of roll-up and formatting", after: "Auto-generated from agent outputs, edit-ready" },
  { item: "Audit trail", before: "\"Where did that number come from?\"", after: "Every claim cites source document and passage" },
];

const architectureReasons = [
  { title: "Parallel, not sequential", desc: "All 8 workstreams run simultaneously. Financial, legal, commercial, and tech agents don't wait for each other." },
  { title: "Citation-backed outputs", desc: "Every finding links back to the source document, page, and passage. No hallucinations, no unsourced claims." },
  { title: "Human-in-the-loop by design", desc: "Agents draft; your team reviews and approves. ARIA accelerates the work, your judgment stays in the loop." },
  { title: "Plugs into your data room", desc: "Connect Intralinks, Datasite, Firmex, or upload directly. ARIA ingests and indexes in minutes." },
];

export default function DueDiligence() {
  return (
    <PageLayout
      title="Due Diligence — ARIA M&A Intelligence Platform"
      description="8 parallel AI workstreams complete a full diligence cycle in under 48 hours. Every finding is citation-backed and auditable."
    >
      <div className="bg-[#000000] border-b border-[#1E2D45]">
        <div className="container py-4">
          <Link href="/"><span className="inline-flex items-center gap-2 text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Back to Home</span></Link>
        </div>
      </div>

      <section className="relative bg-[#000000] overflow-hidden" aria-labelledby="dd-hero-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"><div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #1E3A8A, transparent 70%)" }} /></div>
        <div className="container relative z-10 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E3A8A] bg-[rgba(30,58,138,0.15)] mb-6"><StarGlyph size={12} /><span className="label-caps text-[#66E0FF]">Buy-Side · Due Diligence</span></div>
          <h1 id="dd-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Due Diligence</h1>
          <p className="text-2xl sm:text-3xl font-black text-[#4FC3F7] mb-6" style={{ letterSpacing: "-0.01em" }}>8 workstreams. In parallel. In hours.</p>
          <p className="text-lg text-[#B8C8DC] max-w-2xl mb-10 leading-relaxed">ARIA runs financial, legal, commercial, technology, HR, IP, ESG, and market-sizing diligence simultaneously, each agent citing every source, every finding. Your diligence binder writes itself. Your team reviews, not originates.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact?intent=trial"><button className="btn-orange px-8 py-3.5 rounded-md text-sm font-black text-black flex items-center gap-2">Start 14-Day Trial<ArrowRight className="h-4 w-4" aria-hidden="true" /></button></Link>
            <Link href="/contact?intent=demo"><button className="btn-cyan-outline px-8 py-3.5 rounded-md text-sm font-semibold">See how it works</button></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0D1425] border-y border-[#1E2D45] py-10" aria-label="Due diligence metrics">
        <div className="container"><div className="grid grid-cols-1 sm:grid-cols-3 gap-8">{stats.map((s, i) => (<div key={i}><div className="text-4xl font-black text-[#4FC3F7] mb-2">{s.value}</div><div className="text-sm text-[#7A8FA8]">{s.label}</div></div>))}</div></div>
      </section>

      <section className="py-20 bg-[#000000]" aria-labelledby="agents-heading">
        <div className="container">
          <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">The Agents</span><h2 id="agents-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>8 specialized agents. All running at once.</h2><p className="text-[#B8C8DC] max-w-xl">Each agent is purpose-built for its workstream. They share a common knowledge graph but run independently, so a delay in legal doesn't hold up financial.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {agents.map((agent, i) => (
              <div key={i} className="card-glass rounded-xl p-6">
                <div className="flex items-start justify-between mb-3"><h3 className="text-base font-bold text-white">{agent.name}</h3><div className="flex items-center gap-2 flex-shrink-0 ml-3"><span className="text-xs text-[#7A8FA8]">{agent.time}</span><span className="text-xs font-bold text-[#4FC3F7]">{agent.accuracy}%</span></div></div>
                <p className="text-sm text-[#7A8FA8] leading-relaxed mb-4">{agent.desc}</p>
                <div className="h-1.5 bg-[#1E2D45] rounded-full overflow-hidden"><div className="h-full rounded-full" style={{ width: `${agent.accuracy}%`, background: "linear-gradient(90deg, #1E3A8A, #4FC3F7)" }} role="progressbar" aria-valuenow={agent.accuracy} aria-valuemin={0} aria-valuemax={100} aria-label={`${agent.name} accuracy: ${agent.accuracy}%`} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1425]" aria-labelledby="before-after-heading">
        <div className="container">
          <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">Before & After</span><h2 id="before-after-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>The same work. A fraction of the time.</h2></div>
          <div className="overflow-x-auto rounded-xl border border-[#1E2D45]">
            <table className="w-full min-w-[520px]" role="table">
              <thead><tr className="border-b border-[#1E2D45]"><th className="text-left px-5 py-4 text-sm font-semibold text-[#7A8FA8] bg-[#0D1425] w-[25%]" scope="col">Diligence Item</th><th className="text-left px-5 py-4 text-sm font-semibold text-[#FF3D00] bg-[#0D1425] w-[37%]" scope="col">Before ARIA</th><th className="text-left px-5 py-4 text-sm font-bold text-[#4FC3F7] bg-[rgba(79,195,247,0.05)] w-[38%]" scope="col">With ARIA</th></tr></thead>
              <tbody>{beforeAfterRows.map((row, i) => (<tr key={i} className={`border-b border-[#1E2D45] ${i % 2 === 0 ? "bg-[#000000]" : "bg-[#060C18]"}`}><td className="px-5 py-4 text-sm font-semibold text-white">{row.item}</td><td className="px-5 py-4 text-sm text-[#7A8FA8]"><span className="flex items-start gap-2"><XCircle className="h-4 w-4 text-[#FF3D00] flex-shrink-0 mt-0.5" aria-hidden="true" />{row.before}</span></td><td className="px-5 py-4 text-sm text-[#4FC3F7] font-medium bg-[rgba(79,195,247,0.03)]"><span className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#4FC3F7] flex-shrink-0 mt-0.5" aria-hidden="true" />{row.after}</span></td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#000000]" aria-labelledby="arch-heading">
        <div className="container">
          <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">Why It Works</span><h2 id="arch-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Built for the way diligence actually works.</h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
            {architectureReasons.map((reason, i) => (<div key={i} className="card-glass rounded-xl p-6"><div className="text-4xl font-black mb-3" style={{ color: "#4FC3F7", lineHeight: 1 }}>{i + 1}</div><h3 className="text-base font-bold text-white mb-2">{reason.title}</h3><p className="text-sm text-[#7A8FA8] leading-relaxed">{reason.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#0D1425] overflow-hidden" aria-labelledby="dd-cta-heading">
        <div className="container relative z-10">
          <h2 id="dd-cta-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Run your next diligence in 48 hours.</h2>
          <p className="text-[#B8C8DC] max-w-xl mb-8">Upload a CIM or data room and watch ARIA's 8 agents work in parallel. No setup required.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact?intent=trial"><button className="btn-orange px-8 py-3.5 rounded-md text-sm font-black text-black flex items-center gap-2">Start 14-Day Trial<ArrowRight className="h-4 w-4" aria-hidden="true" /></button></Link>
            <Link href="/contact?intent=demo"><button className="btn-cyan-outline px-8 py-3.5 rounded-md text-sm font-semibold">AI Guided Demo</button></Link>
          </div>
          <p className="text-xs text-[#7A8FA8] mt-6">SOC 2 Type II • Enterprise SSO • Deal-grade data segregation • 99.9% uptime SLA</p>
        </div>
      </section>
    </PageLayout>
  );
}
