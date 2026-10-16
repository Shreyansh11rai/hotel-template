import TextLink from "../components/text-link";
import Link from "next/link";

const cards = [
  [
    "spaces",
    "01 / Gather",
    "Banquet & lawn",
    "Room for the moments that bring everyone together.",
    "photo-1519225421980-715cb0215aed",
    "A garden wedding reception",
  ],
  [
    "rooms",
    "02 / Stay",
    "Rooms",
    "Quiet comforts, thoughtful details and slow mornings.",
    "photo-1611892440504-42a792e24d32",
    "Warm guest room",
  ],
  [
    "events",
    "03 / Celebrate",
    "Events",
    "Weddings, birthdays and get-togethers made personal.",
    "photo-1464366400600-7168b8af9bc3",
    "A dinner table dressed for an event",
  ],
  [
    "gallery",
    "04 / Take a look",
    "Gallery",
    "A few moments from around the house and garden.",
    "photo-1470252649378-9c29740c9fa8",
    "Golden morning light over a calm landscape",
  ],
  [
    "catering",
    "05 / From our kitchen",
    "Catering",
    "Seasonal food made for sharing and staying awhile.",
    "photo-1414235077428-338989a2e8c0",
    "A thoughtfully plated meal",
  ],
  [
    "contact",
    "06 / Say hello",
    "Contact us",
    "Tell us what you're imagining. We would love to hear.",
    "photo-1600210492486-724fe5c67fb0",
    "A welcoming, sunlit lounge",
  ],
];
const photo = (id) => `/images/${id}.jpg`;

export default function Home() {
  return (
    <main>
      <section
        className="relative flex min-h-[min(740px,calc(100vh-110px))] items-end overflow-hidden bg-[#494b3a] text-white max-[760px]:min-h-[min(700px,calc(100svh-94px))]"
        aria-label="Welcome to Aangan House"
      >
        <img
          className="absolute inset-0 h-full w-full object-cover object-[center_53%] max-[760px]:object-[58%_center]"
          src={photo("photo-1519167758481-83f550bb49b3", 2200)}
          alt="An intimate outdoor celebration beneath the trees"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,24,18,0.63),rgba(20,24,18,0.08)_76%),linear-gradient(0deg,rgba(20,24,18,0.39),transparent_48%)]" />
        <span className="absolute top-[45px] right-[max(48px,calc((100%-1320px)/2))] z-[1] text-[15px] tracking-[0.15em] text-white uppercase [writing-mode:vertical-rl] max-[760px]:top-[25px] max-[760px]:right-5 max-[760px]:text-[15px]">
          A slower kind of gathering · Est. 2018
        </span>
        <div className="relative z-[1] mx-auto w-[calc(100%-96px)] max-w-[1320px] pt-[100px] pb-[75px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:pt-[90px] max-[760px]:pb-[45px]">
          <p className="mb-[18px] text-[15px] font-bold tracking-[0.18em] uppercase">
            A home for good days
          </p>
          <h1 className="m-0 max-w-[760px] font-serif text-[clamp(58px,9vw,112px)] leading-[0.99] tracking-[-0.045em] max-[760px]:text-[clamp(56px,15vw,88px)]">
            Come together.
            <br />
            Stay a little.
          </h1>
          <div className="mt-[30px] flex items-end justify-between gap-[30px] max-[760px]:items-start max-[760px]:flex-col max-[760px]:gap-[22px]">
            <p className="m-0 max-w-[410px] text-[15px] leading-[1.8] text-white/85 max-[760px]:max-w-[360px] max-[760px]:text-[15px]">
              A garden-side hideaway for celebrations, long lunches and the
              lovely in-between. Find us just beyond the bustle.
            </p>
            <TextLink href="/spaces">Find your kind of gathering</TextLink>
          </div>
        </div>
      </section>
      <div className="mx-auto grid w-[calc(100%-96px)] max-w-[1320px] grid-cols-[1fr_2fr_1fr] items-center gap-[30px] border-b border-line py-[34px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:grid-cols-2 max-[760px]:gap-3 max-[760px]:py-[22px]">
        <span className="text-[11px] tracking-[0.11em] text-muted uppercase max-[760px]:text-[11px]">
          Room to breathe
        </span>
        <p className="m-0 text-center font-serif text-[18px] leading-[1.5] max-[760px]:col-span-full max-[760px]:row-start-1 max-[760px]:text-left max-[760px]:text-[18px]">
          Thoughtful spaces, honest food and a warm welcome.
        </p>
        <span className="text-right text-[11px] tracking-[0.11em] text-muted uppercase max-[760px]:text-[11px]">
          Made for making memories
        </span>
      </div>
      <section className="mx-auto w-[calc(100%-96px)] max-w-[1320px] py-[105px] pb-[100px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:py-[76px]">
        <p className="mb-[18px] text-[12px] font-bold tracking-[0.18em] text-olive uppercase">
          A place that feels like yours
        </p>
        <h2 className="mb-6 max-w-[750px] font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
          A little space to celebrate.
          <br />A little more time to stay.
        </h2>
        <p className="mb-[26px] max-w-[490px] text-[15px] leading-[1.8] text-muted">
          Aangan means courtyard: the heart of a home, where everyone ends up.
          We made this one for slow mornings, full tables and the kind of
          celebrations that feel like you.
        </p>
        <TextLink href="/about">Get to know us</TextLink>
      </section>
      <section className="bg-band py-[90px] pb-[110px] max-[760px]:py-[72px] max-[760px]:pb-20">
        <div className="mx-auto w-[calc(100%-96px)] max-w-[1320px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)]">
          <div className="mb-12 flex items-end justify-between gap-[30px] max-[760px]:mb-[30px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[15px]">
            <div>
              <p className="mb-[18px] text-[12px] font-bold tracking-[0.18em] text-olive uppercase">
                Make yourself at home
              </p>
              <h2 className="m-0 font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
                Find your place here.
              </h2>
            </div>
            <p className="mb-[5px] max-w-[400px] text-[15px] leading-[1.8] text-muted max-[760px]:mb-0 max-[760px]:max-w-[500px]">
              From a quiet night away to a full house celebration, take a look
              around.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-[22px] gap-y-11 max-[760px]:grid-cols-2 max-[760px]:gap-x-[15px] max-[760px]:gap-y-8 max-[430px]:grid-cols-1 max-[430px]:gap-y-7">
            {cards.map(([slug, tag, title, copy, image, alt]) => (
              <Link className="group block" href={`/${slug}`} key={slug}>
                <img
                  className="mb-[17px] h-[265px] w-full object-cover transition-[filter] duration-200 group-hover:brightness-[0.91] max-[760px]:h-[220px] max-[430px]:h-[240px]"
                  src={photo(image)}
                  alt={alt}
                  loading="lazy"
                />
                <span className="text-[9px] font-bold tracking-[0.13em] text-olive uppercase">
                  {tag}
                </span>
                <h3 className="mt-2 mb-[7px] font-serif text-[27px] leading-[1.2] font-normal max-[760px]:text-[23px]">
                  {title}
                </h3>
                <p className="m-0 max-w-[310px] text-[12px] leading-[1.7] text-muted">
                  {copy}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="relative grid min-h-[480px] place-items-center overflow-hidden bg-[#45483d] text-center text-white max-[760px]:min-h-[420px]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={photo("photo-1507504031003-b417219a0fde", 2000)}
          alt=""
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-[1] max-w-[760px] px-6 py-[65px]">
          <p className="mb-[18px] text-[12px] font-bold tracking-[0.18em] text-[#e3dbc4] uppercase">
            Your next good day starts here
          </p>
          <h2 className="mb-7 font-serif text-[clamp(45px,7vw,78px)] leading-[1.08] font-normal">
            Make a little
            <br />
            room for something lovely.
          </h2>
          <span className="text-white">
            <TextLink href="/contact">Get in touch</TextLink>
          </span>
        </div>
      </section>
    </main>
  );
}
