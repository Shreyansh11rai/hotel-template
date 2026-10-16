import { PageHero } from "../../components/Sections";
import WhatsAppLink from "../../components/WhatsAppLink";

export const metadata = {
  title: "Catering & celebrations — Aangan House",
  description:
    "Discover personalised menus and catering for weddings and celebrations at Aangan House.",
};

export default function Catering() {
  return (
    <main>
      <PageHero
        image="/images/placeholders/photo-1414235077428-338989a2e8c0.jpg"
        alt="A carefully prepared meal set for sharing"
        eyebrow="From our kitchen"
        title={
          <>
            Good food.
            <br />
            Good company.
          </>
        }
        description="Thoughtful menus are part of every gathering at Aangan House."
      />
      <section className="mx-auto w-[calc(100%-96px)] max-w-[1320px] py-[100px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:py-[72px]">
        <p className="mb-[18px] text-md font-bold tracking-[0.18em] text-olive uppercase">
          Catering lives with our celebrations
        </p>
        <h2 className="mb-5 max-w-[760px] font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
          Seasonal menus, made personal.
        </h2>
        <p className="mb-8 max-w-[580px] text-lg leading-[1.8] text-muted">
          Browse wedding, ceremony, haldi and mehndi experiences alongside
          their venue options. Our banquet team can help with menus, guest
          counts and the details that make the occasion yours.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <a
            className="inline-flex items-center gap-3 border-b border-current pb-[7px] text-md font-bold tracking-[0.1em] uppercase"
            href="/spaces#celebrations"
          >
            Explore banquet experiences <span aria-hidden="true">↗</span>
          </a>
          <WhatsAppLink
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-ink bg-ink px-5 text-sm font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-transparent hover:text-ink"
            message="Hello Aangan House, I would like to discuss catering for an upcoming celebration. Please share menu and booking details."
          >
            Ask about catering <span aria-hidden="true">↗</span>
          </WhatsAppLink>
        </div>
      </section>
    </main>
  );
}
