import { useState, useRef, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import {
  Info,
  CalendarDays,
  ShoppingBag,
  Rocket,
  CheckCircle2,
  Shield,
  Clock,
  ExternalLink,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

// ── Analytics stub ─────────────────────────────────────────────────────────
function track(event: string, props?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    (window as any).__ariaTrack?.(event, props);
    if ((window as any).gtag) (window as any).gtag("event", event, props);
    if ((window as any).posthog) (window as any).posthog.capture(event, props);
  }
}

// ── Free-mail block ────────────────────────────────────────────────────────
const FREE_MAIL_DOMAINS = [
  "gmail.com","yahoo.com","outlook.com","hotmail.com","icloud.com",
  "aol.com","protonmail.com","mail.com","zoho.com","yandex.com",
  "live.com","msn.com","me.com","mac.com","googlemail.com",
];
function isFreeEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase() ?? "";
  return FREE_MAIL_DOMAINS.includes(domain);
}

// ── Intent definitions ─────────────────────────────────────────────────────
type IntentKey = "info" | "demo" | "marketplace" | "trial";

interface Intent {
  key: IntentKey;
  icon: React.ReactNode;
  title: string;
  formTitle: string;
  description: string;
  submitLabel: string;
  blockFreeEmail: boolean;
  color: string;
  borderColor: string;
  bgColor: string;
}

const INTENTS: Intent[] = [
  {
    key: "info",
    icon: <Info className="h-6 w-6" />,
    title: "Request Information",
    formTitle: "Request Information",
    description: "Learn how ARIA works, pricing, and fit for your firm.",
    submitLabel: "Send my request",
    blockFreeEmail: false,
    color: "#4FC3F7",
    borderColor: "border-[#4FC3F7]",
    bgColor: "bg-[rgba(79,195,247,0.08)]",
  },
  {
    key: "demo",
    icon: <CalendarDays className="h-6 w-6" />,
    title: "Book a Demo",
    formTitle: "Book a Demo",
    description: "See ARIA in action with a tailored walkthrough.",
    submitLabel: "Book my demo",
    blockFreeEmail: true,
    color: "#FFB000",
    borderColor: "border-[#FFB000]",
    bgColor: "bg-[rgba(255,176,0,0.08)]",
  },
  {
    key: "marketplace",
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "Sign Up for Marketplace",
    formTitle: "Sign Up for Marketplace",
    description: "Access vetted deal flow as a Buyer, list your mandate as a Seller, or manage multiple clients as an Advisor.",
    submitLabel: "Request Marketplace Access",
    blockFreeEmail: true,
    color: "#A78BFA",
    borderColor: "border-[#A78BFA]",
    bgColor: "bg-[rgba(167,139,250,0.08)]",
  },
  {
    key: "trial",
    icon: <Rocket className="h-6 w-6" />,
    title: "Sign Up for a 14-Day Free Trial",
    formTitle: "Sign Up for Your 14-Day Free Trial",
    description: "Full platform access. Credit card required. Cancel anytime.",
    submitLabel: "Free Trial Sign Up",
    blockFreeEmail: true,
    color: "#34D399",
    borderColor: "border-[#34D399]",
    bgColor: "bg-[rgba(52,211,153,0.08)]",
  },
];

// ── Form state ─────────────────────────────────────────────────────────────
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  title: string;
  phone: string;
  companySize: string;
  industry: string;
  message: string;
  marketplaceRole: string;
  demoType: string;
  _hp_name: string; // honeypot
}

const EMPTY_FORM: FormValues = {
  firstName: "", lastName: "", email: "", company: "",
  title: "", phone: "", companySize: "", industry: "", message: "", marketplaceRole: "", demoType: "introduction", _hp_name: "",
};

// ── Marketplace role options ──────────────────────────────────────────────
const MARKETPLACE_ROLES = [
  {
    key: "buyer",
    label: "Buyer Access",
    price: "Included",
    priceSub: "with any ARIA subscription",
    color: "#4FC3F7",
    features: [
      "Thesis-matched deal flow",
      "AI-scored listings",
      "NDA workflow",
      "Engagement tracking",
    ],
  },
  {
    key: "seller",
    label: "Seller Listing",
    price: "$2,500",
    priceSub: "per mandate",
    color: "#FFB000",
    features: [
      "AI-generated teaser",
      "Validated financials",
      "Buyer matching",
      "Process management dashboard",
    ],
  },
  {
    key: "advisor",
    label: "Advisor Platform",
    price: "Custom",
    priceSub: "seat-based pricing",
    color: "#A78BFA",
    features: [
      "Unlimited mandates",
      "White-label option",
      "CRM integration",
      "Dedicated support",
    ],
  },
];

const COMPANY_SIZES = ["1–10", "11–50", "51–200", "201–500", "501–1,000", "1,000+"];
const INDUSTRIES = [
  "Private Equity", "Venture Capital", "Investment Banking",
  "Corporate M&A", "Family Office", "Search Fund / ETA",
  "Legal / Advisory", "Accounting / Audit", "Other",
];

// ── Component ──────────────────────────────────────────────────────────────
export default function Contact() {
  const [, navigate] = useLocation();
  const [selectedIntent, setSelectedIntent] = useState<IntentKey | null>(null);
  const [form, setForm] = useState<FormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const liveRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const intent = INTENTS.find((i) => i.key === selectedIntent) ?? null;

  // Scroll to form on intent select
  useEffect(() => {
    if (selectedIntent && formRef.current) {
      const top = formRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
  }, [selectedIntent, prefersReducedMotion]);

  const handleIntentSelect = useCallback(
    (key: IntentKey) => {
      if (selectedIntent && selectedIntent !== key) {
        const hasData = Object.entries(form).some(
          ([k, v]) => k !== "_hp_name" && v.trim() !== ""
        );
        if (hasData && !window.confirm("Switching will clear your current form. Continue?")) return;
        setForm(EMPTY_FORM);
        setErrors({});
        setSubmitError(null);
      }
      setSelectedIntent(key);
      track("contact_intent_selected", { intent: key });
    },
    [selectedIntent, form]
  );

  const handleCardKeyDown = (e: React.KeyboardEvent, key: IntentKey) => {
    const keys = INTENTS.map((i) => i.key);
    const idx = keys.indexOf(key);
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = keys[(idx + 1) % keys.length];
      handleIntentSelect(next);
      document.getElementById(`intent-card-${next}`)?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = keys[(idx - 1 + keys.length) % keys.length];
      handleIntentSelect(prev);
      document.getElementById(`intent-card-${prev}`)?.focus();
    } else if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      handleIntentSelect(key);
    }
  };

  const setField = (field: keyof FormValues, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormValues, string>> = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required.";
    if (!form.lastName.trim()) errs.lastName = "Last name is required.";
    if (!form.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    } else if (intent?.blockFreeEmail && isFreeEmail(form.email)) {
      errs.email = "Please use your work email so we can route you correctly.";
    }
    if (!form.company.trim()) errs.company = "Company name is required.";
    if (!form.companySize) errs.companySize = "Please select a company size.";
    if (!form.industry) errs.industry = "Please select an industry.";
    if (intent?.key === "marketplace" && !form.marketplaceRole) errs.marketplaceRole = "Please select your Marketplace Access type.";
    setErrors(errs);
    const count = Object.keys(errs).length;
    if (count > 0 && liveRef.current) {
      liveRef.current.textContent = `Please fix ${count} error${count > 1 ? "s" : ""} before submitting.`;
    }
    return count === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!intent) return;
    if (form._hp_name.trim() !== "") return; // honeypot
    if (!validate()) {
      track("contact_submit_error", { intent: intent.key, error_type: "validation" });
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    track("contact_submit", { intent: intent.key });
    if (intent.key === "trial") track("trial_signup_started");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: intent.key,
          fields: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            company: form.company,
            title: form.title,
            phone: form.phone,
            companySize: form.companySize,
            industry: form.industry,
            message: form.message,
          },
          utm: typeof window !== "undefined"
            ? Object.fromEntries(new URLSearchParams(window.location.search))
            : {},
          referrer: typeof document !== "undefined" ? document.referrer : "",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as any).message ?? "Submission failed. Please try again.");
      }

      if (intent.key === "trial") track("trial_signup_complete");
      navigate(`/contact/thanks?intent=${intent.key}`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setSubmitError(msg);
      track("contact_submit_error", { intent: intent.key, error_type: "server" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLayout
      title="Contact ARIA — Talk to the Agentic AI M&A OS"
      description="Request information, book a demo, schedule a technical talk, or start your 14-day free trial of ARIA."
    >
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-16 pb-10 px-4">
        <div className="max-w-2xl">
          <h1
            className="text-5xl font-light text-white mb-4"
            style={{ fontFamily: "Outfit, sans-serif", letterSpacing: "-0.01em" }}
          >
            <span className="text-gradient-blue">How can we help?</span>
          </h1>
          <p className="text-lg text-[#B8C8DC] leading-relaxed" style={{ display: "none" }}>
            Tell us what you need. We'll route you to the right person within one business day.
          </p>
        </div>
      </section>

      {/* ── Intent Card Picker ────────────────────────────────────────────── */}
      <section className="pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            role="radiogroup"
            aria-label="How can we help?"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {INTENTS.map((item) => {
              const isSelected = selectedIntent === item.key;
              return (
                <div
                  key={item.key}
                  id={`intent-card-${item.key}`}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={isSelected || selectedIntent === null ? 0 : -1}
                  onClick={() => handleIntentSelect(item.key)}
                  onKeyDown={(e) => handleCardKeyDown(e, item.key)}
                  className={`
                    relative cursor-pointer rounded-xl border-2 p-5 transition-all duration-150
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FC3F7] focus-visible:ring-offset-2 focus-visible:ring-offset-black
                    ${isSelected
                      ? `${item.borderColor} ${item.bgColor} shadow-lg`
                      : "border-[#1E2D45] bg-[#0D1425] hover:border-[#253550] hover:bg-[#111827]"
                    }
                  `}
                  style={isSelected ? { boxShadow: `0 0 20px ${item.color}22` } : undefined}
                >
                  {isSelected && (
                    <span
                      className="absolute top-3 right-3 h-5 w-5 rounded-full flex items-center justify-center"
                      style={{ background: item.color }}
                      aria-hidden="true"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-black" />
                    </span>
                  )}
                  <div
                    className="mb-3"
                    style={{ color: isSelected ? item.color : "#7A8FA8" }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="text-sm font-medium mb-1.5 leading-snug"
                    style={{
                      color: isSelected ? item.color : "#CBD5E0",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B7A8D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Inline Form (slides in) ───────────────────────────────────────── */}
      <div
        ref={formRef}
        className="overflow-hidden"
        style={{
          maxHeight: selectedIntent ? "9999px" : "0",
          opacity: selectedIntent ? 1 : 0,
          transition: prefersReducedMotion ? "none" : "max-height 0.25s ease, opacity 0.2s ease",
        }}
        aria-live="polite"
      >
        {intent && (
          <section className="pb-16 px-4">
            <div className="max-w-2xl mx-auto">

              {/* Free Trial copy block */}
              {intent.key === "trial" && (
                <div className="mb-8 rounded-xl border border-[#1E4D2B] bg-[#0A1F12] p-6">
                  <h2
                    className="text-2xl font-light text-white mb-1"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    Start Your 14-Day Free Trial
                  </h2>
                  <p className="text-[#B8C8DC] mb-5">Full access to ARIA. No commitment.</p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Full access to all 8 ARIA modules",
                      "23 specialized AI agents on your deals",
                      "Enterprise-grade security from day one",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-[#A0B4C8]">
                        <CheckCircle2 className="h-4 w-4 text-[#34D399] flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-[#0D2A1A] border border-[#1E4D2B] p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Shield className="h-4 w-4 text-[#34D399]" aria-hidden="true" />
                        <span className="text-sm font-medium text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                          Risk-Free
                        </span>
                      </div>
                      <p className="text-xs text-[#6B7A8D] leading-relaxed">
                        Credit card required. No charges until your trial ends. Cancel anytime.
                      </p>
                    </div>
                    <div className="rounded-lg bg-[#0D2A1A] border border-[#1E4D2B] p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Rocket className="h-4 w-4 text-[#34D399]" aria-hidden="true" />
                        <span className="text-sm font-medium text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                          Instant Access
                        </span>
                      </div>
                      <p className="text-xs text-[#6B7A8D] leading-relaxed">
                        Be up and running in minutes after signup.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Form heading */}
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "Outfit, sans-serif", color: intent.color }}
              >
                {intent.formTitle}
              </h2>

              {/* Screen-reader live region */}
              <div ref={liveRef} role="status" aria-live="polite" className="sr-only" />

              {/* Server error */}
              {submitError && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-lg border border-red-500/40 bg-red-500/10 p-4 mb-6 text-sm text-red-300"
                >
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                  }}
                >
                  <label htmlFor="hp_name">Leave this blank</label>
                  <input
                    id="hp_name"
                    name="_hp_name"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form._hp_name}
                    onChange={(e) => setField("_hp_name", e.target.value)}
                  />
                </div>

                <div className="space-y-5">
                  {/* Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <FieldGroup id="firstName" label="First Name" required error={errors.firstName}>
                      <input
                        id="firstName"
                        type="text"
                        autoComplete="given-name"
                        value={form.firstName}
                        onChange={(e) => setField("firstName", e.target.value)}
                        className={inputCls(!!errors.firstName)}
                        aria-required="true"
                        aria-describedby={errors.firstName ? "firstName-error" : undefined}
                      />
                    </FieldGroup>
                    <FieldGroup id="lastName" label="Last Name" required error={errors.lastName}>
                      <input
                        id="lastName"
                        type="text"
                        autoComplete="family-name"
                        value={form.lastName}
                        onChange={(e) => setField("lastName", e.target.value)}
                        className={inputCls(!!errors.lastName)}
                        aria-required="true"
                        aria-describedby={errors.lastName ? "lastName-error" : undefined}
                      />
                    </FieldGroup>
                  </div>

                  {/* Email */}
                  <FieldGroup id="email" label="Work Email" required error={errors.email}>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setField("email", e.target.value)}
                      className={inputCls(!!errors.email)}
                      aria-required="true"
                      aria-describedby={errors.email ? "email-error" : "email-hint"}
                    />
                    {!errors.email && intent.blockFreeEmail && (
                      <p id="email-hint" className="text-xs text-[#6B7A8D] mt-1">
                        Please use your work email so we can route you correctly.
                      </p>
                    )}
                  </FieldGroup>

                  {/* Company + Title */}
                  <div className="grid grid-cols-2 gap-4">
                    <FieldGroup id="company" label="Company" required error={errors.company}>
                      <input
                        id="company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={(e) => setField("company", e.target.value)}
                        className={inputCls(!!errors.company)}
                        aria-required="true"
                        aria-describedby={errors.company ? "company-error" : undefined}
                      />
                    </FieldGroup>
                    <FieldGroup id="title" label="Title">
                      <input
                        id="title"
                        type="text"
                        autoComplete="organization-title"
                        value={form.title}
                        onChange={(e) => setField("title", e.target.value)}
                        className={inputCls(false)}
                      />
                    </FieldGroup>
                  </div>

                  {/* Size + Industry */}
                  <div className="grid grid-cols-2 gap-4">
                    <FieldGroup id="companySize" label="Company Size" required error={errors.companySize}>
                      <select
                        id="companySize"
                        value={form.companySize}
                        onChange={(e) => setField("companySize", e.target.value)}
                        className={selectCls(!!errors.companySize)}
                        aria-required="true"
                        aria-describedby={errors.companySize ? "companySize-error" : undefined}
                      >
                        <option value="">Select…</option>
                        {COMPANY_SIZES.map((s) => (
                          <option key={s} value={s}>{s} employees</option>
                        ))}
                      </select>
                    </FieldGroup>
                    <FieldGroup id="industry" label="Industry" required error={errors.industry}>
                      <select
                        id="industry"
                        value={form.industry}
                        onChange={(e) => setField("industry", e.target.value)}
                        className={selectCls(!!errors.industry)}
                        aria-required="true"
                        aria-describedby={errors.industry ? "industry-error" : undefined}
                      >
                        <option value="">Select…</option>
                        {INDUSTRIES.map((i) => (
                          <option key={i} value={i}>{i}</option>
                        ))}
                      </select>
                    </FieldGroup>
                  </div>

                  {/* Phone */}
                  <FieldGroup id="phone" label="Phone (optional)">
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                      className={inputCls(false)}
                    />
                  </FieldGroup>

                  {/* Marketplace Access Selector */}
                  {intent.key === "marketplace" && (
                    <div>
                      <label className="block text-xs font-medium text-[#B8C8DC] mb-3 uppercase tracking-wide">
                        Marketplace Access
                        <span className="text-[#FF3D00] ml-1" aria-hidden="true">*</span>
                        <span className="sr-only"> (required)</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Marketplace Access type">
                        {MARKETPLACE_ROLES.map((role) => {
                          const isChosen = form.marketplaceRole === role.key;
                          return (
                            <button
                              key={role.key}
                              type="button"
                              role="radio"
                              aria-checked={isChosen}
                              onClick={() => setField("marketplaceRole", role.key)}
                              className={`text-left rounded-xl border-2 p-4 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FC3F7] ${
                                isChosen
                                  ? "border-[" + role.color + "] bg-[rgba(79,195,247,0.06)] shadow-lg"
                                  : "border-[#1E2D45] bg-[#0D1425] hover:border-[#253550]"
                              }`}
                              style={isChosen ? { borderColor: role.color, boxShadow: `0 0 16px ${role.color}22` } : {}}
                            >
                              <div className="text-xs font-semibold text-[#B8C8DC] mb-0.5 uppercase tracking-wide">{role.label}</div>
                              <div className="text-xl font-black mb-0.5" style={{ color: role.color }}>{role.price}</div>
                              <div className="text-xs text-[#6B7A8D] mb-3">{role.priceSub}</div>
                              <ul className="space-y-1.5">
                                {role.features.map((f) => (
                                  <li key={f} className="flex items-start gap-1.5 text-xs text-[#A0B4C8]">
                                    <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: role.color }} aria-hidden="true" />
                                    {f}
                                  </li>
                                ))}
                              </ul>
                            </button>
                          );
                        })}
                      </div>
                      {errors.marketplaceRole && (
                        <p role="alert" className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400">
                          <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                          {errors.marketplaceRole}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Demo Type — shown only for demo intent */}
                  {intent.key === "demo" && (
                    <FieldGroup id="demoType" label="Demo Type">
                      <div className="flex gap-3" role="radiogroup" aria-label="Demo type">
                        {["introduction", "technical"].map((type) => {
                          const isActive = form.demoType === type;
                          const label = type === "introduction" ? "Introduction" : "Technical";
                          return (
                            <button
                              key={type}
                              type="button"
                              role="radio"
                              aria-checked={isActive}
                              onClick={() => setField("demoType", type)}
                              className={`flex-1 py-2.5 rounded-lg border-2 text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000] ${
                                isActive
                                  ? "border-[#FFB000] bg-[rgba(255,176,0,0.1)] text-[#FFB000]"
                                  : "border-[#1E2D45] bg-[#0D1425] text-[#7A8FA8] hover:border-[#253550] hover:text-[#B8C8DC]"
                              }`}
                            >
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    </FieldGroup>
                  )}

                  {/* Message */}
                  <FieldGroup
                    id="message"
                    label={
                      intent.key === "info"
                        ? "What would you like to know?"
                        : "Anything you'd like us to know?"
                    }
                  >
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setField("message", e.target.value)}
                      className={`${inputCls(false)} resize-y min-h-[100px]`}
                      placeholder={
                        intent.key === "info"
                          ? "e.g. How does ARIA handle information barriers? What does pricing look like for a 5-person team?"
                          : intent.key === "demo"
                          ? "e.g. We're a mid-market PE firm evaluating 3–4 deals per quarter."
                          : intent.key === "marketplace"
                          ? "e.g. We're a PE fund looking to access curated deal flow matched to our thesis."
                          : "e.g. We're a search fund looking to evaluate ARIA for a live deal."
                      }
                    />
                  </FieldGroup>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 rounded-lg text-sm font-medium transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{
                        background: submitting
                          ? "#1E2D45"
                          : `linear-gradient(135deg, ${intent.color}, ${intent.color}CC)`,
                        color: intent.key === "demo" ? "#000" : "#fff",
                      }}
                      aria-busy={submitting}
                    >
                      {submitting ? "Submitting…" : intent.submitLabel}
                    </button>
                  </div>

                  {/* Trial fine print */}
                  {intent.key === "trial" && (
                    <p className="text-xs text-[#7A8FA8] leading-relaxed">
                      Trial converts to a paid subscription after 14 days unless canceled.
                      Cancel anytime during the trial to avoid charges. All data is handled
                      in accordance with our{" "}
                      <a href="/privacy" className="underline hover:text-[#B8C8DC]">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="/terms" className="underline hover:text-[#B8C8DC]">
                        Terms of Service
                      </a>.
                    </p>
                  )}
                </div>
              </form>

              {/* Trust strip */}
              <div className="mt-8 pt-6 border-t border-[#1E2D45]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-[#6B7A8D]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#4FC3F7]" aria-hidden="true" />
                    Replies within 1 business day
                  </div>
                  <span className="hidden sm:block text-[#1E2D45]">|</span>
                  <div className="flex items-center gap-1.5">
                    <Shield className="h-3.5 w-3.5 text-[#4FC3F7]" aria-hidden="true" />
                    Information Barriers protect every engagement
                  </div>
                </div>
                <div className="mt-3">
                  <a
                    href="https://www.cts-partners.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#66E0FF] hover:text-white transition-colors"
                  >
                    New to ARIA? See how CTS uses ARIA in live M&amp;A work
                    <ChevronRight className="h-3 w-3" aria-hidden="true" />
                    <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {!selectedIntent && <div className="pb-24" />}
    </PageLayout>
  );
}

// ── Helpers ────────────────────────────────────────────────────────────────
function inputCls(hasError: boolean) {
  return `w-full bg-[#0D1425] border ${
    hasError ? "border-red-500" : "border-[#1E2D45]"
  } rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#7A8FA8] focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]/50 focus:border-[#4FC3F7] transition-colors`;
}

function selectCls(hasError: boolean) {
  return `w-full bg-[#0D1425] border ${
    hasError ? "border-red-500" : "border-[#1E2D45]"
  } rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]/50 focus:border-[#4FC3F7] transition-colors appearance-none`;
}

interface FieldGroupProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function FieldGroup({ id, label, required, error, children }: FieldGroupProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium text-[#B8C8DC] mb-1.5 uppercase tracking-wide"
      >
        {label}
        {required && (
          <>
            <span className="text-[#FF3D00] ml-1" aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400"
        >
          <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
