import { PageHero, SimpleBand } from "../../components/Sections";
import TextLink from "../../components/text-link";

export const metadata = {
  title: "Catering — Aangan House",
  description: "Seasonal, generous catering for gatherings at Aangan House.",
};

export default function Catering() {
  return (
    <main>
      <PageHero
        image="/images/photo-1414235077428-338989a2e8c0.jpg"
        alt="A carefully prepared meal set for sharing"
        eyebrow="From our kitchen"
        title={
          <>
            Good food.
            <br />
            Good company.
          </>
        }
        description="Generous, seasonal and made to be passed around."
      />
      <section className="bg-band py-[92px] max-[760px]:py-[78px]">
        <div className="mx-auto grid w-[calc(100%-96px)] max-w-[1320px] grid-cols-[0.9fr_1.1fr] items-start gap-[10%] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:grid-cols-1 max-[760px]:gap-[38px]">
          <div>
            <p className="mb-[18px] text-[12px] font-bold tracking-[0.18em] text-olive uppercase">
              Made to bring us together
            </p>
            <h2 className="mb-[25px] font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
              Pull up a chair.
            </h2>
            <p className="mb-[30px] max-w-[490px] text-[15px] leading-[1.8] text-muted">
              Our kitchen is here to make the table feel like the best place in
              the room. We build menus around your occasion, your people and
              whatever&apos;s in season.
            </p>
            <p className="mb-[30px] max-w-[490px] text-[15px] leading-[1.8] text-muted">
              Have a favorite dish, dietary needs or a family recipe you want to
              include? Tell us. We love making the meal feel personal.
            </p>
            <TextLink href="/contact#inquiry">Talk menus with us</TextLink>
          </div>
          <div className="border-t border-line">
            <article className="grid grid-cols-[42px_1fr] gap-[18px] border-b border-line py-5">
              <span className="text-[10px] text-olive">01</span>
              <div>
                <h3 className="mb-[7px] font-serif text-[22px] leading-normal font-normal">
                  Gather around
                </h3>
                <p className="m-0 text-[12px] leading-[1.7] text-muted">
                  Family-style meals, shared platters and long lunches made for
                  lingering.
                </p>
              </div>
            </article>
            <article className="grid grid-cols-[42px_1fr] gap-[18px] border-b border-line py-5">
              <span className="text-[10px] text-olive">02</span>
              <div>
                <h3 className="mb-[7px] font-serif text-[22px] leading-normal font-normal">
                  Raise a glass
                </h3>
                <p className="m-0 text-[12px] leading-[1.7] text-muted">
                  Easy drinks, thoughtful refreshments and a toast to whatever
                  brings you here.
                </p>
              </div>
            </article>
            <article className="grid grid-cols-[42px_1fr] gap-[18px] border-b border-line py-5">
              <span className="text-[10px] text-olive">03</span>
              <div>
                <h3 className="mb-[7px] font-serif text-[22px] leading-normal font-normal">
                  A menu of your own
                </h3>
                <p className="m-0 text-[12px] leading-[1.7] text-muted">
                  Tell us what you love, what you don&apos;t, and we&apos;ll
                  take it from there.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <SimpleBand
        eyebrow="Let's make a menu"
        title={
          <>
            Something delicious
            <br />
            is just a conversation away.
          </>
        }
        description="Share your date, guest count and any ideas you've been saving. We'll help you put together a menu that feels right for your gathering."
        link="/contact#inquiry"
        linkText="Plan your meal"
      />
    </main>
  );
}
