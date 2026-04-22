// ARIA M&A Intelligence Platform — Terms of Service content
// Effective: 2026-04-20 | Last updated: 2026-04-20
// DRAFT — for counsel review before publication

export const TOS_EFFECTIVE = "2026-04-20";
export const TOS_LAST_UPDATED = "2026-04-20";
export const TOS_VERSION = "v2026-04-20";

export const tosSections = [
  {
    id: "summary",
    title: "Plain-English Summary",
    anchor: "summary",
    inShort: "Three things to know before you read further.",
    body: `These Terms of Service ("Terms") govern your access to and use of the ARIA M&A Intelligence Platform ("ARIA," "the Platform," or "the Service"), operated by [FILL: legal entity name] ("Company," "we," "us," or "our").

**What these Terms cover.** They set out the rules for using ARIA, including your subscription, how we handle your data, what you can and cannot do on the Platform, and what happens if something goes wrong.

**What they do not cover.** These Terms do not cover the privacy practices of third-party services you connect to ARIA. Those are governed by each third party's own policies. Our Privacy Policy, available at /legal/privacy, explains how we handle personal data.

**By using ARIA you agree to these Terms.** If you do not agree, please do not use the Service.`,
  },
  {
    id: "acceptance",
    title: "Acceptance, Scope, and Eligibility",
    anchor: "acceptance",
    inShort: "You must be 18+, acting for a legitimate business, and not located in a sanctioned region.",
    body: `**Acceptance.** By creating an account, clicking "I agree," or otherwise accessing the Service, you agree to be bound by these Terms and our Privacy Policy. If you are accepting on behalf of a company or other legal entity ("Customer"), you represent that you have authority to bind that entity.

**Scope.** These Terms apply to all products, features, APIs, and documentation made available under the ARIA brand, including any free trial, beta, or preview features.

**Eligibility.** You must be at least 18 years old. The Service is designed for business use by professionals in mergers and acquisitions, private equity, investment banking, and related fields. It is not intended for personal, household, or consumer use.

**Sanctioned regions.** You may not use the Service if you are located in, or are a national or resident of, any country or territory subject to a comprehensive embargo by the United States, European Union, or United Kingdom, or if you are listed on any applicable sanctions list. We reserve the right to terminate access if we determine that these restrictions apply to you.`,
  },
  {
    id: "accounts",
    title: "Accounts, Authentication, and Credential Security",
    anchor: "accounts",
    inShort: "You are responsible for keeping your credentials secure.",
    body: `**Account creation.** You must provide accurate, complete, and current information when creating an account. You agree to update your information promptly if it changes.

**Authentication.** ARIA supports single sign-on (SSO) via SAML 2.0 and OIDC-compatible identity providers, as well as email-and-password authentication. Enterprise customers may enforce SSO for all users in their organization.

**Credential security.** You are responsible for maintaining the confidentiality of your login credentials. You must not share your credentials with anyone outside your authorized team. You agree to notify us immediately at [FILL: security contact email] if you suspect unauthorized access to your account.

**Account responsibility.** You are responsible for all activity that occurs under your account, whether or not you authorized it, unless the activity resulted from our failure to maintain reasonable security controls.

**Organizational accounts.** If your account is associated with a Customer organization, the Customer's administrator may have the ability to access, modify, or delete your account and its data. Your use of the Service in that context is also subject to your organization's internal policies.`,
  },
  {
    id: "subscriptions",
    title: "Subscriptions, Free Trials, Billing, Taxes, Auto-Renewal, and Cancellation",
    anchor: "subscriptions",
    inShort: "Your trial is free for 14 days; we will not charge you until it ends. Cancel any time.",
    body: `**Subscription plans.** ARIA is offered on a subscription basis. Plan details, including features and pricing, are described at [FILL: pricing page URL]. We may change plan features or pricing with reasonable notice as described in Section 15.

**Free trial.** We offer a 14-day free trial ("Trial") for eligible new Customers. A valid payment method is required to start the Trial. We will not charge your payment method until the Trial ends. If you cancel before the Trial ends, you will not be charged. If you do not cancel, your subscription will automatically convert to a paid plan at the then-current rate on the day the Trial expires.

**Billing.** Subscriptions are billed in advance on a monthly or annual basis, depending on the plan you select. All fees are stated in US dollars unless otherwise agreed in writing.

**Taxes.** Fees do not include taxes. You are responsible for all applicable sales, use, goods and services, value-added, and similar taxes. If we are required to collect taxes on your behalf, we will add them to your invoice.

**Auto-renewal.** Your subscription renews automatically at the end of each billing period unless you cancel before the renewal date. We will send a reminder email [FILL: number of days] days before renewal.

**Cancellation.** You may cancel your subscription at any time through your account settings or by contacting [FILL: support email]. Cancellation takes effect at the end of the current billing period; you will retain access until then. We do not provide refunds for partial periods unless required by applicable law.

**Disputes.** If you believe a charge is incorrect, you must notify us within 30 days of the invoice date. We will investigate and, if the charge was in error, issue a credit or refund.`,
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    anchor: "acceptable-use",
    inShort: "Use ARIA for legitimate M&A work. Do not scrape, extract models, or misuse AI outputs.",
    body: `**Permitted use.** You may use the Service solely for lawful M&A-related business purposes consistent with these Terms.

**Prohibited conduct.** You must not:

- Scrape, crawl, or systematically extract data from the Platform beyond what is expressly permitted by our API documentation.
- Attempt to extract, reverse-engineer, or replicate the underlying AI models, embeddings, or knowledge graph through any means, including by submitting probing queries designed to elicit model weights or training data.
- Use AI-generated outputs as the sole basis for regulated decisions (such as investment advice, legal conclusions, or financial recommendations) without independent human review by a qualified professional.
- Benchmark or publicly compare ARIA's performance against other products without our prior written consent.
- Use the Service to process data in violation of applicable law, including data obtained without proper consent or authorization.
- Attempt to gain unauthorized access to any part of the Service, other accounts, or our infrastructure.
- Introduce malware, viruses, or other harmful code.
- Use the Service to facilitate fraud, money laundering, market manipulation, or any other illegal activity.
- Resell, sublicense, or provide access to the Service to third parties without our written consent, except as expressly permitted for authorized users within your organization.

**Consequences.** Violation of this section may result in immediate suspension or termination of your account, with or without notice, and may expose you to legal liability.`,
  },
  {
    id: "customer-data",
    title: "Customer Data, Confidentiality, and Information Barriers",
    anchor: "customer-data",
    inShort: "Your deal data is yours. We keep it confidential and architecturally separated from other customers.",
    body: `**Customer Data defined.** "Customer Data" means all data, documents, files, and content that you upload to or generate within the Service, including financial models, CIMs, data room materials, target lists, and deal notes.

**Ownership.** You retain all ownership rights in your Customer Data. We do not claim any intellectual property rights in it.

**License to operate the Service.** You grant us a limited, non-exclusive, non-transferable license to process your Customer Data solely to provide, maintain, and improve the Service as described in our Privacy Policy. We do not use your Customer Data to train foundation AI models.

**Confidentiality.** We treat your Customer Data as confidential. We will not disclose it to third parties except as necessary to provide the Service, as required by law, or with your consent.

**Information Barriers.** ARIA is designed so that each Customer's data is architecturally isolated from every other Customer's data at the database and inference layer. A query or workflow run by one Customer cannot access, retrieve, or influence outputs derived from another Customer's data. This isolation is enforced by technical controls, not solely by policy.

**Our confidentiality obligations.** Our employees and contractors who access Customer Data are bound by confidentiality obligations. Access is restricted to personnel who need it to provide or support the Service.

**Your confidentiality obligations.** You agree to keep confidential any non-public information about the Service, our technology, or our business that we share with you in connection with these Terms.`,
  },
  {
    id: "ai-outputs",
    title: "AI Outputs: Accuracy, Human-in-the-Loop, and Reliance",
    anchor: "ai-outputs",
    inShort: "ARIA's AI outputs are drafts to accelerate your work, not final decisions. Always apply professional judgment.",
    body: `**Nature of AI outputs.** ARIA uses large language models, retrieval-augmented generation, and specialized AI agents to produce outputs such as financial analyses, due diligence summaries, CIM drafts, buyer lists, and valuation models ("AI Outputs"). These outputs are generated automatically and may contain errors, omissions, or inaccuracies.

**No reliance for regulated decisions.** AI Outputs are not legal advice, investment advice, tax advice, or financial advice. You must not rely on them as the sole basis for any regulated decision, including investment decisions, legal conclusions, or advice given to clients, without independent review by a qualified professional.

**Human-in-the-loop.** ARIA is designed to accelerate human work, not replace human judgment. Every significant output is intended to be reviewed and approved by a qualified member of your team before it is acted upon or shared with third parties.

**Citation and traceability.** Where ARIA cites source documents, those citations are provided to assist your review. You are responsible for verifying that cited sources support the conclusions drawn.

**EU AI Act transparency.** In accordance with our obligations under the EU AI Act and applicable transparency requirements, we disclose that ARIA uses AI systems to generate outputs. Outputs are logged with the agent, model version, timestamp, and source references. No fully automated decisions with legal or similarly significant effects are made about individuals using the Service.

**California SB 1001 disclosure.** ARIA uses automated AI agents to perform certain tasks within the Platform. These agents are not human. When you interact with an AI agent, you are interacting with an automated system.`,
  },
  {
    id: "ip",
    title: "Intellectual Property",
    anchor: "ip",
    inShort: "We own the Platform. You own your data. Feedback you give us is free for us to use.",
    body: `**Our IP.** The Service, including its software, AI models, knowledge graph architecture, user interface, documentation, and all related intellectual property, is owned by us or our licensors. These Terms do not grant you any rights in our IP except the limited right to use the Service as described here.

**Customer IP.** You retain all rights in your Customer Data and any work product you create using the Service (subject to the AI Outputs disclaimer in Section 7).

**Feedback.** If you provide us with suggestions, ideas, or feedback about the Service ("Feedback"), you grant us a perpetual, irrevocable, royalty-free, worldwide license to use that Feedback for any purpose, including improving the Service. We will not identify you as the source of Feedback without your consent.

**Trademark use.** You may not use our trademarks, logos, or brand names without our prior written consent, except to truthfully identify the Service in connection with your permitted use.

**DMCA / Copyright.** If you believe that content on the Service infringes your copyright, please send a notice to [FILL: DMCA agent email] with the information required by the Digital Millennium Copyright Act.`,
  },
  {
    id: "third-party",
    title: "Third-Party Services and Integrations",
    anchor: "third-party",
    inShort: "We integrate with third-party services. Their terms govern their part of the experience.",
    body: `**Integrations.** ARIA integrates with third-party data providers, data room platforms (such as Intralinks, Datasite, and Firmex), CRM systems, and identity providers. These integrations are provided as a convenience.

**Third-party terms.** Your use of any third-party service is governed by that service's own terms and privacy policy. We are not responsible for the practices, availability, or content of third-party services.

**Data shared with third parties.** When you connect a third-party service to ARIA, you authorize us to exchange data with that service as necessary to provide the integration. We will describe what data is shared in our Privacy Policy and sub-processor list at /legal/sub-processors.

**No endorsement.** Our integration with a third-party service does not constitute an endorsement of that service.`,
  },
  {
    id: "term-termination",
    title: "Term, Suspension, and Termination",
    anchor: "term-termination",
    inShort: "Either party can end the relationship. We will give you time to export your data.",
    body: `**Term.** These Terms begin when you first access the Service and continue until your subscription ends or these Terms are terminated.

**Termination by you.** You may terminate your subscription at any time as described in Section 4. Termination of your subscription does not automatically delete your account or Customer Data; see the data export section below.

**Suspension or termination by us.** We may suspend or terminate your access to the Service immediately if: (a) you materially breach these Terms and do not cure the breach within 10 days of notice; (b) you violate the Acceptable Use Policy in a way that poses a security or legal risk; (c) we are required to do so by law; or (d) you fail to pay fees when due.

**Effect of termination.** Upon termination: (a) your right to use the Service ends immediately; (b) we will retain your Customer Data for [FILL: retention period, e.g., 30 days] after termination, during which you may export it; (c) after that period, we will delete your Customer Data in accordance with our Privacy Policy.

**Data export.** Before or during the wind-down period, you may export your Customer Data in standard formats (CSV, PDF, JSON) through your account settings or by contacting support.

**Survival.** Sections 6 (Customer Data), 7 (AI Outputs), 8 (IP), 11 (Disclaimers), 12 (Limitation of Liability), 13 (Indemnification), 14 (Dispute Resolution), and 17 (Glossary) survive termination.`,
  },
  {
    id: "disclaimers",
    title: "Disclaimers of Warranty",
    anchor: "disclaimers",
    inShort: "We provide the Service as-is. We do not guarantee it will be error-free or always available.",
    body: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.

We do not warrant that: (a) the Service will meet your specific requirements; (b) the Service will be uninterrupted, timely, secure, or error-free; (c) AI Outputs will be accurate, complete, or reliable; or (d) any errors in the Service will be corrected.

Some jurisdictions do not allow the exclusion of implied warranties. In those jurisdictions, the above exclusions apply to the fullest extent permitted by law.`,
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    anchor: "liability",
    inShort: "Our liability to you is capped at the fees you paid us in the past 12 months.",
    body: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, LOSS OF DATA, LOSS OF GOODWILL, OR BUSINESS INTERRUPTION, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

**Cap.** Our total aggregate liability to you for all claims arising out of or relating to these Terms or the Service, whether in contract, tort, or otherwise, will not exceed the total fees you paid to us in the 12 months immediately preceding the event giving rise to the claim.

**Exceptions.** The limitations above do not apply to: (a) our indemnification obligations under Section 13; (b) damages arising from our gross negligence or willful misconduct; (c) our breach of our confidentiality obligations in Section 6; or (d) liability that cannot be limited under applicable law (including, for EU/UK users, liability for death or personal injury caused by our negligence, or for fraud or fraudulent misrepresentation).

**Essential basis.** You acknowledge that the limitations in this section reflect a reasonable allocation of risk and are an essential basis of the bargain between the parties.`,
  },
  {
    id: "indemnification",
    title: "Indemnification",
    anchor: "indemnification",
    inShort: "We each agree to cover the other if our own actions cause a third-party claim.",
    body: `**Your indemnification of us.** You agree to defend, indemnify, and hold harmless us and our officers, directors, employees, and contractors from and against any claims, damages, losses, and expenses (including reasonable legal fees) arising out of: (a) your use of the Service in violation of these Terms; (b) your Customer Data infringing or misappropriating any third-party intellectual property right; or (c) your violation of applicable law.

**Our indemnification of you.** We agree to defend, indemnify, and hold harmless you from and against any third-party claims that the Service, as provided by us and used in accordance with these Terms, infringes any third-party patent, copyright, trademark, or trade secret. This obligation does not apply if the claim arises from: (a) your modification of the Service; (b) your combination of the Service with third-party products or services; or (c) your use of the Service in violation of these Terms.

**Process.** The indemnified party must: (a) promptly notify the indemnifying party in writing of the claim; (b) give the indemnifying party sole control of the defense and settlement; and (c) cooperate reasonably. The indemnifying party may not settle a claim in a way that imposes obligations on the indemnified party without consent.`,
  },
  {
    id: "disputes",
    title: "Dispute Resolution, Governing Law, and Arbitration",
    anchor: "disputes",
    inShort: "Disputes are resolved by binding arbitration in [FILL: state], with carve-outs for EU/UK statutory rights.",
    body: `**Governing law.** These Terms are governed by the laws of the State of [FILL: Delaware or other state], without regard to its conflict-of-law principles.

**Informal resolution.** Before filing any formal claim, you agree to contact us at [FILL: legal contact email] and attempt to resolve the dispute informally for at least 30 days.

**Binding arbitration.** If informal resolution fails, any dispute arising out of or relating to these Terms or the Service will be resolved by binding individual arbitration administered by [FILL: arbitration body, e.g., JAMS or AAA] under its then-current rules. The arbitration will be conducted in [FILL: city, state] or by video conference. The arbitrator's decision will be final and binding.

**Small claims carve-out.** Either party may bring an individual claim in small claims court if the claim qualifies.

**Class-action waiver.** YOU AND WE EACH WAIVE THE RIGHT TO PARTICIPATE IN A CLASS ACTION, CLASS ARBITRATION, OR REPRESENTATIVE PROCEEDING.

**EU and UK users.** If you are located in the EU or UK, nothing in this section limits your right to bring a claim before a court of competent jurisdiction in your country of residence, or to exercise your statutory rights under applicable consumer or data protection law. The class-action waiver does not apply to you to the extent it would be unenforceable under applicable law.

**Injunctive relief.** Either party may seek emergency injunctive or other equitable relief from a court of competent jurisdiction to prevent irreparable harm, without waiving the right to arbitrate.`,
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    anchor: "changes",
    inShort: "We will give you 30 days' notice of material changes.",
    body: `We may update these Terms from time to time. For non-material changes (such as clarifications, corrections, or changes required by law), we will update the "Last updated" date and post the new Terms at /legal/terms.

For material changes — those that meaningfully affect your rights or obligations — we will notify you by email and/or by a prominent notice in the Service at least 30 days before the change takes effect.

If you continue to use the Service after the effective date of a material change, you accept the updated Terms. If you do not accept the updated Terms, you may cancel your subscription before the effective date.

Previous versions of these Terms are archived at /legal/terms/v[date] and remain available for reference.`,
  },
  {
    id: "contact",
    title: "Contact and Legal Notices",
    anchor: "contact",
    body: `For general support: [FILL: support email]
For legal notices and formal correspondence: [FILL: legal entity name], [FILL: registered address], Attn: Legal Department
For privacy and data protection inquiries: [FILL: privacy/DPO email]
For security disclosures: [FILL: security email]

Legal notices must be sent by email with confirmation of receipt, or by certified mail to the address above.`,
  },
  {
    id: "glossary",
    title: "Glossary",
    anchor: "glossary",
    body: `**AI Outputs** — Any text, data, analysis, model, report, or other content generated by ARIA's AI systems in response to your inputs or workflows.

**Customer** — The company or individual that has entered into these Terms and holds a subscription to the Service.

**Customer Data** — All data, documents, files, and content uploaded to or generated within the Service by the Customer or its authorized users.

**Feedback** — Suggestions, ideas, bug reports, or other input you provide to us about the Service.

**Information Barriers** — Technical and organizational controls that prevent data belonging to one Customer from being accessed by or influencing outputs for another Customer.

**Personal Data** — Any information that identifies or can identify a natural person, as defined under applicable privacy law (including GDPR, CCPA, and equivalent statutes).

**Service** — The ARIA M&A Intelligence Platform, including all software, APIs, documentation, and related services provided by us.

**Sub-processor** — A third-party service provider that processes Customer Data on our behalf. Our current sub-processor list is at /legal/sub-processors.

**Trial** — The 14-day free trial period described in Section 4.`,
  },
];
