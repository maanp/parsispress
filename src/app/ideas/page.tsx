import type { Metadata } from "next";
import { Suspense } from "react";
import { SavedIdeasProvider } from "@/components/SavedIdeasProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { IdeaExplorer } from "@/components/IdeaExplorer";

export const metadata: Metadata = {
  title: "Opportunity Explorer",
  description:
    "Search, filter, and sort a demonstration dataset of startup opportunities across seven industry categories. Open any brief for a full research view.",
  alternates: { canonical: "/ideas" },
};

export default function IdeasPage() {
  return (
    <SavedIdeasProvider>
      <SiteHeader />
      <main id="main" className="border-b border-line bg-ivory">
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-7 sm:py-16 lg:px-10">
          <header className="border-b border-line pb-8">
            <p className="label-editorial flex items-center gap-3 text-forest">
              <span aria-hidden className="h-px w-6 bg-forest/40" />
              Opportunity explorer
            </p>
            <h1 className="serif-display mt-5 max-w-3xl text-[clamp(2.1rem,5vw,3.2rem)] leading-[1.03] tracking-[-0.025em]">
              Fifteen sample opportunities, structured for investigation.
            </h1>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-[1.7] text-muted">
              Each brief names a customer, describes a repeated workflow, and
              lists the assumptions that would need testing. Search by keyword,
              filter by industry, or sort by opportunity score. Saved ideas stay
              in this browser.
            </p>
          </header>

          <div className="mt-10">
            <Suspense
              fallback={
                <div className="border border-line bg-paper p-10 text-center">
                  <p className="label-editorial text-muted-2">
                    Loading explorer…
                  </p>
                </div>
              }
            >
              <IdeaExplorer />
            </Suspense>
          </div>
        </div>
      </main>
      <SiteFooter />
    </SavedIdeasProvider>
  );
}