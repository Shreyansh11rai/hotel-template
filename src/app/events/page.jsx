import WhatsAppLink from "../../components/WhatsAppLink";
import { PageHero } from "../../components/Sections";
import { eventHalls } from "../../data/eventHalls";

export const metadata = {
  title: "Event venues — Aangan House",
  description:
    "Explore event halls and outdoor venues for weddings, celebrations and corporate gatherings.",
};

export default function Events() {
  return (
    <main>
      <PageHero
        image="/images/photo-1464366400600-7168b8af9bc3.jpg"
        alt="A long dinner table dressed for an evening event"
        eyebrow="The good stuff happens together"
        title={
          <>
            Find the space
            <br />
            for your occasion.
          </>
        }
        description="Three distinctive venues, each ready to make your gathering feel entirely your own."
      />
      <section className="mx-auto w-[calc(100%-96px)] max-w-[1320px] py-[96px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:py-[72px]">
        <div className="mb-12 flex items-end justify-between gap-[30px] max-[760px]:mb-[30px] max-[760px]:flex-col max-[760px]:items-start">
          <div>
            <p className="mb-[18px] text-md font-bold tracking-[0.18em] text-olive uppercase">
              Spaces for every kind of gathering
            </p>
            <h2 className="m-0 max-w-[760px] font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
              From grand celebrations to close-knit gatherings.
            </h2>
          </div>
          <p className="mb-[5px] max-w-[400px] text-lg leading-[1.8] text-muted max-[760px]:mb-0">
            Host a wedding, family milestone, team retreat or business event.
            We&apos;ll help you find a room that fits.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {eventHalls.map((hall) => (
            <article
              className="flex min-w-0 flex-col border border-line"
              key={hall.name}
            >
              <img
                className="h-[260px] w-full object-cover"
                src={process.env.NEXT_PUBLIC_BASE_PATH + hall.image}
                alt={hall.imageAlt}
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-6 max-[760px]:p-5">
                <span className="text-sm font-bold tracking-[0.13em] text-olive uppercase">
                  {hall.label}
                </span>
                <h3 className="mt-3 mb-3 font-serif text-[28px] leading-[1.2] font-normal">
                  {hall.name}
                </h3>
                <p className="mb-5 text-md leading-[1.7] text-muted">
                  {hall.description}
                </p>
                <dl className="mb-5 grid grid-cols-2 gap-4 border-y border-line py-4">
                  <div>
                    <dt className="text-sm tracking-[0.08em] text-muted uppercase">
                      Capacity
                    </dt>
                    <dd className="mt-1 text-md">{hall.capacity}</dd>
                  </div>
                  <div>
                    <dt className="text-sm tracking-[0.08em] text-muted uppercase">
                      Venue size
                    </dt>
                    <dd className="mt-1 text-md">{hall.area}</dd>
                  </div>
                  <div className="col-span-full">
                    <dt className="text-sm tracking-[0.08em] text-muted uppercase">
                      Setups
                    </dt>
                    <dd className="mt-1 text-md">{hall.setups}</dd>
                  </div>
                </dl>
                <p className="mb-3 text-sm font-bold tracking-[0.1em] text-muted uppercase">
                  Venue features
                </p>
                <ul className="mb-6 grid grid-cols-2 gap-x-4 gap-y-2 p-0">
                  {hall.features.map((feature) => (
                    <li
                      className="list-none text-md text-olive before:mr-2 before:content-['·']"
                      key={feature}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <WhatsAppLink
                  className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 border border-ink bg-ink px-4 text-center text-sm font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-transparent hover:text-ink"
                  message={`Hello Aangan House, I would like to enquire about hosting an event at ${hall.name}.\n\nPlease share availability, packages and venue details.`}
                >
                  Enquire about this venue <span aria-hidden="true">↗</span>
                </WhatsAppLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
