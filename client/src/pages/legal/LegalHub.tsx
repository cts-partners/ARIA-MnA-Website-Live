import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { FileText, Shield, Server, Cookie, FileCheck } from "lucide-react";

const cards = [
  {
    icon: FileText,
    title: "Terms of Service",
    desc: "The rules governing your use of ARIA, including subscriptions, acceptable use, data handling, and dispute resolution.",
    href: "/legal/terms",
    cta: "Read Terms",
    color: "#4FC3F7",
  },
  {
    icon: Shield,
    title: "Privacy Policy",
    desc: "What data we collect, why we collect it, who we share it with, how long we keep it, and your rights.",
    href: "/legal/privacy",
    cta: "Read Privacy Policy",
    color: "#66E0FF",
  },
  {
    icon: Server,
    title: "Sub-Processors",
    desc: "The third-party service providers that process Customer Data on our behalf, updated when changes occur.",
    href: "/legal/sub-processors",
    cta: "View Sub-Processors",
    color: "#4FC3F7",
  },
  {
    icon: FileCheck,
    title: "Data Processing Agreement",
    desc: "Our standard DPA for enterprise customers who require a formal data processing agreement under GDPR or equivalent law.",
    href: "/legal/dpa",
    cta: "Request DPA",
    color: "#66E0FF",
  },
  {
    icon: Cookie,
    title: "Cookie Preferences",
    desc: "Manage your cookie and tracking preferences, including analytics and marketing cookies. Your choices are saved.",
    href: "#cookie-preferences",
    cta: "Manage Cookies",
    color: "#4FC3F7",
    isCookieLink: true,
  },
];

export default function LegalHub() {
  const handleCookiePreferences = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("aria:openCookieModal"));
  };

  return (
    <PageLayout
      title="Legal — ARIA M&A Intelligence Platform"
      description="Terms of Service, Privacy Policy, Sub-processors, Data Processing Agreement, and Cookie Preferences for the ARIA M&A Intelligence Platform."
    >
      {/* Hero */}
      <section className="bg-[#000000] border-b border-[#1E2D45] py-16">
        <div className="container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E3A8A] bg-[rgba(30,58,138,0.15)] mb-6">
            <Shield className="h-3 w-3 text-[#66E0FF]" aria-hidden="true" />
            <span className="label-caps text-[#66E0FF]">Legal &amp; Privacy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Legal Center
          </h1>
          <p className="text-lg text-[#B8C8DC] max-w-2xl mx-auto">
            Everything you need to understand how ARIA works, what data we collect, and your rights as a user or customer. Written in plain English.
          </p>
        </div>
      </section>

      {/* Card grid */}
      <section className="py-16 bg-[#000000]" aria-label="Legal documents">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card, i) => {
              const Icon = card.icon;
              const content = (
                <div className="card-glass rounded-xl p-6 h-full flex flex-col hover:border-[#4FC3F7] transition-colors border border-[#1E2D45]">
                  <div className="mb-4">
                    <Icon className="h-6 w-6" style={{ color: card.color }} aria-hidden="true" />
                  </div>
                  <h2 className="text-base font-bold text-white mb-2">{card.title}</h2>
                  <p className="text-sm text-[#7A8FA8] leading-relaxed flex-1 mb-4">{card.desc}</p>
                  <span className="text-sm font-semibold" style={{ color: card.color }}>
                    {card.cta} →
                  </span>
                </div>
              );

              if (card.isCookieLink) {
                return (
                  <button
                    key={i}
                    onClick={handleCookiePreferences}
                    className="text-left w-full"
                    aria-label="Open cookie preferences modal"
                  >
                    {content}
                  </button>
                );
              }

              return (
                <Link key={i} href={card.href}>
                  {content}
                </Link>
              );
            })}
          </div>

          {/* Contact */}
          <div className="mt-12 pt-8 border-t border-[#1E2D45] text-center">
            <p className="text-[#B8C8DC] text-sm mb-2">
              Questions about our legal documents or privacy practices?
            </p>
            <a
              href="mailto:[FILL: privacy email]"
              className="text-[#4FC3F7] text-sm hover:underline"
            >
              Contact our privacy team →
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
