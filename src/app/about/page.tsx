import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about GPS Nutrition and founder Gwen Ganske. Personalized nutrition services to help you reach your health goals.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-5 pt-20 pb-16">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 font-sans font-medium">
            About
          </p>
          <h1 className="mt-4 text-4xl text-neutral-900 sm:text-5xl max-w-3xl">
            Your Guide to Better Nutrition
          </h1>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="mt-6 text-neutral-600 max-w-2xl leading-relaxed font-sans text-base">
            GPS Nutrition Ltd. was founded by Gwen Ganske — a registered
            nutritionist with a passion for helping people eat well and feel
            their best.
          </p>
        </FadeIn>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-5 py-16 border-t border-neutral-200">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <FadeIn direction="right" className="lg:col-span-3">
            <h2 className="text-3xl text-neutral-900">The Story</h2>
            <div className="mt-8 space-y-5 text-neutral-600 leading-relaxed font-sans text-base">
              <p>
                For years, Gwen created meal plans and nutrition guidance for
                friends and family — always out of a genuine love for helping
                people feel better through food. It started as a passion, but
                when the people around her said &ldquo;you really need to start
                charging for this,&rdquo; GPS Nutrition was born.
              </p>
              <p>
                GPS stands for Gwen and her two sons, Pearson and Sully — a
                name that also reflects the mission of the business: to guide
                people on their path to better nutrition. Just like a GPS helps
                you find your way, GPS Nutrition helps you navigate the
                often confusing world of healthy eating with clear, personalized
                direction.
              </p>
              <p>
                As a registered holistic nutritionist with ongoing additional training,
                Gwen is expanding her expertise to offer even more specialized
                services, including the ability to pull requisitions and create
                nutrition plans that are 100% tailored to your physiological needs.
              </p>
            </div>
          </FadeIn>
          <FadeIn
            direction="left"
            delay={150}
            className="lg:col-span-2 flex items-center"
          >
            <div className="w-full overflow-hidden rounded-lg">
              {/* TODO: Replace with Gwen's photo — swap src to "/gwen.jpg" */}
              <div className="aspect-[3/4] w-full bg-green-50 flex flex-col items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-green-200 flex items-center justify-center">
                  <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-green-600 font-sans font-medium">
                  Gwen Ganske
                </p>
                <p className="mt-2 text-neutral-600 font-sans text-sm">
                  Registered Holistic Nutritionist
                </p>
                <p className="mt-1 text-neutral-600 font-sans text-sm">
                  Certified in Holistic Nutrition
                </p>
                <p className="mt-1 text-neutral-400 font-sans text-xs">
                  Photo coming soon
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <FadeIn direction="none">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 font-sans font-medium">
                Our Approach
              </p>
              <h2 className="mt-3 text-3xl text-neutral-900">
                Simple, Supportive, Sustainable
              </h2>
              <div className="mt-8 space-y-5 text-neutral-600 leading-relaxed font-sans text-base text-left">
                <p>
                  We believe that nutrition doesn&apos;t have to be complicated.
                  Whether you need a straightforward meal plan to follow, the
                  accountability of a group, or a deep-dive into your personal
                  nutritional needs — we meet you where you are.
                </p>
                <p>
                  Our services are designed to be practical and sustainable. No
                  fad diets, no extreme restrictions — just real food guidance
                  that fits into your real life.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-block mt-8 text-sm font-sans font-medium uppercase tracking-[0.15em] text-green-700 border-b border-green-700 pb-1 hover:border-green-400 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <FadeIn direction="none">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl text-white">
                Let&apos;s Work Together
              </h2>
              <p className="mt-4 text-green-100 font-sans text-base">
                Ready to take the first step toward better nutrition? Reach
                out and let&apos;s find the right plan for you.
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
