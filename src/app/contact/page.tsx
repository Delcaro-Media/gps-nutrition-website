import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GPS Nutrition. Reach out to start your nutrition journey today.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-20 pb-16">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 font-sans font-medium">
            Reach Out
          </p>
          <h1 className="mt-4 text-4xl text-neutral-900 sm:text-5xl">
            Contact
          </h1>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="mt-6 text-neutral-600 max-w-2xl leading-relaxed font-sans text-base">
            Have questions about our services or ready to get started? Send us a
            message and we&apos;ll get back to you as soon as possible.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <FadeIn direction="right">
            <ContactForm />
          </FadeIn>

          {/* Contact Info */}
          <FadeIn direction="left" delay={150}>
            <div className="space-y-10">
              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-neutral-600 font-sans font-medium">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.emails.info}`}
                  className="mt-2 block text-base text-neutral-900 font-sans hover:text-green-700 transition-colors"
                >
                  {siteConfig.emails.info}
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-neutral-600 font-sans font-medium">
                  Follow Along
                </p>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-base text-neutral-900 font-sans hover:text-green-700 transition-colors"
                >
                  Instagram {siteConfig.social.instagramHandle}
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-base text-neutral-900 font-sans hover:text-green-700 transition-colors"
                >
                  TikTok {siteConfig.social.tiktokHandle}
                </a>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <p className="text-sm uppercase tracking-[0.15em] text-green-700 font-sans font-medium">
                  What to Expect
                </p>
                <p className="mt-3 text-neutral-600 font-sans text-sm leading-relaxed">
                  Once you reach out, Gwen will get back to you to discuss your
                  goals and recommend the best service for your needs. There&apos;s
                  no pressure — just a friendly conversation about how we can
                  help.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Social CTA */}
      <section className="bg-green-800">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <FadeIn direction="none">
            <p className="text-green-100 font-sans text-base">
              Follow us on social media
            </p>
            <div className="mt-3 flex items-center justify-center gap-6">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white font-sans text-sm border-b border-white pb-0.5 hover:border-green-300 transition-colors"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white font-sans text-sm border-b border-white pb-0.5 hover:border-green-300 transition-colors"
              >
                TikTok
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
