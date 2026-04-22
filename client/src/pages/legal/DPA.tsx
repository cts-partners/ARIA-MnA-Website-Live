import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { ArrowRight } from "lucide-react";

export default function DPA() {
  return (
    <PageLayout
      title="Data Processing Agreement — ARIA M&A Intelligence Platform"
      description="ARIA's standard Data Processing Agreement for enterprise customers who require a formal DPA under GDPR or equivalent law."
    >
      <section className="bg-[#000000] border-b border-[#1E2D45] py-16">
        <div className="container max-w-4xl">
          <div className="mb-4">
            <a href="/legal" className="text-sm text-[#4FC3F7] hover:underline">
              ← Legal Hub
            </a>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Data Processing Agreement
          </h1>
          <p className="text-[#B8C8DC] max-w-2xl">
            Enterprise customers who require a formal Data Processing Agreement (DPA) under GDPR Article 28 or equivalent law may request our standard DPA by contacting our legal team.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#000000]">
        <div className="container max-w-4xl">
          <div className="card-glass rounded-xl p-8 max-w-xl">
            <h2 className="text-xl font-bold text-white mb-4">Request a DPA</h2>
            <p className="text-sm text-[#B8C8DC] mb-6 leading-relaxed">
              Our standard DPA incorporates the EU Standard Contractual Clauses (SCCs), the UK International Data Transfer Addendum (IDTA), and our sub-processor list. It is designed to be executed without negotiation for most enterprise customers.
            </p>
            <p className="text-sm text-[#B8C8DC] mb-6 leading-relaxed">
              To request a DPA, please contact our legal team with your company name, registered address, and the email address of the authorized signatory.
            </p>
            <Link href="/contact?intent=info">
              <button className="btn-cyan-outline px-6 py-3 rounded-md text-sm font-semibold flex items-center gap-2">
                Contact Legal Team
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
