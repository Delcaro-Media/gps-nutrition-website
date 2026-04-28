import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

export function Hero() {
  return (
    <section className="relative bg-green-900 overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Green overlay */}
      <div className="absolute inset-0 bg-green-900/75" />

      <div className="relative mx-auto max-w-6xl px-5 py-28 sm:py-36 lg:py-44">
        <FadeIn delay={100}>
          <h1 className="mt-8 text-5xl text-white sm:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            Simple Nutrition Guidance for Real Life
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-5 text-xl text-green-200 font-sans font-light italic">
            Personalized one-on-one nutrition consulting
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="mt-8 text-green-100 max-w-lg leading-relaxed font-sans text-base">
            A nutrition plan designed 100% around your body, goals, and
            lifestyle — including detailed analysis and lab requisitions
            when they&apos;re the right fit.
          </p>
        </FadeIn>
        <FadeIn delay={450}>
          <div className="mt-12 flex items-center gap-8">
            <Link
              href="/services"
              className="text-sm font-sans font-medium uppercase tracking-[0.15em] text-white border-b border-white pb-1 hover:border-green-300 hover:text-green-200 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/contact"
              className="text-sm font-sans font-medium uppercase tracking-[0.15em] text-green-200 hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
