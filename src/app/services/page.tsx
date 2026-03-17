import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "GPS Nutrition services: meal plans, group programs, and personalized one-on-one nutrition consulting.",
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
            Find the Right Fit for You
          </h1>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="mt-6 text-neutral-600 max-w-2xl leading-relaxed font-sans text-base">
            GPS Nutrition offers three streams of service to meet you where you
            are on your health journey. From grab-and-go meal plans to fully
            personalized consultations.
          </p>
        </FadeIn>
      </section>

      {/* Meal Plans */}
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
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 font-sans font-medium">
                Stream One
              </p>
            </div>
            <h2 className="text-3xl text-neutral-900">Meal Plans</h2>
            <div className="mt-8 space-y-5 text-neutral-600 leading-relaxed font-sans text-base">
              <p>
                Our meal plans are designed for people who want a straightforward
                path to healthier eating without the guesswork. Choose from
                plans tailored to different goals and calorie levels.
              </p>
              <p>
                Each meal plan is delivered as a comprehensive PDF document
                with clear recipes, portion guidance, and shopping lists. It&apos;s
                the perfect starting point if you&apos;re looking for an affordable,
                easy-to-follow approach.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-neutral-600 font-sans text-base">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Plans for different goals and calorie levels
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Clear recipes and shopping lists
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Delivered as a downloadable PDF
              </li>
            </ul>
          </FadeIn>
          <FadeIn
            direction="left"
            delay={150}
            className="lg:col-span-2 flex items-center"
          >
            <div className="w-full bg-green-50 rounded-lg p-8 text-center">
              <svg
                className="w-20 h-20 text-green-600 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              <p className="mt-4 text-lg font-serif text-green-800">
                Meal Plans
              </p>
              <p className="mt-2 text-sm text-neutral-500 font-sans">
                Simple &amp; affordable
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Group Programs */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            <FadeIn
              direction="right"
              className="lg:col-span-2 order-2 lg:order-1 flex items-center"
            >
              <div className="w-full bg-green-50 rounded-lg p-8 text-center">
                <svg
                  className="w-20 h-20 text-green-600 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                <p className="mt-4 text-lg font-serif text-green-800">
                  Group Programs
                </p>
                <p className="mt-2 text-sm text-neutral-500 font-sans">
                  4&ndash;6 week cohorts
                </p>
              </div>
            </FadeIn>
            <FadeIn
              direction="left"
              delay={150}
              className="lg:col-span-3 order-1 lg:order-2"
            >
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
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 font-sans font-medium">
                  Stream Two
                </p>
              </div>
              <h2 className="text-3xl text-neutral-900">Group Programs</h2>
              <div className="mt-8 space-y-5 text-neutral-600 leading-relaxed font-sans text-base">
                <p>
                  Our group programs run in 4&ndash;6 week cohorts, giving you
                  the structure of a guided program with the added motivation
                  of a supportive community. Each cohort works through the
                  program together with shared accountability.
                </p>
                <p>
                  You&apos;ll receive a meal plan, access to the group
                  community, and ongoing support throughout the program.
                  It&apos;s the perfect option if you thrive with social
                  accountability and want to stay on track with others who
                  share your goals.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-neutral-600 font-sans text-base">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  4&ndash;6 week structured programs
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Community support and accountability
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Included meal plan and ongoing guidance
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* One-on-One */}
      <section className="mx-auto max-w-6xl px-5 py-24 border-t border-neutral-200">
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
                Stream Three
              </p>
            </div>
            <h2 className="text-3xl text-neutral-900">
              One-on-One Consulting
            </h2>
            <div className="mt-8 space-y-5 text-neutral-600 leading-relaxed font-sans text-base">
              <p>
                Our most comprehensive offering. One-on-one consulting gives
                you a nutrition plan that is 100% designed for your specific
                body, goals, and lifestyle. This includes detailed analysis
                and the ability to pull requisitions for lab work.
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
                Tailored to your body, goals, and lifestyle
              </li>
            </ul>
          </FadeIn>
          <FadeIn
            direction="left"
            delay={150}
            className="lg:col-span-2 flex items-center"
          >
            <div className="w-full bg-green-50 rounded-lg p-8 text-center">
              <svg
                className="w-20 h-20 text-green-600 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <p className="mt-4 text-lg font-serif text-green-800">
                One-on-One
              </p>
              <p className="mt-2 text-sm text-neutral-500 font-sans">
                Fully personalized
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
              <h2 className="text-3xl text-white">Not Sure Which Is Right?</h2>
              <p className="mt-4 text-green-100 font-sans text-base">
                Reach out and we&apos;ll help you figure out which service is
                the best fit for where you are right now.
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
