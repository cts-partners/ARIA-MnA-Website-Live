import { Link } from "wouter";
import { Shield } from "lucide-react";
import { getLoginUrl } from "@/const";

const ARIA_LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663285947699/UU9d44JqYaiSmX6pFjko47/ARIALogo-correct_8fffedab.png";

const productLinks = [
  { label: "Overview", href: "/platform" },
  { label: "Buy-Side: Deal Sourcing", href: "/deal-sourcing" },
  { label: "Buy-Side: Due Diligence", href: "/due-diligence" },
  { label: "Sell-Side", href: "/sell-side" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Sign In", href: "__LOGIN__" },
];

const companyLinks = [
  { label: "Contact", href: "/contact", external: false },
  { label: "About CTS", href: "https://www.cts-partners.com/about", external: true },
];

function openCookieModal(e: React.MouseEvent) {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent("aria:openCookieModal"));
}

export default function Footer() {
  return (
    <footer
      className="bg-[#000000] border-t border-[#1E2D45]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* ── Brand Block ── */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="ARIA M&A Intelligence Platform — Home">
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={ARIA_LOGO_URL}
                  alt="ARIA M&A Intelligence Platform"
                  className="h-10 w-auto"
                />
                <div>
                  <div className="text-sm font-black text-white tracking-[0.06em] uppercase leading-none">
                    ARIA
                  </div>
                  <div className="label-caps text-[#4FC3F7] leading-none mt-1">
                    M&A Intelligence Platform
                  </div>
                </div>
              </div>
            </Link>

            <p className="text-sm text-[#7A8FA8] leading-relaxed mb-3">
              The Operating System for Mid-Market M&A. Specialized AI agents purpose-built for PE sponsors, investment banks, and sell-side advisors.
            </p>
            <p className="text-sm text-[#7A8FA8] leading-relaxed mb-5">
              Brought to you by{" "}
              <a
                href="https://www.cts-partners.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4FC3F7] hover:text-white transition-colors underline underline-offset-2"
              >
                Convergence Technology Solutions
              </a>
            </p>

            {/* Live status */}
            <div className="flex items-center gap-2 mt-4">
              <span className="pulse-dot" aria-hidden="true"></span>
              <span className="text-xs text-[#66E0FF] font-medium">Live Platform</span>
            </div>

            {/* SOC 2 + IB badges */}
            <div className="flex gap-3 mt-5">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#1E2D45] bg-[#0D1425]">
                <Shield className="h-4 w-4 text-[#4FC3F7]" aria-hidden="true" />
                <div>
                  <div className="text-xs font-semibold text-white leading-none">SOC 2 Type II</div>
                  <div className="text-[10px] text-[#7A8FA8] mt-0.5">Enterprise security</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#1E2D45] bg-[#0D1425]">
                <span className="text-[#FFB000] text-xs font-bold" aria-hidden="true">IB</span>
                <div>
                  <div className="text-xs font-semibold text-white leading-none">Info Barriers</div>
                  <div className="text-[10px] text-[#7A8FA8] mt-0.5">By design</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Product ── */}
          <div>
            <h3 className="label-caps text-[#7A8FA8] mb-4">Product</h3>
            <ul className="space-y-2.5" role="list">
              {productLinks.map((link) => (
                <li key={link.label}>
                  {link.href === "__LOGIN__" ? (
                    <a
                      href={getLoginUrl()}
                      className="text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href}>
                      <span className="text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ── */}
          <div>
            <h3 className="label-caps text-[#7A8FA8] mb-4">Company</h3>
            <ul className="space-y-2.5" role="list">
              {companyLinks.map((link) => (
                <li key={`company-${link.label}`}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href}>
                      <span className="text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Legal ── */}
          <div>
            <h3 className="label-caps text-[#7A8FA8] mb-4">Legal</h3>
            <ul className="space-y-2.5" role="list">
              <li>
                <Link href="/legal/terms">
                  <span className="text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer">
                    Terms of Service
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy">
                  <span className="text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/legal/sub-processors">
                  <span className="text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer">
                    Sub-processors
                  </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={openCookieModal}
                  className="text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer text-left"
                  aria-label="Open cookie preferences"
                >
                  Cookie Preferences
                </button>
              </li>
              <li>
                <Link href="/legal/dpa">
                  <span className="text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer">
                    DPA
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/legal">
                  <span className="text-sm text-[#7A8FA8] hover:text-white transition-colors cursor-pointer">
                    Legal Hub
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-12 pt-6 border-t border-[#1E2D45] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#7A8FA8]">
            © {new Date().getFullYear()} ARIA-MNA Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/legal/terms">
              <span className="text-xs text-[#7A8FA8] hover:text-white transition-colors cursor-pointer">Terms</span>
            </Link>
            <span className="text-xs text-[#1E2D45]">·</span>
            <Link href="/legal/privacy">
              <span className="text-xs text-[#7A8FA8] hover:text-white transition-colors cursor-pointer">Privacy</span>
            </Link>
            <span className="text-xs text-[#1E2D45]">·</span>
            <button
              onClick={openCookieModal}
              className="text-xs text-[#7A8FA8] hover:text-white transition-colors cursor-pointer"
              aria-label="Open cookie preferences"
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
