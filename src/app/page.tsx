
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Check,
  Copy,
  Heart,
  Menu,
  Share2,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const festivals = [
  {
    number: "01",
    title: "Dashain",
    nepali: "दशैं",
    subtitle: "The festival of blessings",
    description:
      "Red tika, green jamara, the warmth of home, and blessings that bring generations together.",
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1200&q=85",
    accent: "from-orange-950/95 via-red-950/35 to-transparent",
    icon: "🌺",
    greeting:
      "शुभ दशैं! May this Dashain bring happiness, good health, peace, and prosperity to you and your family.",
  },
  {
    number: "02",
    title: "Tihar",
    nepali: "तिहार",
    subtitle: "The festival of lights",
    description:
      "A celebration of glowing diyos, marigold garlands, colorful rangoli, and the love that connects us.",
    image:"/images/tihar.jpg",
    greeting:
      "शुभ तिहार! May the lights of Tihar fill your home with joy, your heart with love, and your life with endless blessings.",
  },
];

const traditions = [
  {
    icon: "🌿",
    title: "Tika & Jamara",
    description:
      "Blessings, prosperity, and the beautiful tradition of coming together.",
  },
  {
    icon: "🪔",
    title: "Lights & Flowers",
    description:
      "Diyas, marigolds, rangoli, and the glow of a home filled with happiness.",
  },
  {
    icon: "❤️",
    title: "Family & Belonging",
    description:
      "The moments, reunions, and memories that make every celebration special.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedFestival, setSelectedFestival] = useState("Dashain");
  const currentYearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (currentYearRef.current) {
      currentYearRef.current.textContent = String(new Date().getFullYear());
    }
  }, []);

  const selected =
    festivals.find((festival) => festival.title === selectedFestival) ??
    festivals[0];

  async function copyGreeting() {
    try {
      await navigator.clipboard.writeText(selected.greeting);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy your festival greeting:", selected.greeting);
    }
  }

  async function shareGreeting() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Utsav Nepal — ${selected.title}`,
          text: selected.greeting,
        });
      } catch {
        // The user may cancel the native share dialog.
      }
    } else {
      await copyGreeting();
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#100d19] text-[#f8f5f0]">
      {/* Navigation */}
      <header className="relative z-50 border-b border-white/[0.06]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-orange-400 text-2xl text-[#211322] shadow-lg shadow-orange-500/20">
              ✺
            </span>
            <span>
              <span className="block text-lg font-semibold tracking-tight">
                Utsav Nepal
              </span>
              <span className="block text-xs text-white/45">
                हाम्रो चाड, हाम्रो खुसी
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-9 text-sm text-white/60 md:flex">
            <a href="#festivals" className="transition hover:text-orange-200">
              Festivals
            </a>
            <a href="#traditions" className="transition hover:text-orange-200">
              Traditions
            </a>
            <a href="#greetings" className="transition hover:text-orange-200">
              Greetings
            </a>
          </div>

          <a
            href="#festivals"
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#171323] transition hover:bg-orange-200 sm:inline-flex"
          >
            Explore festivals <ArrowRight size={15} />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid size-11 place-items-center rounded-full border border-white/10 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#171220] px-6 py-5 shadow-xl md:hidden">
            {[
              ["Festivals", "#festivals"],
              ["Traditions", "#traditions"],
              ["Greetings", "#greetings"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/[0.06] py-4 text-sm text-white/80 last:border-0"
              >
                {label} <ArrowRight className="ml-2 inline" size={14} />
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto flex max-w-7xl items-center px-5 py-16 sm:px-8 sm:py-24 lg:min-h-[690px] lg:px-10 lg:py-20"
      >
        <div className="pointer-events-none absolute -left-48 top-16 size-[450px] rounded-full bg-orange-500/[0.08] blur-[130px]" />

        <div className="relative grid w-full items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-200/20 bg-orange-200/[0.06] px-4 py-2 text-xs tracking-wide text-orange-200">
              <Sparkles size={14} />
              TWO FESTIVALS. ONE BEAUTIFUL CULTURE.
            </div>

            <p className="mb-4 text-sm tracking-[0.24em] text-orange-300">
              हाम्रो संस्कृति, हाम्रो पहिचान
            </p>

            <h1 className="max-w-2xl text-5xl font-medium leading-[1.07] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Some moments
              <br />
              bring us
              <br />
              <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-rose-300 bg-clip-text text-transparent">
                closer to home.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/55 sm:text-lg">
              The blessings of Dashain. The lights of Tihar. Discover the
              Nepali traditions that turn simple moments into lifelong
              memories.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#festivals"
                className="group inline-flex items-center gap-3 rounded-full bg-orange-400 px-6 py-4 text-sm font-semibold text-[#211322] transition hover:bg-orange-300"
              >
                Discover our festivals
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </a>
              <a
                href="#greetings"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm text-white/80 transition hover:bg-white/[0.05]"
              >
                Send a wish <Heart size={15} />
              </a>
            </div>

            <div className="mt-11 flex items-center gap-4 border-t border-white/10 pt-7">
              <div className="flex -space-x-2">
                {["🌺", "🪔", "🌿"].map((emoji) => (
                  <span
                    key={emoji}
                    className="grid size-10 place-items-center rounded-full border-2 border-[#100d19] bg-[#282031] text-lg"
                  >
                    {emoji}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium">Rooted in tradition</p>
                <p className="mt-1 text-xs text-white/40">
                  Celebrated with love, wherever we are.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cinematic festival visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[540px]"
          >
            <div className="absolute -inset-6 rounded-[40px] bg-orange-400/[0.08] blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#21192a] p-2 shadow-2xl shadow-black/30 sm:rounded-[36px] sm:p-3">
              <div className="relative min-h-[430px] overflow-hidden rounded-[21px] sm:min-h-[530px] sm:rounded-[27px]">
                <img
                  src={festivals[0].image}
                  alt="A festive cultural scene representing the warmth of Nepali celebrations"
                  className="absolute inset-0 size-full object-cover"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130d19] via-[#130d19]/20 to-black/10" />

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-2 text-[10px] tracking-[0.2em] text-white/90 backdrop-blur-md">
                    THE NEPALI FESTIVE SEASON
                  </span>
                  <span className="grid size-10 place-items-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md">
                    <Sparkles size={17} />
                  </span>
                </div>

                <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                  <p className="text-xs tracking-[0.25em] text-orange-200">
                    हाम्रो चाड, हाम्रो खुसी
                  </p>
                  <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                    Celebrate
                    <br />
                    what connects us.
                  </h2>
                  <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-5">
                    <div>
                      <p className="text-sm font-medium">Dashain & Tihar</p>
                      <p className="mt-1 text-xs text-white/60">
                        Two celebrations, countless memories
                      </p>
                    </div>
                    <a
                      href="#festivals"
                      aria-label="Explore Dashain and Tihar"
                      className="grid size-11 place-items-center rounded-full bg-orange-300 text-[#211322] transition hover:scale-105"
                    >
                      <ArrowDown size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-2 top-[35%] rounded-2xl border border-white/10 bg-[#211a2d]/95 p-3 shadow-xl backdrop-blur-xl sm:-left-7 sm:p-4">
              <span className="text-2xl">🌿</span>
              <p className="mt-2 text-xs font-medium">Blessings</p>
              <p className="mt-1 text-[10px] text-white/45">Passed with love</p>
            </div>

            <div className="absolute -right-2 bottom-[30%] rounded-2xl border border-white/10 bg-[#211a2d]/95 p-3 shadow-xl backdrop-blur-xl sm:-right-7 sm:p-4">
              <span className="text-2xl">🪔</span>
              <p className="mt-2 text-xs font-medium">New memories</p>
              <p className="mt-1 text-[10px] text-white/45">Made together</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Festival cards */}
      <section
        id="festivals"
        className="mx-auto max-w-7xl scroll-mt-8 px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
      >
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs tracking-[0.28em] text-orange-300">
              TWO CELEBRATIONS, ONE HEART
            </p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              Every festival
              <br />
              <span className="text-white/40">has a feeling.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/50">
            Discover the traditions, symbols, and beautiful little moments
            that make Dashain and Tihar unforgettable.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {festivals.map((festival, index) => (
            <motion.article
              key={festival.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -5 }}
              className="group relative min-h-[440px] overflow-hidden rounded-[28px] border border-white/10 bg-[#21192a] sm:min-h-[490px]"
            >
              <img
                src={festival.image}
                alt={`${festival.title} festival`}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${festival.accent} via-[#140e1b]/45 to-black/10`}
              />

              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-2 text-[10px] tracking-[0.2em] backdrop-blur-md">
                    FESTIVAL {festival.number}
                  </span>
                  <span className="grid size-12 place-items-center rounded-full border border-white/20 bg-black/20 text-2xl backdrop-blur-md">
                    {festival.icon}
                  </span>
                </div>

                <div>
                  <p className="mb-2 text-lg text-orange-200">
                    {festival.nepali}
                  </p>
                  <h3 className="text-5xl font-medium tracking-tight sm:text-6xl">
                    {festival.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-white/80">
                    {festival.subtitle}
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                    {festival.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/20 pt-5">
                    <span className="text-xs text-white/65">
                      Discover the traditions
                    </span>
                    <a
                      href="#greetings"
                      onClick={() => setSelectedFestival(festival.title)}
                      aria-label={`Create a ${festival.title} greeting`}
                      className="grid size-11 place-items-center rounded-full bg-white text-[#171323] transition group-hover:bg-orange-300"
                    >
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Traditions */}
      <section
        id="traditions"
        className="mx-auto max-w-7xl scroll-mt-8 px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs tracking-[0.28em] text-orange-300">
            MORE THAN A CELEBRATION
          </p>
          <h2 className="text-4xl font-medium sm:text-5xl">
            Traditions that
            <br />
            <span className="text-white/40">feel like home.</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {traditions.map((tradition, index) => (
            <motion.div
              key={tradition.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[24px] border border-white/[0.09] bg-white/[0.025] p-6 transition hover:border-orange-200/20 hover:bg-white/[0.045] sm:p-7"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-orange-300/10 text-2xl">
                {tradition.icon}
              </span>
              <h3 className="mt-6 text-lg font-medium">{tradition.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/50">
                {tradition.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Greeting builder */}
      <section
        id="greetings"
        className="mx-auto max-w-7xl scroll-mt-8 px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-[#34213b] via-[#21192e] to-[#15111f] p-6 sm:rounded-[36px] sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-orange-400/10 blur-[90px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-xs tracking-[0.28em] text-orange-200">
                SHARE A LITTLE HAPPINESS
              </p>
              <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl">
                A little wish.
                <br />
                A lot of love.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                Send heartfelt Dashain and Tihar wishes to the people who make
                life special. Choose your festival, then copy or share your
                greeting.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {festivals.map((festival) => (
                  <button
                    key={festival.title}
                    type="button"
                    onClick={() => {
                      setSelectedFestival(festival.title);
                      setCopied(false);
                    }}
                    aria-pressed={selectedFestival === festival.title}
                    className={`rounded-full border px-5 py-3 text-sm transition ${
                      selectedFestival === festival.title
                        ? "border-orange-300 bg-orange-300 text-[#211322]"
                        : "border-white/15 text-white/70 hover:border-orange-200/50"
                    }`}
                  >
                    {festival.icon} {festival.title}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={copyGreeting}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[#171323] transition hover:bg-orange-100"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied!" : "Copy greeting"}
                </button>
                <button
                  type="button"
                  onClick={shareGreeting}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm transition hover:bg-white/5"
                >
                  <Share2 size={16} /> Share wish
                </button>
              </div>
            </div>

            <motion.div
              key={selected.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto w-full max-w-md rotate-1 rounded-[25px] border border-orange-100/20 bg-gradient-to-br from-[#7c382c] via-[#52273c] to-[#30203d] p-7 shadow-2xl sm:rounded-[30px] sm:p-9"
            >
              <div className="flex items-center justify-between">
                <Sparkles className="text-amber-200" size={22} />
                <span className="text-[10px] tracking-[0.24em] text-amber-100/60">
                  WITH LOVE FROM NEPAL
                </span>
              </div>
              <p className="mt-9 text-sm text-orange-100/65">
                {selected.nepali}
              </p>
              <h3 className="mt-2 font-serif text-4xl text-orange-50">
                {selected.title === "Dashain" ? "शुभ दशैं" : "शुभ तिहार"}
              </h3>
              <p className="mt-5 text-sm leading-7 text-orange-50/80">
                {selected.greeting}
              </p>
              <div className="my-7 h-px bg-orange-100/20" />
              <div className="flex items-center justify-between gap-3 text-xs text-orange-100/60">
                <span>तपाईं र तपाईंको परिवारलाई</span>
                <Heart size={17} />
              </div>
              <div className="pointer-events-none absolute -bottom-4 -right-1 text-7xl opacity-20">
                {selected.icon}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing message */}
      <section className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-10">
        <Sun className="mx-auto mb-5 text-orange-300" size={28} />
        <p className="text-xs tracking-[0.28em] text-orange-300">
          हाम्रो चाड, हाम्रो खुसी
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-medium leading-tight sm:text-5xl">
          Wherever life takes us,
          <br />
          <span className="text-white/40">tradition brings us together.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/45">
          Celebrating the spirit of Dashain and Tihar, and the people who make
          every moment worth remembering.
        </p>
        <a
          href="#home"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm transition hover:border-orange-200/40 hover:bg-white/[0.04]"
        >
          Back to top <ArrowDown className="rotate-180" size={15} />
        </a>
      </section>

      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <a href="#home" className="font-medium text-white/70">
            Utsav Nepal <span className="ml-1">✺</span>
          </a>
          <span>
            © <span ref={currentYearRef} /> Utsav Nepal · Made with ❤️ in Nepal
          </span>
          <span>हाम्रो चाड, हाम्रो खुसी 🇳🇵</span>
        </div>
      </footer>
    </main>
  );
}
