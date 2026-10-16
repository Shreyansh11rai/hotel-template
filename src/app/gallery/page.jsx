import { PageHero } from "../../components/Sections";
import TextLink from "../../components/TextLink";
import GalleryGrid from "../../components/GalleryGrid";

export const metadata = {
  title: "Gallery — Aangan House",
  description:
    "Explore wedding, celebration and corporate event photos from Aangan House.",
};

export default function Gallery() {
  return (
    <main>
      <PageHero
        image="/images/photo-1507504031003-b417219a0fde.jpg"
        alt="Warm lights across an evening garden gathering"
        eyebrow="A few moments from here"
        title={
          <>
            The Aangan
            <br />
            feeling.
          </>
        }
        description="Browse the celebrations, spaces and little moments worth keeping."
      />
      <section className="mx-auto w-[calc(100%-96px)] max-w-[1320px] pt-[90px] pb-[120px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:py-[72px]">
        <div className="mb-[38px] flex items-end justify-between gap-[30px] max-[760px]:mb-[25px] max-[760px]:flex-col max-[760px]:items-start">
          <div>
            <p className="mb-[18px] text-md font-bold tracking-[0.18em] text-olive uppercase">
              Around the house
            </p>
            <h2 className="m-0 font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
              A place for good days.
            </h2>
          </div>
          <TextLink href="/contact">Come see for yourself</TextLink>
        </div>
        <GalleryGrid />
      </section>
    </main>
  );
}
