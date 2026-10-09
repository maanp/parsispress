import type { Metadata } from "next";
import { canonical } from "@/lib/metadata";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Placeholder terms of use for the ParsisPress demonstration build, covering acceptable use, intellectual property, and the absence of warranties.",
  alternates: { canonical: canonical("terms") },
};

const sections: LegalSection[] = [
  {
    heading: "Nature of this service",
    paragraphs: [
      "ParsisPress is currently a demonstration frontend. It is provided so the product concept can be evaluated, not as a commercial service. Nothing on this site constitutes a subscription, an offer, or a commitment to provide a hosted product.",
    ],
  },
  {
    heading: "Informational use only",
    paragraphs: [
      "All opportunity briefs, scores, evaluation frameworks, industry theses, and research articles are illustrative content generated for demonstration. They describe hypotheses about how a business might look, not verified facts about any market, customer, or company.",
      "You should not treat any content on this site as market research, financial advice, legal advice, or a recommendation to start a particular business. Business decisions require your own verification with real customers and real data.",
    ],
  },
  {
    heading: "No warranty",
    paragraphs: [
      "The site is provided as is, without warranty of any kind, express or implied, including warranties of accuracy, merchantability, fitness for a particular purpose, or non-infringement. Scores described as illustrative are heuristics and carry no predictive claim about commercial outcomes.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, ParsisPress and anyone involved in building it will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this site or reliance on its content. Any liability is limited to the extent permitted by applicable law.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The ParsisPress name, wordmark, site design, interface, and written content on this site are the property of ParsisPress unless stated otherwise. You may reference and link to the site freely. You may not reproduce substantial portions of the content, or use the marks, in a way that implies endorsement or affiliation, without written permission.",
      "Opportunity briefs reference industries, roles, and workflows generically. Any resemblance to a real company or product is incidental, and no real business is described or endorsed.",
    ],
  },
  {
    heading: "Acceptable use",
    paragraphs: [
      "You may browse, read, search, filter, and save opportunities for your own evaluation. You may not attempt to disrupt the site, probe it for vulnerabilities without permission, scrape it at volume for redistribution, or use the suggestion form to submit content that is unlawful or abusive.",
    ],
  },
  {
    heading: "External links and contact",
    paragraphs: [
      "Where the site links out, it does so for context and ParsisPress is not responsible for third-party content or practices. Questions about these terms can be sent to the contact address listed on this page.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="Basic placeholder terms covering acceptable use, intellectual property, and the limits of what this site claims. These require legal review before the site is publicly launched."
      updated="September 2026"
      sections={sections}
      notice="Placeholder terms. These are not enforceable as written and must be drafted and reviewed by a qualified lawyer before launch."
    />
  );
}