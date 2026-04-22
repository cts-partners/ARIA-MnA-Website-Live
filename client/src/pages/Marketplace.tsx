import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ArrowLeft, Shield } from "lucide-react";
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

const dealSources = [
  { title: "Direct owner listings", desc: "Business owners who have completed ARIA's valuation workflow and are actively exploring a sale. Pre-screened, financials validated." },
  { title: "Advisor mandates", desc: "Sell-side advisors and investment banks who use ARIA to manage their process. Listings include AI-generated teasers and verified financials." },
  { title: "Valuation funnel", desc: "Companies that completed an ARIA valuation and opted into marketplace visibility. Early-stage signals before a formal process launches." },
  { title: "Off-market opportunities", desc: "AI-identified companies showing sale-readiness signals — leadership changes, growth plateaus, PE-backed exit windows — before they hire a banker." },
];

const listings = [
  { name: "SaaS HR Platform", sector: "HR Technology", revenue: "$8.2M ARR", ebitda: "$2.1M", growth: "+38% YoY", matchScore: 96, status: "Active Process", tags: ["PE-backed exit", "Recurring revenue", "Midwest"] },
  { name: "Industrial IoT Co.", sector: "Manufacturing Tech", revenue: "$14.7M", ebitda: "$4.3M", growth: "+22% YoY", matchScore: 91, status: "Advisor-run", tags: ["Strategic buyer", "IP-rich", "Southeast"] },
  { name: "Healthcare Analytics", sector: "Health IT", revenue: "$6.1M ARR", ebitda: "$1.8M", growth: "+51% YoY", matchScore: 88, status: "Early Signal", tags: ["High growth", "Proprietary data", "Remote"] },
  { name: "Specialty Logistics", sector: "Supply Chain", revenue: "$31.4M", ebitda: "$5.9M", growth: "+14% YoY", matchScore: 84, status: "Direct Owner", tags: ["Cash flow", "Fragmented market", "Northeast"] },
];

const trustPillars = [
  { title: "AI-validated financials", desc: "Every listing goes through ARIA's financial normalization engine. No unaudited claims, no cherry-picked metrics." },
  { title: "Thesis-matched delivery", desc: "You only see listings that score above your threshold on your thesis. No noise, no irrelevant deal flow." },
  { title: "Information barriers by design", desc: "Buyer and seller data are architecturally separated. Your thesis and portfolio are never visible to the sell-side." },
  { title: "Confidentiality-first", desc: "No company names in teasers until NDA is signed. ARIA manages the NDA workflow automatically." },
];

const pricingTiers = [
  { name: "Buyer Access", price: "Included", sub: "with any ARIA subscription", features: ["Thesis-matched deal flow", "AI-scored listings", "NDA workflow", "Engagement tracking"], highlight: false },
  { name: "Seller Listing", price: "$2,500", sub: "per mandate", features: ["AI-generated teaser", "Validated financials", "Buyer matching", "Process management dashboard"], highlight: true },
  { name: "Advisor Platform", price: "Custom", sub: "seat-based pricing", features: ["Unlimited mandates", "White-label option", "CRM integration", "Dedicated support"], highlight: false },
];

export default function Marketplace() {
  return (
    <PageLayout
      title="Marketplace — ARIA M&A Intelligence Platform"
      description="AI-validated deal flow from direct owners, advisors, and our valuation funnel. Thesis-matched and screened before you see them."
    >
      <div className="bg-[#000000] border-b border-[#1E2D45]">
        <div className="container py-4">
          <Link href="/"><span className="inline-flex items-center gap-2 text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Back to Home</span></Link>
        </div>
      </div>

      <section className="relative bg-[#000000] overflow-hidden" aria-labelledby="mp-hero-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"><div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #1E3A8A, transparent 70%)" }} /></div>
        <div className="container relative z-10 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E3A8A] bg-[rgba(30,58,138,0.15)] mb-6"><StarGlyph size={12} /><span className="label-caps text-[#66E0FF]">ARIA Marketplace</span></div>
          <h1 id="mp-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Marketplace</h1>
          <p className="text-2xl sm:text-3xl font-black text-[#4FC3F7] mb-6" style={{ letterSpacing: "-0.01em" }}>Vetted deal flow. Confidentially matched.</p>
          <p className="text-lg text-[#B8C8DC] max-w-2xl mb-10 leading-relaxed">AI-validated listings from direct owners, advisors, and our valuation funnel, matched to your thesis and screened before you see them. No noise. No cold outreach. Just qualified deal flow that fits your criteria.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact?intent=marketplace"><button className="btn-orange px-8 py-3.5 rounded-md text-sm font-black text-black flex items-center gap-2">Access the Marketplace<ArrowRight className="h-4 w-4" aria-hidden="true" /></button></Link>
            <Link href="/contact?intent=marketplace"><button className="btn-cyan-outline px-8 py-3.5 rounded-md text-sm font-semibold">List a Company</button></Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1425]" aria-labelledby="sources-heading">
        <div className="container">
          <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">Deal Sources</span><h2 id="sources-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Four sources of validated deal flow.</h2><p className="text-[#B8C8DC] max-w-xl">Every listing in the ARIA Marketplace has been through at least one validation layer before it reaches your screen.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {dealSources.map((source, i) => (
              <div key={i} className="card-glass rounded-xl p-6">
                <div className="text-4xl font-black mb-3" style={{ color: "#4FC3F7" }}>{i + 1}</div>
                <h3 className="text-base font-bold text-white mb-2">{source.title}</h3>
                <p className="text-sm text-[#7A8FA8] leading-relaxed">{source.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#000000]" aria-labelledby="listings-heading">
        <div className="container">
          <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">Live Listings</span><h2 id="listings-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Illustrative deal flow. Thesis-matched.</h2><p className="text-[#B8C8DC] max-w-xl">Match scores are illustrative for a growth-equity thesis ($5M–$20M EBITDA, SaaS or tech-enabled services, US-based). Actual listings are confidential until NDA is signed.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {listings.map((listing, i) => (
              <div key={i} className="card-glass rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div><h3 className="text-base font-bold text-white">{listing.name}</h3><p className="text-xs text-[#7A8FA8] mt-0.5">{listing.sector}</p></div>
                  <div className="text-right flex-shrink-0 ml-3">
                    <div className="text-2xl font-black text-[#4FC3F7]">{listing.matchScore}</div>
                    <div className="text-xs text-[#7A8FA8]">match score</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div><div className="text-sm font-bold text-white">{listing.revenue}</div><div className="text-xs text-[#7A8FA8]">Revenue</div></div>
                  <div><div className="text-sm font-bold text-white">{listing.ebitda}</div><div className="text-xs text-[#7A8FA8]">EBITDA</div></div>
                  <div><div className="text-sm font-bold text-[#4FC3F7]">{listing.growth}</div><div className="text-xs text-[#7A8FA8]">Growth</div></div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">{listing.tags.map((tag, j) => (<span key={j} className="text-xs px-2 py-0.5 rounded-full border border-[#1E2D45] text-[#7A8FA8]">{tag}</span>))}</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#66E0FF]">{listing.status}</span>
                  <Link href="/contact?intent=marketplace"><button className="text-xs font-semibold text-[#4FC3F7] hover:text-white transition-colors">Request NDA →</button></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1425]" aria-labelledby="trust-heading">
        <div className="container">
          <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">Trust & Integrity</span><h2 id="trust-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Built on trust. Enforced by architecture.</h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
            {trustPillars.map((pillar, i) => (
              <div key={i} className="card-glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3"><Shield className="h-5 w-5 text-[#4FC3F7]" aria-hidden="true" /><h3 className="text-base font-bold text-white">{pillar.title}</h3></div>
                <p className="text-sm text-[#7A8FA8] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#000000]" aria-labelledby="pricing-heading">
        <div className="container">
          <div className="mb-12"><span className="label-caps text-[#66E0FF] block mb-3">Pricing</span><h2 id="pricing-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Simple, transparent pricing.</h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl">
            {pricingTiers.map((tier, i) => (
              <div key={i} className={`rounded-xl p-6 border ${tier.highlight ? "border-[#4FC3F7] bg-[rgba(79,195,247,0.05)]" : "border-[#1E2D45] bg-[#0D1425]"}`}>
                <h3 className="text-base font-bold text-white mb-1">{tier.name}</h3>
                <div className="text-3xl font-black text-[#4FC3F7] mb-0.5">{tier.price}</div>
                <div className="text-xs text-[#7A8FA8] mb-5">{tier.sub}</div>
                <ul className="space-y-2.5 mb-6">{tier.features.map((f, j) => (<li key={j} className="flex items-center gap-2 text-sm text-[#B8C8DC]"><CheckCircle2 className="h-4 w-4 text-[#4FC3F7] flex-shrink-0" aria-hidden="true" />{f}</li>))}</ul>
                <Link href="/contact?intent=marketplace"><button className={`w-full py-2.5 rounded-md text-sm font-semibold transition-colors ${tier.highlight ? "btn-orange text-black" : "btn-cyan-outline"}`}>Get Started</button></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#0D1425] overflow-hidden" aria-labelledby="mp-cta-heading">
        <div className="container relative z-10">
          <h2 id="mp-cta-heading" className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>Access the full marketplace.</h2>
          <p className="text-[#B8C8DC] max-w-xl mb-8">Set your thesis, get matched, and see live deal flow that fits your criteria — no cold outreach required.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact?intent=trial"><button className="btn-orange px-8 py-3.5 rounded-md text-sm font-black text-black flex items-center gap-2">Start 14-Day Trial<ArrowRight className="h-4 w-4" aria-hidden="true" /></button></Link>
            <Link href="/contact?intent=marketplace"><button className="btn-cyan-outline px-8 py-3.5 rounded-md text-sm font-semibold">List a Company</button></Link>
          </div>
          <p className="text-xs text-[#7A8FA8] mt-6">SOC 2 Type II • Information barriers by design • Confidentiality-first</p>
        </div>
      </section>
    </PageLayout>
  );
}
