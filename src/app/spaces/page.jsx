import { PageHero } from "../../components/Sections";
import WhatsAppLink from "../../components/WhatsAppLink";
import { eventHalls } from "../../data/eventHalls";
import { banquetExperiences } from "../../data/banquetExperiences";

export const metadata = {
  title: "Banquet, lawn & catering — Aangan House",
  description:
    "Discover our banquet spaces, wedding celebrations and bespoke catering at Aangan House.",
};

export default function Spaces() {
  return (
    <main>
      <PageHero
        image="/images/photo-1519225421980-715cb0215aed.jpg"
        alt="A garden reception set for an evening celebration"
        eyebrow="Make it a gathering"
        title={
          <>
            Space for
            <br />
            your story.
          </>
        }
        description="A sunlit lawn, welcoming halls and thoughtful hosting for the days you want to remember."
      />
      <section className="bg-band py-[90px] pb-[100px] max-[760px]:py-[78px]">
        <div className="mx-auto w-[calc(100%-96px)] max-w-[1320px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)]">
          <div className="mb-12 flex items-end justify-between gap-[30px] max-[760px]:mb-[30px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[15px]">
            <div>
              <p className="mb-[18px] text-md font-bold tracking-[0.18em] text-olive uppercase">
                Banquet spaces
              </p>
              <h2 className="m-0 font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
                Gather your people.
              </h2>
            </div>
            <p className="mb-[5px] max-w-[400px] text-lg leading-[1.8] text-muted max-[760px]:mb-0 max-[760px]:max-w-[500px]">
              Choose an open-air celebration, a comfortable indoor hall or a
              courtyard for gathering close.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
            {eventHalls.map((hall) => (
              <article className="min-w-0" key={hall.name}>
                <img
                  className="h-[280px] w-full object-cover"
                  src={process.env.NEXT_PUBLIC_BASE_PATH + hall.image}
                  alt={hall.imageAlt}
                  loading="lazy"
                />
                <div className="pt-5">
                  <span className="text-sm font-bold tracking-[0.13em] text-olive uppercase">
                    {hall.label}
                  </span>
                  <h3 className="mt-2 mb-2 font-serif text-[28px] leading-[1.2] font-normal">
                    {hall.name}
                  </h3>
                  <p className="mb-4 text-md leading-[1.7] text-muted">
                    {hall.description}
                  </p>
                  <p className="mb-5 text-sm font-semibold tracking-[0.04em] text-olive">
                    {hall.capacity} <span aria-hidden="true">·</span>{" "}
                    {hall.area}
                  </p>
                  <WhatsAppLink
                    className="inline-flex items-center gap-2 border-b border-current pb-[7px] text-md font-bold tracking-[0.08em] uppercase"
                    message={`Hello Aangan House, I would like to enquire about ${hall.name} for an event.\n\nPlease share availability and booking details.`}
                  >
                    Ask about this space <span aria-hidden="true">↗</span>
                  </WhatsAppLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="mx-auto w-[calc(100%-96px)] max-w-[1320px] py-[100px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:py-[72px]"
        id="celebrations"
      >
        <div className="mb-12 max-w-[680px]">
          <p className="mb-[18px] text-md font-bold tracking-[0.18em] text-olive uppercase">
            Catering & celebrations
          </p>
          <h2 className="mb-5 font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
            Made for the moments that matter.
          </h2>
          <p className="m-0 max-w-[560px] text-lg leading-[1.8] text-muted">
            From your first family ceremony to a wedding weekend, our team
            brings together the space, service and seasonal menus to make it
            feel personal.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {banquetExperiences.map((experience) => (
            <article
              className="flex min-w-0 flex-col border border-line"
              key={experience.name}
            >
              <img
                className="h-[260px] w-full object-cover"
                src={process.env.NEXT_PUBLIC_BASE_PATH + experience.image}
                alt={experience.imageAlt}
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-6 max-[760px]:p-5">
                <span className="text-sm font-bold tracking-[0.13em] text-olive uppercase">
                  {experience.label}
                </span>
                <h3 className="mt-3 mb-3 font-serif text-[27px] leading-[1.2] font-normal">
                  {experience.name}
                </h3>
                <p className="mb-5 text-md leading-[1.7] text-muted">
                  {experience.description}
                </p>
                <ul className="mb-6 flex flex-col gap-2 p-0">
                  {experience.details.map((detail) => (
                    <li
                      className="list-none text-md text-olive before:mr-2 before:content-['·']"
                      key={detail}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
                <WhatsAppLink
                  className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 border border-ink bg-ink px-4 text-center text-sm font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-transparent hover:text-ink"
                  message={`Hello Aangan House, I am planning ${experience.name.toLowerCase()}.\n\nPlease share available dates, catering menus and booking details.`}
                >
                  Plan this celebration <span aria-hidden="true">↗</span>
                </WhatsAppLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-band py-[80px] max-[760px]:py-[65px]">
        <div className="mx-auto flex w-[calc(100%-96px)] max-w-[1320px] items-center justify-between gap-8 max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:flex-col max-[760px]:items-start">
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.14em] text-olive uppercase">
              From the first hello to the last dance
            </p>
            <h2 className="m-0 max-w-[720px] font-serif text-[clamp(34px,4vw,54px)] leading-[1.1]">
              Let&apos;s make a day of it.
            </h2>
            <p className="mt-4 mb-0 max-w-[540px] text-lg leading-[1.7] text-muted">
              Tell us your date, guest count and the kind of gathering you have
              in mind.
            </p>
          </div>
          <WhatsAppLink
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 border border-ink bg-ink px-6 text-sm font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-transparent hover:text-ink"
            message="Hello Aangan House, I would like to plan a banquet event. Please get in touch to discuss dates, guest count, catering and packages."
          >
            Enquire on WhatsApp <span aria-hidden="true">↗</span>
          </WhatsAppLink>
        </div>
      </section>
    </main>
  );
}
