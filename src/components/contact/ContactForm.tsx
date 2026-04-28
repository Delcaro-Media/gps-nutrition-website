"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: Hook up to email service or form handler (e.g. Formspree, mailto, etc.)
        setSubmitted(true);
      }}
      className="space-y-6"
    >
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

      <button
        type="submit"
        className="w-full bg-green-700 text-white font-sans font-medium text-sm uppercase tracking-[0.15em] py-3 px-6 rounded-md hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
      >
        Send Message
      </button>
    </form>
  );
}
