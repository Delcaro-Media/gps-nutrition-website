import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { FadeIn } from "@/components/FadeIn";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services overview */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <FadeIn direction="none">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 font-sans font-medium">
                What We Offer
              </p>
              <h2 className="mt-3 text-3xl text-neutral-900">
                Three Ways to Reach Your Goals
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <FadeIn>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-700"
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
                <h3 className="text-xl text-neutral-900">Meal Plans</h3>
                <p className="mt-4 text-neutral-600 leading-relaxed font-sans text-base">
                  Ready-to-follow meal plans tailored to different goals and
                  calorie levels. A simple, affordable way to start eating
                  better today.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-700"
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
                <h3 className="text-xl text-neutral-900">Group Programs</h3>
                <p className="mt-4 text-neutral-600 leading-relaxed font-sans text-base">
                  Join a 4&ndash;6 week cohort for community support and
                  accountability. Work through a structured program with a
                  group of like-minded individuals.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-700"
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
                <h3 className="text-xl text-neutral-900">
                  One-on-One Consulting
                </h3>
                <p className="mt-4 text-neutral-600 leading-relaxed font-sans text-base">
                  A fully personalized nutrition plan designed specifically for
                  your body, goals, and lifestyle. Includes requisitions and
                  detailed analysis.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="none" delay={400}>
            <div className="mt-16 text-center">
              <Link
                href="/services"
                className="inline-block text-sm font-sans font-medium uppercase tracking-[0.15em] text-green-700 border-b border-green-700 pb-1 hover:border-green-400 transition-colors"
              >
                Learn More About Our Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <FadeIn direction="right">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 font-sans font-medium">
                  About GPS Nutrition
                </p>
                <h2 className="mt-3 text-3xl text-neutral-900">
                  Your Guide to Better Health
                </h2>
                <p className="mt-6 text-neutral-600 leading-relaxed font-sans text-base">
                  GPS Nutrition was born from a passion for helping people
                  obtain wellness through nutrition. After years of creating
                  meal plans and nutrition
                  guidance for friends and family, founder Gwen Ganske
                  made it official — bringing professional nutrition services
                  to those ready to take control of their health.
                </p>
                <Link
                  href="/about"
                  className="inline-block mt-8 text-sm font-sans font-medium uppercase tracking-[0.15em] text-green-700 border-b border-green-700 pb-1 hover:border-green-400 transition-colors"
                >
                  Read Our Story
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={150}>
              <div className="bg-green-50 rounded-lg p-10 text-center">
                <p className="text-6xl font-serif text-green-700">GPS</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-green-600 font-sans font-medium">
                  Gwen · Pearce · Sully
                </p>
                <p className="mt-4 text-neutral-600 font-sans text-sm">
                  Registered Holistic Nutritionist
                </p>
                <p className="mt-1 text-neutral-600 font-sans text-sm">
                  Certified in Holistic Nutrition
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <FadeIn direction="none">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl text-white">
                Ready to Start Your Journey?
              </h2>
              <p className="mt-4 text-green-100 font-sans text-base">
                Whether you&apos;re looking for a meal plan, want to join a
                group program, or desire a personalized meal plan designed
                physiologically <em>just</em> for you — reach out today and
                let&apos;s get started.
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
