import { useState } from "react";
import PageLayout from "@/components/PageLayout";

const subProcessors = [
  {
    name: "[FILL: Cloud Infrastructure Provider, e.g., AWS / GCP / Azure]",
    purpose: "Cloud hosting, compute, storage, and database services",
    location: "[FILL: e.g., United States; EU region available]",
    transfer: "[FILL: e.g., SCCs / DPF]",
    link: "[FILL: URL]",
  },
  {
    name: "[FILL: Payment Processor, e.g., Stripe]",
    purpose: "Payment processing and billing",
    location: "[FILL: e.g., United States]",
    transfer: "[FILL: e.g., SCCs / DPF]",
    link: "[FILL: URL]",
  },
  {
    name: "[FILL: Email Delivery, e.g., SendGrid / Postmark]",
    purpose: "Transactional email delivery (account notifications, invoices)",
    location: "[FILL: e.g., United States]",
    transfer: "[FILL: e.g., SCCs]",
    link: "[FILL: URL]",
  },
  {
    name: "[FILL: Analytics, e.g., Plausible / Mixpanel]",
    purpose: "Product analytics and usage monitoring",
    location: "[FILL: e.g., EU / United States]",
    transfer: "[FILL: e.g., N/A (EU-only) / SCCs]",
    link: "[FILL: URL]",
  },
  {
    name: "[FILL: AI Model Provider, e.g., OpenAI / Anthropic / Azure OpenAI]",
    purpose: "Large language model inference for AI agent outputs",
    location: "[FILL: e.g., United States]",
    transfer: "[FILL: e.g., SCCs / DPF]",
    link: "[FILL: URL]",
  },
  {
    name: "[FILL: Identity / SSO Provider, e.g., Auth0 / Okta]",
    purpose: "Authentication and single sign-on",
    location: "[FILL: e.g., United States; EU region available]",
    transfer: "[FILL: e.g., SCCs / DPF]",
    link: "[FILL: URL]",
  },
  {
    name: "[FILL: Customer Support, e.g., Intercom / Zendesk]",
    purpose: "Customer support ticket management",
    location: "[FILL: e.g., United States]",
    transfer: "[FILL: e.g., SCCs]",
    link: "[FILL: URL]",
  },
];

export default function SubProcessors() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // [FILL: wire to mailing list or tRPC endpoint]
    setSubmitted(true);
  };

  return (
    <PageLayout
      title="Sub-Processors — ARIA M&A Intelligence Platform"
      description="The third-party service providers that process Customer Data on behalf of ARIA M&A Intelligence Platform."
    >
      {/* Hero */}
      <section className="bg-[#000000] border-b border-[#1E2D45] py-16">
        <div className="container max-w-4xl">
          <div className="mb-4">
            <a href="/legal" className="text-sm text-[#4FC3F7] hover:underline">
              ← Legal Hub
            </a>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Sub-Processors
          </h1>
          <p className="text-[#B8C8DC] max-w-2xl">
            ARIA uses third-party service providers ("sub-processors") to help deliver the Service. Each sub-processor is bound by a data processing agreement that requires them to protect Customer Data and process it only on our instructions.
          </p>
          <p className="text-sm text-[#7A8FA8] mt-3">
            Last updated: 2026-04-20 · Subscribe below to receive notifications when this list changes.
          </p>
        </div>
      </section>

      {/* Table */}
      <section className="py-12 bg-[#000000]" aria-label="Sub-processor list">
        <div className="container max-w-4xl">
          <div className="overflow-x-auto rounded-xl border border-[#1E2D45]">
            <table className="w-full min-w-[600px] text-sm" role="table">
              <thead>
                <tr className="border-b border-[#1E2D45] bg-[#0D1425]">
                  <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold w-[22%]" scope="col">Sub-Processor</th>
                  <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold w-[30%]" scope="col">Purpose</th>
                  <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold w-[20%]" scope="col">Data Location</th>
                  <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold" scope="col">Transfer Mechanism</th>
                </tr>
              </thead>
              <tbody>
                {subProcessors.map((sp, i) => (
                  <tr key={i} className={`border-b border-[#1E2D45] ${i % 2 === 0 ? "bg-[#000000]" : "bg-[#060C18]"}`}>
                    <td className="px-4 py-3 text-white font-medium">
                      {sp.link && sp.link !== "[FILL: URL]" ? (
                        <a href={sp.link} target="_blank" rel="noopener noreferrer" className="text-[#4FC3F7] hover:underline">
                          {sp.name}
                        </a>
                      ) : (
                        sp.name
                      )}
                    </td>
                    <td className="px-4 py-3 text-[#B8C8DC]">{sp.purpose}</td>
                    <td className="px-4 py-3 text-[#B8C8DC]">{sp.location}</td>
                    <td className="px-4 py-3 text-[#B8C8DC]">{sp.transfer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Subscribe */}
          <div className="mt-10 card-glass rounded-xl p-6 max-w-lg">
            <h2 className="text-base font-bold text-white mb-2">Get notified of changes</h2>
            <p className="text-sm text-[#7A8FA8] mb-4">
              We will email you when we add, remove, or change a sub-processor. Required under GDPR Article 28(2) for customers with a DPA.
            </p>
            {submitted ? (
              <p className="text-sm text-[#4FC3F7] font-medium">You're subscribed. We'll notify you of any changes.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@company.com"
                  required
                  className="flex-1 bg-[#0D1425] border border-[#1E2D45] rounded-md px-3 py-2 text-sm text-white placeholder-[#7A8FA8] focus:outline-none focus:border-[#4FC3F7]"
                  aria-label="Email address for sub-processor update notifications"
                />
                <button
                  type="submit"
                  className="btn-cyan-outline px-4 py-2 rounded-md text-sm font-semibold flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
