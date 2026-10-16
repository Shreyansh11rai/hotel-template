"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  ["Home", "/"],
  ["Rooms", "/rooms"],
  ["Banquet & lawn", "/spaces"],
  ["Events", "/events"],
  ["Catering", "/catering"],
  ["Gallery", "/gallery"],
  ["About us", "/about"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/95 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[76px] w-[calc(100%-96px)] max-w-[1320px] items-center justify-between gap-7 max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:h-16 max-[760px]:w-[calc(100%-40px)]"
        aria-label="Main navigation"
      >
        <Link
          className="flex shrink-0 flex-col gap-[3px]"
          href="/"
          aria-label="Aangan House home"
        >
          <span className="font-serif text-[23px] leading-none font-medium tracking-[0.015em] max-[760px]:text-[21px]">
            Aangan House
          </span>
          <span className="text-[14px] tracking-[0.2em] text-muted uppercase">
            Stay · Gather · Celebrate
          </span>
        </Link>
        <button
          className="ml-auto hidden cursor-pointer border-0 bg-transparent p-2 text-ink max-[760px]:inline-flex"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <svg
            className="h-[23px] w-[23px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M3 7h18M3 12h18M3 17h18" />
          </svg>
        </button>
        <div
          className={`flex items-center gap-[clamp(15px,2.2vw,31px)] max-[1050px]:gap-[14px] max-[760px]:absolute max-[760px]:top-[63px] max-[760px]:right-0 max-[760px]:left-0 max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-0 max-[760px]:border-b max-[760px]:border-line max-[760px]:bg-paper max-[760px]:px-5 max-[760px]:pt-2 max-[760px]:pb-4 ${isOpen ? "max-[760px]:flex" : "max-[760px]:hidden"}`}
        >
          {links.map(([label, href]) => (
            <Link
              className={`text-[14px] font-semibold tracking-[0.06em] transition-colors hover:text-olive max-[1050px]:text-[9px] max-[760px]:border-b max-[760px]:border-line max-[760px]:py-[13px] max-[760px]:text-[11px] ${href === pathname ? "text-olive" : ""}`}
              key={href}
              href={href}
              aria-current={href === pathname ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
        <Link
          className="border border-ink px-[17px] py-[13px] text-[11px] font-bold tracking-[0.08em] uppercase transition-colors hover:bg-ink hover:text-paper max-[1050px]:px-3 max-[1050px]:py-[11px] max-[1050px]:text-[9px] max-[760px]:hidden"
          href="/rooms#booking"
        >
          Plan your stay <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
