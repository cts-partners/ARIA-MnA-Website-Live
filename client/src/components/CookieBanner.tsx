import { useState, useEffect } from "react";
import { X, Cookie, ChevronDown, ChevronUp } from "lucide-react";

interface CookiePrefs {
  necessary: true; // always true, cannot be disabled
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  consentId?: string;
  timestamp?: string;
  version?: string;
}

const STORAGE_KEY = "aria_cookie_consent";
const CONSENT_VERSION = "v2026-04-20";

function generateConsentId() {
  return "aria-" + Math.random().toString(36).slice(2, 10) + "-" + Date.now().toString(36);
}

function detectGPC(): boolean {
  // Global Privacy Control signal
  return !!(
    (navigator as unknown as { globalPrivacyControl?: boolean }).globalPrivacyControl === true ||
    (window as unknown as { GPC?: boolean }).GPC === true
  );
}

function loadPrefs(): CookiePrefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookiePrefs;
    if (parsed.version !== CONSENT_VERSION) return null; // re-prompt on policy change
    return parsed;
  } catch {
    return null;
  }
}

function savePrefs(prefs: Omit<CookiePrefs, "consentId" | "timestamp" | "version">): CookiePrefs {
  const full: CookiePrefs = {
    ...prefs,
    necessary: true,
    consentId: generateConsentId(),
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
  return full;
}

const categoryDescriptions = {
  necessary: {
    label: "Strictly Necessary",
    desc: "Required for the Service to function. Cannot be disabled.",
    examples: "Authentication, session management, security.",
  },
  functional: {
    label: "Functional",
    desc: "Remember your preferences and settings across sessions.",
    examples: "Language, theme, UI layout.",
  },
  analytics: {
    label: "Analytics",
    desc: "Help us understand how you use the Service so we can improve it.",
    examples: "Page views, feature usage, navigation paths.",
  },
  marketing: {
    label: "Marketing",
    desc: "Used to measure campaign effectiveness and show relevant content on other platforms.",
    examples: "LinkedIn Insight Tag, advertising pixels.",
  },
};

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [prefs, setPrefs] = useState<Omit<CookiePrefs, "consentId" | "timestamp" | "version">>({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const existing = loadPrefs();
    const gpc = detectGPC();

    if (existing) {
      // If GPC is set, override analytics/marketing
      if (gpc) {
        setPrefs({ necessary: true, functional: existing.functional, analytics: false, marketing: false });
      } else {
        setPrefs(existing);
      }
      setShow(false);
    } else {
      // No consent yet — show banner
      // If GPC is set, default analytics/marketing to false
      if (gpc) {
        setPrefs({ necessary: true, functional: true, analytics: false, marketing: false });
      }
      setShow(true);
    }

    // Listen for "Cookie Preferences" link clicks
    const handler = () => {
      const current = loadPrefs();
      if (current) {
        setPrefs(current);
      }
      setShowModal(true);
    };
    window.addEventListener("aria:openCookieModal", handler);
    return () => window.removeEventListener("aria:openCookieModal", handler);
  }, []);

  const acceptAll = () => {
    savePrefs({ necessary: true, functional: true, analytics: true, marketing: true });
    setShow(false);
    setShowModal(false);
  };

  const rejectAll = () => {
    savePrefs({ necessary: true, functional: false, analytics: false, marketing: false });
    setShow(false);
    setShowModal(false);
  };

  const saveCustom = () => {
    savePrefs(prefs);
    setShow(false);
    setShowModal(false);
  };

  const toggle = (key: "functional" | "analytics" | "marketing") => {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  if (!show && !showModal) return null;

  return (
    <>
      {/* Banner */}
      {show && !showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Cookie consent"
          className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#0D1425] border-t border-[#1E2D45] shadow-2xl"
          style={{ maxHeight: "50vh", overflowY: "auto" }}
        >
          <div className="container py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Cookie className="h-5 w-5 text-[#4FC3F7] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[#B8C8DC] leading-relaxed">
                We use cookies to run the Service and, with your consent, to improve it through analytics. We do not sell your data.{" "}
                <a href="/legal/privacy#cookies" className="text-[#4FC3F7] hover:underline">
                  Cookie Policy
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              <button
                onClick={() => { setShowModal(true); setShow(false); }}
                className="px-4 py-2 text-sm font-medium text-[#7A8FA8] hover:text-white border border-[#1E2D45] rounded-md transition-colors"
                aria-label="Manage cookie preferences"
              >
                Manage
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 text-sm font-medium text-[#7A8FA8] hover:text-white border border-[#1E2D45] rounded-md transition-colors"
                aria-label="Reject optional cookies"
              >
                Reject All
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm font-black text-black rounded-md"
                style={{ background: "linear-gradient(90deg, #FF6B35, #FF3D00)" }}
                aria-label="Accept all cookies"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Cookie preferences"
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowModal(false)} aria-hidden="true" />
          <div className="relative bg-[#0D1425] border border-[#1E2D45] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-[#1E2D45]">
              <h2 className="text-base font-bold text-white">Cookie Preferences</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-[#7A8FA8] hover:text-white transition-colors"
                aria-label="Close cookie preferences"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5 space-y-3">
              <p className="text-sm text-[#B8C8DC] leading-relaxed">
                Choose which cookies you allow. Strictly necessary cookies cannot be disabled — they are required for the Service to function.{" "}
                <a href="/legal/privacy#cookies" className="text-[#4FC3F7] hover:underline">
                  Learn more
                </a>
              </p>

              {(["necessary", "functional", "analytics", "marketing"] as const).map((key) => {
                const info = categoryDescriptions[key];
                const isNecessary = key === "necessary";
                const isOn = isNecessary ? true : prefs[key];
                const isExpanded = expanded === key;

                return (
                  <div key={key} className="border border-[#1E2D45] rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3">
                      <button
                        onClick={() => setExpanded(isExpanded ? null : key)}
                        className="flex items-center gap-2 text-left flex-1"
                        aria-expanded={isExpanded}
                        aria-controls={`cookie-${key}-details`}
                      >
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 text-[#7A8FA8] flex-shrink-0" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-[#7A8FA8] flex-shrink-0" aria-hidden="true" />
                        )}
                        <span className="text-sm font-semibold text-white">{info.label}</span>
                      </button>
                      {isNecessary ? (
                        <span className="text-xs text-[#7A8FA8] ml-4">Always on</span>
                      ) : (
                        <button
                          role="switch"
                          aria-checked={isOn}
                          onClick={() => toggle(key as "functional" | "analytics" | "marketing")}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ml-4 ${isOn ? "bg-[#4FC3F7]" : "bg-[#1E2D45]"}`}
                          aria-label={`${isOn ? "Disable" : "Enable"} ${info.label} cookies`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isOn ? "translate-x-6" : "translate-x-1"}`}
                          />
                        </button>
                      )}
                    </div>
                    {isExpanded && (
                      <div id={`cookie-${key}-details`} className="px-4 pb-3 border-t border-[#1E2D45]">
                        <p className="text-xs text-[#B8C8DC] mt-2 leading-relaxed">{info.desc}</p>
                        <p className="text-xs text-[#7A8FA8] mt-1">Examples: {info.examples}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-5 border-t border-[#1E2D45] flex flex-col sm:flex-row gap-3">
              <button
                onClick={rejectAll}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-[#7A8FA8] hover:text-white border border-[#1E2D45] rounded-md transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={saveCustom}
                className="flex-1 px-4 py-2.5 text-sm font-semibold btn-cyan-outline rounded-md"
              >
                Save Preferences
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 px-4 py-2.5 text-sm font-black text-black rounded-md"
                style={{ background: "linear-gradient(90deg, #FF6B35, #FF3D00)" }}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
