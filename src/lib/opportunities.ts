export type ScoreDimension = {
  key: string;
  label: string;
  /** 0-100, directional. Higher is more favourable except for saturation. */
  value: number;
  note: string;
  /** True when a high number means more of the thing is a downside. */
  inverted?: boolean;
};

export type Opportunity = {
  slug: string;
  name: string;
  industry: string;
  /** One-sentence description used on cards. */
  summary: string;
  /** The problem, stated in one sentence. */
  problem: string;
  targetCustomer: string;
  customerProfile: string;
  alternatives: string[];
  whyNow: string;
  solution: string;
  businessModel: string;
  mvpScope: string[];
  keyAssumptions: string[];
  risks: string[];
  validationPlan: string[];
  interviewQuestions: string[];
  firstExperiments: string[];
  /** Emerging signal labels shown as chips in the feed. */
  signals: string[];
  /** ISO date used for the "newest" sort. Demo dataset date. */
  addedAt: string;
  score: number;
  scoreDimensions: ScoreDimension[];
  /** Short qualitative read used in the score summary. */
  scoreSummary: string;
  /** Rough shape of the buyer, shown as metadata. */
  buildType: "Product" | "Platform" | "Tooling" | "Service-assisted";
  timeToFirstValidation: string;
  confidence: "Low" | "Medium" | "Higher";
};

export const opportunities: Opportunity[] = [
  {
    slug: "export-compliance-copilot",
    name: "Export Compliance Copilot",
    industry: "smb-automation",
    summary:
      "An AI compliance assistant for small exporters that turns scattered product, origin, and material data into classification answers and document packs.",
    problem:
      "Small exporters cannot justify a full-time compliance function, so every shipment decision is made by guesswork or by copying last year's answer.",
    targetCustomer: "SMB exporters in apparel, home goods, and specialty food",
    customerProfile:
      "A 10-60 person trading company shipping to 3-8 markets. There is one operations lead who owns classification on top of sourcing, freight, and customer email. They use a freight forwarder, an ERP that exports nothing useful, and a shared drive of supplier certificates nobody has indexed.",
    alternatives: [
      "Freight forwarder advisory (paid per shipment, inconsistent)",
      "Customs broker one-off consultations",
      "Spreadsheet classification logs",
      "Generic chat tools plus manual source reading",
    ],
    whyNow:
      "Cross-border tariff schedules have become volatile enough that last year's classification is frequently wrong, while the operational cost of being wrong — demurrage, storage, penalties — stays constant. At the same time, multimodal models can now read a supplier invoice, a material spec sheet, and a product photo well enough to propose a classification a human can approve. The bottleneck moved from knowledge to judgement.",
    solution:
      "A review workspace where a seller describes the product, uploads supplier documents, and receives a proposed classification per destination market with the reasoning shown, the source documents cited, and confidence stated. Every approved answer is versioned so the next shipment starts from precedent rather than memory.",
    businessModel:
      "Per-seat subscription priced against the cost of one demurrage incident, with an optional per-shipment review tier for first-time exporters. Enterprise variant sold to trade-compliance consultancies who would otherwise staff the work.",
    mvpScope: [
      "Product intake form capturing material, function, and intended use",
      "Document upload with extraction of supplier specs and certificates",
      "Classification proposal per destination market with cited reasoning",
      "Confidence banding and explicit 'needs a licensed broker' escalation",
      "Precedent library that recalls prior approved answers",
    ],
    keyAssumptions: [
      "Sellers will pay for a tool that reduces uncertainty, even when no shipment is actively blocked",
      "Model output is trustworthy enough for a human to approve quickly rather than rebuild from scratch",
      "One destination market represents enough value to start with",
      "The forwarder relationship remains a partner rather than a competitor",
    ],
    risks: [
      "Customs liability means a wrong confident answer is worse than no answer",
      "Forwarders may build or block this capability themselves",
      "Trade data licensing restricts what can be redistributed",
      "Category may be too narrow to sustain a standalone company",
    ],
    validationPlan: [
      "Interview 20 exporters across 3 markets; ask for the last three classification decisions they were unsure about",
      "Run a concierge version with 5 sellers for one quarter; measure minutes saved per shipment and error rate",
      "Test willingness to pay by invoicing after a real shipment rather than asking in advance",
      "Interview 5 freight forwarders to understand where they currently lose advisory margin",
    ],
    interviewQuestions: [
      "Walk me through the last shipment where you were not confident about classification. What did you do?",
      "How much do you currently pay or wait to resolve one uncertain classification?",
      "If an outside system gave you an answer with the source documents shown, what would stop you from trusting it?",
    ],
    firstExperiments: [
      "Manual analyst service classifying 50 real products across 3 markets, tracking time per classification",
      "Landing page split-tested on 'reduce demurrage risk' vs 'answer in minutes'",
      "Intro-call script anchored on a past shipment incident rather than hypothetical future behaviour",
    ],
    signals: [
      "Tariff volatility",
      "Multimodal extraction",
      "SMB admin load",
      "Trade data access",
    ],
    addedAt: "2026-09-28",
    score: 71,
    scoreSummary:
      "Strong problem intensity and clear pain cost, offset by liability risk and a forwarder that may already hold the answer.",
    buildType: "Tooling",
    timeToFirstValidation: "2-3 weeks",
    confidence: "Medium",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 84, note: "Direct, recurring financial exposure." },
      { key: "frequency", label: "Frequency", value: 71, note: "Arises per SKU per market, not daily per operator." },
      { key: "willingness", label: "Willingness to pay", value: 68, note: "Budget exists in ops, but usually framed as freight cost." },
      { key: "accessibility", label: "Market accessibility", value: 77, note: "Reachable through trade communities and forwarders." },
      { key: "saturation", label: "Competitive saturation", value: 42, note: "Fragmented tools, no obvious category leader.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 74, note: "Grounded in cited documents rather than pure recall." },
    ],
  },
  {
    slug: "voice-first-field-ops",
    name: "Voice-First Field Operations",
    industry: "industrial-ai",
    summary:
      "Voice-first operations software for field teams that captures work notes, parts usage, and handover context hands-free while the technician is already covered in grease.",
    problem:
      "Field technicians lose billable hours writing notes after the fact, and the operational knowledge that would let a site run better disappears with each handover.",
    targetCustomer: "Maintenance and field service teams at multi-site industrial operators",
    customerProfile:
      "A facilities or maintenance organisation running 5-40 sites, 10-200 technicians, mostly on paper or a phone-based system of record. The office knows assets exist. It does not reliably know what was done, what was replaced, or why a repair failed twice.",
    alternatives: [
      "Paper work orders scanned at month end",
      "Generic field service apps with heavy forms",
      "WhatsApp and SMS threads between technicians and supervisors",
      "Vendor portals with no export",
    ],
    whyNow:
      "Speech models now handle noisy, jargon-heavy industrial environments at a usable accuracy, including vocabulary specific to a single site. That unlocks an interface the industry has always wanted and never had: talk while you work. The second shift is data capture, because voice notes are only useful if they become structured history rather than an audio file nobody reopens.",
    solution:
      "A mobile capture layer that listens during the job, extracts asset, symptom, part, and action into a structured work record, and surfaces the previous three jobs on the same asset before the technician starts. Supervisors get a searchable history instead of a wall of scanned paper.",
    businessModel:
      "Per-technician monthly subscription with a site-level analytics tier. Implementation sold as a paid onboarding because data migration and terminology mapping carry the real cost.",
    mvpScope: [
      "Onsite vocabulary configuration per site and discipline",
      "Hands-free capture during active work with visual confirmation",
      "Structured work record with asset history attached",
      "Supervisor review queue for ambiguous extractions",
      "Search across jobs by symptom, part, or asset",
    ],
    keyAssumptions: [
      "Technicians will speak honestly into a device instead of inventing notes afterwards",
      "Site vocabulary configuration is affordable at the scale of a single operator",
      "Office teams will change process once history becomes searchable",
      "Hardware assumptions do not block deployment on older devices",
    ],
    risks: [
      "Strong incumbent field service vendors have distribution",
      "Accuracy in genuinely noisy environments is unproven at scale",
      "Union, safety, or site rules may restrict always-on recording",
      "Value depends on a second system (asset history) actually being adopted",
    ],
    validationPlan: [
      "Shadow 3 technicians for one week; measure capture rate and how many notes are completed today versus with voice",
      "Pilot at one site with 10 technicians for 30 days; measure supervisor time spent chasing missing information",
      "Test whether structured records change the next job: compare repeat-fault rates before and after",
      "Ask supervisors to rank the five asset histories they would pay to see",
    ],
    interviewQuestions: [
      "What do you do today between finishing a job and handing off to the next shift?",
      "When the same fault comes back, what do you wish you had known from the last three jobs?",
      "Which words on this site do outsiders always get wrong?",
    ],
    firstExperiments: [
      "Build a phone-based capture prototype with no integrations and run it for one week on two sites",
      "Manual transcription service sold at a fixed per-site fee to test budget ownership",
      "Compare time-to-written-note between paper, forms, and voice with the same technician",
    ],
    signals: [
      "Noisy-environment speech",
      "Labour turnover",
      "Unstructured field data",
      "Asset knowledge loss",
    ],
    addedAt: "2026-09-21",
    score: 76,
    scoreSummary:
      "Genuinely differentiated interface for a market drowning in paperwork, with distribution and on-site politics as the main unknowns.",
    buildType: "Product",
    timeToFirstValidation: "4-6 weeks",
    confidence: "Medium",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 79, note: "Documentation is unpaid labour nobody chose." },
      { key: "frequency", label: "Frequency", value: 88, note: "Multiple captures per technician per shift." },
      { key: "willingness", label: "Willingness to pay", value: 66, note: "Budget sits with maintenance, value lands with ops." },
      { key: "accessibility", label: "Market accessibility", value: 52, note: "Enterprise sales cycle and site access are slow." },
      { key: "saturation", label: "Competitive saturation", value: 48, note: "Crowded category, but no voice-first leader.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 81, note: "Speech accuracy is now plausible in the target setting." },
    ],
  },
  {
    slug: "maintenance-documentation-engine",
    name: "Maintenance Documentation Engine",
    industry: "industrial-ai",
    summary:
      "Automated documentation for industrial maintenance that turns manuals, drawings, and past repairs into a procedure a technician can follow on the floor.",
    problem:
      "Manufacturers hold decades of manuals and tribal knowledge, and almost none of it is retrievable in the twenty seconds a technician has during a breakdown.",
    targetCustomer: "Plant maintenance teams and facilities contractors",
    customerProfile:
      "A manufacturer or contractor maintaining mixed equipment across legacy assets. Documentation is scattered across scanned PDFs, vendor portals that expire, and the memory of staff who have since left. They are often contractually required to follow manufacturer procedures and cannot prove they did.",
    alternatives: [
      "Static PDF manuals searched manually",
      "Vendor support lines and paid service dispatch",
      "Internal wikis nobody maintains",
      "Tribal knowledge passed informally",
    ],
    whyNow:
      "Document retrieval became genuinely useful once models could reason over images, exploded diagrams, and long procedural documents together. The remaining work is not model capability — it is knowing which page of which manual applies to the fault in front of you, which is a retrieval and permissions problem that is now buildable.",
    solution:
      "A searchable knowledge layer over the manuals a site already owns. A technician photographs the nameplate or describes the symptom; the system returns the applicable procedure with the exact page, flagged where the manual is superseded, plus every prior repair on that asset.",
    businessModel:
      "Per-site annual licence covering a defined equipment estate, priced per technician. Services revenue for manual digitisation and cleanup on the first contract.",
    mvpScope: [
      "Document ingestion with page-level citation for every answer",
      "Equipment identity resolution from nameplate photos",
      "Symptom-based retrieval returning the applicable procedure",
      "Superseded-document warning when a revision is out of date",
      "Repair history timeline per asset",
    ],
    keyAssumptions: [
      "Sites will upload manuals they currently do not have in usable form",
      "Answer accuracy is good enough to reduce time-to-procedure",
      "Compliance evidence is valuable enough to be a buying reason on its own",
      "Vendors will not block access to their documentation",
    ],
    risks: [
      "Documentation licensing restricts storage or redistribution",
      "Genuinely long-tail equipment variety resists generalisation",
      "Accuracy failures during a breakdown damage trust quickly",
      "Large vendors could bundle this into maintenance contracts",
    ],
    validationPlan: [
      "Collect 200 real 'how do we fix this' questions from 3 sites and time current resolution",
      "Run a shadow retrieval test against each site's own manuals and score citation accuracy",
      "Test a paid pilot on one site with a clear time-to-procedure metric",
      "Check documentation licensing terms before committing to a storage model",
    ],
    interviewQuestions: [
      "Describe the last breakdown where you could not find the right procedure. What happened?",
      "How many manuals do you have for this one asset, and how do you know which is current?",
      "If you had proof of the exact procedure followed, what would you use it for?",
    ],
    firstExperiments: [
      "Manual search-and-cite service for a single equipment family",
      "Compare retrieval quality with pure keyword search on a real question set",
      "Pilot with a contractor rather than a plant owner to shorten the sales path",
    ],
    signals: [
      "Multimodal document reasoning",
      "Retirement of experienced staff",
      "Compliance evidence",
      "Legacy asset estates",
    ],
    addedAt: "2026-09-14",
    score: 68,
    scoreSummary:
      "Clear technical unlock and a real time-to-procedure metric, constrained by documentation rights and long-tail equipment variety.",
    buildType: "Tooling",
    timeToFirstValidation: "3-4 weeks",
    confidence: "Medium",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 72, note: "Downtime cost is unambiguous and painful." },
      { key: "frequency", label: "Frequency", value: 63, note: "Episodic rather than continuous for most sites." },
      { key: "willingness", label: "Willingness to pay", value: 61, note: "Budget exists in maintenance, approval is centralised." },
      { key: "accessibility", label: "Market accessibility", value: 58, note: "Reachable via contractors and integrators." },
      { key: "saturation", label: "Competitive saturation", value: 44, note: "Adjacent tools exist; focused ones are few.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 73, note: "Retrieval plus citation is tractable today." },
    ],
  },
  {
    slug: "independent-retail-procurement-intelligence",
    name: "Retail Procurement Intelligence",
    industry: "smb-automation",
    summary:
      "AI procurement intelligence for independent retailers that watches wholesale terms, lead times, and competing local prices so small shops stop buying on instinct.",
    problem:
      "Independent retailers negotiate with distributors who hold all the information, and they find out about price increases and stock-outs after they have already committed.",
    targetCustomer: "Independent retailers and small multi-site retail groups",
    customerProfile:
      "An owner-operator or small buying group across convenience, specialty grocery, or hardware. They order from two or three distributors, receive a price file by email or portal, and cannot see what other shops in their area are paying.",
    alternatives: [
      "Distributor price files and email promotions",
      "A local wholesaler's sales rep",
      "Spreadsheets and phone calls to other shops",
      "Generic web scraping with no context",
    ],
    whyNow:
      "Model inference costs dropped far enough that running a nightly reconciliation across price files, invoice history, and regional listings for a single shop became economically sane. That was never possible before, which is why this capability stayed locked inside the distributors.",
    solution:
      "A nightly read of the retailer's own purchase history and delivered price files, producing a buying brief: what changed, what is likely to change again, what neighbouring shops appear to be paying, and which lines are worth negotiating before the next order.",
    businessModel:
      "Low monthly subscription per store, with a higher tier for groups. Deliberately priced below the margin a single price error costs.",
    mvpScope: [
      "Ingestion of distributor price files and the retailer's own invoices",
      "Change detection with historical baseline per line",
      "Regional comparable pricing from public listed prices",
      "Negotiation brief per order cycle",
      "Margin impact estimate on the current basket",
    ],
    keyAssumptions: [
      "Retailers can supply invoice and price file history in a usable format",
      "Own-price visibility creates willingness to pay even without a surprise event",
      "Regional comparison data is legally shareable",
      "Distributors do not degrade or lock the data they already send",
    ],
    risks: [
      "Distributors may treat aggregation as hostile",
      "Data access varies wildly by distributor relationship",
      "Retail margins are thin, so willingness to pay is genuinely capped",
      "Wrong pricing advice in a thin-margin business is unforgiving",
    ],
    validationPlan: [
      "Ask 30 shop owners to reconstruct their last three buying decisions and where margin actually leaked",
      "Deliver a manual buying brief to 5 shops for two order cycles and measure whether anything changed",
      "Price-test at three levels with real payment behaviour, not intent",
      "Map which distributors permit price file reuse",
    ],
    interviewQuestions: [
      "When did you last discover a price increase you had not planned for? What did you do?",
      "Which lines do you have real negotiating leverage on, and how do you know?",
      "If you knew a price change was coming a week early, what would you actually do differently?",
    ],
    firstExperiments: [
      "Spreadsheet-built nightly brief for one store to test the format before building software",
      "Interviews focused on past margin leaks rather than future feature requests",
      "Offer a paid trial tied to a single category so the result is measurable",
    ],
    signals: [
      "Inference cost collapse",
      "Fragmented supply data",
      "Thin-margin operations",
      "Distributor opacity",
    ],
    addedAt: "2026-09-05",
    score: 64,
    scoreSummary:
      "Obvious daily cost centre, but the buyer is margin-constrained and the data owner is a supplier with different incentives.",
    buildType: "Product",
    timeToFirstValidation: "3-5 weeks",
    confidence: "Low",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 66, note: "Real but recurring rather than acute." },
      { key: "frequency", label: "Frequency", value: 84, note: "Every order cycle, several times a month." },
      { key: "willingness", label: "Willingness to pay", value: 44, note: "Thin margins cap any subscription price." },
      { key: "accessibility", label: "Market accessibility", value: 73, note: "Reachable directly, no procurement gate." },
      { key: "saturation", label: "Competitive saturation", value: 51, note: "Category marketing exists; actual tooling rare.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 76, note: "Nightly reconciliation is now inexpensive." },
    ],
  },
  {
    slug: "specialist-service-automation",
    name: "Specialist Service Workflow Automation",
    industry: "smb-automation",
    summary:
      "Workflow automation for specialist service businesses that turns intake, scheduling, follow-up, and invoicing into one repeatable chain instead of six disconnected tools.",
    problem:
      "Profitable specialist firms lose their owners' time to coordination between intake, scheduling, and billing, and the errors that slip through cost more than the admin hours.",
    targetCustomer: "Small professional practices and specialist trades",
    customerProfile:
      "A 3-25 person firm in accounting, legal, dentistry, engineering, or specialist trades. The owner is the salesperson, the quality checker, and the person who chases invoices. Their stack is a CRM, a calendar, an accounting package, and a shared inbox that nobody owns.",
    alternatives: [
      "Practice management software sold as an all-in-one",
      "A part-time operations contractor",
      "Zapier-style automation assembled by hand",
      "Spreadsheets and inbox discipline",
    ],
    whyNow:
      "The bottleneck for small service firms is no longer software access — it is the absence of anyone to configure it. A model that reads the firm's actual intake patterns and builds the workflow rather than asking an administrator to wire it manually changes the cost of adoption from weeks to an afternoon.",
    solution:
      "An onboarding process that observes a firm's last month of intake, scheduling, and billing activity, proposes the specific automations that fit, and ships them preconfigured against the tools the firm already uses, with every step visible and reversible.",
    businessModel:
      "Subscription per firm priced below the cost of a part-time contractor, plus a one-time setup fee. Retention depends entirely on being configured correctly on day one.",
    mvpScope: [
      "Intake review that maps a firm's real enquiry sources and response times",
      "Generated automation proposal with estimated hours recovered",
      "Preconfigured workflows for the two or three highest-value handoffs",
      "Exception queue for anything a human must judge",
      "Weekly report on time recovered and failures caught",
    ],
    keyAssumptions: [
      "Firms will share real intake data during onboarding",
      "Automations survive contact with real exceptions",
      "The owner, not a manager, is the buyer and the blocker",
      "Recovery estimates are credible enough to justify the fee",
    ],
    risks: [
      "Incumbent practice software adds AI features rather than being displaced",
      "Configuration quality is a services business hiding behind software margins",
      "Exception handling is where most automation quietly fails",
      "Support load per customer may exceed willingness to pay",
    ],
    validationPlan: [
      "Run the onboarding review manually for 10 firms and see whether the proposed automations survive contact with their actual data",
      "Compare recovered hours against the firm's estimate of the same",
      "Charge for the manual version before building anything",
      "Watch the first two weeks of exceptions closely: that is where the product either works or does not",
    ],
    interviewQuestions: [
      "Which part of your week would you happily never do again, and what would removing it require?",
      "What currently falls between your tools — something one system knows and another does not?",
      "When an automation gets it wrong, what does that cost you, and who fixes it?",
    ],
    firstExperiments: [
      "Paid onboarding audit delivered by hand, priced as software",
      "Shadow a single firm's intake for two weeks and reconstruct the workflow",
      "Compare against a generic automation builder on time-to-first-working-flow",
    ],
    signals: [
      "Agentic configuration",
      "Owner-operator time poverty",
      "Tool fragmentation",
      "Exception handling",
    ],
    addedAt: "2026-08-28",
    score: 69,
    scoreSummary:
      "Distribution is direct and the pain is universal, but the work is closer to services than software and incumbents are circling.",
    buildType: "Product",
    timeToFirstValidation: "2-4 weeks",
    confidence: "Medium",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 62, note: "Annoying and expensive in owner hours." },
      { key: "frequency", label: "Frequency", value: 80, note: "Every enquiry, every invoice, every week." },
      { key: "willingness", label: "Willingness to pay", value: 74, note: "Cheap relative to a part-time hire." },
      { key: "accessibility", label: "Market accessibility", value: 70, note: "Owner-operator reach without procurement." },
      { key: "saturation", label: "Competitive saturation", value: 63, note: "Busy category with real incumbents.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 70, note: "Integration work, not novel modelling." },
    ],
  },
  {
    slug: "clinical-documentation-layer",
    name: "Clinical Documentation Layer",
    industry: "healthcare-operations",
    summary:
      "A documentation layer for outpatient clinics that drafts the note from the encounter itself and routes only the judgement calls back to the clinician.",
    problem:
      "Clinicians spend a meaningful share of every appointment typing what they just said, and the resulting note is often a poor record because it was written under time pressure at the end of the day.",
    targetCustomer: "Outpatient clinics and specialist practices",
    customerProfile:
      "A 3-15 clinician practice with an EMR that generates a template but no real narrative. Documentation is the last thing done in the day, quality varies by how tired the clinician is, and billing queries trace back to incomplete notes.",
    alternatives: [
      "Scribe services",
      "EMR vendor dictation and note templates",
      "General ambient AI scribes",
      "Paper and post-visit charting",
    ],
    whyNow:
      "The differentiating question in clinical documentation moved from 'can it hear' to 'can it be reviewed in under a minute and does it know when to stop'. Note quality failures, not transcription failures, are what pushed earlier ambient products into clinical governance processes.",
    solution:
      "A documentation layer sitting beside the existing EMR: generate a structured note from the encounter, surface anything uncertain rather than guessing, and require explicit clinician confirmation before anything reaches the record or the claim.",
    businessModel:
      "Per-clinician monthly subscription with an enterprise tier for groups, structured around documentation time saved rather than ambient minutes billed.",
    mvpScope: [
      "Encounter capture producing a structured draft note",
      "Explicit uncertainty flagging rather than silent completion",
      "Clinician confirmation gate before anything is written to the record",
      "Average documentation time per appointment as the core metric",
      "Specialty templates for three high-volume specialties",
    ],
    keyAssumptions: [
      "Clinicians will review rather than rewrite, which is the entire economic bet",
      "Integration with one EMR family is enough to start",
      "Note quality improvements are felt by clinicians, not just billing",
      "Governance and privacy requirements are satisfiable at a small company's scale",
    ],
    risks: [
      "Patient data handling carries regulatory weight that is unforgiving",
      "Health systems have long procurement and security review cycles",
      "Established ambient vendors are further along on EMR integration",
      "A bad note is a clinical safety event, not a support ticket",
    ],
    validationPlan: [
      "Measure review-and-edit time against the status quo, not against transcription alone",
      "Run a shadow note review with clinicians who grade output quality blind",
      "Start with one specialty where note structure is well defined",
      "Map privacy and security requirements before building anything that touches the EMR",
    ],
    interviewQuestions: [
      "When your note is incomplete, what happens downstream — billing query, follow-up problem, or nothing?",
      "What makes you rewrite a note that was technically correct?",
      "What would a note have to look like for you to send it without reading it?",
    ],
    firstExperiments: [
      "Shadow documentation for one clinician for a week and time it precisely",
      "Prototype with no EMR integration, on a post-visit transcript",
      "Compare a specialty template against a general template on review time",
    ],
    signals: [
      "Ambient capture maturity",
      "Clinician attrition pressure",
      "Governance scrutiny",
      "Revenue-cycle accuracy",
    ],
    addedAt: "2026-08-19",
    score: 74,
    scoreSummary:
      "High-frequency pain with clear ROI, gated by regulatory weight and slow health-system sales.",
    buildType: "Product",
    timeToFirstValidation: "6-8 weeks",
    confidence: "Medium",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 81, note: "Direct link to fatigue and attrition." },
      { key: "frequency", label: "Frequency", value: 91, note: "Every single patient encounter." },
      { key: "willingness", label: "Willingness to pay", value: 78, note: "Per-clinician economics are easy to justify." },
      { key: "accessibility", label: "Market accessibility", value: 38, note: "Independent practices are reachable; systems are not." },
      { key: "saturation", label: "Competitive saturation", value: 70, note: "Crowded and well-funded.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 67, note: "Hard part is review quality and integration." },
    ],
  },
  {
    slug: "referral-coordination-agent",
    name: "Referral Coordination Layer",
    industry: "healthcare-operations",
    summary:
      "A coordination layer between specialists and referring practices that closes the loop on referrals instead of leaving them in a fax queue.",
    problem:
      "Patients wait for specialist appointments while referrals stall in inboxes and faxes, and nobody in the system owns the handoff well enough to report on it.",
    targetCustomer: "Specialist clinics and multi-site primary care groups",
    customerProfile:
      "A specialty clinic with referral volume it cannot absorb and a relationship with primary care groups it has never formalised. Referrals arrive by fax, portal message, and phone call. A coordinator chases them manually and reports wait times from memory.",
    alternatives: [
      "Fax and inbox coordination",
      "EHR referral modules",
      "Patient portals and self-scheduling",
      "Outsourced referral services",
    ],
    whyNow:
      "Closing the referral loop is mostly a structured communication problem that was previously blocked by unusable interoperability. Language models can now reconcile fax, portal, and phone-derived intake into a single tracked state without demanding an integration project from either side.",
    solution:
      "A shared coordination layer that ingests referrals in whatever format they arrive, extracts clinical and administrative detail, tracks status against the receiving clinic's actual capacity, and reports true wait times to referring providers.",
    businessModel:
      "Per-referral fee paid by the receiving clinic, with a reporting tier for referring groups. Per-referral pricing aligns with the volume that actually matters.",
    mvpScope: [
      "Ingestion from fax, email, and portal message",
      "Extraction of referral detail with confidence flagging",
      "Status tracking against clinic capacity rather than a fixed queue",
      "Referring-provider visibility without a full EHR integration",
      "Wait-time reporting that reflects real state, not estimates",
    ],
    keyAssumptions: [
      "Receiving clinics will pay per referral for faster throughput",
      "Extraction accuracy is sufficient to avoid manual correction",
      "Referring providers will accept status visibility without an integration",
      "Referral volume is high enough per clinic to matter",
    ],
    risks: [
      "Patient data handling and consent flows",
      "Fax does not die on the timeline a product needs",
      "Incumbent EHR vendors could add exactly this",
      "Coordination improvements can simply become deeper intake queues",
    ],
    validationPlan: [
      "Count how many referrals per month a typical specialty clinic chases manually",
      "Instrument one clinic's referral flow for a month and measure true closure rate",
      "Test whether a coordinator would rather have faster status or fewer inappropriate referrals",
      "Validate per-referral pricing against the cost of one missed referral",
    ],
    interviewQuestions: [
      "How many referrals does your team chase by phone each week, and what happens to the ones you cannot reach?",
      "What do you tell a patient today when you do not know where their referral is?",
      "Would you pay to shorten the referral wait, or to reduce the number of referrals you receive?",
    ],
    firstExperiments: [
      "Manual coordination service for one clinic, measuring closure rate",
      "Fax-to-structured extraction prototype on 200 real referrals",
      "Shadow a referral coordinator to find the real bottleneck before building",
    ],
    signals: [
      "Interoperability limits",
      "Access bottlenecks",
      "Mixed-format intake",
      "Capacity transparency",
    ],
    addedAt: "2026-07-30",
    score: 58,
    scoreSummary:
      "Real operational waste with a clear owner on one side, but the value only exists if capacity and staffing problems are also solved.",
    buildType: "Product",
    timeToFirstValidation: "4-6 weeks",
    confidence: "Low",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 64, note: "Known pain, rarely escalated." },
      { key: "frequency", label: "Frequency", value: 82, note: "Every referral, continuously." },
      { key: "willingness", label: "Willingness to pay", value: 52, note: "Depends on whether capacity is fixed." },
      { key: "accessibility", label: "Market accessibility", value: 41, note: "Healthcare procurement is slow." },
      { key: "saturation", label: "Competitive saturation", value: 47, note: "Fragmented solutions, no clear winner.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 66, note: "Extraction works; scheduling depth does not." },
    ],
  },
  {
    slug: "carbon-measurement-verification",
    name: "Measurement & Verification Automation",
    industry: "climate",
    summary:
      "Software that reconciles asset telemetry, meter evidence, and reporting templates so carbon claims can be defended rather than asserted.",
    problem:
      "Companies and asset owners cannot defend their emissions numbers because the underlying evidence lives in meters, spreadsheets, PDFs, and inboxes nobody has reconciled.",
    targetCustomer: "Asset operators and sustainability teams in hard-to-abate sectors",
    customerProfile:
      "An operator with physical assets emitting measurably — a fleet, a facility, a supply chain — who reports to a framework, a lender, or a buyer. They have data somewhere but not evidence they would survive scrutiny with.",
    alternatives: [
      "Manual consultant reconciliation",
      "Spreadsheet reporting with audit support",
      "Generic ESG reporting platforms",
      "Meter and telemetry vendor dashboards",
    ],
    whyNow:
      "Buyers increasingly ask for evidence rather than estimates, and the expensive part has not changed: someone must reconcile contradictory sources and explain the discrepancy. That reconciliation is language- and document-heavy work sitting in a profession priced by headcount.",
    solution:
      "An evidence layer that ingests meter exports, invoices, and activity data, reconciles conflicting sources, flags every material discrepancy with its source, and produces a defensible trail for each reported figure.",
    businessModel:
      "Annual platform fee per reporting entity, with a services component for historical data remediation. Priced against the cost of a failed assurance cycle.",
    mvpScope: [
      "Ingestion of meter, invoice, and activity data in messy formats",
      "Reconciliation with explicit discrepancy reporting per line",
      "Evidence trail linking every figure to its source",
      "Export in the format a verifier or auditor expects",
      "Review queue for figures that cannot be reconciled automatically",
    ],
    keyAssumptions: [
      "Operators want evidence, not just faster dashboards",
      "Historical data is dirty enough that remediation services are needed and billable",
      "Verifiers will accept machine-generated evidence trails",
      "Regulation tightens rather than loosens over the product's life",
    ],
    risks: [
      "Framework and regulatory changes reshape requirements frequently",
      "Assurance standards may not accept generated evidence",
      "Data quality can be too poor to reconcile at all",
      "Large assurance firms can bundle this with existing mandates",
    ],
    validationPlan: [
      "Ask 20 operators which figure they are least confident publishing, and what evidence would change that",
      "Reconcile one entity's last year by hand and time the work",
      "Test whether a verifier would accept a generated evidence trail, before building it",
      "Check which frameworks are actually converging before committing to one",
    ],
    interviewQuestions: [
      "Which number in your last report were you least comfortable publishing, and why?",
      "What happens when a verifier asks for evidence behind a figure you already reported?",
      "How much of your reporting time is spent reconciling rather than analysing?",
    ],
    firstExperiments: [
      "Manual reconciliation of one entity's annual data as a paid service",
      "Evidence-trail prototype tested against a real assurance checklist",
      "Interview verifiers and consultants about what they would never accept",
    ],
    signals: [
      "Evidence-based procurement",
      "Telemetry growth",
      "Assurance bottlenecks",
      "Reporting expansion",
    ],
    addedAt: "2026-07-16",
    score: 62,
    scoreSummary:
      "Structurally necessary and defensible if it works, but standards bodies decide whether generated evidence counts.",
    buildType: "Platform",
    timeToFirstValidation: "6-8 weeks",
    confidence: "Low",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 60, note: "Costs money but rarely hurts immediately." },
      { key: "frequency", label: "Frequency", value: 58, note: "Quarterly and annual reporting cycles." },
      { key: "willingness", label: "Willingness to pay", value: 66, note: "Spend exists in consulting and assurance." },
      { key: "accessibility", label: "Market accessibility", value: 49, note: "Reachable through sustainability consultants." },
      { key: "saturation", label: "Competitive saturation", value: 55, note: "Reporting tools exist; evidence tools fewer.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 69, note: "Reconciliation is tractable; standards are not." },
    ],
  },
  {
    slug: "ai-evaluation-gateway",
    name: "Evaluation Gateway for AI Features",
    industry: "ai-infrastructure",
    summary:
      "A gateway that runs regression evaluations across model and prompt changes and blocks releases that quietly degrade a specific capability.",
    problem:
      "Teams shipping AI features cannot tell which change broke which behaviour, and discover it through customer complaints instead of a test.",
    targetCustomer: "Product engineering teams shipping LLM features",
    customerProfile:
      "A 20-200 person engineering organisation with several AI features in production, no evaluation suite, and a release process built around unit tests that cannot express what broke. When quality drops, they add manual QA sampling.",
    alternatives: [
      "Hand-written test prompts nobody maintains",
      "Vendor evaluation dashboards",
      "Manual QA sampling before release",
      "Internal notebooks",
    ],
    whyNow:
      "Evaluation stopped being an ML-research concern and became a release-engineering concern once models, prompts, retrieval, and tools changed weekly. The tooling gap is not scoring — it is treating evaluation as a blocking gate in an existing deployment pipeline.",
    solution:
      "An evaluation gateway that runs versioned suites against candidate releases in staging, diffs results against production, and blocks deployment when a defined capability regresses — integrated where releases already happen.",
    businessModel:
      "Usage-based pricing on evaluations run plus a platform tier. Becomes meaningful infrastructure spend once it sits in the deploy path.",
    mvpScope: [
      "Versioned test suites with capability-level granularity",
      "Run against a candidate release in staging",
      "Regression diff against current production behaviour",
      "Release gate via CI integration",
      "Flaky-test detection so gates stay trustworthy",
    ],
    keyAssumptions: [
      "Teams run AI features in production often enough for this to matter weekly",
      "A blocking gate is welcome rather than resented",
      "Suites can be authored without a dedicated ML researcher",
      "Model providers will not absorb the capability entirely",
    ],
    risks: [
      "Vendors ship their own evaluations, sometimes better integrated",
      "Getting a trustworthy suite is harder than getting the runner",
      "Teams may accept sampling instead of gating",
      "Gating creates friction that gets disabled under deadline pressure",
    ],
    validationPlan: [
      "Ask 15 teams what happens today when a model upgrade ships; capture the actual failure mode",
      "Run a gateway against a real repository's release process for two weeks",
      "Test whether teams will author and maintain suites, or only accept existing ones",
      "Measure gate blocks that were later confirmed as real regressions",
    ],
    interviewQuestions: [
      "When did you last ship a model or prompt change that quietly made something worse? How did you find out?",
      "Who currently decides whether an AI change is safe to release?",
      "What would have to be true for you to let a test block a release?",
    ],
    firstExperiments: [
      "Integrate with one team's existing CI and gate one non-critical capability",
      "Manually run an evaluation set weekly and report the diff as a service",
      "Compare a maintained suite against random sampling on detection rate",
    ],
    signals: [
      "Release velocity",
      "Model churn",
      "Quality regression",
      "Deployment safety",
    ],
    addedAt: "2026-07-02",
    score: 73,
    scoreSummary:
      "Clear engineering pain with a natural integration point, competing against well-resourced vendors who bundle it.",
    buildType: "Tooling",
    timeToFirstValidation: "3-4 weeks",
    confidence: "Medium",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 76, note: "Silent regressions damage trust directly." },
      { key: "frequency", label: "Frequency", value: 79, note: "Every release touching a model or prompt." },
      { key: "willingness", label: "Willingness to pay", value: 70, note: "Existing infrastructure budget applies." },
      { key: "accessibility", label: "Market accessibility", value: 68, note: "Reachable through engineering channels." },
      { key: "saturation", label: "Competitive saturation", value: 74, note: "Active and well-funded field.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 72, note: "Standard infrastructure work, mostly." },
    ],
  },
  {
    slug: "legacy-codebase-migration-agent",
    name: "Legacy Migration Agent",
    industry: "developer-tools",
    summary:
      "An agent-driven migration tool that upgrades or ports large codebases in reviewable slices instead of proposing one unreviewable diff.",
    problem:
      "Framework migrations are large enough that no engineer will review a single diff, so they stall indefinitely while the codebase drifts further from current practice.",
    targetCustomer: "Engineering teams on a framework or runtime version that has become a liability",
    customerProfile:
      "A 30-300 engineer organisation two major versions behind, with an internal platform team that has attempted migration twice and abandoned it. The blocker was never the code changes — it was the impossibility of reviewing them.",
    alternatives: [
      "Codemods run once and hand-fixed afterwards",
      "Consultancy-led migration projects",
      "Vendor automated upgrade services",
      "Gradual deprecation with no migration plan",
    ],
    whyNow:
      "Agentic coding made mechanical transformation tractable in slices. The remaining differentiator is not code generation — it is producing changes small enough that a sceptical reviewer accepts them, and proving each slice did not change behaviour.",
    solution:
      "A migration agent that works in dependency-ordered slices, opens reviewable changes with behaviour-preservation tests attached, and stops on anything that needs human judgement rather than guessing.",
    businessModel:
      "Priced per repository or per engineer, with an optional migration services engagement. Services are honest here because judgement calls are the product.",
    mvpScope: [
      "Repository analysis producing a dependency-ordered migration plan",
      "Slice-by-slice changes with reviewable size bounds",
      "Behaviour tests generated alongside each slice",
      "Escalation path for changes needing human judgement",
      "Progress reporting that shows what remains and why",
    ],
    keyAssumptions: [
      "Reviewable slices are accepted where one-shot codemods were not",
      "Teams will pay for migration tooling rather than treat it as an engineering task",
      "Behaviour tests can be generated reliably enough to trust",
      "Agents handle a meaningful share of the mechanical work",
    ],
    risks: [
      "Coding agents already do this inside the team's existing assistant",
      "Migration is episodic, so usage is spiky and retention is hard",
      "Silent behaviour change is the exact failure mode everyone fears",
      "Framework maintainers ship their own codemods",
    ],
    validationPlan: [
      "Run a migration on one real repository and measure how much human review each slice needed",
      "Compare slice size against a standard codemod run on the same repository",
      "Check whether teams buy tooling for this or simply assign an engineer",
      "Test on a framework upgrade with no official codemod available",
    ],
    interviewQuestions: [
      "What version are you on, and when was the last time you seriously considered moving?",
      "What specifically killed the last migration attempt?",
      "How large a diff would your team actually review?",
    ],
    firstExperiments: [
      "Migrate one open-source repository end to end and publish the slice structure",
      "Manual migration planning service to test whether the planning itself is valuable",
      "Measure review acceptance rate of agent slices versus human-authored ones",
    ],
    signals: [
      "Agentic coding maturity",
      "Version drift",
      "Review bottlenecks",
      "Maintenance burden",
    ],
    addedAt: "2026-06-18",
    score: 61,
    scoreSummary:
      "Large, expensive problem with a clear technical approach, competing directly against general-purpose coding agents.",
    buildType: "Tooling",
    timeToFirstValidation: "4-6 weeks",
    confidence: "Low",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 70, note: "Expensive, but deferrable indefinitely." },
      { key: "frequency", label: "Frequency", value: 31, note: "Episodic — once every few years." },
      { key: "willingness", label: "Willingness to pay", value: 62, note: "Engineering will staff it before buying it." },
      { key: "accessibility", label: "Market accessibility", value: 60, note: "Platform teams are a natural entry point." },
      { key: "saturation", label: "Competitive saturation", value: 78, note: "General agents already attempt it.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 63, note: "Slice discipline is the hard part, not generation." },
    ],
  },
  {
    slug: "agent-observability",
    name: "Agent Action Review",
    industry: "developer-tools",
    summary:
      "A review layer that records what autonomous agents did across sessions and surfaces the actions a human should have approved but did not see.",
    problem:
      "Teams cannot audit what their agents actually did in production, so every incident investigation reconstructs behaviour from scattered logs that were never designed to be read as decisions.",
    targetCustomer: "Engineering teams running autonomous or semi-autonomous agents in production",
    customerProfile:
      "An engineering team that has let an agent take real actions — write migrations, modify infrastructure, contact customers — and has no defensible record of what it did. When something goes wrong, the timeline is reconstructed from partial logs and memory.",
    alternatives: [
      "Application logging",
      "Tracing and APM tools",
      "Vendor agent dashboards",
      "Manual transcripts",
    ],
    whyNow:
      "Agents acting over long horizons produce behaviour that no human watched while it happened. Retroactive observability built for request-response systems does not capture sequences, decisions, or approvals, and the gap only becomes visible after the first serious incident.",
    solution:
      "A record of agent activity structured around decisions rather than requests: what the agent intended, what tools it called, what it changed, and where a human approved or bypassed the step that mattered.",
    businessModel:
      "Platform fee per production agent with usage-based pricing on recorded sessions. Strong expansion path as agent fleets grow.",
    mvpScope: [
      "Decision-level recording with intent and outcome",
      "Tool call and side-effect capture",
      "Approval points marked against the actions that mattered",
      "Incident reconstruction as a timeline of decisions",
      "Retention controls to satisfy internal policy",
    ],
    keyAssumptions: [
      "Teams want the record for audit and incident response, not just debugging",
      "Agents will stay in production long enough to need this",
      "Recording can be retrofitted without agents changing behaviour",
      "Compliance and platform teams, not just engineers, sign off on it",
    ],
    risks: [
      "Platform providers ship native traces",
      "Very few teams currently run agents with production side effects",
      "Recording overhead may alter agent behaviour",
      "Category may be premature for the market's current agent adoption",
    ],
    validationPlan: [
      "Find teams that have had an agent incident and ask what they could reconstruct",
      "Backtest a recorder against a known incident to see if the timeline matches reality",
      "Ask what would need to be recorded for an internal audit to accept it",
      "Compare against existing logging: what decision-relevant information is missing today?",
    ],
    interviewQuestions: [
      "Describe the last time an agent of yours caused a problem. What could you prove about what it did?",
      "Who would ask to see an agent activity record, and for what?",
      "What do you do today when an agent's behaviour looks different than expected?",
    ],
    firstExperiments: [
      "Instrument an internal agent and compare records against the known outcome",
      "Interview platform and security leads about required audit evidence",
      "Prototype a decision timeline from existing logs to test whether reconstruction works",
    ],
    signals: [
      "Agent autonomy",
      "Incident forensics",
      "Audit requirements",
      "Long-horizon behaviour",
    ],
    addedAt: "2026-06-04",
    score: 60,
    scoreSummary:
      "Necessary infrastructure for agents that already act in production, and the market for those agents is still forming.",
    buildType: "Platform",
    timeToFirstValidation: "5-7 weeks",
    confidence: "Low",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 68, note: "Acute once an incident happens." },
      { key: "frequency", label: "Frequency", value: 42, note: "Driven by agent activity, which is uneven." },
      { key: "willingness", label: "Willingness to pay", value: 58, note: "Spending follows incidents, not planning." },
      { key: "accessibility", label: "Market accessibility", value: 61, note: "Narrow but well-defined buyer list." },
      { key: "saturation", label: "Competitive saturation", value: 69, note: "Adjacent tooling converging quickly.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 66, note: "Recording is easy; relevance is not." },
    ],
  },
  {
    slug: "treasury-document-reconciliation",
    name: "Treasury Document Reconciliation",
    industry: "finance",
    summary:
      "Reconciliation software for finance teams that extracts terms, obligations, and mismatches from counterparty documents and flags the ones that need a human.",
    problem:
      "Finance teams discover billing errors, duplicate obligations, and non-standard terms only after a payment goes out or a quarter closes.",
    targetCustomer: "Finance operations and treasury teams in mid-market companies",
    customerProfile:
      "A 100-1,000 person business with a small finance team handling vendor contracts, invoices, and payment runs in email and shared drives. Month-end is a manual hunt for mismatches. Nobody outside finance can answer whether a contract auto-renews.",
    alternatives: [
      "Manual document review",
      "Accounts payable automation suites",
      "Contract lifecycle management systems",
      "Shared drives and email",
    ],
    whyNow:
      "Document extraction became reliable enough for mixed real-world contracts, and the bottleneck moved to prioritisation: which discrepancies are large enough to matter. That prioritisation is a language task over a document corpus that used to be unreadable at scale.",
    solution:
      "A reconciliation inbox that extracts terms and amounts from every incoming document, compares them against contracts and payment history, and surfaces only the discrepancies with financial consequence.",
    businessModel:
      "Per-entity subscription with volume-based document pricing, positioned against the cost of late detection.",
    mvpScope: [
      "Document ingestion from the existing shared inbox",
      "Extraction of amounts, dates, and renewal terms",
      "Comparison against contract and payment history",
      "Ranked discrepancy queue by financial consequence",
      "Approval path before anything reaches a payment run",
    ],
    keyAssumptions: [
      "Extraction accuracy on real contracts is high enough to avoid rework",
      "Ranking by consequence is more useful than surfacing everything",
      "Finance teams will adopt a tool that changes close-week routines",
      "Contract data is accessible without a CLM migration",
    ],
    risks: [
      "AP automation vendors already own document intake",
      "Mid-market finance teams are conservative about new tooling",
      "Ranking errors destroy trust faster than surfacing nothing",
      "Category funding is concentrated in adjacent accounting products",
    ],
    validationPlan: [
      "Have a finance manager reconstruct the last month-end and time each step",
      "Run extraction on 200 real documents and measure discrepancy recall",
      "Ask what a ranked discrepancy list would have caught that they did not catch",
      "Compare against the cost of one missed duplicate payment",
    ],
    interviewQuestions: [
      "What was the most expensive mistake your team caught late in the last year?",
      "How long does month-end take, and which step is the least defensible?",
      "What would you do differently if you saw renewal terms and mismatches before payment ran?",
    ],
    firstExperiments: [
      "Manual discrepancy review service for one finance team",
      "Extraction benchmark on a real document corpus",
      "Ranked-digest email prototype before building an interface",
    ],
    signals: [
      "Document extraction maturity",
      "Month-end pressure",
      "Contract data fragmentation",
      "Mid-market tooling consolidation",
    ],
    addedAt: "2026-05-20",
    score: 66,
    scoreSummary:
      "Quantifiable savings with a clear buyer, competing against AP suites that already hold the documents.",
    buildType: "Product",
    timeToFirstValidation: "4-5 weeks",
    confidence: "Medium",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 71, note: "Errors here are directly expensive." },
      { key: "frequency", label: "Frequency", value: 77, note: "Every document, every cycle." },
      { key: "willingness", label: "Willingness to pay", value: 65, note: "Finance budgets exist but favour known categories." },
      { key: "accessibility", label: "Market accessibility", value: 57, note: "Owner-led sales, low top-down friction." },
      { key: "saturation", label: "Competitive saturation", value: 72, note: "AP and CLM suites adjacent.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 74, note: "Extraction plus comparison is proven." },
    ],
  },
  {
    slug: "decarbonisation-procurement",
    name: "Decarbonisation Procurement Brief",
    industry: "climate",
    summary:
      "A supplier-sourcing tool that identifies which emissions reduction is cheapest to buy for a given operating site, before procurement has committed budget.",
    problem:
      "Operations teams know they need to reduce emissions but cannot rank supplier interventions, so they buy whatever is easiest to contract rather than what actually moves the number.",
    targetCustomer: "Sustainability and procurement teams in industrial and logistics operations",
    customerProfile:
      "An operator with an emissions target and no engineering capacity to model reduction options. Supplier conversations are relationships, not analysis. Each abatement business case takes weeks to build and the answer is a guess with a spreadsheet attached.",
    alternatives: [
      "Consultant-built abatement studies",
      "Internal analyst spreadsheets",
      "Supplier-proposed programmes",
      "Generic emissions calculators",
    ],
    whyNow:
      "Abatement analysis has always been feasible but slow, which meant it happened once a year with a consultant. Continuous analysis became possible when supplier data, equipment specifications, and market prices could be reasoned over in combination rather than manually assembled.",
    solution:
      "A continuously updated ranking of available reduction interventions per site, each with estimated cost, volume, and evidence requirements, so procurement can act on a shortlist instead of a study.",
    businessModel:
      "Per-site subscription with a services tier for the initial data build, since supplier data quality is the real cost centre.",
    mvpScope: [
      "Site-level emissions inventory with explicit data provenance",
      "Intervention shortlist ranked by cost per unit abated",
      "Supplier matching based on actual available equipment",
      "Evidence requirements listed per intervention",
      "Progress tracked against target rather than reported annually",
    ],
    keyAssumptions: [
      "Site-level data quality is sufficient to rank interventions",
      "Procurement uses a shortlist rather than a deep-dive study",
      "Supplier options are real and available in the operator's region",
      "Emissions targets create budget that exists independent of reporting",
    ],
    risks: [
      "Data quality at site level can make ranking meaningless",
      "Concentrated industries are conservative about disclosing operations",
      "Equipment suppliers sell their own solutions",
      "Value depends on carbon prices and mandates, which are political",
    ],
    validationPlan: [
      "Ask operators which intervention they would fund first and why",
      "Build one site's shortlist manually with an analyst and compare against the consultant study",
      "Check whether the ranked shortlist changes what they actually purchase",
      "Validate that supplier availability is real rather than assumed",
    ],
    interviewQuestions: [
      "Which reduction have you bought or avoided in the last two years, and how was it chosen?",
      "What information would you need to commit budget to an unfamiliar reduction?",
      "Who currently builds your abatement business cases?",
    ],
    firstExperiments: [
      "Manual shortlist for one site, compared to its consultant study",
      "Interview procurement about how they choose suppliers today",
      "Test the ranking against what operators say they would fund",
    ],
    signals: [
      "Continuous emissions accounting",
      "Procurement decision support",
      "Supplier data availability",
      "Target-setting pressure",
    ],
    addedAt: "2026-05-06",
    score: 55,
    scoreSummary:
      "Attractive economics if the data holds up, but site-level data quality is an unproven dependency.",
    buildType: "Platform",
    timeToFirstValidation: "6-10 weeks",
    confidence: "Low",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 52, note: "Target pressure exists, urgency varies." },
      { key: "frequency", label: "Frequency", value: 45, note: "Review cycles, not live decisions." },
      { key: "willingness", label: "Willingness to pay", value: 55, note: "Budget often comes from a study line, not ops." },
      { key: "accessibility", label: "Market accessibility", value: 44, note: "Concentrated, relationship-driven market." },
      { key: "saturation", label: "Competitive saturation", value: 46, note: "Adjacent analytics, few pure plays.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 60, note: "Bounded by input data quality." },
    ],
  },
  {
    slug: "evidence-first-diagnostic-log",
    name: "Evidence-First Diagnostic Log",
    industry: "industrial-ai",
    summary:
      "A diagnostic record that keeps the reasoning behind every fault finding, so a repeated failure is answered from history instead of re-investigated from scratch.",
    problem:
      "Recurring faults get re-diagnosed from scratch because nobody wrote down what was actually ruled out, so the site pays for the same investigation several times a year.",
    targetCustomer: "Maintenance and reliability teams in process and manufacturing",
    customerProfile:
      "A reliability team with genuine historical depth — years of work orders, downtime logs, and a small number of experienced engineers who know which faults are expensive. Their knowledge lives in those engineers, and it leaves when they do.",
    alternatives: [
      "Work order history search",
      "CMMS fault coding",
      "Reliability engineering consultants",
      "Tribal knowledge",
    ],
    whyNow:
      "Reasoning over free-text fault narratives became possible once the historical record was legible to a model. The remaining gap is that existing records describe actions taken rather than hypotheses eliminated, which is precisely the information that prevents repeat investigation.",
    solution:
      "A diagnostic layer that captures hypotheses considered and evidence checked during each investigation, then surfaces them when the same symptom recurs so engineers start from last time's exclusions.",
    businessModel:
      "Per-site annual licence integrated with an existing maintenance system, priced against avoided repeat investigations.",
    mvpScope: [
      "Fault investigation capture with hypotheses and eliminations",
      "Symptom-based retrieval of prior investigations",
      "Timeline linking related faults across assets",
      "Explicit distinction between observation and inference",
      "Report of repeat investigations avoided",
    ],
    keyAssumptions: [
      "Engineers will record eliminations, not just actions, without it feeling like paperwork",
      "Existing fault narratives contain enough signal to bootstrap",
      "Avoided repeat investigation is measurable and valued",
      "CMMS integration is achievable without a data migration project",
    ],
    risks: [
      "Workflow friction kills adoption in a reliability team under load",
      "Existing records are too thin to bootstrap retrieval",
      "A CMMS vendor may bundle this as a feature",
      "Reliability teams are cautious about changing failure investigation",
    ],
    validationPlan: [
      "Have reliability engineers reconstruct three repeat faults and check what history would have helped",
      "Measure how much of a typical investigation is re-derivation",
      "Shadow one investigation and capture structure before building the interface",
      "Test whether recorded eliminations actually get read on the next occurrence",
    ],
    interviewQuestions: [
      "Describe a fault that came back three times. What did each investigation conclude?",
      "What do you wish your work order system recorded that it does not?",
      "Who on your team would notice fastest if repeat failures started climbing?",
    ],
    firstExperiments: [
      "Manual diagnostic log run by hand for one engineer for two weeks",
      "Backtest retrieval against known repeat faults",
      "Compare capture burden against the time the engineer says it would save",
    ],
    signals: [
      "Knowledge capture",
      "Downtime cost",
      "Unstructured maintenance data",
      "Workforce turnover",
    ],
    addedAt: "2026-04-22",
    score: 63,
    scoreSummary:
      "Compelling insight about why reliability work repeats, dependent entirely on adoption friction inside the investigation itself.",
    buildType: "Product",
    timeToFirstValidation: "4-6 weeks",
    confidence: "Low",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 71, note: "Downtime is measured and expensive." },
      { key: "frequency", label: "Frequency", value: 55, note: "Repeat faults are a subset of all faults." },
      { key: "willingness", label: "Willingness to pay", value: 57, note: "Reliability budgets favour condition monitoring." },
      { key: "accessibility", label: "Market accessibility", value: 54, note: "Enterprise motion, long evaluation." },
      { key: "saturation", label: "Competitive saturation", value: 59, note: "CMMS features adjacent.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 63, note: "Retrieval is easy; capture discipline is not." },
    ],
  },
  {
    slug: "inference-cost-router",
    name: "Model Routing Under Cost Pressure",
    industry: "ai-infrastructure",
    summary:
      "Routing infrastructure that sends each request to the cheapest model that satisfies its quality requirement, with quality enforced rather than assumed.",
    problem:
      "Teams either send everything to a frontier model and overpay, or route on price alone and quietly degrade quality in ways customers notice later.",
    targetCustomer: "Engineering teams with meaningful inference volume in production",
    customerProfile:
      "A team running 50 million-plus requests a month across several models, with a monthly bill large enough to attract attention and no mechanism to prove that a cheaper model handled a given request acceptably.",
    alternatives: [
      "Single-model stacks",
      "Vendor-provided routing tiers",
      "Hand-tuned per-endpoint model choices",
      "Manual monthly bill analysis",
    ],
    whyNow:
      "Routing logic historically required offline labels and a rebuild cycle. Online routing against per-request quality signal became viable as evaluation and judge models got cheap enough to run inline, which is what makes cost routing defensible rather than a gamble.",
    solution:
      "A routing layer that evaluates each request against its requirement in real time, routes to the cheapest sufficient model, and provides the record needed to defend the decision afterwards.",
    businessModel:
      "Usage-based pricing on requests routed, taking a small share of the savings so the incentive aligns.",
    mvpScope: [
      "Per-request routing decision with explicit quality requirement",
      "Fallback behaviour when the cheap path fails the requirement",
      "Spend and quality reporting split by route",
      "Per-team controls over what may be downgraded",
      "Record of routing decisions for later audit",
    ],
    keyAssumptions: [
      "Customers would rather have a defensible quality record than the cheapest route",
      "Online evaluation cost stays small relative to inference savings",
      "Teams can express quality requirements per request type",
      "Savings are large enough to justify routing infrastructure",
    ],
    risks: [
      "Model vendors aggressively close the price-quality gap",
      "Cheap routing can fail silently and expensively",
      "Infrastructure teams resist another layer in the request path",
      "Requires meaningful volume to be worth operating",
    ],
    validationPlan: [
      "Analyse a real bill and compute achievable savings per request class",
      "Backtest routing decisions against historical quality labels",
      "Shadow-run the router in production without taking effect, and compare",
      "Ask what would make teams distrust an automatic downgrade",
    ],
    interviewQuestions: [
      "Who looks at your inference bill, and what decision do they make from it?",
      "How do you currently decide which model handles which endpoint?",
      "What would a wrong downgrade cost you relative to a higher bill?",
    ],
    firstExperiments: [
      "Backtest a routing policy on historical traffic and compute real savings",
      "Shadow deployment reporting where it would have routed differently",
      "Manual routing policy as a service for one team",
    ],
    signals: [
      "Inference price variance",
      "Volume economics",
      "Quality verification cost",
      "Multi-model stacks",
    ],
    addedAt: "2026-04-08",
    score: 67,
    scoreSummary:
      "Savings math is attractive and defensible with the right evidence, but vendor price convergence is a structural headwind.",
    buildType: "Platform",
    timeToFirstValidation: "4-6 weeks",
    confidence: "Medium",
    scoreDimensions: [
      { key: "intensity", label: "Problem intensity", value: 74, note: "Bill is large and grows with usage." },
      { key: "frequency", label: "Frequency", value: 93, note: "Every single request." },
      { key: "willingness", label: "Willingness to pay", value: 63, note: "Spend-relative pricing needs trust first." },
      { key: "accessibility", label: "Market accessibility", value: 51, note: "Requires volume and an infrastructure owner." },
      { key: "saturation", label: "Competitive saturation", value: 64, note: "Vendors sell their own routing tiers.", inverted: true },
      { key: "feasibility", label: "Technical feasibility", value: 70, note: "Proven pattern, hard to differentiate." },
    ],
  },
];

export const opportunityBySlug = new Map(
  opportunities.map((opportunity) => [opportunity.slug, opportunity]),
);

export const featuredOpportunitySlugs = [
  "export-compliance-copilot",
  "voice-first-field-ops",
  "maintenance-documentation-engine",
  "clinical-documentation-layer",
  "ai-evaluation-gateway",
  "treasury-document-reconciliation",
  "specialist-service-automation",
  "agent-observability",
];

export const industriesForOpportunity = (slug: string): string[] => [
  opportunityBySlug.get(slug)?.industry ?? "",
];