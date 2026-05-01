import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo-white-text.png"
              alt="GPS Nutrition"
              width={1097}
              height={337}
              className="h-15 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed">
              Personalized nutrition services to help you reach your health
              goals.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-neutral-400 font-medium">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-neutral-400 font-medium">
              Connect
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.emails.info}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.emails.info}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.tel}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone.display}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <div className="bg-white rounded-lg p-3 flex items-center justify-center">
              <Image
                src="/csnnaa-members-badge.jpg"
                alt="CSNNAA Member"
                width={300}
                height={248}
                className="h-24 w-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-3 flex items-center justify-center">
              <Image
                src="/csnn-certification-mark.jpg"
                alt="CSNN Certified"
                width={1223}
                height={1033}
                className="h-24 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-neutral-600">
            &copy; {new Date().getFullYear()} {siteConfig.fullName}
          </p>
          <Link
            href="/privacy"
            className="text-sm text-neutral-500 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
