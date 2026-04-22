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
  { value: "< 2 hrs", label: "CIM generation from uploaded financials" },
  { value: "3×", label: "More qualified buyer conversations per mandate" },
  { value: "40%", label: "Reduction in time-to-close on managed processes" },
];

const cimSteps = [
  { num: "1", title: "Upload your financials", desc: "P&L, balance sheet, CIM draft, or raw data room. ARIA parses and normalizes everything." },
  { num: "2", title: "ARIA drafts the CIM", desc: "Executive summary, business overview, financial analysis, and growth story — structured, formatted, and board-ready." },
  { num: "3", title: "Your team reviews and refines", desc: "Edit inline, add commentary, adjust the narrative. ARIA holds the structure; you own the story." },
  { num: "4", title: "Buyer list generated in parallel", desc: "While you're reviewing the CIM, ARIA is already building and scoring a ranked buyer list against the target's profile." },
  { num: "5", title: "Launch and track the process", desc: "Send teasers, track engagement, manage NDAs, and monitor buyer interest — all in one place." },
];

const buyerMatchDimensions = [
  { title: "Strategic fit", desc: "Sector overlap, adjacency, and stated acquisition criteria from public filings and press releases." },
  { title: "Financial capacity", desc: "Dry powder, recent deal size, and leverage capacity benchmarked against the target's price expectations." },
  { title: "Relationship warmth", desc: "Prior interactions, shared advisors, and portfolio company connections from your firm's knowledge graph." },
  { title: "Process readiness", desc: "Current deal activity, integration bandwidth, and board-level M&A appetite signals." },
];

const engagementMetrics = [
  { label: "CIM opens", value: "47", sub: "unique buyers" },
  { label: "Time in CIM", value: "8.3 min", sub: "avg per session" },
  { label: "NDA signed", value: "23", sub: "of 47 engaged" },
  { label: "Management meetings", value: "11", sub: "scheduled" },
  { label: "IOIs received", value: "6", sub: "in range" },
  { label: "Final bids", value: "3", sub: "above reserve" },
];

const shopTypes = [
  { title: "Broad auction", desc: "Maximum competitive tension. ARIA manages outreach to 50–200 buyers, tracks every interaction, and keeps the process on timeline." },
  { title: "Targeted auction", desc: "10–30 pre-qualified buyers. AI scoring ensures every party on the list has a credible path to close." },
  { title: "Proprietary process", desc: "One or two strategic conversations. ARIA provides the intelligence to negotiate from strength." },
  { title: "Advisor-run mandate", desc: "You're the advisor. ARIA is your associate — CIM, buyer list, data room, and process management." },
];

const comparisonRows = [
  { item: "CIM preparation", before: "2–3 weeks of associate time per mandate", after: "< 2 hours from uploaded financials, board-ready after review" },
  { item: "Buyer list", before: "Personal rolodex + static PitchBook filters", after: "AI-scored on 4 dimensions, ranked by likelihood to close" },
  { item: "Engagement tracking", before: "Email threads and spreadsheets", after: "Real-time dashboard: opens, time-in-doc, NDA status, meeting requests" },
  { item: "Process management", before: "Calendar reminders and manual follow-up", after: "Automated milestone tracking with advisor alerts on engagement drops" },
  { item: "Valuation benchmarking", before: "Analyst pulls comps manually", after: "Live comparable transaction data with AI-scored relevance" },
];

export default function SellSide() {
  return (
    <PageLayout
      title="Sell-Side — ARIA M&A Intelligence Platform"
      description="CIM generation, AI-powered buyer matching, and auction management in one platform. Run tighter sell-side processes with smaller teams."
    >
      <div className="bg-[#000000] border-b border-[#1E2D45]">
        <div className="container py-4">
          <Link href="/"><span className="inline-flex items-center gap-2 text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Back to Home</span></Link>
        </div>
      </div>

      <section className="relative bg-[#000000] overflow-hidden" aria-labelledby="ss-hero-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"><div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #1E3A8A, transparent 70%)" }} /></div>
        <div className="container relative z-10 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E3A8A] bg-[rgba(30,58,138,0.15)] mb-6"><StarGlyph size={12} /><span className="label-caps text-[#66E0FF]">Sell-Side Advisory</span></div>
          <h1 id="ss-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Sell-Side</h1>
          <p className="text-2xl sm:text-3xl font-black text-[#4FC3F7] mb-6" style={{ letterSpacing: "-0.01em" }}>CIM, buyer list, and teaser in one afternoon.</p>
          <p className="text-lg text-[#B8C8DC] max-w-2xl mb-10 leading-relaxed">Upload financials; ARIA drafts a board-ready CIM, builds a ranked buyer list scored on strategic fit, financial capacity, relationship warmth, and process readiness, and tracks engagement across the entire auction. Your team runs the relationship. ARIA runs the process.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact?intent=trial"><button className="btn-orange px-8 py-3.5 rounded-md text-sm font-black text-black flex items-center gap-2">Start 14-Day Trial<ArrowRight className="h-4 w-4" aria-hidden="true" /></button></Link>
            <Link href="/contact?intent=demo"><button className="btn-cyan-outline px-8 py-3.5 rounded-md text-sm font-semibold">See how it works</button></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0D1425] border-y border-[#1E2D45] py-10" aria-label="Sell-side metrics">
        <div className="container"><div className="grid grid-cols-1 sm:grid-cols-3 gap-8">{stats.map((s, i) => (<div key={i}><div className="text-4xl font-black text-[#4FC3F7] mb-2">{s.value}</div><div className="text-sm text-[#7A8FA8]">{s.label}</div></div>))}</div></div>
      </section>

      <section className="py-20 bg-[#000000]" aria-labelledby="cim-heading">
        <div className="container">
          <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">CIM Workflow</span><h2 id="cim-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>From upload to CIM in under 2 hours.</h2><p className="text-[#B8C8DC] max-w-xl">The CIM is the first impression. ARIA makes sure it's the right one.</p></div>
          <div className="max-w-3xl space-y-4">
            {cimSteps.map((step, i) => (
              <div key={i} className="card-glass rounded-xl p-6 flex items-start gap-5">
                <div className="text-4xl font-black flex-shrink-0 w-10 text-center" style={{ color: "#4FC3F7", lineHeight: 1 }}>{step.num}</div>
                <div><h3 className="text-base font-bold text-white mb-1">{step.title}</h3><p className="text-sm text-[#7A8FA8] leading-relaxed">{step.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1425]" aria-labelledby="buyer-match-heading">
        <div className="container">
          <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">Buyer Matching</span><h2 id="buyer-match-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>AI-scored buyer matching on 4 dimensions.</h2><p className="text-[#B8C8DC] max-w-xl">Not just a PitchBook filter. A ranked list of buyers who can actually close.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
            {buyerMatchDimensions.map((dim, i) => (
              <div key={i} className="card-glass rounded-xl p-6">
                <div className="text-4xl font-black mb-3" style={{ color: "#4FC3F7", lineHeight: 1 }}>{i + 1}</div>
                <h3 className="text-base font-bold text-white mb-2">{dim.title}</h3>
                <p className="text-sm text-[#7A8FA8] leading-relaxed">{dim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#000000]" aria-labelledby="engagement-heading">
        <div className="container">
          <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">Engagement Analytics</span><h2 id="engagement-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Know who's serious before they tell you.</h2><p className="text-[#B8C8DC] max-w-xl">Illustrative engagement dashboard for a mid-market sell-side mandate. Real-time visibility into buyer behavior across the entire process.</p></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl">
            {engagementMetrics.map((m, i) => (
              <div key={i} className="card-glass rounded-xl p-5">
                <div className="text-2xl font-black text-[#4FC3F7] mb-1">{m.value}</div>
                <div className="text-xs font-semibold text-white mb-0.5">{m.label}</div>
                <div className="text-xs text-[#7A8FA8]">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1425]" aria-labelledby="shop-types-heading">
        <div className="container">
          <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">Every Process Type</span><h2 id="shop-types-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Built for every shop type.</h2><p className="text-[#B8C8DC] max-w-xl">Whether you're running a broad auction or a quiet proprietary conversation, ARIA adapts to your process.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
            {shopTypes.map((shop, i) => (
              <div key={i} className="card-glass rounded-xl p-6">
                <h3 className="text-base font-bold text-white mb-2">{shop.title}</h3>
                <p className="text-sm text-[#7A8FA8] leading-relaxed">{shop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#000000]" aria-labelledby="ss-comparison-heading">
        <div className="container">
          <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">Sell-Side Activity</span><h2 id="ss-comparison-heading" className="text-3xl sm:text-4xl font-black text-white" style={{ letterSpacing: "-0.02em" }}>ARIA vs. a traditional sell-side process.</h2></div>
          <div className="overflow-x-auto rounded-xl border border-[#1E2D45]">
            <table className="w-full min-w-[520px]" role="table">
              <thead><tr className="border-b border-[#1E2D45]"><th className="text-left px-5 py-4 text-sm font-semibold text-[#7A8FA8] bg-[#000000] w-[22%]" scope="col">Activity</th><th className="text-left px-5 py-4 text-sm font-semibold text-[#FF3D00] bg-[#000000] w-[39%]" scope="col">Traditional Process</th><th className="text-left px-5 py-4 text-sm font-bold text-[#4FC3F7] bg-[rgba(79,195,247,0.05)] w-[39%]" scope="col">With ARIA</th></tr></thead>
              <tbody>{comparisonRows.map((row, i) => (<tr key={i} className={`border-b border-[#1E2D45] ${i % 2 === 0 ? "bg-[#000000]" : "bg-[#060C18]"}`}><td className="px-5 py-4 text-sm font-semibold text-white">{row.item}</td><td className="px-5 py-4 text-sm text-[#7A8FA8]"><span className="flex items-start gap-2"><XCircle className="h-4 w-4 text-[#FF3D00] flex-shrink-0 mt-0.5" aria-hidden="true" />{row.before}</span></td><td className="px-5 py-4 text-sm text-[#4FC3F7] font-medium bg-[rgba(79,195,247,0.03)]"><span className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#4FC3F7] flex-shrink-0 mt-0.5" aria-hidden="true" />{row.after}</span></td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#0D1425] overflow-hidden" aria-labelledby="ss-cta-heading">
        <div className="container relative z-10">
          <h2 id="ss-cta-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Run your next mandate with ARIA.</h2>
          <p className="text-[#B8C8DC] max-w-xl mb-8">Upload a CIM or financials and see ARIA generate a buyer list and draft a CIM in under 2 hours.</p>
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
