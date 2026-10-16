"use client";

import { useEffect, useRef, useState } from "react";

export default function InquiryForm({ booking = false }) {
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    if (!booking) return;
    const date = new Date().toISOString().slice(0, 10);
    const form = formRef.current;
    const checkin = form.elements.checkin;
    const checkout = form.elements.checkout;
    checkin.min = date;
    checkout.min = date;

    function updateCheckoutMinimum() {
      checkout.min = checkin.value || date;
      if (checkout.value && checkout.value <= checkin.value) checkout.value = "";
    }

    checkin.addEventListener("change", updateCheckoutMinimum);
    return () => checkin.removeEventListener("change", updateCheckoutMinimum);
  }, [booking]);

  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const details = [...new FormData(form)].map(([key, value]) => `${key}: ${value}`).join("\n");
    const subject = booking ? "Room booking request" : "Aangan House inquiry";
    setStatus("Your email app will open with your details ready to send.");
    window.location.href = `mailto:hello@aanganhouse.example?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details)}`;
  }

  const prefix = booking ? "booking" : "inquiry";
  const fieldClass = "flex min-w-0 flex-col gap-[9px]";
  const labelClass = `text-[9px] font-bold tracking-[0.12em] uppercase ${booking ? "text-white/70" : "text-muted"}`;
  const inputClass = `w-full rounded-none border-0 border-b bg-transparent py-3 text-[13px] outline-none focus:border-olive ${booking ? "border-white/35 text-white [color-scheme:dark] focus:border-white placeholder:text-white/60" : "border-line text-ink placeholder:text-[#9a9a91]"}`;

  return (
    <form ref={formRef} className="grid grid-cols-2 gap-x-[18px] gap-y-[23px] max-[760px]:gap-x-[14px] max-[760px]:gap-y-[21px] max-[430px]:grid-cols-1" onSubmit={submit}>
      <div className={fieldClass}><label className={labelClass} htmlFor={`${prefix}-name`}>Your name</label><input className={inputClass} id={`${prefix}-name`} name="name" autoComplete="name" placeholder="How should we call you?" required /></div>
      <div className={fieldClass}><label className={labelClass} htmlFor={`${prefix}-email`}>Email address</label><input className={inputClass} id={`${prefix}-email`} name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></div>
      {booking ? (
        <>
          <div className={fieldClass}><label className={labelClass} htmlFor="checkin">Check in</label><input className={inputClass} id="checkin" name="checkin" type="date" required /></div>
          <div className={fieldClass}><label className={labelClass} htmlFor="checkout">Check out</label><input className={inputClass} id="checkout" name="checkout" type="date" required /></div>
          <div className={fieldClass}><label className={labelClass} htmlFor="guests">Guests</label><select className={inputClass} id="guests" name="guests" defaultValue="" required><option value="" disabled>Choose guests</option><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option></select></div>
          <div className={fieldClass}><label className={labelClass} htmlFor="booking-phone">Phone number</label><input className={inputClass} id="booking-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" /></div>
          <div className={`${fieldClass} col-span-full max-[430px]:col-auto`}><label className={labelClass} htmlFor="booking-notes">Anything else we should know?</label><textarea className={`${inputClass} min-h-[75px] resize-y`} id="booking-notes" name="notes" placeholder="Room preferences, a special occasion, questions..." /></div>
        </>
      ) : (
        <>
          <div className={fieldClass}><label className={labelClass} htmlFor="inquiry-phone">Phone number</label><input className={inputClass} id="inquiry-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" /></div>
          <div className={fieldClass}><label className={labelClass} htmlFor="inquiry-type">I&apos;m getting in touch about</label><select className={inputClass} id="inquiry-type" name="interest" defaultValue="" required><option value="" disabled>Choose one</option><option>Wedding or celebration</option><option>Banquet hall or lawn</option><option>Catering</option><option>Room stay</option><option>Something else</option></select></div>
          <div className={`${fieldClass} col-span-full max-[430px]:col-auto`}><label className={labelClass} htmlFor="inquiry-message">A little more about it</label><textarea className={`${inputClass} min-h-[75px] resize-y`} id="inquiry-message" name="message" placeholder="Dates, number of guests, the kind of day you're imagining..." /></div>
        </>
      )}
      <div className="col-span-full mt-[5px] flex items-center gap-5 max-[430px]:col-auto max-[430px]:flex-col max-[430px]:items-start">
        <button className={`min-h-12 cursor-pointer border px-[22px] text-[10px] font-bold tracking-[0.1em] uppercase transition-colors ${booking ? "border-paper bg-paper text-ink hover:bg-transparent hover:text-white" : "border-ink bg-ink text-white hover:bg-transparent hover:text-ink"}`} type="submit">
          {booking ? "Request a room" : "Send an inquiry"} <span aria-hidden="true">↗</span>
        </button>
        <p className={`m-0 text-[12px] leading-[1.6] ${booking ? "text-[#eef0e8]" : "text-olive"}`} aria-live="polite">{status}</p>
      </div>
    </form>
  );
}
