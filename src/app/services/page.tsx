import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "One-on-One Nutrition Consulting",
  description:
    "Personalized one-on-one nutrition consulting with GPS Nutrition. Plans built around your body, goals, and lifestyle — including lab requisitions and detailed analysis.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "One-on-One Nutrition Consulting | GPS Nutrition",
    description:
      "Plans built around your body, goals, and lifestyle. Includes lab requisitions and detailed analysis.",
    url: "/services",
  },
  twitter: {
    title: "One-on-One Nutrition Consulting | GPS Nutrition",
    description:
      "Plans built around your body, goals, and lifestyle. Includes lab requisitions and detailed analysis.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-5 pt-20 pb-16">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 font-sans font-medium">
            Services
          </p>
          <h1 className="mt-4 text-4xl text-neutral-900 sm:text-5xl max-w-3xl">
            One-on-One Nutrition Consulting
          </h1>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="mt-6 text-neutral-600 max-w-2xl leading-relaxed font-sans text-base">
            A nutrition plan that&apos;s 100% designed for your specific body,
            goals, and lifestyle — including detailed analysis and lab
            requisitions when they&apos;re the right fit.
          </p>
        </FadeIn>
      </section>

      {/* One-on-One */}
      <section className="mx-auto max-w-6xl px-5 py-16 border-t border-neutral-200">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <FadeIn direction="right" className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-green-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 font-sans font-medium">
                How It Works
              </p>
            </div>
            <h2 className="text-3xl text-neutral-900">
              A Plan Built Around You
            </h2>
            <div className="mt-8 space-y-5 text-neutral-600 leading-relaxed font-sans text-base">
              <p>
                One-on-one consulting gives you a nutrition plan that is 100%
                designed for your specific body, goals, and lifestyle. This
                includes detailed analysis and the ability to pull requisitions
                for lab work.
              </p>
              <p>
                This is ideal for individuals with specific health conditions,
                athletic performance goals, or anyone who wants the most
                thorough and personalized approach to their nutrition.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-neutral-600 font-sans text-base">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Fully personalized nutrition plan
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Lab requisitions and detailed analysis
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Tailored to your physiological needs
              </li>
            </ul>
          </FadeIn>
          <FadeIn
            direction="left"
            delay={150}
            className="lg:col-span-2 flex items-center"
          >
            <div className="w-full">
              <div className="overflow-hidden rounded-lg aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1159276248"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Metabolic Balance — One-on-One Consulting"
                />
              </div>
              <p className="mt-4 text-sm text-neutral-500 font-sans italic">
                Before we chat, I&apos;d love for you to watch this — it gives a
                really clear picture of how we approach metabolism, hormones, and
                sustainable results.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <FadeIn direction="none">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl text-white">Ready to Get Started?</h2>
              <p className="mt-4 text-green-100 font-sans text-base">
                Reach out and let&apos;s talk through your goals and whether
                one-on-one consulting is the right fit for you.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-8 text-sm font-sans font-medium uppercase tracking-[0.15em] text-white border-b border-white pb-1 hover:border-green-300 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
