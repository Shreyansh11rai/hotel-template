import Link from "next/link";

export default function TextLink({ href, children }) {
  return (
    <Link
      className="inline-flex items-center gap-3 border-b border-current pb-[7px] text-lg font-bold tracking-[0.1em] uppercase transition-[gap] duration-200 ease-in-out hover:gap-[18px]"
      href={href}
    >
      {children}
      <svg
        className="h-[15px] w-[15px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M4 12h15m-6-6 6 6-6 6" />
      </svg>
    </Link>
  );
}
