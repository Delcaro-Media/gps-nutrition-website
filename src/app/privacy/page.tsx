import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How GPS Nutrition Ltd. collects and uses your information. We keep it simple — your data is used to respond to you, and we never sell it.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | GPS Nutrition",
    description:
      "How GPS Nutrition Ltd. collects and uses your information.",
    url: "/privacy",
  },
  twitter: {
    title: "Privacy Policy | GPS Nutrition",
    description:
      "How GPS Nutrition Ltd. collects and uses your information.",
  },
};

const lastUpdated = "April 29, 2026";

export default function PrivacyPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 pt-20 pb-16">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 font-sans font-medium">
            Privacy
          </p>
          <h1 className="mt-4 text-4xl text-neutral-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-sm text-neutral-500 font-sans">
            Last updated: {lastUpdated}
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-12 space-y-10 text-neutral-700 leading-relaxed font-sans text-base">
            <p>
              {siteConfig.fullName} (&ldquo;{siteConfig.name},&rdquo;
              &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This
              policy explains what we collect when you visit{" "}
              <span className="whitespace-nowrap">{siteConfig.url.replace(/^https?:\/\//, "")}</span>{" "}
              and how we use it. We keep things simple: we use your information
              to respond to you and to understand how the site is used.{" "}
              <strong className="text-neutral-900">
                We do not sell your personal information to anyone.
              </strong>
            </p>

            <div>
              <h2 className="text-2xl text-neutral-900">
                What we collect
              </h2>
              <ul className="mt-4 space-y-3 list-disc pl-6">
                <li>
                  <strong className="text-neutral-900">
                    Contact form submissions.
                  </strong>{" "}
                  When you fill out our contact form, we receive the name,
                  email address, and message you send us. We use this to reply
                  to your inquiry.
                </li>
                <li>
                  <strong className="text-neutral-900">
                    Basic analytics.
                  </strong>{" "}
                  We use Google Analytics to understand things like how many
                  people visit the site, which pages are popular, and roughly
                  where visitors are located. Google Analytics may set cookies
                  in your browser. The data we see is aggregated — we do not
                  use it to identify you personally.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-neutral-900">
                How we use your information
              </h2>
              <ul className="mt-4 space-y-3 list-disc pl-6">
                <li>To reply to your messages and provide our services.</li>
                <li>To improve the website and the content we offer.</li>
                <li>
                  To comply with our legal obligations as a Canadian business.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-neutral-900">
                Who we share it with
              </h2>
              <p className="mt-4">
                We do not sell, rent, or trade your personal information. The
                only third parties that touch your data are the services that
                help us run this site:
              </p>
              <ul className="mt-4 space-y-3 list-disc pl-6">
                <li>
                  <strong className="text-neutral-900">FormSubmit</strong> —
                  delivers contact form messages to our email inbox.
                </li>
                <li>
                  <strong className="text-neutral-900">Google Analytics</strong>{" "}
                  — provides anonymous traffic statistics.
                </li>
                <li>
                  <strong className="text-neutral-900">Vercel</strong> — hosts
                  the website.
                </li>
              </ul>
              <p className="mt-4">
                We may also share information if required by law (for example,
                in response to a valid court order).
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-neutral-900">
                Cookies
              </h2>
              <p className="mt-4">
                The only cookies we use come from Google Analytics, and they
                exist to count visits and understand site usage. You can block
                cookies in your browser settings or use a browser extension to
                opt out of Google Analytics if you prefer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-neutral-900">
                Your rights
              </h2>
              <p className="mt-4">
                You can ask us to access, correct, or delete the personal
                information we have about you at any time. Just email us at{" "}
                <a
                  href={`mailto:${siteConfig.emails.info}`}
                  className="text-green-700 underline hover:text-green-800"
                >
                  {siteConfig.emails.info}
                </a>{" "}
                and we&apos;ll take care of it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-neutral-900">
                Updates to this policy
              </h2>
              <p className="mt-4">
                If we make changes to how we handle your information, we&apos;ll
                update this page and revise the &ldquo;last updated&rdquo; date
                above.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-neutral-900">
                Questions
              </h2>
              <p className="mt-4">
                Get in touch any time at{" "}
                <a
                  href={`mailto:${siteConfig.emails.info}`}
                  className="text-green-700 underline hover:text-green-800"
                >
                  {siteConfig.emails.info}
                </a>{" "}
                or through our{" "}
                <Link
                  href="/contact"
                  className="text-green-700 underline hover:text-green-800"
                >
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
