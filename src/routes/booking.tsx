import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import winelandsImage from "../assets/cape-winelands.jpg";

export const Route = createFileRoute("/booking")({
  head: () => ({ meta: [
    { title: "Book a Private Tour | Luxury-Inclined Tours" },
    { name: "description", content: "Request your private Western Cape tour or chauffeur transfer. Share your dates, guests and preferences and we will curate the journey." },
    { property: "og:title", content: "Book Your Journey | Luxury-Inclined Tours" },
    { property: "og:description", content: "Tell us your dates and preferences — we will personally curate your Western Cape experience." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BookingPage,
});

const experiences = ["Cape Winelands", "Cape Point & Peninsula", "Garden Route", "Safari Experience", "Executive / Airport Transfer", "Bespoke itinerary"];
const fieldClass = "mt-2 h-12 w-full rounded-sm border border-charcoal/20 bg-soft-white px-4 text-sm text-charcoal outline-none transition-colors focus:border-gold";
const labelClass = "block text-[10px] font-semibold uppercase tracking-[0.16em] text-charcoal/70";

function BookingPage() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return <main className="min-h-svh bg-ivory text-charcoal">
    <header className="border-b border-charcoal/10 bg-forest text-soft-white">
      <div className="mx-auto grid max-w-[1344px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 lg:px-12">
        <Link to="/" className="min-w-0 text-left">
          <span className="block truncate font-display text-2xl leading-none sm:text-[27px]">Luxury-Inclined</span>
          <span className="mt-1 block text-[9px] uppercase tracking-[0.32em] text-gold">Tours · Western Cape</span>
        </Link>
        <Link to="/" className="inline-flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-soft-white/80 transition-colors hover:text-gold">
          <ArrowLeft size={14}/><span className="hidden sm:inline">Back to home</span>
        </Link>
      </div>
    </header>

    <div className="mx-auto max-w-[1344px] px-6 py-14 lg:px-12 lg:py-20">
      {sent ? <div className="mx-auto flex max-w-xl flex-col items-center py-16 text-center">
        <span className="grid size-16 place-items-center rounded-full border border-gold text-gold"><Check size={28}/></span>
        <h1 className="mt-8 text-5xl leading-none text-forest">Thank you.</h1>
        <p className="mt-5 text-sm leading-7 text-charcoal/65">Your journey request has been received. Our team will be in touch shortly to shape the details with you.</p>
        <Link to="/" className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-sm border border-gold bg-gold px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:border-forest hover:bg-forest hover:text-soft-white">Return to home</Link>
      </div> : <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <section>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">Private enquiry</p>
          <h1 className="mt-4 text-5xl leading-none text-forest sm:text-6xl">Book your journey</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-charcoal/65">Share a few details and we will personally curate your Western Cape experience. There is no obligation—every enquiry is answered by a member of our team.</p>

          <form onSubmit={submit} className="mt-10 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className={labelClass}>Full name<input required name="name" autoComplete="name" placeholder="Your name" className={fieldClass}/></label>
              <label className={labelClass}>Email address<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className={fieldClass}/></label>
              <label className={labelClass}>Phone / WhatsApp<input name="phone" type="tel" autoComplete="tel" placeholder="+27 ..." className={fieldClass}/></label>
              <label className={labelClass}>Travel date<input required type="date" name="date" className={fieldClass}/></label>
              <label className={labelClass}>Number of guests<input type="number" name="guests" min={1} max={20} defaultValue={2} className={fieldClass}/></label>
              <label className={labelClass}>Experience<select name="experience" className={fieldClass}>{experiences.map(item => <option key={item}>{item}</option>)}</select></label>
              <label className={`${labelClass} sm:col-span-2`}>Pick-up location<input name="pickup" placeholder="Hotel, address or airport" className={fieldClass}/></label>
              <label className={`${labelClass} sm:col-span-2`}>Tell us more<textarea rows={5} name="notes" placeholder="Places of interest, occasion, dietary needs, or anything we should know…" className="mt-2 w-full resize-none rounded-sm border border-charcoal/20 bg-soft-white p-4 text-sm leading-6 text-charcoal outline-none transition-colors focus:border-gold"/></label>
            </div>
            <button type="submit" className="inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-sm border border-gold bg-gold px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:border-forest hover:bg-forest hover:text-soft-white sm:w-auto">Send journey request <ArrowRight size={15}/></button>
            <p className="text-[11px] leading-6 text-charcoal/50">We reply within one business day. Your details are used only to plan your journey.</p>
          </form>
        </section>

        <aside className="space-y-8">
          <div className="overflow-hidden rounded-sm">
            <img src={winelandsImage} alt="Vineyards of the Cape Winelands at golden hour" width={1400} height={1050} loading="lazy" className="h-56 w-full object-cover sm:h-72 lg:h-80"/>
          </div>
          <div className="rounded-sm border border-charcoal/10 bg-soft-white p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">What to expect</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-charcoal/70">
              {[[Clock, "A personal reply within one business day"], [MapPin, "An itinerary shaped around your pace and interests"], [Check, "Chauffeur, vehicle and timing confirmed in writing"]].map(([Icon, copy]) => {
                const I = Icon as typeof Check;
                return <li key={copy as string} className="flex gap-3"><I size={18} strokeWidth={1.4} className="mt-0.5 shrink-0 text-gold"/><span>{copy as string}</span></li>;
              })}
            </ul>
          </div>
          <div className="rounded-sm bg-forest p-7 text-soft-white">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Prefer to speak with us</p>
            <div className="mt-5 space-y-4 text-sm">
              <a href="tel:+27000000000" className="flex items-center gap-3 text-soft-white/85 transition-colors hover:text-gold"><Phone size={17} strokeWidth={1.4} className="shrink-0 text-gold"/><span>+27 00 000 0000</span></a>
              <a href="mailto:hello@luxuryinclinedtours.co.za" className="flex min-w-0 items-center gap-3 text-soft-white/85 transition-colors hover:text-gold"><Mail size={17} strokeWidth={1.4} className="shrink-0 text-gold"/><span className="truncate">hello@luxuryinclinedtours.co.za</span></a>
              <p className="flex items-center gap-3 text-soft-white/60"><MapPin size={17} strokeWidth={1.4} className="shrink-0 text-gold"/><span>Western Cape, South Africa</span></p>
            </div>
          </div>
        </aside>
      </div>}
    </div>
  </main>;
}
