import { PageHero, SimpleBand } from "../../components/Sections";

export const metadata = {
  title: "Events — Aangan House",
  description: "Celebrate the moments that matter at Aangan House.",
};
const image = "/images/photo-1464366400600-7168b8af9bc3.jpg";

export default function Events() {
  return (
    <main>
      <PageHero
        image={image}
        alt="A long dinner table dressed for an evening event"
        eyebrow="The good stuff happens together"
        title={
          <>
            Here&apos;s to your
            <br />
            next occasion.
          </>
        }
        description="Good people, a generous table and a day that feels like you."
      />
      <section className="mx-auto w-[calc(100%-96px)] max-w-[1320px] py-[100px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:py-[72px]">
        <div className="mb-12 flex items-end justify-between gap-[30px] max-[760px]:mb-[30px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[15px]">
          <div>
            <p className="mb-[18px] text-[12px] font-bold tracking-[0.18em] text-olive uppercase">
              Come as you are
            </p>
            <h2 className="m-0 font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
              The moments worth gathering for.
            </h2>
          </div>
          <p className="mb-[5px] max-w-[400px] text-[15px] leading-[1.8] text-muted max-[760px]:mb-0 max-[760px]:max-w-[500px]">
            Weddings that feel like you. Birthdays that run late. Work
            gatherings with a little more heart. We&apos;ll help you make a day
            of it.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-[22px] max-[760px]:mt-8 max-[760px]:grid-cols-1 max-[760px]:gap-[13px]">
          <article className="min-h-[235px] border border-line p-[29px] px-[26px] max-[760px]:min-h-0 max-[760px]:p-[23px]">
            <span className="text-[9px] font-bold tracking-[0.13em] text-olive">
              01 / THE BIG DAY
            </span>
            <h3 className="mt-[33px] mb-3 font-serif text-[27px] leading-[1.2] font-normal max-[760px]:mt-5 max-[760px]:mb-[9px]">
              Weddings
            </h3>
            <p className="m-0 text-[13px] leading-[1.75] text-muted">
              A warm, personal setting for the promises, speeches and dancing
              you&apos;ll remember.
            </p>
          </article>
          <article className="min-h-[235px] border border-line p-[29px] px-[26px] max-[760px]:min-h-0 max-[760px]:p-[23px]">
            <span className="text-[9px] font-bold tracking-[0.13em] text-olive">
              02 / MARK THE MOMENT
            </span>
            <h3 className="mt-[33px] mb-3 font-serif text-[27px] leading-[1.2] font-normal max-[760px]:mt-5 max-[760px]:mb-[9px]">
              Family celebrations
            </h3>
            <p className="m-0 text-[13px] leading-[1.75] text-muted">
              Birthdays, anniversaries, reunions and all the reasons to bring
              everyone together.
            </p>
          </article>
          <article className="min-h-[235px] border border-line p-[29px] px-[26px] max-[760px]:min-h-0 max-[760px]:p-[23px]">
            <span className="text-[9px] font-bold tracking-[0.13em] text-olive">
              03 / WORK, WITH HEART
            </span>
            <h3 className="mt-[33px] mb-3 font-serif text-[27px] leading-[1.2] font-normal max-[760px]:mt-5 max-[760px]:mb-[9px]">
              Gatherings & retreats
            </h3>
            <p className="m-0 text-[13px] leading-[1.75] text-muted">
              Step away from the usual meeting room and give your team space to
              think, eat and connect.
            </p>
          </article>
        </div>
      </section>
      <SimpleBand
        eyebrow="Start with a conversation"
        title={
          <>
            Tell us what you&apos;re
            <br />
            looking forward to.
          </>
        }
        description="Every gathering is different. Share the date, the guest list and the little details that matter most to you. We'll take it from there."
        link="/contact#inquiry"
        linkText="Plan your event"
      />
    </main>
  );
}
