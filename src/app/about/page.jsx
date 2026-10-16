import { BottomLink, PageHero, SimpleBand } from "../../components/Sections";

export const metadata = {
  title: "About us — Aangan House",
  description:
    "The story behind Aangan House, a place for unhurried stays and heartfelt gatherings.",
};

const image = (id) => `/images/${id}.jpg`;

export default function About() {
  return (
    <main>
      <PageHero
        image={image("photo-1600210492486-724fe5c67fb0")}
        alt="Sunlight filling a welcoming lounge"
        eyebrow="A little about us"
        title={
          <>
            Somewhere to
            <br />
            feel at home.
          </>
        }
        description="Thoughtful spaces, honest food and a warm welcome. That's the whole idea."
      />
      <section className="mx-auto grid w-[calc(100%-96px)] max-w-[1320px] grid-cols-[1fr_0.92fr] items-center gap-[clamp(60px,11vw,150px)] py-[100px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[1050px]:gap-[55px] max-[760px]:w-[calc(100%-40px)] max-[760px]:grid-cols-1 max-[760px]:gap-[42px] max-[760px]:py-[72px]">
        <div className="relative py-0 pr-[42px] pb-[45px] max-[760px]:pr-[30px]">
          <img
            className="h-[550px] w-full object-cover max-[1050px]:h-[470px] max-[760px]:h-[390px]"
            src={image("photo-1449247709967-d4461a6a6103")}
            alt="A quiet garden at Aangan House"
            loading="lazy"
          />
          <img
            className="absolute right-0 bottom-0 h-[220px] w-[43%] border-[9px] border-paper object-cover max-[760px]:h-[165px] max-[760px]:w-[42%] max-[760px]:border-[7px]"
            src={image("photo-1600210492486-724fe5c67fb0")}
            alt="An inviting place to sit"
            loading="lazy"
          />
        </div>
        <div className="max-w-[480px] max-[760px]:max-w-[560px]">
          <p className="mb-[18px] text-[12px] font-bold tracking-[0.18em] text-olive uppercase">
            The heart of the house
          </p>
          <h2 className="mb-[25px] font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
            A place that feels like yours.
          </h2>
          <p className="mb-7 max-w-[490px] text-[15px] leading-[1.8] text-muted">
            Aangan means courtyard: the heart of a home, where everyone ends up.
            We made this one for slow mornings, full tables and the kind of
            celebrations that feel like you.
          </p>
          <p className="mb-7 max-w-[490px] text-[15px] leading-[1.8] text-muted">
            Whether you&apos;re here for a night away or a day worth
            remembering, there&apos;s room to make it your own. Come as you are;
            we&apos;ll take care of the rest.
          </p>
          <div className="mt-[47px] border-t border-line pt-5 text-[10px] tracking-[0.12em] text-muted uppercase max-[760px]:mt-[30px]">
            Good company is always in season
          </div>
        </div>
      </section>
      <SimpleBand
        eyebrow="Our way of doing things"
        title={
          <>
            Warm, never fussy.
            <br />
            Thoughtful, always.
          </>
        }
        description="The best hospitality feels effortless. We take care of the details quietly, so you can spend your time where it belongs: with your people."
        link="/contact"
        linkText="Come say hello"
      />
      <BottomLink href="/spaces">Explore the spaces</BottomLink>
    </main>
  );
}
