import type { Metadata } from "next";
import { canonical } from "@/lib/metadata";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How this ParsisPress demonstration build handles information: no accounts, no tracking, no data collection, and local-only storage.",
  alternates: { canonical: canonical("privacy") },
};

const sections: LegalSection[] = [
  {
    heading: "What this build collects",
    paragraphs: [
      "This version of ParsisPress is a frontend demonstration. It has no accounts, no server-side database, and no analytics or advertising scripts. There is nothing to sign up for and no information transmitted to a backend, because no backend exists.",
    ],
    list: [
      "No personal data is collected, processed, or stored by ParsisPress.",
      "No cookies are set by this application.",
      "No third-party tracking, profiling, or advertising networks are embedded.",
      "No external AI or analytics API is called at any point.",
    ],
  },
  {
    heading: "What is stored on your device",
    paragraphs: [
      "When you save an opportunity, the identifier of that opportunity is written to your browser's local storage so it persists when you return. That data stays on your device. It is not sent anywhere, and clearing your browser storage removes it permanently.",
      "Because it is local storage rather than a server-side account, saved ideas are not synchronised between devices or browsers, and there is no recovery if the data is cleared.",
    ],
  },
  {
    heading: "Content accuracy",
    paragraphs: [
      "Every opportunity brief, score, industry thesis, and research article on this site is illustrative sample content prepared for demonstration purposes. It is not verified market research, it contains no citations, and it should not be relied upon for any business decision.",
    ],
  },
  {
    heading: "Fonts and external requests",
    paragraphs: [
      "The interface uses web fonts served through the framework's font pipeline. Where fonts are fetched from a third-party host, your browser makes a request to that host in the ordinary way any website loads a font. No information about you is shared intentionally beyond the request itself.",
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "This product is intended for adults and is not directed at children. Because no data is collected, none is collected from children either.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "If ParsisPress develops a hosted service with accounts or persistence, this policy will be replaced with a substantive document covering what is collected, why, how long it is retained, and what rights you have over it. That change has not happened yet, and this page describes the current demonstration build accurately.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      intro="A short, honest page about what happens to your information when you use this site. In this demonstration build, the answer is close to nothing."
      updated="September 2026"
      sections={sections}
      notice="Placeholder privacy notice for a frontend demonstration. Review with counsel before publishing."
    />
  );
}