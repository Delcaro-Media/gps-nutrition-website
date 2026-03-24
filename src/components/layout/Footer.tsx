import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image
              src="/logo.png"
              alt="GPS Nutrition"
              width={400}
              height={160}
              className="h-12 w-auto"
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
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.emails.info}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.emails.info}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800">
          <p className="text-base text-neutral-600">
            &copy; {new Date().getFullYear()} {siteConfig.fullName}
          </p>
        </div>
      </div>
    </footer>
  );
}
