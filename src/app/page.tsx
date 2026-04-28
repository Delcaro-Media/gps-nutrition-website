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
                One-on-One Nutrition Consulting
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 max-w-5xl mx-auto">
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl text-neutral-900">Fully Personalized</h3>
                <p className="mt-4 text-neutral-600 leading-relaxed font-sans text-base">
                  A nutrition plan built 100% around your body, your goals,
                  and the life you actually live.
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
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl text-neutral-900">Lab Requisitions</h3>
                <p className="mt-4 text-neutral-600 leading-relaxed font-sans text-base">
                  Pull lab work and use real, detailed analysis to ground your
                  plan in what your body actually needs.
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
                      d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl text-neutral-900">Built for Real Life</h3>
                <p className="mt-4 text-neutral-600 leading-relaxed font-sans text-base">
                  No fad diets. No extreme restrictions. Practical, sustainable
                  guidance that fits the way you actually eat.
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
                Learn How It Works
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
                  obtain wellness through nutrition. After years of guiding
                  friends and family toward better eating, founder Gwen Ganske
                  made it official — bringing professional one-on-one nutrition
                  consulting to those ready to take control of their health.
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
                  Gwen · Pierce · Sully
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
                If you&apos;re ready for a nutrition plan designed
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
