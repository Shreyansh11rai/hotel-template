"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  ["Home", "/"],
  ["Rooms", "/rooms"],
  ["Banquet", "/spaces"],
  ["Events", "/events"],
  ["Gallery", "/gallery"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur-xl">
      <nav
        className="relative mx-auto flex h-[76px] w-[calc(100%-96px)] max-w-[1320px] items-center justify-between gap-7 max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:h-16 max-[760px]:w-[calc(100%-40px)]"
        aria-label="Main navigation"
      >
        <Link
          className="flex min-w-0 shrink-0 flex-col gap-[3px]"
          href="/"
          aria-label="Aangan House home"
          onClick={() => setIsOpen(false)}
        >
          <span className="font-serif text-[23px] leading-none font-medium tracking-[0.015em] max-[760px]:text-[21px]">
            Aangan House
          </span>
          <span className="text-sm tracking-[0.2em] text-muted uppercase max-[430px]:text-xs">
            Stay · Gather · Celebrate
          </span>
        </Link>

        <div
          className={`flex items-center gap-[clamp(15px,2.2vw,31px)] max-[1050px]:gap-[14px] max-[1050px]:absolute max-[1050px]:top-full max-[1050px]:left-1/2 max-[1050px]:w-screen max-[1050px]:-translate-x-1/2 max-[1050px]:flex-col max-[1050px]:items-stretch max-[1050px]:gap-0 max-[1050px]:border-b max-[1050px]:border-line max-[1050px]:bg-paper max-[1050px]:px-5 max-[1050px]:pt-2 max-[1050px]:pb-5 ${isOpen ? "max-[1050px]:flex" : "max-[1050px]:hidden"}`}
          id="site-navigation"
        >
          {links.map(([label, href]) => (
            <Link
              className={`flex items-center justify-between text-sm font-semibold tracking-[0.06em] transition-colors hover:text-olive max-[1050px]:border-b max-[1050px]:border-line max-[1050px]:py-[14px] ${href === pathname ? "text-olive" : ""}`}
              key={href}
              href={href}
              aria-current={href === pathname ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {label}
              <svg
                className="hidden h-[15px] w-[15px] -rotate-45 max-[1050px]:block"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M4 12h15m-6-6 6 6-6 6" />
              </svg>
            </Link>
          ))}
          <Link
            className="mt-4 hidden min-h-12 items-center justify-center border border-ink bg-ink px-5 text-sm font-bold tracking-[0.08em] text-paper uppercase transition-colors hover:bg-transparent hover:text-ink max-[1050px]:flex"
            href="/rooms#booking"
            onClick={() => setIsOpen(false)}
          >
            Plan your stay <span className="ml-2" aria-hidden="true">↗</span>
          </Link>
        </div>

        <Link
          className="ml-auto border border-ink px-[17px] py-[13px] text-sm font-bold tracking-[0.08em] uppercase transition-colors hover:bg-ink hover:text-paper max-[1050px]:hidden"
          href="/rooms#booking"
        >
          Plan your stay <span aria-hidden="true">↗</span>
        </Link>

        <button
          className="ml-auto hidden cursor-pointer border-0 bg-transparent p-2 text-ink max-[1050px]:inline-flex"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            {isOpen ? (
              <path d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" />
            )}
          </svg>
        </button>
      </nav>
    </header>
  );
}
