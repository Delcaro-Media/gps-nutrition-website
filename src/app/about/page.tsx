import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Gwen Ganske",
  description:
    "GPS Nutrition Ltd. was founded by Gwen Ganske, a Registered Holistic Nutritionist passionate about guiding people to better nutrition through personalized, sustainable plans.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Gwen Ganske | GPS Nutrition",
    description:
      "Meet Gwen Ganske, Registered Holistic Nutritionist and founder of GPS Nutrition Ltd.",
    url: "/about",
    type: "profile",
  },
  twitter: {
    title: "About Gwen Ganske | GPS Nutrition",
    description:
      "Meet Gwen Ganske, Registered Holistic Nutritionist and founder of GPS Nutrition Ltd.",
  },
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
                For years, Gwen guided friends and family through better
                nutrition — always out of a genuine love for helping people
                feel better through food. It started as a passion, but when
                the people around her said &ldquo;you really need to start
                charging for this,&rdquo; GPS Nutrition was born.
              </p>
              <p>
                GPS stands for Gwen and her two sons, Pierce and Sully — a
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
              <Image
                src="/gwen-portrait.jpg"
                alt="Gwen Ganske — Registered Holistic Nutritionist"
                width={1200}
                height={1600}
                className="w-full h-auto object-cover"
                priority
              />
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
                  Through a deep-dive into your personal nutritional needs,
                  we build a plan that meets you where you are and works with
                  the life you actually live.
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
