import TextLink from "./TextLink";

export function PageHero({ image, alt, eyebrow, title, description }) {
  return (
    <section className="relative flex min-h-[510px] items-end overflow-hidden bg-[#494b3a] text-white max-[760px]:min-h-[460px] max-[430px]:min-h-[420px]">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={image}
        alt={alt}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,24,18,0.63),rgba(20,24,18,0.08)_82%),linear-gradient(0deg,rgba(20,24,18,0.42),transparent_62%)]" />
      <div className="relative z-[1] mx-auto w-[calc(100%-96px)] max-w-[1320px] py-[85px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:py-[75px] max-[760px]:pb-[45px]">
        <p className="mb-[18px] text-lg font-bold tracking-[0.18em] text-[#e5ddc6] uppercase">
          {eyebrow}
        </p>
        <h1 className="m-0 max-w-[760px] font-serif text-[clamp(58px,8vw,100px)] leading-none tracking-[-0.045em] max-[760px]:text-[clamp(55px,14vw,82px)]">
          {title}
        </h1>
        <p className="mt-[23px] mb-0 max-w-[445px] text-lg leading-[1.8] text-white/85">
          {description}
        </p>
      </div>
    </section>
  );
}

export function SimpleBand({ eyebrow, title, description, link, linkText }) {
  return (
    <section className="bg-band py-[95px] max-[760px]:py-[72px]">
      <div className="mx-auto w-[calc(100%-96px)] max-w-[1320px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)]">
        <p className="mb-[18px] text-lg font-bold tracking-[0.18em] text-olive uppercase">
          {eyebrow}
        </p>
        <h2 className="mb-5 max-w-[760px] font-serif text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-[-0.035em]">
          {title}
        </h2>
        <p className="mb-[26px] max-w-[490px] text-lg leading-[1.8] text-muted">
          {description}
        </p>
        <TextLink href={link}>{linkText}</TextLink>
      </div>
    </section>
  );
}

export function BottomLink({ href, children }) {
  return (
    <div className="mx-auto w-[calc(100%-96px)] max-w-[1320px] py-9 pb-[60px] max-[1050px]:w-[min(calc(100%-56px),900px)] max-[760px]:w-[calc(100%-40px)] max-[760px]:py-[30px] max-[760px]:pb-[45px]">
      <TextLink href={href}>{children}</TextLink>
    </div>
  );
}
