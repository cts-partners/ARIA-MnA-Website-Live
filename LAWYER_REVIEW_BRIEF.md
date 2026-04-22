# ARIA M&A Intelligence Platform — Lawyer Review Brief

> **Legal Disclaimer:** These documents are drafts intended to accelerate counsel review. They are not legal advice. Do not publish without a qualified attorney's approval for each jurisdiction where the service operates.

**Prepared:** 2026-04-20
**Documents covered:** Terms of Service (v2026-04-20), Privacy Policy (v2026-04-20)
**Routes:** `/legal/terms`, `/legal/privacy`, `/legal/sub-processors`, `/legal/dpa`, `/legal`

---

## 1. Decisions Requiring Counsel Sign-Off

### 1.1 Governing Law and Arbitration

| Item | Current Draft | Counsel Action Required |
|---|---|---|
| Governing law state | `[FILL: Delaware or other state]` | Confirm the state of incorporation or preferred governing law jurisdiction |
| Arbitration body | `[FILL: JAMS or AAA]` | Select arbitration provider; confirm rules version |
| Arbitration seat | `[FILL: city, state]` | Confirm seat; consider video-conference-only option |
| Class-action waiver | Included | Confirm enforceability in target jurisdictions; note EU/UK carve-out is included |
| Small-claims carve-out | Included | Confirm threshold aligns with chosen jurisdiction |

### 1.2 Retention Periods

All retention periods are marked `[FILL:]` in the Privacy Policy. Counsel and the data team must agree on specific periods before publication.

| Data Category | Token | Guidance |
|---|---|---|
| Account & Identity | `[FILL: e.g., 90 days after deletion]` | Align with contractual obligations and applicable law |
| Customer Data (Deal Data) | `[FILL: e.g., 30 days after subscription ends]` | Critical — deal data is highly sensitive; shorter is better |
| Usage & Interaction | `[FILL: e.g., 13 months rolling]` | 13 months is a common analytics standard; confirm with DPO |
| Communications | `[FILL: e.g., 3 years]` | Align with statute of limitations in governing law state |
| Billing & Payment | `[FILL: e.g., 7 years]` | Driven by tax/accounting obligations; confirm with finance |

### 1.3 Sub-Processor List

The sub-processor page (`/legal/sub-processors`) contains a stub table with `[FILL:]` tokens for every provider. Before publication, the engineering and legal teams must:

1. Enumerate all third-party services that process Customer Data.
2. Confirm each provider has a signed DPA or equivalent.
3. Confirm the transfer mechanism (SCCs, DPF, adequacy decision) for each non-adequate-country provider.
4. Publish the list and set up the subscriber notification workflow.

### 1.4 AI Training Posture

The Privacy Policy states: *"We do not use your Customer Data to train, fine-tune, or improve foundation AI models."*

Counsel must confirm this is accurate for every AI model provider in the sub-processor list. If any provider's terms permit training on API inputs by default, that must be opted out of contractually before this statement can be published.

### 1.5 International Transfer Mechanisms

| Transfer | Mechanism in Draft | Counsel Action |
|---|---|---|
| EU/EEA → US | SCCs (Module 2 or 3 as applicable) | Confirm correct module; execute SCCs with each sub-processor |
| UK → US | UK IDTA / Addendum | Execute with each sub-processor |
| Switzerland → US | Swiss FDPIC-approved SCCs | Confirm current Swiss SCC version |
| Data Privacy Framework | `[FILL: if applicable]` | Confirm whether ARIA is or will be DPF-certified |

### 1.6 EU/UK Representatives (GDPR Article 27)

If ARIA has no establishment in the EU or UK but processes EU/UK personal data, it must appoint representatives under GDPR Article 27 and UK GDPR Article 27. Both are marked `[FILL:]` in the Privacy Policy.

### 1.7 DPO / Privacy Lead

The Privacy Policy references a DPO or privacy lead contact. Confirm whether a formal DPO appointment is required (required if ARIA processes personal data at large scale or processes special categories of data). If not required, a privacy contact is still needed.

### 1.8 SOC 2 Status

The Privacy Policy and Footer reference "SOC 2 Type II." The draft includes a `[FILL:]` token. Do not publish the SOC 2 claim until certification is confirmed. Replace with "SOC 2 Type II in progress" or remove if not yet applicable.

### 1.9 Legal Entity Name

Every document uses `[FILL: legal entity name]`. Confirm the exact legal entity name and registered address before publication.

---

## 2. All [FILL:] Tokens

The following tokens appear in the draft documents and must be resolved before publication:

| Token | Location | Description |
|---|---|---|
| `[FILL: legal entity name]` | ToS §1, §2, §16; Privacy §2; Footer | Exact legal entity name |
| `[FILL: registered address]` | ToS §16; Privacy §2 | Registered business address |
| `[FILL: security contact email]` | ToS §3 | Security disclosure email |
| `[FILL: pricing page URL]` | ToS §4 | URL of pricing/plans page |
| `[FILL: number of days]` | ToS §4 | Renewal reminder lead time |
| `[FILL: support email]` | ToS §4, §10 | Customer support email |
| `[FILL: legal contact email]` | ToS §14 | Legal notices email |
| `[FILL: DMCA agent email]` | ToS §8 | DMCA designated agent email |
| `[FILL: retention period]` | ToS §10 | Post-termination data retention period |
| `[FILL: Delaware or other state]` | ToS §14 | Governing law state |
| `[FILL: arbitration body]` | ToS §14 | JAMS, AAA, or other |
| `[FILL: city, state]` | ToS §14 | Arbitration seat |
| `[FILL: privacy/DPO email]` | Privacy §2, §11, §12, §13, §15 | Privacy/DPO contact email |
| `[FILL: postal address, Attn: Privacy]` | Privacy §2 | Privacy postal address |
| `[FILL: EU Article 27 representative]` | Privacy §2 | EU representative name and address |
| `[FILL: UK Article 27 representative]` | Privacy §2 | UK representative name and address |
| `[FILL: prompt/output retention period]` | Privacy §5 | AI prompt/output retention period |
| `[FILL: analytics provider]` | Privacy §6 | Analytics tool name |
| `[FILL: marketing provider]` | Privacy §6 | Marketing/retargeting tool name |
| `[FILL: DPF participation]` | Privacy §8 | Whether ARIA participates in EU-US DPF |
| `[FILL: data residency options]` | Privacy §8 | Available data residency regions |
| `[FILL: SOC 2 status]` | Privacy §10 | Confirmed certification status |
| `[FILL: all sub-processor rows]` | Sub-processors page | Full sub-processor list with DPA status |
| `[FILL: privacy email]` | Sub-processors page | Privacy contact for subscribe form |
| `[FILL: cloud infrastructure]` | Sub-processors | Provider name, location, transfer mechanism |
| `[FILL: payment processor]` | Sub-processors | Provider name, location, transfer mechanism |
| `[FILL: email delivery]` | Sub-processors | Provider name, location, transfer mechanism |
| `[FILL: analytics]` | Sub-processors | Provider name, location, transfer mechanism |
| `[FILL: AI model provider]` | Sub-processors | Provider name, location, transfer mechanism |
| `[FILL: identity/SSO provider]` | Sub-processors | Provider name, location, transfer mechanism |
| `[FILL: customer support]` | Sub-processors | Provider name, location, transfer mechanism |

---

## 3. Change Log Entry Template

```
| Date       | Version        | Summary of Changes                                      | Author |
|------------|----------------|---------------------------------------------------------|--------|
| 2026-04-20 | v2026-04-20    | Initial publication. All sections drafted for review.   | [Name] |
| YYYY-MM-DD | vYYYY-MM-DD    | [Brief description of material change]                  | [Name] |
```

---

## 4. QA Checklist (14 Items)

| # | Item | Status |
|---|---|---|
| 1 | Footer Legal column visible on every page (Home, Platform, Deal Sourcing, Due Diligence, Sell Side, Marketplace, How It Works, Contact, Contact/Thanks) | ✅ Implemented |
| 2 | TOC anchor links work on `/legal/terms` and `/legal/privacy` | ✅ Implemented |
| 3 | Print stylesheet: `window.print()` button on both legal pages | ✅ Implemented |
| 4 | GPC signal honored: analytics/marketing cookies default to false when GPC detected | ✅ Implemented |
| 5 | Cookie categories: Necessary, Functional, Analytics, Marketing — all present in modal | ✅ Implemented |
| 6 | Sub-processor link in footer and legal hub | ✅ Implemented |
| 7 | Contact/legal notices address | ⚠️ `[FILL:]` tokens must be resolved |
| 8 | Archived version route: `/legal/terms/v2026-04-20` | ⚠️ Route not yet implemented — add when first update is published |
| 9 | Accessibility: semantic H1→H3, skip-to-content, visible focus rings, 4.5:1 contrast | ✅ Implemented (verify with axe or Lighthouse) |
| 10 | Cross-browser matrix: Chrome, Safari (iOS 17+), Firefox, Edge, Samsung Internet at 360/768/1440px | ⚠️ Manual QA required |
| 11 | PDF generation: `window.print()` produces readable output | ⚠️ Test with browser print-to-PDF; add `@media print` CSS if needed |
| 12 | JSON-LD schema: Organization + ContactPoint on legal pages | ⚠️ Not yet implemented — add to `<head>` via PageLayout |
| 13 | Supervisory authority links: ICO, EDPB, CPPA, ANPD, OPC | ✅ Included in Privacy Policy §15 |
| 14 | All `[FILL:]` tokens resolved before publication | ⚠️ See token list above |
