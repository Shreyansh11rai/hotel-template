import InquiryForm from "../../components/InquiryForm";
import { PageHero } from "../../components/Sections";
import Link from "next/link";

export const metadata = {
  title: "Contact & inquiries — Aangan House",
  description:
    "Get in touch with Aangan House about your stay, event or catering plans.",
};

export default function Contact() {
  return (
    <main>
      <PageHero
        image="/images/photo-1449247709967-d4461a6a6103.jpg"
        alt="A quiet garden path at Aangan House"
        eyebrow="We're all ears"
        title={
          <>
            What&apos;s on
            <br />
            your mind?
          </>
        }
        description="A wedding, a weekend away, a question about the menu — tell us a little."
      />
      <section
        className="mx-auto w-[calc(100%-96px)] max-w-[1320px] py-[90px] pb-[110px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:py-[72px]"
        id="inquiry"
      >
        <div className="mb-[42px] flex items-end justify-between gap-[30px] max-[760px]:mb-[37px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[15px]">
          <div>
            <p className="mb-[18px] text-md font-bold tracking-[0.18em] text-olive uppercase">
              Let&apos;s start with hello
            </p>
            <h2 className="m-0 font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
              How can we help?
            </h2>
          </div>
          <p className="m-0 max-w-[380px] text-lg leading-[1.8] text-muted">
            Send us a note and our team will be in touch. For room availability,
            you can also{" "}
            <Link className="underline" href="/rooms#booking">
              request a stay here
            </Link>
            .
          </p>
        </div>
        <div className="grid grid-cols-[0.72fr_1.28fr] gap-[11%] max-[760px]:grid-cols-1 max-[760px]:gap-[42px]">
          <div className="flex flex-col gap-[29px] max-[760px]:grid max-[760px]:grid-cols-2 max-[760px]:gap-x-[18px] max-[760px]:gap-y-6">
            <div>
              <p className="mb-2 text-sm font-bold tracking-[0.14em] text-muted uppercase">
                Find us
              </p>
              <p className="m-0 font-serif text-lg leading-[1.55] max-[760px]:text-md">
                A quiet corner, just outside the city.
                <br />
                Your town, your state.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold tracking-[0.14em] text-muted uppercase">
                Call the house
              </p>
              <p className="m-0 font-serif text-lg leading-[1.55] max-[760px]:text-md">
                <a href="tel:+910000000000">+91 00000 00000</a>
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold tracking-[0.14em] text-muted uppercase">
                Write us a note
              </p>
              <p className="m-0 font-serif text-lg leading-[1.55] max-[760px]:text-md">
                <a href="mailto:hello@aanganhouse.example">
                  hello@aanganhouse.example
                </a>
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold tracking-[0.14em] text-muted uppercase">
                Come by
              </p>
              <p className="m-0 font-serif text-lg leading-[1.55] max-[760px]:text-md">
                Every day, by appointment
              </p>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
