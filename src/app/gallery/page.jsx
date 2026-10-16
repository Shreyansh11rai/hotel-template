import { PageHero } from "../../components/Sections";
import TextLink from "../../components/text-link";

export const metadata = {
  title: "Gallery — Aangan House",
  description: "A few moments and spaces from around Aangan House.",
};
const photos = [
  [
    "photo-1464366400600-7168b8af9bc3",
    "A long dinner table dressed for a celebration",
  ],
  [
    "photo-1470252649378-9c29740c9fa8",
    "Early morning light on a peaceful landscape",
  ],
  ["photo-1507504031003-b417219a0fde", "An outdoor garden gathering at dusk"],
  [
    "photo-1519225421980-715cb0215aed",
    "Garden tables set for an evening celebration",
  ],
  [
    "photo-1600210492486-724fe5c67fb0",
    "A comfortable, light-filled sitting room",
  ],
  ["photo-1611892440504-42a792e24d32", "A calm and comfortable guest room"],
];

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
        description="Quiet corners, long tables and little moments worth keeping."
      />
      <section className="mx-auto w-[calc(100%-96px)] max-w-[1320px] pt-[90px] pb-[120px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:py-[72px]">
        <div className="mb-[38px] flex items-end justify-between gap-[30px] max-[760px]:mb-[17px] max-[760px]:flex-col max-[760px]:items-start">
          <div>
            <p className="mb-[18px] text-[12px] font-bold tracking-[0.18em] text-olive uppercase">
              Around the house
            </p>
            <h2 className="m-0 font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
              A place for good days.
            </h2>
          </div>
          <TextLink href="/contact">Come see for yourself</TextLink>
        </div>
        <div className="grid grid-cols-[1.15fr_0.85fr_1fr] grid-rows-[230px_230px] gap-[14px] max-[760px]:grid-cols-2 max-[760px]:grid-rows-[200px_160px_160px] max-[760px]:gap-[9px] max-[430px]:grid-rows-[170px_135px_135px]">
          {photos.map(([id, alt], index) => (
            <img
              className={`h-full w-full object-cover ${index === 0 ? "row-span-2" : ""} ${index === 3 ? "col-[2/4] max-[760px]:col-[1/-1]" : ""}`}
              key={id}
              src={`/images/${id}.jpg`}
              alt={alt}
              loading="lazy"
            />
          ))}
        </div>
        <div className="mt-[18px] flex justify-between text-[10px] tracking-[0.1em] text-muted uppercase max-[760px]:text-[8px]">
          <span>Little moments, well remembered</span>
          <span>01 — 06</span>
        </div>
      </section>
    </main>
  );
}
