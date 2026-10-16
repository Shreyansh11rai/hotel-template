"use client";

import { getWhatsAppUrl } from "../lib/whatsapp";

function localDateString(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export default function RoomBookingWidget() {
  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const details = [...new FormData(form)]
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    window.location.href = getWhatsAppUrl(
      `Hello Aangan House, I would like to check room availability.\n\n${details}`,
    );
  }

  const today = localDateString(new Date());
  const inputClass =
    "min-w-0 border-0 border-b border-ink/25 bg-transparent py-2 text-sm text-ink outline-none focus:border-olive";

  return (
    <form
      className="grid w-full grid-cols-[1fr_1fr_0.8fr_auto] items-end gap-x-5 gap-y-4 bg-paper p-5 text-ink shadow-xl max-[760px]:grid-cols-2 max-[430px]:grid-cols-1"
      onSubmit={submit}
      aria-label="Room availability request"
    >
      <div className="flex min-w-0 flex-col gap-2">
        <label
          className="text-sm font-bold tracking-[0.12em] text-muted uppercase"
          htmlFor="hero-checkin"
        >
          Check in
        </label>
        <input
          className={inputClass}
          id="hero-checkin"
          name="check-in"
          type="date"
          min={today}
          required
          onChange={(event) => {
            const checkout = event.currentTarget.form.elements.namedItem("check-out");
            checkout.min = event.currentTarget.value || today;
            if (checkout.value && checkout.value <= event.currentTarget.value) {
              checkout.value = "";
            }
          }}
        />
      </div>
      <div className="flex min-w-0 flex-col gap-2">
        <label
          className="text-sm font-bold tracking-[0.12em] text-muted uppercase"
          htmlFor="hero-checkout"
        >
          Check out
        </label>
        <input
          className={inputClass}
          id="hero-checkout"
          name="check-out"
          type="date"
          min={today}
          required
        />
      </div>
      <div className="flex min-w-0 flex-col gap-2">
        <label
          className="text-sm font-bold tracking-[0.12em] text-muted uppercase"
          htmlFor="hero-guests"
        >
          Guests
        </label>
        <select
          className={inputClass}
          id="hero-guests"
          name="guests"
          defaultValue="2"
        >
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
          <option value="5+">5+ guests</option>
        </select>
      </div>
      <button
        className="min-h-[45px] cursor-pointer border border-ink bg-ink px-5 text-sm font-bold tracking-[0.08em] text-paper uppercase transition-colors hover:bg-transparent hover:text-ink max-[760px]:col-span-2 max-[430px]:col-auto"
        type="submit"
      >
        Check availability <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
