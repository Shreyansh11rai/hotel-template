import { getWhatsAppUrl } from "../lib/whatsapp";

const links = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/aanganhouse/",
    label: "Instagram",
    shape: <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.5h.01" />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/aanganhouse/",
    label: "Facebook",
    shape: <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1Z" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/aangan-house/",
    label: "LinkedIn",
    shape: <path d="M5 9v11M5 5v.01M10 20v-7a4 4 0 0 1 8 0v7m-8-7V9" />,
  },
  {
    name: "WhatsApp",
    href: getWhatsAppUrl("Hello Aangan House!"),
    label: "WhatsApp",
    shape: <path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.2A8.5 8.5 0 1 1 20 11.5Zm-12-2c.4 2 2.5 4 4.5 4.5l1.5-1 2 1c-.5 1.5-1.5 2-2.5 2-3.5-.5-6.5-3.5-7-7 0-1 .5-2 2-2.5l1 2-1.5 1Z" />,
  },
];

export default function SocialLinks() {
  return (
    <nav className="flex items-center gap-3" aria-label="Social media">
      {links.map((link) => (
        <a
          className="grid h-10 w-10 place-items-center border border-white/25 text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
          href={link.href}
          key={link.name}
          aria-label={link.label}
          target="_blank"
          rel="noreferrer"
        >
          <svg
            aria-hidden="true"
            className="h-[18px] w-[18px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          >
            {link.shape}
          </svg>
        </a>
      ))}
    </nav>
  );
}
