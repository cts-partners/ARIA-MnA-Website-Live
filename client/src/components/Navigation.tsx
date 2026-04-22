import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, LogIn, Search, FileText } from "lucide-react";
import { getLoginUrl } from "@/const";

const NEW_LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663285947699/UU9d44JqYaiSmX6pFjko47/ARIALogo-correct_8fffedab.png";

// Buy-Side dropdown items
const buySideItems = [
  {
    label: "Deal Sourcing",
    desc: "AI-powered sourcing & thesis matching",
    href: "/deal-sourcing",
    icon: <Search className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "Due Diligence",
    desc: "8 parallel AI workstreams",
    href: "/due-diligence",
    icon: <FileText className="h-4 w-4" aria-hidden="true" />,
  },
];

// Top-level nav items (no dropdown) — Overview is rendered separately before Buy-Side
const navItems = [
  { label: "Sell-Side", href: "/sell-side" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "How It Works", href: "/how-it-works" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [buySideOpen, setBuySideOpen] = useState(false);
  const [mobileBuySideOpen, setMobileBuySideOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setBuySideOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setBuySideOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isBuySideActive = location === "/deal-sourcing" || location === "/due-diligence" || location === "/buy-side";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/98 nav-blur border-b border-[#1E2D45] shadow-lg shadow-black/40"
          : "bg-black/80 nav-blur border-b border-[#1E2D45]"
      }`}
      role="banner"
    >
      <div className="container-wide">
        <nav
          className="flex items-center justify-between h-24"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* ── Logo ── */}
          <Link href="/" aria-label="ARIA M&A Intelligence Platform — Home">
            <div className="flex items-center gap-2.5 group">
              <img
                src={NEW_LOGO_URL}
                alt="ARIA M&A Intelligence Platform logo"
                className="w-auto"
                style={{ height: "4.84rem" }}
              />
              <div className="hidden sm:block leading-none">
                <div
                  className="text-sm font-medium text-white leading-none tracking-[0.12em] uppercase"
                  style={{ fontFamily: "Outfit, Helvetica Neue, sans-serif", lineHeight: "1.15rem" }}
                >
                  ARIA
                </div>
                <div className="label-caps text-[#4FC3F7] mt-[3px]" style={{ lineHeight: "1rem" }}>
                  M&A Intelligence Platform
                </div>
              </div>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-0.5">

            {/* Overview */}
            <Link href="/platform">
              <span
                className={`px-3 py-2 text-sm font-light rounded-md transition-all duration-150 cursor-pointer ${
                  location === "/platform"
                    ? "text-[#FFB000] bg-[rgba(255,176,0,0.08)]"
                    : "text-[#B8C8DC] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`}
                aria-current={location === "/platform" ? "page" : undefined}
              >
                Overview
              </span>
            </Link>

            {/* Buy-Side dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setBuySideOpen(!buySideOpen)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setBuySideOpen(!buySideOpen); }}
                aria-expanded={buySideOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-light rounded-md transition-all duration-150 cursor-pointer ${
                  isBuySideActive
                    ? "text-[#FFB000] bg-[rgba(255,176,0,0.08)]"
                    : "text-[#B8C8DC] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                Buy-Side
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${buySideOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              {buySideOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 rounded-xl border border-[#1E2D45] bg-[#0D1425] shadow-xl shadow-black/60 py-2 z-50"
                  role="menu"
                  aria-label="Buy-Side submenu"
                >
                  {buySideItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <div
                        className={`flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors ${
                          location === item.href
                            ? "bg-[rgba(255,176,0,0.06)]"
                            : "hover:bg-[rgba(255,255,255,0.04)]"
                        }`}
                        role="menuitem"
                      >
                        <div
                          className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "rgba(79,195,247,0.12)", color: "#4FC3F7" }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div className={`text-sm font-medium ${location === item.href ? "text-[#FFB000]" : "text-white"}`}>
                            {item.label}
                          </div>
                          <div className="text-xs text-[#7A8FA8] mt-0.5">{item.desc}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Remaining flat nav items */}
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`px-3 py-2 text-sm font-light rounded-md transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "text-[#FFB000] bg-[rgba(255,176,0,0.08)]"
                        : "text-[#B8C8DC] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}

            {/* Sign In */}
            <a
              href={getLoginUrl()}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-light text-[#B8C8DC] hover:text-white hover:bg-[rgba(255,255,255,0.05)] rounded-md transition-all duration-150"
              aria-label="Sign in to ARIA"
            >
              <LogIn className="h-3.5 w-3.5" aria-hidden="true" />
              Sign In
            </a>
          </div>

          {/* ── Contact CTA ── */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact">
              <button
                className="btn-orange px-5 py-2 rounded-md text-sm font-bold text-black"
                aria-label="Contact ARIA"
                onClick={() => typeof window !== 'undefined' && (window as any).__ariaTrack?.('nav_contact_clicked', { source: 'desktop' })}
              >
                Contact
              </button>
            </Link>
          </div>

          {/* ── Mobile menu button ── */}
          <button
            className="lg:hidden p-2 rounded-md text-[#B8C8DC] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-black/98 nav-blur border-t border-[#1E2D45]"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="container-wide py-4 flex flex-col gap-1">

            {/* Overview */}
            <Link href="/platform">
              <span
                className={`block px-4 py-3 text-sm font-light rounded-md transition-colors cursor-pointer ${
                  location === "/platform"
                    ? "text-[#FFB000] bg-[rgba(255,176,0,0.08)]"
                    : "text-[#B8C8DC] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                Overview
              </span>
            </Link>

            {/* Buy-Side accordion */}
            <div>
              <button
                onClick={() => setMobileBuySideOpen(!mobileBuySideOpen)}
                aria-expanded={mobileBuySideOpen}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-light rounded-md transition-colors ${
                  isBuySideActive
                    ? "text-[#FFB000] bg-[rgba(255,176,0,0.08)]"
                    : "text-[#B8C8DC] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                Buy-Side
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${mobileBuySideOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {mobileBuySideOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-[#1E2D45] pl-3">
                  {buySideItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span
                        className={`block px-3 py-2.5 text-sm rounded-md transition-colors cursor-pointer ${
                          location === item.href
                            ? "text-[#FFB000]"
                            : "text-[#B8C8DC] hover:text-white"
                        }`}
                      >
                        <span className="font-medium">{item.label}</span>
                        <span className="block text-xs text-[#7A8FA8] mt-0.5">{item.desc}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Flat nav items */}
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`block px-4 py-3 text-sm font-light rounded-md transition-colors cursor-pointer ${
                      isActive
                        ? "text-[#FFB000] bg-[rgba(255,176,0,0.08)]"
                        : "text-[#B8C8DC] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}

            {/* Sign In */}
            <a
              href={getLoginUrl()}
              className="flex items-center gap-2 px-4 py-3 text-sm font-light text-[#B8C8DC] rounded-md hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            >
              <LogIn className="h-4 w-4" aria-hidden="true" />
              Sign In
            </a>

            <div className="pt-3 border-t border-[#1E2D45] mt-2">
              <Link href="/contact">
                <button
                  className="btn-orange w-full py-3 rounded-md text-sm font-bold text-black"
                  onClick={() => typeof window !== 'undefined' && (window as any).__ariaTrack?.('nav_contact_clicked', { source: 'mobile' })}
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
