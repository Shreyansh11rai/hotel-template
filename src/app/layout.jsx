import "./globals.css";
import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";

export const metadata = {
  title: "Aangan House — A place to gather",
  description:
    "A warm, thoughtful retreat for celebrations, stays and gatherings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex p-3 items-center justify-center bg-topline px-3 text-center text-[9px] md:text-sm uppercase tracking-[0.12em] text-topline-ink">
          A little space to celebrate, a little more time to stay
        </div>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
