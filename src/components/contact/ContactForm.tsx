"use client";

import { useEffect, useRef, useState } from "react";

const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/gwen@gpsnutrition.ca";

const MIN_FILL_TIME_MS = 3000;
const SPAM_MATCH_THRESHOLD = 2;

const SPAM_PATTERNS: RegExp[] = [
  /\bseo\b/i,
  /search engine optimi[sz]ation/i,
  /google search results?/i,
  /rank (your|higher|on)/i,
  /\bbacklinks?\b/i,
  /digital marketing/i,
  /\b(web ?design|web ?development|wordpress) (services|company|agency)\b/i,
  /\bgoogle (ranking|ranks|page (one|1|two|2))/i,
  /(generate|boost|increase|drive) (more )?(traffic|leads|conversions|sales)/i,
];

const URL_REGEX = /https?:\/\/|www\./i;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const mountedAtRef = useRef<number | null>(null);

  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);

  if (status === "success") {
    return (
      <div className="bg-green-50 rounded-lg p-8 text-center">
        <svg
          className="w-12 h-12 text-green-600 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
        <h3 className="mt-4 text-xl text-neutral-900">Message Sent!</h3>
        <p className="mt-2 text-neutral-600 font-sans text-sm">
          Thank you for reaching out. Gwen will get back to you soon.
        </p>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        const elapsedMs = mountedAtRef.current
          ? Date.now() - mountedAtRef.current
          : MIN_FILL_TIME_MS;
        const messageValue = String(formData.get("message") ?? "");
        const websiteHoney = String(formData.get("website") ?? "");
        let spamScore = SPAM_PATTERNS.filter((p) =>
          p.test(messageValue)
        ).length;
        if (URL_REGEX.test(messageValue)) spamScore += 1;

        // Silently "succeed" on bot signals — error messages teach bots to retry.
        if (
          elapsedMs < MIN_FILL_TIME_MS ||
          spamScore >= SPAM_MATCH_THRESHOLD ||
          websiteHoney
        ) {
          setStatus("success");
          return;
        }

        setStatus("submitting");
        setErrorMessage("");

        try {
          const response = await fetch(FORMSUBMIT_ENDPOINT, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: formData,
          });

          if (!response.ok) {
            throw new Error(`Submission failed (${response.status})`);
          }

          setStatus("success");
        } catch (error) {
          setStatus("error");
          setErrorMessage(
            error instanceof Error
              ? error.message
              : "Something went wrong. Please try again or email us directly."
          );
        }
      }}
      className="space-y-6"
    >
      <input
        type="hidden"
        name="_subject"
        value="New contact form submission — GPS Nutrition"
      />
      <input type="hidden" name="_template" value="table" />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-sans font-medium text-neutral-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-neutral-300 rounded-md px-4 py-3 text-neutral-900 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-sans font-medium text-neutral-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-neutral-300 rounded-md px-4 py-3 text-neutral-900 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-sans font-medium text-neutral-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border border-neutral-300 rounded-md px-4 py-3 text-neutral-900 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-vertical"
          placeholder="Tell us a bit about your goals..."
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="text-sm font-sans text-red-700 bg-red-50 border border-red-200 rounded-md px-4 py-3"
        >
          {errorMessage || "Something went wrong. Please try again."}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-700 text-white font-sans font-medium text-sm uppercase tracking-[0.15em] py-3 px-6 rounded-md hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
