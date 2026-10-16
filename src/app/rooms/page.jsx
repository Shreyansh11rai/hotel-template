import InquiryForm from "../../components/InquiryForm";
import TextLink from "../../components/TextLink";
import WhatsAppLink from "../../components/WhatsAppLink";
import AmenityIcon from "../../components/AmenityIcon";
import { PageHero } from "../../components/Sections";
import { rooms, roomAmenities } from "../../data/rooms";

export const metadata = {
  title: "Rooms & booking — Aangan House",
  description: "Explore three thoughtful room styles at Aangan House.",
};

export default function Rooms() {
  return (
    <main>
      <PageHero
        image="/images/photo-1611892440504-42a792e24d32.jpg"
        alt="A calm and comfortable guest room"
        eyebrow="Stay awhile"
        title={
          <>
            A softer place
            <br />
            to land.
          </>
        }
        description="Three thoughtful room styles for quiet nights, easy mornings and the people you love travelling with."
      />
      <section className="mx-auto w-[calc(100%-96px)] max-w-[1320px] py-[96px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:py-[72px]">
        <div className="mb-12 max-w-[700px]">
          <p className="mb-[18px] text-md font-bold tracking-[0.18em] text-olive uppercase">
            Rest well, wake slowly
          </p>
          <h2 className="mb-5 font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
            Find the room that feels right.
          </h2>
          <p className="m-0 max-w-[540px] text-lg leading-[1.8] text-muted">
            Each room has its own character, with considered comforts and space
            to settle in. Choose a favourite and ask us about dates and rates.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {rooms.map((room) => (
            <article
              className="flex min-w-0 flex-col border border-line bg-paper"
              key={room.name}
            >
              <img
                className="h-[250px] w-full object-cover"
                src={room.image}
                alt={room.imageAlt}
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-6 max-[760px]:p-5">
                <span className="text-sm font-bold tracking-[0.13em] text-olive uppercase">
                  {room.label}
                </span>
                <h3 className="mt-3 mb-2 font-serif text-[28px] leading-[1.2] font-normal">
                  {room.name}
                </h3>
                <p className="mb-5 text-md leading-[1.7] text-muted">
                  {room.description}
                </p>
                <dl className="mb-5 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-line py-4 text-md">
                  <div>
                    <dt className="text-sm tracking-[0.08em] text-muted uppercase">
                      Sleeps
                    </dt>
                    <dd className="mt-1">{room.guests}</dd>
                  </div>
                  <div>
                    <dt className="text-sm tracking-[0.08em] text-muted uppercase">
                      Bed
                    </dt>
                    <dd className="mt-1">{room.bed}</dd>
                  </div>
                  <div>
                    <dt className="text-sm tracking-[0.08em] text-muted uppercase">
                      Room size
                    </dt>
                    <dd className="mt-1">{room.size}</dd>
                  </div>
                  <div>
                    <dt className="text-sm tracking-[0.08em] text-muted uppercase">
                      Included
                    </dt>
                    <dd className="mt-1">Daily housekeeping</dd>
                  </div>
                </dl>
                <div className="mb-6">
                  <p className="mb-3 text-sm font-bold tracking-[0.1em] text-muted uppercase">
                    Room amenities
                  </p>
                  <ul className="m-0 grid list-none grid-cols-2 gap-x-3 gap-y-3 p-0">
                    {room.amenities.map((key) => {
                      const amenity = roomAmenities[key];
                      return (
                        <li
                          className="flex items-center gap-2 text-sm text-olive"
                          key={key}
                        >
                          <AmenityIcon name={amenity.icon} />
                          {amenity.label}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <ul className="mb-6 flex flex-wrap gap-2 p-0">
                  {room.highlights.map((highlight) => (
                    <li
                      className="list-none border border-line px-3 py-2 text-sm text-muted"
                      key={highlight}
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <WhatsAppLink
                  className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 border border-ink bg-ink px-4 text-center text-sm font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-transparent hover:text-ink"
                  message={`Hello Aangan House, I am interested in booking the ${room.name}.\n\nPlease share availability, rates and details.`}
                >
                  Enquire about this room <span aria-hidden="true">↗</span>
                </WhatsAppLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="bg-olive py-[88px] text-paper max-[760px]:py-[72px]"
        id="booking"
      >
        <div className="mx-auto grid w-[calc(100%-96px)] max-w-[1320px] grid-cols-[0.8fr_1.2fr] items-start gap-[9%] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:grid-cols-1 max-[760px]:gap-[35px]">
          <div>
            <p className="mb-[18px] text-md font-bold tracking-[0.18em] text-[#d4d9c9] uppercase">
              A room with your name on it
            </p>
            <h2 className="max-w-[450px] font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
              Let&apos;s find you a stay.
            </h2>
            <p className="max-w-[490px] text-lg leading-[1.8] text-white/75">
              Share a few details and we&apos;ll take your room request straight
              to WhatsApp.
            </p>
          </div>
          <InquiryForm booking />
        </div>
      </section>
    </main>
  );
}
