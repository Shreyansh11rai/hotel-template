import InquiryForm from "../../components/InquiryForm";
import TextLink from "../../components/text-link";
import { PageHero } from "../../components/Sections";

export const metadata = {
  title: "Rooms & booking — Aangan House",
  description: "Settle into a comfortable room at Aangan House.",
};
const roomImage = "/images/photo-1611892440504-42a792e24d32.jpg";

export default function Rooms() {
  return (
    <main>
      <PageHero
        image={roomImage}
        alt="A calm and comfortable guest room"
        eyebrow="Stay awhile"
        title={
          <>
            A softer place
            <br />
            to land.
          </>
        }
        description="Come in, kick off your shoes and let the evening take its time."
      />
      <section className="mx-auto grid w-[calc(100%-96px)] max-w-[1320px] grid-cols-[0.86fr_1.14fr] items-center gap-[clamp(55px,10vw,135px)] py-[100px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:grid-cols-1 max-[760px]:gap-[42px] max-[760px]:py-[72px]">
        <div className="max-w-[470px]">
          <p className="mb-[18px] text-[12px] font-bold tracking-[0.18em] text-olive uppercase">
            Quiet comforts
          </p>
          <h2 className="mb-[25px] font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
            Rest well.
            <br />
            Wake slowly.
          </h2>
          <p className="mb-[30px] max-w-[490px] text-[15px] leading-[1.8] text-muted">
            Our rooms are made for restful nights and unhurried mornings. A good
            night&apos;s sleep, thoughtful details and all the comforts that
            make being away feel easy.
          </p>
          <p className="mb-[30px] max-w-[490px] text-[15px] leading-[1.8] text-muted">
            Staying for an event? Make a weekend of it and leave the drive home
            for another day.
          </p>
          <TextLink href="#booking">Check your dates</TextLink>
        </div>
        <div>
          <img
            className="h-[530px] w-full object-cover max-[760px]:h-[min(95vw,470px)]"
            src={roomImage}
            alt="Warm, calm guest room with a comfortable bed"
            loading="lazy"
          />
          <div className="flex justify-between gap-5 pt-[15px] text-[10px] tracking-[0.1em] text-muted uppercase max-[430px]:text-[8px]">
            <span>Rooms with room to exhale</span>
            <span className="text-right">
              Quiet comforts · Thoughtful details
            </span>
          </div>
        </div>
      </section>
      <section
        className="bg-olive py-[88px] text-paper max-[760px]:py-[72px]"
        id="booking"
      >
        <div className="mx-auto grid w-[calc(100%-96px)] max-w-[1320px] grid-cols-[0.8fr_1.2fr] items-start gap-[9%] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:grid-cols-1 max-[760px]:gap-[35px]">
          <div>
            <p className="mb-[18px] text-[12px] font-bold tracking-[0.18em] text-[#d4d9c9] uppercase">
              A room with your name on it
            </p>
            <h2 className="max-w-[450px] font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
              Let&apos;s find you a stay.
            </h2>
            <p className="max-w-[490px] text-[15px] leading-[1.8] text-white/75">
              Share a few details and our team will get back to you with
              availability and the best way to settle in.
            </p>
          </div>
          <InquiryForm booking />
        </div>
      </section>
    </main>
  );
}
