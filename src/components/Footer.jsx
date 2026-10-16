import Link from "next/link";

const links = [
  ["About us", "/about"],
  ["Banquet & lawn", "/spaces"],
  ["Rooms", "/rooms"],
  ["Events", "/events"],
  ["Gallery", "/gallery"],
  ["Catering", "/catering"],
  ["Contact", "/contact"],
];

export default function SiteFooter() {
  return (
    <footer className="bg-footer px-0 pt-[52px] pb-6 text-paper">
      <div className="mx-auto w-[calc(100%-96px)] max-w-[1320px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)]">
        <div className="flex items-start justify-between gap-10 pb-[52px] max-[760px]:flex-col max-[760px]:pb-9">
          <Link className="flex shrink-0 flex-col gap-[3px]" href="/">
            <span className="font-serif text-[23px] leading-none font-medium tracking-[0.015em]">Aangan House</span>
            <span className="text-[14px] tracking-[0.2em] text-footer-muted uppercase">Stay · Gather · Celebrate</span>
          </Link>
          <nav className="flex max-w-[500px] flex-wrap gap-x-[25px] gap-y-4" aria-label="Footer navigation">
            {links.map(([label, href]) => <Link className="text-[10px] tracking-[0.05em] text-footer-link" key={href} href={href}>{label}</Link>)}
          </nav>
        </div>
        <div className="flex justify-between gap-5 border-t border-white/20 pt-[18px] text-[9px] tracking-[0.08em] text-footer-muted uppercase max-[430px]:flex-col">
          <span>© {new Date().getFullYear()} Aangan House</span>
          <span>Made for the moments that matter.</span>
        </div>
      </div>
    </footer>
  );
}
