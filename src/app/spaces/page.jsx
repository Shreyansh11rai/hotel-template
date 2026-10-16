import { BottomLink, PageHero, SimpleBand } from "../../components/Sections";

export const metadata = {
  title: "Banquet & lawn — Aangan House",
  description: "Discover the Garden Lawn and Courtyard Hall at Aangan House.",
};
const image = (id) => `/images/${id}.jpg`;

export default function Spaces() {
  return (
    <main>
      <PageHero
        image={image("photo-1519225421980-715cb0215aed")}
        alt="A garden reception set for an evening celebration"
        eyebrow="Make it a gathering"
        title={
          <>
            Space for
            <br />
            your story.
          </>
        }
        description="A sundrenched lawn, a welcoming hall and all the room you need to bring everyone together."
      />
      <section className="bg-band py-[90px] pb-[100px] max-[760px]:py-[78px]">
        <div className="mx-auto w-[calc(100%-96px)] max-w-[1320px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)]">
          <div className="mb-12 flex items-end justify-between gap-[30px] max-[760px]:mb-[30px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[15px]">
            <div>
              <p className="mb-[18px] text-[12px] font-bold tracking-[0.18em] text-olive uppercase">
                Two ways to make a day
              </p>
              <h2 className="m-0 font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
                Gather your people.
              </h2>
            </div>
            <p className="mb-[5px] max-w-[400px] text-[15px] leading-[1.8] text-muted max-[760px]:mb-0 max-[760px]:max-w-[500px]">
              Keep it intimate or bring the whole crew. Our spaces can be shaped
              around your plans, your people and the feeling you want to create.
            </p>
          </div>
          <div className="grid grid-cols-[1.16fr_0.84fr] gap-[26px] max-[760px]:grid-cols-1 max-[760px]:gap-[33px]">
            <article className="min-w-0">
              <img
                className="h-[440px] w-full object-cover max-[760px]:h-[min(68vw,390px)]"
                src={image("photo-1519225421980-715cb0215aed")}
                alt="Dinner tables arranged on a garden lawn"
                loading="lazy"
              />
              <div className="flex items-start justify-between gap-[18px] pt-[18px]">
                <div>
                  <h3 className="mb-[7px] font-serif text-[28px] leading-[1.2] font-normal max-[760px]:text-[25px]">
                    The Garden Lawn
                  </h3>
                  <p className="m-0 text-[12px] leading-[1.6] text-muted">
                    Open air, old trees and room for everyone.
                  </p>
                </div>
                <span className="pt-[6px] text-[10px] tracking-[0.1em] text-muted">
                  01 / OUTDOORS
                </span>
              </div>
            </article>
            <article className="mt-[90px] min-w-0 max-[760px]:mt-0">
              <img
                className="h-[350px] w-full object-cover max-[760px]:h-[min(68vw,390px)]"
                src={image("photo-1511795409834-ef04bbd61622")}
                alt="A candlelit banquet table ready for an evening celebration"
                loading="lazy"
              />
              <div className="flex items-start justify-between gap-[18px] pt-[18px]">
                <div>
                  <h3 className="mb-[7px] font-serif text-[28px] leading-[1.2] font-normal max-[760px]:text-[25px]">
                    The Courtyard Hall
                  </h3>
                  <p className="m-0 text-[12px] leading-[1.6] text-muted">
                    An easy-going setting for the big moments.
                  </p>
                </div>
                <span className="pt-[6px] text-[10px] tracking-[0.1em] text-muted">
                  02 / INDOORS
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
      <SimpleBand
        eyebrow="From the first hello to the last dance"
        title={
          <>
            The day is yours.
            <br />
            We&apos;re here for the details.
          </>
        }
        description="Tell us what you have in mind, and we'll help you find the right space, shape the day and make your guests feel at home."
        link="/contact#inquiry"
        linkText="Tell us what you're planning"
      />
      <BottomLink href="/events">Explore events at Aangan</BottomLink>
    </main>
  );
}
