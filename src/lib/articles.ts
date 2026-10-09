export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  /** Label shown in the byline area. Demo editorial content. */
  readingTime: string;
  publishedAt: string;
  /** Section headings used to build the article body. */
  sections: {
    heading: string;
    paragraphs: string[];
    /** Optional pull quote or list rendered between paragraphs. */
    aside?: { kind: "quote" | "list"; text: string; items?: string[] };
  }[];
};

export const articles: Article[] = [
  {
    slug: "vertical-ai-overlooked-industries",
    title: "Why vertical AI may create opportunities in overlooked industries",
    dek: "Generic tools win horizontal attention. The remaining space is a long list of industries where the software never existed because the buyer was too small, too specialised, or too hard to serve.",
    category: "Market Structure",
    readingTime: "7 min",
    publishedAt: "2026-09-24",
    sections: [
      {
        heading: "Horizontal tools abstract away the work",
        paragraphs: [
          "The last decade of software moved upward. Each generation generalised one more layer: database, cloud, mobile, API, then model. The pattern is reliable and it produced enormous companies, but it has a predictable side effect. At every layer, the value leaks downward into the specifics the general platform chose not to know about.",
          "A general-purpose assistant does not know what a bearing housing tolerance means, what a claim has to contain before a payer accepts it, or which two documents a broker needs alongside a bill of lading. That is not a deficiency in the model. It is the general product declining to be specific, which is the correct decision for it and a permanent opportunity for someone else.",
        ],
      },
      {
        heading: "Three reasons vertical software kept losing",
        paragraphs: [
          "Vertical products have failed repeatedly, and the reasons are worth restating because the conditions have changed in two specific ways.",
          "First, the buyer was too small for the vendor. A clinic with four practitioners cannot support enterprise software economics, so it was served by a general tool or by nothing. Second, the workflow was too bespoke to build without constant services work. Third, the data was too messy to automate: the work lived in fax, voice, and paper, and no software could read it reliably.",
          "Of the three, the third has genuinely changed. Models that handle messy documents, images, and speech turn 'too bespoke' from a permanent structural problem into a configuration problem. The first two remain live, and they are why narrow scope matters more than ever rather than less.",
        ],
        aside: {
          kind: "list",
          text: "Signals that a neglected vertical has become buildable:",
          items: [
            "The work is documented in documents rather than in people's heads",
            "The buyer already pays for adjacent software or services",
            "The workflow has a natural unit — one claim, one shipment, one work order",
            "Compliance or audit requirements create a record someone must keep",
          ],
        },
      },
      {
        heading: "What overlooked actually means",
        paragraphs: [
          "Overlooked does not mean small. Several of the largest professional services industries in the economy are barely served by purpose-built software, because the buyer was never a technology buyer and the incumbent systems were sold by the same firms providing the underlying service.",
          "The practical test is whether the person who suffers from the problem is the same person who signs for software. When they are not, the sale has to go through a professional intermediary, and that intermediary is the distribution channel rather than the obstacle.",
        ],
      },
      {
        heading: "How to think about a vertical opportunity",
        paragraphs: [
          "The productive question is not 'can AI do this' — that question has stopped being discriminating. It is whether the work has a countable unit that a buyer already measures, and whether the output can be reviewed in under a minute by someone who does not need to trust the technology to trust the result.",
          "If a workflow is measured in units and reviewed by a human who is accountable for the outcome, a narrow product can be worth paying for. If it is diffuse, unmeasured, and reviewed only retrospectively, the same product becomes a demo.",
        ],
      },
    ],
  },
  {
    slug: "startup-ideas-in-repetitive-workflows",
    title: "How to find startup ideas inside repetitive business workflows",
    dek: "The most reliable source of startup ideas is not trend reports. It is a boring spreadsheet, repeated by the same person, every week, for years.",
    category: "Opportunity Discovery",
    readingTime: "6 min",
    publishedAt: "2026-09-10",
    sections: [
      {
        heading: "Repetition is a measurement, not a complaint",
        paragraphs: [
          "People describe repetitive work as a complaint. It is better read as an instrument. If a task is performed on a schedule, someone decided the schedule was necessary, which means an output exists, a cadence exists, and a person is accountable for the gap between them.",
          "That structure is what a business can be built on. A workflow that repeats has a measurable baseline, and any improvement is demonstrable in a number the owner already watches.",
        ],
      },
      {
        heading: "Where to look first",
        paragraphs: [
          "The highest-signal workflows share a few properties. They are owned by one person with authority to change them. They are performed with tools that were not designed for the task. They produce an output somebody else consumes. And they have been tolerated, rather than solved, for long enough that nobody remembers why they work that way.",
          "The last property matters most. A workflow nobody questions is a workflow where the cost has been normalised. Ask what would stop happening if it disappeared, then ask who last proposed removing it.",
        ],
        aside: {
          kind: "quote",
          text: "If nobody remembers why the process works that way, the process is not a requirement. It is a habit with a cost attached.",
        },
      },
      {
        heading: "The weekly spreadsheet test",
        paragraphs: [
          "Ask three questions about any workflow you suspect. How often is it done? What goes in that does not come out automatically? What happens when the person doing it is on holiday?",
          "The third question is the useful one. A workflow that stops entirely when one person is absent is not a process, it is a single point of failure. Businesses pay real money to remove that dependency, and they rarely recognise it as software-shaped work.",
        ],
      },
      {
        heading: "Turning a workflow into a thesis",
        paragraphs: [
          "Once you have a repeated workflow, the work is to write a falsifiable claim about it: that the reconciliation step in this particular back office consumes a measurable share of one person's week, and that a specific intervention removes most of it. If you cannot name the person and the week, the workflow is an abstraction rather than an opportunity.",
          "The next step is unglamorous. Sit with the person who does the work for an hour. The workflow as described and the workflow as performed are rarely the same workflow, and the difference is usually where the business is.",
        ],
      },
    ],
  },
  {
    slug: "defensibility-beyond-the-model",
    title: "What makes an AI startup defensible beyond its model",
    dek: "Model access is becoming a commodity and a shared capability. The defensible parts of an AI company are somewhere else, and they are mostly operational.",
    category: "Strategy",
    readingTime: "8 min",
    publishedAt: "2026-08-26",
    sections: [
      {
        heading: "The model is an input",
        paragraphs: [
          "Treat the model as an input the way you would treat cloud compute: strategically important, priced against alternatives, and replaceable when a better option appears. Companies built on the assumption that owning a model was the moat discovered this the expensive way.",
          "That does not make models irrelevant. It makes them a shared layer, in which the interesting differences accumulate above and below it.",
        ],
      },
      {
        heading: "Five places defensibility actually collects",
        paragraphs: [
          "Distribution built on trust in a narrow domain. A product a surgeon or a maintenance lead defaults to is sticky for reasons no model capability can replicate, because it reflects years of being correct in a specific context.",
          "Proprietary feedback shaped by workflow. If your product is used inside a process, you accumulate corrections that a general model never sees. This compounds, but only if the correction loop is genuinely closed rather than aspirational.",
          "Integration depth with the system of record. Being where the data already lives is a structural position, and it is much harder to displace than being better.",
          "Operational reliability under failure. Most enterprise AI failures are not capability failures. They are the unhandled exception, the timeout, the partial failure at 2am. A product that degrades predictably and tells the user wins accounts that a marginally cleverer product loses.",
          "Regulatory and contractual position. In some categories, the defensible asset is permission — a certification, an accreditation, a data-processing agreement, a compliance posture that took two years and cannot be bought quickly.",
        ],
        aside: {
          kind: "list",
          text: "A useful test for defensibility:",
          items: [
            "If a well-funded competitor shipped your exact feature, how long would you keep the customer?",
            "What does your product know that a general model could not learn from public data?",
            "Which part of your system fails worst, and who absorbs that failure today?",
          ],
        },
      },
      {
        heading: "Speed of learning as a strategy",
        paragraphs: [
          "The one advantage available to a small company against a large one is not capability and not price. It is the number of careful iterations between a hypothesis and a confident answer.",
          "This argues for narrow products, short feedback loops, and a willingness to be wrong quickly about the workflow rather than slowly about the roadmap. Companies that build a platform before they know the atomic workflow usually arrive at a correct platform too late to matter.",
        ],
      },
      {
        heading: "What not to count as a moat",
        paragraphs: [
          "Prompt quality, unless it is inseparable from the product and continuously maintained from real usage. Fine-tuning as a strategy rather than a tactic. Interface polish, which competitors can match in a sprint. And any claim to uniqueness that rests on having found an idea rather than on having learned something.",
        ],
      },
    ],
  },
  {
    slug: "narrow-problems-better-businesses",
    title: "Why narrow, painful problems can make better businesses than broad AI products",
    dek: "A narrow product can be judged. A broad product can only be admired. Judgement is what produces pricing power, retention, and a business that survives being wrong.",
    category: "Strategy",
    readingTime: "6 min",
    publishedAt: "2026-08-12",
    sections: [
      {
        heading: "Admiration is not a business model",
        paragraphs: [
          "Broad AI products are easy to like. They are easy to demo, easy to explain, and easy to fund. They are also difficult to price, difficult to prove value, and difficult to keep, because nothing in them is load-bearing for the customer.",
          "A narrow product that removes one specific recurring cost has the opposite properties. It is hard to demo to a room and easy to justify to the one person who owns the budget.",
        ],
      },
      {
        heading: "The cost of narrowness, honestly stated",
        paragraphs: [
          "Narrow products are harder to start because you must find a customer, not a market. They cap your initial revenue, they make fundraising narratives less comfortable, and they make it easy for a larger competitor to decide to absorb you by building your small thing badly on purpose.",
          "None of those objections are fatal. They are all reasons the company has to be genuinely good at the narrow thing rather than merely adjacent to it.",
        ],
      },
      {
        heading: "How to test whether a problem is narrow enough",
        paragraphs: [
          "You can name the person. Not a role — a person, or a population you could list. You can describe when it happens, in a specific recurring situation, rather than when it is generally inconvenient. You can say what they do today instead, and the answer is a specific workflow rather than 'nothing'.",
          "And you can measure the improvement. If you cannot state what would be different for the customer thirty days in, the problem is probably a preference rather than a pain, and preferences do not sustain businesses.",
        ],
        aside: {
          kind: "quote",
          text: "A founder who can describe the customer, the moment, and the current workaround has more than most of a pitch deck.",
        },
      },
      {
        heading: "Broadness is a later decision",
        paragraphs: [
          "The instinct to design for the general case early is usually about reducing anxiety rather than increasing probability. It also destroys the main source of information you have: what a specific person tells you when you have built exactly what they asked for.",
          "Start narrow enough that you can watch the workflow change. Expansion into adjacent workflows is far easier and far cheaper once you are embedded in one, and it is informed rather than imagined.",
        ],
      },
    ],
  },
  {
    slug: "reading-market-signals-without-hype",
    title: "Reading market signals without importing someone else's hype",
    dek: "Most trend commentary is written to be interesting. A smaller number of observations are useful, and they are recognisable when you know what to ignore.",
    category: "Opportunity Discovery",
    readingTime: "7 min",
    publishedAt: "2026-07-29",
    sections: [
      {
        heading: "Three kinds of claim, only one of them useful",
        paragraphs: [
          "Statements about a market fall into three categories. One describes a change in capability, such as a model becoming able to read a specific kind of document. One describes a change in cost, such as processing a unit of work becoming inexpensive. The third describes enthusiasm, such as an increase in funding or conference talk volume.",
          "Capability and cost changes open opportunities. Enthusiasm closes them, because by the time a category is loud, the accessible version of the problem has been taken.",
        ],
      },
      {
        heading: "Signals worth tracking",
        paragraphs: [
          "Look for statements of the form 'this used to require X and now does not'. That shape — a capability or cost threshold crossed — is the useful signal, because it is specific, checkable, and directional.",
          "Another useful class is regulatory or contractual change, which creates a record-keeping obligation nobody has built for yet. A requirement to produce evidence is a requirement to produce it repeatedly, and repetition is where software businesses live.",
          "A third class is labour substitution in a specific role. When a task that occupied a trained person becomes partially automated, the surrounding work usually falls apart first, because it was never designed to be handed between humans and machines.",
        ],
        aside: {
          kind: "list",
          text: "Noise to ignore:",
          items: [
            "Category funding totals, which say nothing about access",
            "Conference speaking slots, which track budget rather than demand",
            "Roundup posts describing a year that is already over",
            "Benchmarks on tasks nobody pays to complete",
          ],
        },
      },
      {
        heading: "The falsification habit",
        paragraphs: [
          "Every signal you act on should have a cheap test that could prove it wrong. If a capability improvement makes an opportunity possible, the test is whether a customer can now do the thing end to end, not whether a demonstration was impressive.",
          "Practically, this means each promising observation should map to one specific experiment with a customer, a cost, and a date. Observations without those three attributes are context, and context is fine — it just should not drive a roadmap.",
        ],
      },
    ],
  },
  {
    slug: "validation-plan-before-you-build",
    title: "A validation plan you can run in two weeks",
    dek: "The fastest way to waste a quarter is to build before someone has complained. A short, specific validation plan costs days and replaces opinion with evidence.",
    category: "Validation",
    readingTime: "5 min",
    publishedAt: "2026-07-15",
    sections: [
      {
        heading: "What validation is actually for",
        paragraphs: [
          "Validation is not about confirming what you want to build. It is about finding the fastest way to be wrong, and doing that while being wrong is still cheap.",
          "That reframing matters because the most common failure is not building the wrong thing. It is building the right thing for a customer who does not exist, having discovered it eleven months later.",
        ],
      },
      {
        heading: "The four-question plan",
        paragraphs: [
          "Every plan worth running in two weeks answers four questions with evidence rather than opinion: does the problem occur, how often does it occur, what does the person do about it today, and will they change?",
          "Problems occur more often than founders assume, because people have adapted. Frequency matters more than severity for pricing. The current workaround reveals budget. And willingness to change is the only question that predicts a purchase, which is why it is the one most often skipped.",
        ],
        aside: {
          kind: "list",
          text: "Two-week plan, in order:",
          items: [
            "Week one, days 1-3: interview 10 people about the last time it happened",
            "Week one, days 4-5: ask what they did instead, and what it cost",
            "Week two: deliver the intervention manually to 3 of them",
            "Week two: ask for payment or a scheduled second session",
          ],
        },
      },
      {
        heading: "Signals that should end the project",
        paragraphs: [
          "Good validation plans specify their own failure conditions in advance. If ten interviews produce no recurring incident, the problem is not there at scale. If people like the idea but cannot name a recent occurrence, they are responding to the framing rather than reporting a pain.",
          "If the manual version works but nobody will pay, you may have a hobby rather than a business — and it is far better to learn that in week two than in year two.",
        ],
      },
    ],
  },
];

export const articleBySlug = new Map(articles.map((a) => [a.slug, a]));