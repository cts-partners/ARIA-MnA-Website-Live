# ARIA M&A Website TODO

## Foundation
- [x] Upload ARIA logo to CDN
- [x] Configure global styles, fonts, and dark theme
- [x] Set up color palette (navy/gold/dark)

## Navigation & Layout
- [x] Global navigation with all menu items
- [x] Mobile-responsive hamburger menu
- [x] Footer with product/company/legal links
- [ ] Cookie consent banner (future enhancement)

## Pages
- [x] Homepage with persona-led entry layer (Buy-Side / Sell-Side / Company)
- [x] Homepage hero section with stats
- [x] Homepage features grid (10 workflows)
- [x] Homepage persona cards section
- [x] Homepage how-it-works section
- [x] Homepage comparison table
- [x] Homepage pricing/CTA section
- [x] Platform overview page (8 modules + AI agents table)
- [x] Deal Sourcing page (pipeline funnel, agents, signal detection, CRM)
- [x] Due Diligence page (8 parallel workstreams with time comparisons)
- [x] Sell-Side Advisory page (CIM generation, buyer matching, engagement tracking)
- [x] Valuation page (TurboTax-style wizard, features grid)
- [x] Marketplace page (deal flow sources, access tiers)
- [x] Architecture page (agents by category with accuracy bars)

## Contact & Demo System
- [x] Database schema for contact submissions
- [x] Contact form with all required fields (name, company, email, industry, message)
- [x] tRPC procedure for form submission
- [x] Email notification to owner (via notifyOwner)
- [x] Demo request page with success state
- [x] Demo type selector (6 options)

## Auth & Trial
- [x] 30-day free trial CTA on homepage
- [ ] Auth integration with gated demo (future enhancement)

## SEO & Accessibility
- [x] Meta tags and OpenGraph on all pages
- [x] Structured data (JSON-LD)
- [x] Alt text on all images
- [x] ARIA labels and keyboard navigation
- [x] robots.txt and sitemap.xml
- [x] Skip to main content link

## Quality
- [x] Mobile responsiveness on all pages
- [x] Cross-browser compatible (standard CSS/React)
- [x] Vitest tests for contact form procedure (6 tests passing)
- [x] 404 page styled to match dark theme

## Brand Upgrade (April 20, 2026)
- [x] Upload new ARIA logo (ARIALogo.png) to CDN and replace in nav/footer
- [x] Update CSS tokens with exact brand colors (#FFB000, #FF3D00, #4FC3F7, #1E3A8A, #66E0FF, #000000)
- [x] Update nav: new logo, CTS Advisory link (cyan), Book a Demo CTA (orange gradient)
- [x] Update footer: CTS lockup with cts-partners.com link, SOC 2 badge
- [x] Rebuild hero: exact copy from guide, CTS subhead, orange gradient H1 accent
- [x] Add proof strip (5 tiles including "Built on CTS Transactions")
- [x] Add CTS provenance band (mid-page, dark, operator credentials)
- [x] Add problem frame section ("Your team stitches together ten tools...")
- [x] Add persona toggle (Buy-Side default, Sell-Side, Advisors, Search Funds)
- [x] Expand comparison table to 4 columns (Current Stack / Generic AI / Big 4 / ARIA)
- [x] Add Information Barriers & compliance band
- [x] Add 3 anonymized case study tiles
- [x] Add two-door "How to Start" section
- [x] Add final CTA band ("Bring a target. See ARIA read it in real time.")
- [x] Build A/B hero variants (Variant A: category-led, Variant B: specificity-led)
- [x] Add /debug route for internal A/B testing toggle
- [x] Add client-side analytics stubs (hero variant, scroll depth, CTA clickthrough)

## Contact Page Rebuild v2 (April 20, 2026)
- [x] Rename nav "Book a Demo" → "Contact" site-wide (desktop, mobile, footer, in-page CTAs)
- [x] Add 301 redirect from /book-a-demo and /demo → /contact (handled via NotFound fallback)
- [x] Rebuild /contact: hero "Talk to ARIA", 4-tile accessible radio card picker
- [x] Inline conditional form per intent (Request Info, Book Demo, Technical Talk, 30-Day Trial)
- [x] Free-mail block on Intents 2, 3, 4
- [x] Honeypot spam protection on form
- [x] Free Trial copy block (Intent 4 only) with bullets, Risk-Free panel, fine print
- [x] Trust strip below every form variant
- [x] Build /contact/thanks with 4 intent-specific variants and micro-timeline
- [ ] Add-to-calendar link for Intents 2 & 3 (future enhancement)
- [x] Update tRPC /api/contact router: rate-limiting, CRM webhook stub, trial provisioning stub, owner notification
- [x] Analytics event stubs: nav_contact_clicked, contact_intent_selected, contact_submit, trial_signup_*
- [x] Update sitemap.xml and schema.org JSON-LD for /contact
- [x] Update SEO meta tags for /contact page

## Content & Navigation Update (April 20, 2026)
- [x] Update navigation: remove CTS Advisory, Architecture, Valuation; add How It Works, Sign In (OAuth)
- [x] Update footer: remove CTS Advisory, Architecture, Valuation links
- [x] Rewrite Home page content from index.html (new hero, stats, 6-module tiles, 4-persona section, comparison table)
- [x] Rewrite Deal Sourcing page from deal-sourcing.html (funnel, 5-step workflow, 4 sourcing models, comparison)
- [x] Rewrite Due Diligence page from due-diligence.html (8 agents, before/after table, 4-reason architecture)
- [x] Rewrite Sell-Side page from sell-side.html (CIM workflow, buyer matching, engagement analytics, shop types)
- [x] Rewrite Marketplace page from marketplace.html (4 deal sources, listings, trust pillars, 3-tier pricing)
- [x] Create How It Works page from how-it-works.html (GraphRAG, 23 agents by category, 8 modules, 9 security items)
- [x] Wire Sign In to Manus OAuth in navigation (desktop + mobile)
- [x] Contact page unchanged (preserved as-is)
- [x] Overview/Platform page unchanged (preserved as-is)

## Step Number Standardization (April 20, 2026)
- [x] Home.tsx archSteps: opacity-20 removed, numbers bright #4FC3F7
- [x] HowItWorks.tsx GraphRAG steps: opacity-20 removed, numbers bright #4FC3F7
- [x] Marketplace.tsx deal sources: circle badge replaced with large bold #4FC3F7 number
- [x] DealSourcing.tsx workflow steps: circle badge replaced with large bold #4FC3F7 number
- [x] DueDiligence.tsx architectureReasons: circle badge replaced with large bold #4FC3F7 number
- [x] SellSide.tsx CIM steps (horizontal): circle badge replaced with large bold #4FC3F7 number
- [x] SellSide.tsx buyer match dimensions (vertical): circle badge replaced with large bold #4FC3F7 number

## Legal Pages (April 20, 2026)
- [x] Write ARIA Terms of Service content (17 sections, In short: summaries, TOC)
- [x] Write ARIA Privacy Policy content (15 sections, all tables populated)
- [x] Build /legal/terms page (React, WCAG 2.1 AA, print stylesheet, PDF download)
- [x] Build /legal/privacy page (React, WCAG 2.1 AA, print stylesheet, PDF download)
- [x] Build /legal hub page (card grid linking to all legal docs)
- [x] Build /legal/sub-processors page (table + subscribe form)
- [x] Build cookie consent banner component (GPC/DNT, granular, reject-all)
- [x] Wire cookie consent modal to "Cookie Preferences" link
- [x] Update Footer: add Legal column (ToS, Privacy, Sub-processors, Cookie Prefs, DPA)
- [x] Add bottom copyright bar with Terms · Privacy · Cookie Preferences links
- [x] Wire all new routes in App.tsx
- [x] Produce Lawyer Review Brief (PDF/Markdown)
