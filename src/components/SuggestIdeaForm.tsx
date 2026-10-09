"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Lightbulb, Send } from "lucide-react";

export function SuggestIdeaForm() {
  const [industry, setIndustry] = useState("");
  const [problem, setProblem] = useState("");
  const [customer, setCustomer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const valid =
    industry.trim().length > 0 &&
    problem.trim().length > 20 &&
    customer.trim().length > 2;

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (industry.trim().length === 0)
      next.industry = "Choose the industry this problem sits in.";
    if (problem.trim().length < 20)
      next.problem = "Describe the problem in at least a sentence.";
    if (customer.trim().length < 3)
      next.customer = "Name who experiences it.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-forest/30 bg-forest/5 px-6 py-10 text-center">
        <CheckCircle2
          className="mx-auto h-8 w-8 text-forest"
          aria-hidden
        />
        <h3 className="serif-display mt-4 text-[1.4rem] tracking-[-0.01em]">
          Draft captured in this session
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[0.92rem] leading-relaxed text-muted">
          This is a frontend demonstration, so nothing was transmitted, stored,
          or reviewed. In a live deployment this would create a submission for
          the ParsisPress queue.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setProblem("");
              setCustomer("");
            }}
            className="rounded-sm border border-line-strong bg-paper px-4 py-2.5 text-[0.85rem] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
          >
            Suggest another
          </button>
          <Link
            href="/ideas"
            className="rounded-sm bg-forest px-4 py-2.5 text-[0.85rem] font-medium text-ivory transition-colors hover:bg-forest-deep"
          >
            Browse existing opportunities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="border border-line bg-paper p-6 sm:p-8">
      <div className="flex items-start gap-3">
        <Lightbulb className="mt-1 h-4 w-4 shrink-0 text-forest" aria-hidden />
        <div>
          <h3 className="serif-display text-[1.25rem] tracking-[-0.01em]">
            Suggest a problem
          </h3>
          <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted">
            Demonstration form. Nothing is submitted to a server, stored
            remotely, or sent anywhere — this runs entirely in your browser.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="suggest-industry"
            className="label-editorial block text-muted-2"
          >
            Industry
          </label>
          <select
            id="suggest-industry"
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
            aria-invalid={Boolean(errors.industry)}
            aria-describedby={errors.industry ? "suggest-industry-error" : undefined}
            className="mt-2 h-11 w-full rounded-sm border border-line-strong bg-ivory px-3 text-[0.92rem] focus:border-forest focus:outline-none focus-visible:outline-none"
          >
            <option value="">Select an industry</option>
            {[
              "AI Infrastructure",
              "Developer Tools",
              "Healthcare Operations",
              "Climate",
              "Finance",
              "Industrial AI",
              "SMB Automation",
              "Something else",
            ].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p id="suggest-industry-error" className="mt-2 text-[0.8rem] text-clay">
              {errors.industry}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="suggest-customer"
            className="label-editorial block text-muted-2"
          >
            Who experiences it
          </label>
          <input
            id="suggest-customer"
            type="text"
            value={customer}
            onChange={(event) => setCustomer(event.target.value)}
            placeholder="e.g. Maintenance planners at multi-site operators"
            aria-invalid={Boolean(errors.customer)}
            aria-describedby={
              errors.customer ? "suggest-customer-error" : undefined
            }
            className="mt-2 h-11 w-full rounded-sm border border-line-strong bg-ivory px-3 text-[0.92rem] placeholder:text-muted-2 focus:border-forest focus:outline-none focus-visible:outline-none"
          />
          {errors.customer && (
            <p id="suggest-customer-error" className="mt-2 text-[0.8rem] text-clay">
              {errors.customer}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="suggest-problem"
            className="label-editorial block text-muted-2"
          >
            The repeated problem
          </label>
          <textarea
            id="suggest-problem"
            value={problem}
            onChange={(event) => setProblem(event.target.value)}
            rows={4}
            placeholder="Describe something a specific person does repeatedly, badly, and would pay to stop doing."
            aria-invalid={Boolean(errors.problem)}
            aria-describedby={errors.problem ? "suggest-problem-error" : undefined}
            className="mt-2 w-full resize-y rounded-sm border border-line-strong bg-ivory px-3 py-3 text-[0.92rem] leading-relaxed placeholder:text-muted-2 focus:border-forest focus:outline-none focus-visible:outline-none"
          />
          {errors.problem ? (
            <p id="suggest-problem-error" className="mt-2 text-[0.8rem] text-clay">
              {errors.problem}
            </p>
          ) : (
            <p className="numeric mt-2 text-[0.76rem] text-muted-2">
              {problem.trim().length} characters · 20 minimum
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={!valid}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-forest px-5 py-3 text-[0.9rem] font-medium text-ivory transition-colors enabled:hover:bg-forest-deep disabled:cursor-not-allowed disabled:bg-line-strong disabled:text-muted-2"
      >
        <Send className="h-4 w-4" aria-hidden />
        Submit demo suggestion
      </button>
    </form>
  );
}