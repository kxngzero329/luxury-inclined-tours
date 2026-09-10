import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, ChevronLeft, ChevronRight, Menu, Quote, ShieldCheck, Sparkles, Plane, X } from "lucide-react";
import { useEffect, useState, type ButtonHTMLAttributes, type FormEvent } from "react";
import heroImage from "../assets/luxury-vineyard-hero.jpg";
import winelandsImage from "../assets/cape-winelands.jpg";
import capePointImage from "../assets/cape-point.jpg";
import gardenRouteImage from "../assets/garden-route.jpg";
import safariImage from "../assets/safari.jpg";
import executiveImage from "../assets/executive-travel.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Luxury Western Cape Tours | Luxury-Inclined" },
    { name: "description", content: "Private chauffeur-driven tours, transfers and bespoke Western Cape journeys with Luxury-Inclined Tours." },
    { property: "og:title", content: "Luxury-Inclined Tours | Western Cape" },
    { property: "og:description", content: "Travel beyond ordinary with private, chauffeur-driven Western Cape experiences." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { tone?: "gold" | "outline" | "light" };
function Button({ tone = "gold", className = "", ...props }: ButtonProps) {
  const styles = tone === "gold" ? "border-gold bg-gold text-forest hover:bg-ivory hover:border-ivory" : tone === "light" ? "border-ivory text-ivory hover:bg-ivory hover:text-forest" : "border-gold text-gold hover:bg-gold hover:text-forest";
  return <button className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border px-6 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${styles} ${className}`} {...props} />;
}

const experiences = [
  { title: "Cape Winelands", copy: "Private vineyard & culinary experiences", image: winelandsImage, size: "md:col-span-7 md:row-span-2" },
  { title: "Cape Point", copy: "A curated journey along the Cape Peninsula", image: capePointImage, size: "md:col-span-5" },
  { title: "Garden Route", copy: "Luxury multi-day escapes", image: gardenRouteImage, size: "md:col-span-5" },
  { title: "Safari Experiences", copy: "Exclusive wildlife encounters", image: safariImage, size: "md:col-span-6" },
  { title: "Executive Travel", copy: "Discreet chauffeur-driven corporate transport", image: executiveImage, size: "md:col-span-6" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const top = () => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); };
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  const quotes = [
    ["Every detail was considered, from the estate selection to the effortless timing. It felt entirely our own.", "Amelia & James", "London, United Kingdom"],
    ["Professional, discreet and exceptionally knowledgeable. Our Cape Peninsula day was the highlight of our stay.", "The Martin Family", "Toronto, Canada"],
  ];
  const currentQuote = quotes[quoteIndex] ?? ["A beautifully considered Western Cape journey.", "Private Guest", "International"];

  return <main className="bg-ivory text-charcoal">
    <header className={`fixed inset-x-0 top-0 z-40 border-b border-soft-white/20 text-soft-white transition-colors duration-300 ${scrolled ? "bg-forest/95 backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <button onClick={top} className="text-left" aria-label="Luxury-Inclined Tours, back to top">
          <span className="block font-display text-[27px] leading-none">Luxury-Inclined</span>
          <span className="mt-1 block text-[9px] uppercase tracking-[0.38em] text-gold">Tours · Western Cape</span>
        </button>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {["Experiences", "Destinations", "Our Story", "Fleet"].map((item) => <button key={item} onClick={top} className="text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold">{item}</button>)}
          <Button tone="outline" onClick={() => setEnquiryOpen(true)}>Plan your journey</Button>
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="grid size-11 place-items-center lg:hidden" aria-label="Toggle menu">{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
      </div>
      {menuOpen && <div className="border-t border-soft-white/20 bg-forest px-6 py-7 lg:hidden">{["Experiences", "Destinations", "Our Story", "Fleet"].map((item) => <button key={item} onClick={top} className="block w-full border-b border-soft-white/15 py-4 text-left text-xs uppercase tracking-[0.2em]">{item}</button>)}</div>}
    </header>

    <section className="relative flex min-h-[92svh] items-end overflow-hidden text-soft-white">
      <img src={heroImage} alt="Black luxury vehicle arriving at a Cape Winelands estate" width={1920} height={1080} className="absolute inset-0 size-full object-cover object-center" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/25" />
      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-16 pt-40 lg:px-12 lg:pb-20">
        <p className="reveal-up mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Private travel · Western Cape</p>
        <h1 className="reveal-up max-w-4xl text-6xl font-medium leading-[0.88] sm:text-7xl lg:text-[108px]">Travel Beyond<br/><em className="font-normal">Ordinary.</em></h1>
        <p className="reveal-up mt-7 max-w-xl text-sm leading-7 text-soft-white/85 sm:text-base">Private luxury tours & chauffeur experiences across the Western Cape.</p>
        <div className="reveal-up mt-9 flex flex-col gap-3 sm:flex-row">
          <Button onClick={() => document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" })}>Explore our experiences <ArrowRight size={15}/></Button>
          <Button tone="light" onClick={() => setEnquiryOpen(true)}>Book your journey</Button>
        </div>
        <div className="mt-12 flex items-center gap-3 text-[9px] uppercase tracking-[0.24em] text-soft-white/70"><ArrowDown size={15}/><span>Discover the Cape</span></div>
      </div>
    </section>

    <section id="experiences" className="px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1344px]">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">Curated for you</p><h2 className="max-w-2xl text-5xl leading-none text-forest sm:text-6xl">Signature Experiences</h2></div>
          <p className="max-w-md text-sm leading-7 text-charcoal/65">From celebrated vineyards to untamed coastlines, every itinerary is designed around your pace, preferences, and sense of discovery.</p>
        </div>
        <div className="grid auto-rows-[310px] grid-cols-1 gap-3 md:grid-cols-12 md:auto-rows-[270px]">
          {experiences.map((item) => <article key={item.title} className={`group relative overflow-hidden ${item.size}`}>
            <img src={item.image} alt={item.title} width={1400} height={1050} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-soft-white"><p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-gold">Private experience</p><h3 className="text-3xl">{item.title}</h3><p className="mt-1 text-xs text-soft-white/75">{item.copy}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="bg-forest px-6 py-24 text-ivory lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[1344px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative"><img src={winelandsImage} alt="Private vineyard journey in the Cape Winelands" width={1400} height={1050} loading="lazy" className="aspect-[4/5] w-full object-cover"/><div className="absolute -bottom-5 -right-2 border border-gold bg-forest px-6 py-5 sm:right-8"><span className="font-display text-4xl text-gold">The Cape,</span><span className="block text-[9px] uppercase tracking-[0.25em]">considered differently</span></div></div>
        <div className="lg:pl-14"><p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">About Luxury-Inclined</p><h2 className="max-w-xl text-5xl leading-[0.98] sm:text-6xl">More than a journey. <em className="font-normal text-gold">A lasting impression.</em></h2><div className="mt-8 space-y-5 text-sm leading-7 text-ivory/70"><p>We create refined, private travel experiences for guests who value comfort, time and genuine local insight.</p><p>From your arrival to your final destination, every detail is handled with quiet precision—leaving you free to be fully present in the moment.</p></div><div className="mt-10 grid grid-cols-3 border-y border-ivory/15 py-6 text-center"><div><strong className="block font-display text-3xl text-gold">Private</strong><span className="text-[9px] uppercase tracking-[0.16em]">Always</span></div><div className="border-x border-ivory/15"><strong className="block font-display text-3xl text-gold">Local</strong><span className="text-[9px] uppercase tracking-[0.16em]">Expertise</span></div><div><strong className="block font-display text-3xl text-gold">Tailored</strong><span className="text-[9px] uppercase tracking-[0.16em]">To you</span></div></div></div>
      </div>
    </section>

    <section className="bg-stone px-6 py-24 lg:px-12 lg:py-36"><div className="mx-auto max-w-[1344px]"><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-forest/70">Places worth lingering</p><h2 className="text-5xl text-forest sm:text-6xl">Featured Destinations</h2><div className="mt-12 grid gap-px bg-charcoal/15 md:grid-cols-3">{[[capePointImage,"01","Cape Peninsula","Cliff-hugging roads, secluded bays and the storied meeting of two oceans."],[winelandsImage,"02","Stellenbosch & Franschhoek","Historic estates, acclaimed cellars and exceptional farm-to-table dining."],[gardenRouteImage,"03","The Garden Route","A slow journey through forest, coast and characterful seaside towns."]].map(([image,n,title,copy]) => <article key={title} className="group bg-stone"><div className="aspect-[4/5] overflow-hidden"><img src={image} alt={title} width={1400} height={1050} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"/></div><div className="px-2 py-7"><span className="text-[9px] tracking-[0.2em] text-forest/50">{n}</span><h3 className="mt-2 text-3xl text-forest">{title}</h3><p className="mt-3 text-xs leading-6 text-charcoal/65">{copy}</p></div></article>)}</div></div></section>

    <section className="px-6 py-24 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1344px]"><div className="grid gap-12 lg:grid-cols-2"><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">Why travel with us</p><h2 className="text-5xl leading-none text-forest sm:text-6xl">Quiet luxury,<br/>thoughtfully delivered.</h2></div><div className="grid gap-px bg-stone sm:grid-cols-2">{[[ShieldCheck,"Professional, always","Impeccable presentation, discretion and absolute reliability."],[Sparkles,"Designed around you","No fixed formula—each day moves entirely at your pace."],[Plane,"Seamless from arrival","Airport, hotel and destination transfers coordinated with care."],[Check,"Local knowledge","The Western Cape's celebrated places and quieter discoveries."]].map(([Icon,title,copy]) => { const I = Icon as typeof Check; return <div key={title as string} className="bg-ivory p-7"><I size={24} strokeWidth={1.25} className="text-gold"/><h3 className="mt-8 text-2xl text-forest">{title as string}</h3><p className="mt-3 text-xs leading-6 text-charcoal/60">{copy as string}</p></div>})}</div></div></div></section>

    <section className="grid bg-charcoal text-ivory lg:grid-cols-2"><div className="hidden min-h-[520px] lg:block"><img src={heroImage} alt="Luxury Mercedes V-Class in the Cape Winelands" width={1920} height={1080} loading="lazy" className="size-full object-cover"/></div><div className="flex items-center px-6 py-20 lg:px-20"><div><p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">The luxury fleet</p><h2 className="text-5xl leading-none sm:text-6xl">Comfort in<br/><em className="font-normal text-gold">every detail.</em></h2><p className="mt-7 max-w-lg text-sm leading-7 text-ivory/65">Travel in immaculate, climate-controlled vehicles selected for generous space, quiet comfort and understated presence.</p><ul className="mt-8 grid gap-4 text-[10px] uppercase tracking-[0.15em] sm:grid-cols-2">{"Mercedes-Benz V-Class","Executive sedans","Complimentary water","On-board connectivity"].map(x=><li className="flex items-center gap-3" key={x}><span className="h-px w-5 bg-gold"/>{x}</li>)}</ul></div></div></section>

    <section className="px-6 py-24 text-center lg:py-32"><div className="mx-auto max-w-4xl"><Quote className="mx-auto text-gold" size={34} strokeWidth={1}/><p className="mt-7 text-[10px] uppercase tracking-[0.28em] text-gold">Guest impressions</p><blockquote className="mx-auto mt-7 text-3xl leading-snug text-forest sm:text-5xl">“{currentQuote[0]}”</blockquote><p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em]">{currentQuote[1]}</p><p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-charcoal/50">{currentQuote[2]}</p><div className="mt-8 flex justify-center gap-2"><button onClick={()=>setQuoteIndex((quoteIndex+quotes.length-1)%quotes.length)} aria-label="Previous testimonial" className="grid size-11 place-items-center border border-gold text-gold transition-colors hover:bg-gold hover:text-forest"><ChevronLeft size={17}/></button><button onClick={()=>setQuoteIndex((quoteIndex+1)%quotes.length)} aria-label="Next testimonial" className="grid size-11 place-items-center border border-gold text-gold transition-colors hover:bg-gold hover:text-forest"><ChevronRight size={17}/></button></div></div></section>

    <section className="relative overflow-hidden px-6 py-28 text-center text-soft-white lg:py-40"><img src={capePointImage} alt="The spectacular Cape Peninsula coastline" width={1400} height={1050} loading="lazy" className="absolute inset-0 size-full object-cover"/><div className="absolute inset-0 bg-forest/80"/><div className="relative mx-auto max-w-3xl"><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">Your journey, your way</p><h2 className="mt-5 text-5xl leading-none sm:text-7xl">Let us create something <em className="font-normal">exceptional.</em></h2><p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-soft-white/75">Tell us where you would like to go. We will take care of how you get there—and everything in between.</p><Button className="mt-9" onClick={()=>setEnquiryOpen(true)}>Begin your journey <ArrowRight size={15}/></Button></div></section>

    <footer className="bg-charcoal px-6 py-16 text-ivory lg:px-12">
      <div className="mx-auto max-w-[1344px]">
        <div className="grid gap-12 border-b border-ivory/15 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-3xl">Luxury-Inclined</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.32em] text-gold">Tours · Western Cape</p>
            <p className="mt-5 max-w-sm text-xs leading-6 text-ivory/50">Private tours, seamless transfers and memorable journeys throughout the Western Cape.</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Explore</p>
            <div className="mt-5 flex flex-col gap-3">{"Experiences","Destinations","Our Story","Fleet"].map(item => <button key={item} onClick={top} className="text-left text-xs uppercase tracking-[0.12em] text-ivory/70 transition-colors hover:text-gold">{item}</button>)}</div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Experiences</p>
            <div className="mt-5 flex flex-col gap-3">{"Cape Winelands","Cape Point","Garden Route","Safari","Executive Travel"].map(item => <button key={item} onClick={top} className="text-left text-xs uppercase tracking-[0.12em] text-ivory/70 transition-colors hover:text-gold">{item}</button>)}</div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Get in touch</p>
            <p className="mt-5 text-xs leading-6 text-ivory/50">Ready to plan your journey? Open the enquiry panel and we will personally curate your experience.</p>
            <Button tone="outline" className="mt-5" onClick={() => setEnquiryOpen(true)}>Plan your journey</Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <div className="text-[9px] uppercase tracking-[0.16em] text-ivory/40">
            <span>© 2026 Luxury-Inclined Tours</span>
            <span className="mx-3 hidden sm:inline">·</span>
            <span className="block sm:inline">Western Cape, South Africa</span>
          </div>
          <button onClick={top} className="text-[9px] uppercase tracking-[0.16em] text-ivory/40 transition-colors hover:text-gold">Back to top</button>
        </div>
      </div>
    </footer>

    {enquiryOpen && <div className="fixed inset-0 z-50 flex justify-end bg-charcoal/70" role="dialog" aria-modal="true" aria-label="Plan your journey"><button className="absolute inset-0 cursor-default" aria-label="Close enquiry" onClick={()=>setEnquiryOpen(false)}/><aside className="relative h-full w-full max-w-xl overflow-y-auto bg-ivory p-7 shadow-2xl sm:p-12"><button onClick={()=>setEnquiryOpen(false)} className="absolute right-6 top-6 grid size-10 place-items-center border border-charcoal/20" aria-label="Close"><X size={18}/></button>{sent ? <div className="flex min-h-[70vh] flex-col items-center justify-center text-center"><span className="grid size-16 place-items-center rounded-full border border-gold text-gold"><Check size={28}/></span><h2 className="mt-7 text-5xl text-forest">Thank you.</h2><p className="mt-4 max-w-sm text-sm leading-7 text-charcoal/65">Your journey request has been received. Our team will be in touch to shape the details with you.</p><Button className="mt-8" onClick={()=>{setSent(false);setEnquiryOpen(false)}}>Return to site</Button></div> : <><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Private enquiry</p><h2 className="mt-4 text-5xl leading-none text-forest">Plan your journey</h2><p className="mt-5 text-sm leading-7 text-charcoal/60">Share a few details and we will personally curate your Western Cape experience.</p><form onSubmit={submit} className="mt-10 space-y-6">{[["Full name","text","Your name"],["Email address","email","you@example.com"],["Travel date","date",""]].map(([label,type,placeholder])=><label key={label} className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal/70">{label}<input required type={type} placeholder={placeholder} className="mt-2 h-12 w-full border-b border-charcoal/25 bg-transparent text-sm normal-case outline-none transition-colors focus:border-gold"/></label>)}<label className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal/70">Experience<select className="mt-2 h-12 w-full border-b border-charcoal/25 bg-transparent text-sm normal-case outline-none focus:border-gold"><option>Cape Winelands</option><option>Cape Point</option><option>Garden Route</option><option>Safari Experience</option><option>Executive Travel</option><option>Bespoke itinerary</option></select></label><label className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal/70">Tell us more<textarea rows={4} placeholder="Number of guests, places of interest, or anything we should know…" className="mt-2 w-full resize-none border-b border-charcoal/25 bg-transparent py-3 text-sm normal-case leading-6 outline-none focus:border-gold"/></label><Button type="submit" className="mt-2 w-full">Send journey request <ArrowRight size={15}/></Button></form></>}</aside></div>}
  </main>;
}
