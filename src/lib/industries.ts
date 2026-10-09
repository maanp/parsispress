export type Industry = {
  slug: string;
  name: string;
  /** One-line definition used in the directory and filter chips. */
  tagline: string;
  /** Why this category is worth watching, framed as a hypothesis not a finding. */
  thesis: string;
  /** Short label describing the shape of the buyer. */
  buyer: string;
  /** Illustrative signal themes the platform watches for in this category. */
  signals: string[];
};

export const industries: Industry[] = [
  {
    slug: "ai-infrastructure",
    name: "AI Infrastructure",
    tagline: "Tooling that makes models cheaper to run and easier to govern.",
    thesis:
      "As model access commoditises, the durable value moves down the stack: routing, evaluation, cost control, and the unglamorous plumbing enterprises need to ship AI inside regulated processes.",
    buyer: "Platform and ML engineering leads",
    signals: [
      "Inference cost curves diverging from model capability",
      "Procurement asking for evaluation evidence",
      "Retrieval quality treated as an ops problem, not research",
    ],
  },
  {
    slug: "developer-tools",
    name: "Developer Tools",
    tagline: "Software for the people who build and operate software.",
    thesis:
      "Agentic coding widened the surface area for tooling. The open questions are review, testing, migration, and the maintenance work that follows generated code faster than teams can absorb.",
    buyer: "Engineering managers and staff engineers",
    signals: [
      "Pull request volume rising faster than review capacity",
      "Legacy migration treated as a permanent tax",
      "Coding agents shipping code nobody has read",
    ],
  },
  {
    slug: "healthcare-operations",
    name: "Healthcare Operations",
    tagline: "Administrative and operational software around clinical care.",
    thesis:
      "Clinical outcomes are hard to move with software, but administrative load is enormous and measurable. Revenue-cycle, referral, scheduling, and documentation work absorb staff time without improving care.",
    buyer: "Practice operators and health system administrators",
    signals: [
      "Documentation burden cited as a driver of clinician attrition",
      "Prior authorisation and referral friction lengthening wait times",
      "Specialist clinics losing margin to admin overhead",
    ],
  },
  {
    slug: "climate",
    name: "Climate",
    tagline: "Software for measuring, verifying, and decarbonising real assets.",
    thesis:
      "Climate software historically lived in reporting. The more durable layer is measurement and verification, where physical assets generate data that still has to be reconciled, certified, and financed.",
    buyer: "Asset operators, verifiers, and sustainability leads",
    signals: [
      "Verification emerging as the bottleneck for carbon markets",
      "Asset telemetry outpacing the teams that reconcile it",
      "Procurement needing evidence, not estimates",
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    tagline: "Research, reconciliation, and operations for financial workflows.",
    thesis:
      "Finance teams lose time to document gathering, reconciliation, and reporting preparation. These workflows are rule-heavy and text-heavy at once, which is exactly where language models add leverage without needing to own the ledger.",
    buyer: "Finance operations and treasury teams",
    signals: [
      "Close processes still described as manual",
      "Counterparty documents arriving in inconsistent formats",
      "Regulatory reporting expanding faster than headcount",
    ],
  },
  {
    slug: "industrial-ai",
    name: "Industrial AI",
    tagline: "Software for maintenance, field service, and physical operations.",
    thesis:
      "Industrial sites generate enormous amounts of unstructured signal — work orders, photos, sensor logs, voice notes. Almost none of it is structured today, so the cost of operations knowledge stays high and undocumented.",
    buyer: "Maintenance leads and operations managers",
    signals: [
      "Experienced technicians leaving faster than replacements arrive",
      "Asset data trapped in closed vendor portals",
      "Downtime treated as inevitable rather than measured",
    ],
  },
  {
    slug: "smb-automation",
    name: "SMB Automation",
    tagline: "Focused automation for small and specialist businesses.",
    thesis:
      "Small businesses lose the most time to unglamorous coordination: chasing invoices, re-keying quotes, rescheduling, re-explaining. The products that work here are narrow, cheap, and integrate with what they already use.",
    buyer: "Owner-operators and practice managers",
    signals: [
      "Adoption gaps between consumer and enterprise tooling",
      "Fragmented software stacks with no owner",
      "Billing leakage discovered late in the month",
    ],
  },
];

export const industryBySlug = new Map(industries.map((i) => [i.slug, i]));

export const industryName = (slug: string): string =>
  industryBySlug.get(slug)?.name ?? slug;