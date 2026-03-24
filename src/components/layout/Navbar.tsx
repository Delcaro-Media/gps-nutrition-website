"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = siteConfig.navigation;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between py-4">
          {/* Desktop nav (left of logo) */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-[0.15em] transition-colors py-2",
                  pathname === item.href
                    ? "text-green-700"
                    : "text-neutral-600 hover:text-green-700"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Logo (right side on desktop, left on mobile) */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="GPS Nutrition – Home"
          >
            <Image
              src="/logo.png"
              alt="GPS Nutrition"
              width={500}
              height={200}
              className="h-28 w-auto"
              priority
            />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-3 text-neutral-600 hover:text-neutral-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white px-5 py-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors",
                  pathname === item.href
                    ? "text-green-700"
                    : "text-neutral-600 hover:text-green-700"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="h-px bg-neutral-200" />
    </nav>
  );
}
