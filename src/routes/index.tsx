import { createFileRoute } from "@tanstack/react-router";
import {
  Play,
  Globe,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Award,
  Heart,
  Briefcase,
  ShieldCheck,
  Quote,
  Camera,
  Megaphone,
  Clapperboard,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  Star,
  Asterisk,
} from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  fadeInVariants,
  slideUpVariants,
  scaleVariants,
} from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.png";
import inspireImg from "@/assets/inspire-section.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kathputlee — We Create Unique Film Experience" },
      {
        name: "description",
        content:
          "Kathputlee Media — a one stop platform for content, film services, TV commercials and branded content.",
      },
      { property: "og:title", content: "Kathputlee — We Create Unique Film Experience" },
      {
        property: "og:description",
        content: "Content, Film Services, TV Commercials and Branded Content.",
      },
    ],
  }),
  component: Index,
});

// Map placeholder keys to curated Unsplash photos relevant to a film
// production agency. The `ph()` signature is preserved so callers stay
// untouched; width/height are still applied via URL params for sizing.
const UNSPLASH: Record<string, string> = {
  "CAMERA+COMPOSITE+GRAPHIC": "photo-1485846234645-a62644f84728", // cinema camera
  "SERVER+UNIT+PRODUCT": "photo-1500099817043-86d46000d58f", // studio lights
  "FILM+PRODUCTION": "photo-1478720568477-152d9b164e26", // clapperboard
  "TV+COMMERCIAL": "photo-1574717024653-61fd2cf4d44d", // tv commercial shoot
  "VERTICAL+1": "photo-1489599849927-2ee91cede3ba", // film reel / cinema
  "VERTICAL+2": "photo-1492691527719-9d1e07e534b4", // crew on set
  "VERTICAL+3": "photo-1535016120720-40c646be5580", // billboard advertising
  "CAMERA+PROJECTION+GRAPHIC": "photo-1517604931442-7e0c8ed2963c", // projector
  "MAN+PORTRAIT+PLACEHOLDER": "photo-1507003211169-0a1dd7228f2d", // director portrait
  "BTS+1": "photo-1478720568477-152d9b164e26",
  "BTS+2": "photo-1556909114-f6e7ad7d3136",
  "BTS+3": "photo-1492691527719-9d1e07e534b4",
  "BTS+4": "photo-1574717024653-61fd2cf4d44d",
  "BTS+5": "photo-1556909114-f6e7ad7d3136",
  "BTS+6": "photo-1485846234645-a62644f84728",
  "BTS+7": "photo-1542204165-65bf26472b9b",
  "BTS+8": "photo-1517602302552-471fe67acf66",
  "BTS+9": "photo-1524985069026-dd778a71c7b4",
  "BTS+10": "photo-1611162616305-c69b3fa7fbe0",
  "BTS+11": "photo-1478720568477-152d9b164e26",
  "BTS+12": "photo-1574717024653-61fd2cf4d44d",
  "VIDEO+1": "photo-1536440136628-849c177e76a1",
  "VIDEO+2": "photo-1598899134739-24c46f58b8c0",
  "VIDEO+3": "photo-1485846234645-a62644f84728",
  "AWARD+1": "photo-1567427017947-545c5f8d16ad",
  "AWARD+2": "photo-1606857521015-7f9fcf423740",
  "AWARD+3": "photo-1567427017947-545c5f8d16ad",
  "AWARD+4": "photo-1532375810709-75b1da00537c",
  "AWARD+5": "photo-1567427017947-545c5f8d16ad",
  "AWARD+6": "photo-1606857521015-7f9fcf423740",
  "AWARD+7": "photo-1567427017947-545c5f8d16ad",
  "AWARD+8": "photo-1532375810709-75b1da00537c",
  AVATAR: "photo-1500648767791-00dcc994a43e",
  "POSTER+1": "photo-1542204165-65bf26472b9b", // cinema poster vibe
  "POSTER+2": "photo-1440404653325-ab127d49abc1",
  "POSTER+3": "photo-1485846234645-a62644f84728",
  CAMERA: "photo-1496559249665-c7e2874707ea", // vintage camera
  CHAIRS: "photo-1524985069026-dd778a71c7b4", // director chairs / set
};

const ph = (w: number, h: number, text: string) => {
  const id = UNSPLASH[text] ?? "photo-1485846234645-a62644f84728";
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
};

function Nav() {
  const items = ["HOME", "ABOUT", "SERVICES", "WORK", "CLIENTS", "CONTACT"];
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex flex-col items-center gap-4 px-8 py-5">
      <div className="text-sm font-bold tracking-[0.3em] text-foreground">KATHPUTLEE</div>
      <ul className="hidden gap-8 md:flex">
        {items.map((i) => (
          <li
            key={i}
            className="text-xs font-semibold tracking-widest text-foreground/80 hover:text-[color:var(--brand-red)] cursor-pointer"
          >
            {i}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <header
      className="relative min-h-screen overflow-x-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Nav />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 pb-16 pt-32 md:grid-cols-2 md:pt-40">
        <ScrollReveal variants={slideUpVariants} delay={0.1}>
          <div>
            <h1
              className="text-6xl font-black uppercase tracking-tight text-foreground md:text-8xl"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              We Create
            </h1>
            <h1
              className="text-6xl font-black uppercase text-transparent [-webkit-text-stroke:0.5px_black] tracking-tight text-foreground md:text-8xl"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Vivid Narratives
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/100">
              An indie production company with a global vision, bringing India's rich storytelling
              to life accross diverse genres for audiences worldwide.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-red)] px-7 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition hover:bg-[color:var(--brand-red-hover)]">
              Watch Reel <Play className="h-3 w-3 fill-white" />
            </button>
          </div>
        </ScrollReveal>
        <div aria-hidden="true" />
      </div>
    </header>
  );
}

function ServicesBanner() {
  const items = [
    { icon: Asterisk, label: "CONTENT" },
    { icon: Asterisk, label: "FILM SERVICES" },
    { icon: Asterisk, label: "TV COMMERCIALS" },
    { icon: Asterisk, label: "BRANDED CONTENT" },
    { icon: Asterisk, label: "B2B CONTENT" },
  ];
  return (
    <div className="border-y overflow-x-hidden border-black/10 gap-1 bg-white">
      <StaggerContainer
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-1 px-2 py-5"
        staggerDelay={0.15}
      >
        {items.map(({ icon: Icon, label }) => (
          <StaggerItem key={label}>
            <div className="flex items-center gap-1">
              <Icon className="h-10 w-10 text-[color:var(--brand-red)]" />
              <span
                className="text-4xl font-bold tracking-widest text-foreground"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                {label}
              </span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

function Metrics() {
  const stats = [
    { n: "3+", t: "Years of Excellence" },
    { n: "20+", t: "Industry Recognized Awards" },
    { n: "25+", t: "Branded Content Pieces Delivered" },
    { n: "500+", t: "Hours of Content Produced" },
  ];
  return (
    <section className="bg-white overflow-x-hidden py-14">
      <StaggerContainer
        className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-8 md:grid-cols-4"
        staggerDelay={0.2}
      >
        {stats.map((s) => (
          <StaggerItem key={s.n} variants={slideUpVariants}>
            <div className="text-center">
              <div
                className="text-8xl font-black text-transparent [-webkit-text-stroke:1px_var(--brand-red)] text-[color:var(--brand-red)]"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                {s.n}
              </div>
              <div className="mx-auto mt-2 max-w-[180px] text-xs uppercase tracking-wider text-foreground/70">
                {s.t}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-2">
        <ScrollReveal variants={slideUpVariants}>
          <div className="flex flex-col items-center gap-6">
            <img src={ph(300, 300, "SERVER+UNIT+PRODUCT")} alt="Product" className="w-72" />
            <p className="max-w-md text-center text-sm leading-relaxed text-foreground/70">
              A ONE STOP PLATFORM that delivers end-to-end production excellence — from creative
              ideation to post production, our craft turns vision into vivid stories.
            </p>
            <a className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-red)]">
              More about us →
            </a>
          </div>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2" staggerDelay={0.22}>
          {[
            { t: "IT'S MAGIC", img: "FILM+PRODUCTION" },
            { t: "KATHPUTLEE'S 1 YEAR JOURNEY", img: "TV+COMMERCIAL" },
          ].map((c) => (
            <StaggerItem key={c.t} variants={scaleVariants}>
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={ph(250, 150, c.img)} alt={c.t} className="h-40 w-full object-cover" />
                <div className="bg-white p-4">
                  <h4 className="text-sm font-bold tracking-wide text-foreground">{c.t}</h4>
                  <p className="mt-1 text-xs text-foreground/60">
                    A short description of this featured production piece.
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function Verticals() {
  const cards = [
    { t: "FILMS & ORIGINAL", img: "VERTICAL+1" },
    { t: "FILM SERVICES", img: "VERTICAL+2" },
    { t: "ADVERTISING & BRAND SERVICES", img: "VERTICAL+3" },
  ];
  return (
    <section className="bg-[color:var(--charcoal)] overflow-x-hidden py-20 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <ScrollReveal variants={slideUpVariants}>
          <h1
            className="mb-12 text-8xl font-black uppercase tracking-tight"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Our{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_var(--brand-red)]">
              Verticals
            </span>
          </h1>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3" staggerDelay={0.22}>
          {cards.map((c) => (
            <StaggerItem key={c.t} variants={scaleVariants}>
              <div className="group overflow-hidden rounded-md bg-black/40">
                <img
                  src={ph(400, 250, c.img)}
                  alt={c.t}
                  className="h-60 w-full object-cover transition group-hover:scale-105"
                />
                <h3 className="border-t border-white/10 p-5 text-lg font-black uppercase tracking-wide">
                  {c.t}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function Inspire() {
  return (
    <section className="bg-white overflow-x-hidden py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-8 md:grid-cols-2">
        <ScrollReveal variants={slideUpVariants}>
          <div>
            <h2 className="text-5xl font-black uppercase leading-[0.95] text-foreground">
              Imagine
              <br />
              Inspire &<br />
              Transform
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-red)] px-7 py-3 text-xs font-bold uppercase tracking-widest text-white">
              Watch Reel <Play className="h-3 w-3 fill-white" />
            </button>
          </div>
        </ScrollReveal>
        <ScrollReveal variants={fadeInVariants} delay={0.2}>
          <img
            src={inspireImg}
            alt="Film production setup with camera and lighting"
            className="w-full"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

function Values() {
  const vals = [
    { icon: ShieldCheck, t: "COMPUTER-DRIVEN EXPERTS" },
    { icon: Award, t: "STRICT LEGENDS IN TECHNOLOGY" },
    { icon: Briefcase, t: "END-TO-END PRODUCTION" },
    { icon: Heart, t: "CREATIVE DIRECTION & POST-PRODUCTION" },
  ];
  return (
    <section className="bg-white overflow-x-hidden py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 md:grid-cols-2">
        <ScrollReveal variants={fadeInVariants}>
          <img
            src={ph(300, 500, "MAN+PORTRAIT+PLACEHOLDER")}
            alt="Portrait"
            className="mx-0 w-72 rounded-md"
          />
        </ScrollReveal>
        <div>
          <ScrollReveal variants={slideUpVariants}>
            <h2 className="mb-10 text-5xl font-black uppercase text-foreground">
              Our <span className="italic text-[color:var(--brand-red)]">Values</span>
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2" staggerDelay={0.2}>
            {vals.map(({ icon: Icon, t }) => (
              <StaggerItem key={t} variants={slideUpVariants}>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-red)] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-foreground">
                      {t}
                    </h4>
                    <p className="mt-1 text-xs text-foreground/60">
                      Short description supporting this value.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

function BehindTheScenes() {
  return (
    <section className="bg-[color:var(--charcoal-deep)] overflow-x-hidden py-20 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <ScrollReveal variants={slideUpVariants}>
          <h2
            className="mb-10 text-8xl font-black uppercase tracking-tight"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Behind{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_var(--brand-red)]">
              The Lens
            </span>
          </h2>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-2 gap-3 md:grid-cols-4" staggerDelay={0.14}>
          {Array.from({ length: 12 }).map((_, i) => (
            <StaggerItem key={i} variants={fadeInVariants}>
              <img
                src={ph(150, 100, `BTS+${i + 1}`)}
                alt={`BTS ${i + 1}`}
                className="h-28 w-full rounded object-cover"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <StaggerContainer
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3"
          staggerDelay={0.22}
        >
          {[1, 2, 3].map((i) => (
            <StaggerItem key={i} variants={scaleVariants}>
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={ph(400, 200, `VIDEO+${i}`)}
                  alt={`Video ${i}`}
                  className="h-44 w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--brand-red)]">
                    <Play className="h-6 w-6 fill-white text-white" />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section className="bg-[color:var(--charcoal-deep)] overflow-x-hidden pb-20 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <ScrollReveal variants={slideUpVariants}>
          <h1
            className="mb-12 text-center text-8xl font-black uppercase"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Our{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_var(--brand-red)]">
              Awards
            </span>
          </h1>
        </ScrollReveal>
        <div className="relative">
          <button className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 p-2">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4" staggerDelay={0.18}>
            {Array.from({ length: 8 }).map((_, i) => (
              <StaggerItem key={i} variants={slideUpVariants}>
                <div className="text-center">
                  <img
                    src={ph(100, 100, `AWARD+${i + 1}`)}
                    alt={`Award ${i + 1}`}
                    className="mx-auto h-24 w-24"
                  />
                  <h4 className="mt-3 text-xs font-bold uppercase tracking-wide text-[color:var(--gold)]">
                    Award Title {i + 1}
                  </h4>
                  <p className="mt-1 text-[10px] text-white/60">Festival / Year</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 p-2">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="bg-white overflow-x-hidden py-20">
      <ScrollReveal variants={fadeInVariants}>
        <div className="mx-auto flex max-w-5xl items-center gap-8 px-8">
          <button className="rounded-full border border-black/10 p-2">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <img
            src={ph(120, 120, "AVATAR")}
            alt="Avatar"
            className="h-28 w-28 rounded-full object-cover"
          />
          <div className="flex-1 text-center">
            <Quote className="mx-auto h-8 w-8 text-[color:var(--brand-red)]" />
            <p className="mt-4 text-lg italic text-foreground/80">
              "Excellent job, your passion is phenomenal. This is the way people will play in the
              future."
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-foreground">
              — Client Name, Studio
            </p>
          </div>
          <button className="rounded-full border border-black/10 p-2">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Reel() {
  const posters = [
    {
      t: "Dune: Part Two",
      d: "How Greig Fraser ACS & ASAVASC crafted the cinematic landscape of Dune.",
    },
    {
      t: "A Discourse on the Dead",
      d: "The real reason of filmmaking and how this film comes to redefine the medium.",
    },
    {
      t: "Behind the Magic",
      d: "The titanium force of an immortal film, raw to inspire your tools.",
    },
  ];
  return (
    <section className="bg-[color:var(--cream)] overflow-x-hidden py-20">
      <div className="mx-auto max-w-7xl px-8">
        <ScrollReveal variants={slideUpVariants}>
          <div className="mb-10 flex items-end justify-between">
            <h1
              className="text-8xl font-black uppercase text-foreground"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Reel <span className="text-[color:var(--brand-red)] text-transparent [-webkit-text-stroke:1px_var(--brand-red)]">Insights</span>
            </h1>
            <button className="rounded-full bg-[color:var(--brand-red)] px-6 py-2 text-xs font-bold uppercase tracking-widest text-white">
              View More →
            </button>
          </div>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3" staggerDelay={0.22}>
          {posters.map((p, i) => (
            <StaggerItem key={i} variants={scaleVariants}>
              <div className="overflow-hidden rounded-md bg-white shadow">
                <img
                  src={ph(200, 300, `POSTER+${i + 1}`)}
                  alt={p.t}
                  className="h-72 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-base font-bold text-foreground">{p.t}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/60">{p.d}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ScrollReveal variants={slideUpVariants} delay={0.1}>
            <div className="flex items-center gap-5 rounded-md bg-white p-6 shadow">
              <img src={ph(120, 120, "CAMERA")} alt="Camera" className="h-24 w-24 rounded" />
              <div>
                <h4 className="text-lg font-black uppercase text-foreground">Stay Connected</h4>
                <p className="mt-2 text-xs text-foreground/60">
                  Subscribe to our newsletter for the latest from the cutting room.
                </p>
                <button className="mt-3 rounded-full bg-foreground px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal variants={slideUpVariants} delay={0.2}>
            <div className="flex items-center gap-5 rounded-md bg-[color:var(--charcoal)] p-6 text-white shadow">
              <img src={ph(120, 120, "CHAIRS")} alt="Chairs" className="h-24 w-24 rounded" />
              <div className="flex-1">
                <h4 className="text-lg font-black uppercase">
                  Interested in Making Magic With Us?
                </h4>
                <p className="mt-2 text-xs text-white/70">
                  Kathputlee Media Pvt. Ltd. — let's build something timeless.
                </p>
                <button className="mt-3 rounded-full bg-[color:var(--brand-red)] px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
                  Get In Touch
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="bg-[color:var(--brand-red)] py-4 text-white">
        <StaggerContainer
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-4 px-8 text-xs font-bold uppercase tracking-[0.4em]"
          staggerDelay={0.15}
        >
          {[
            { icon: Instagram, label: "Instagram" },
            { icon: Twitter, label: "Twitter" },
            { icon: Youtube, label: "Youtube" },
            { icon: Play, label: "Threads" },
            { icon: Linkedin, label: "LinkedIn" },
          ].map(({ icon: Icon, label }) => (
            <StaggerItem key={label}>
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" /> {label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
      <div className="bg-[color:var(--charcoal-deep)] py-14 text-white/70">
        <ScrollReveal variants={fadeInVariants}>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-black tracking-[0.3em] text-white">KATHPUTLEE</h3>
              <p className="mt-4 text-xs leading-relaxed">
                A boutique film production house crafting stories that resonate across cultures and
                screens.
              </p>
              <div className="mt-4 flex gap-3 text-white/50">
                <Clapperboard className="h-5 w-5" />
                <Megaphone className="h-5 w-5" />
                <Camera className="h-5 w-5" />
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Our Verticals
              </h4>
              <ul className="mt-4 space-y-2 text-xs">
                <li>Films & Originals</li>
                <li>Film Services</li>
                <li>Advertising</li>
                <li>Branded Content</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Support</h4>
              <ul className="mt-4 space-y-2 text-xs">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Contact Us</h4>
              <ul className="mt-4 space-y-2 text-xs">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> hello@kathputlee.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> +91 000 000 0000
                </li>
                <li>Mumbai, India</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-8 pt-6 text-center text-[10px] uppercase tracking-widest text-white/40">
          © {new Date().getFullYear()} Kathputlee Media Pvt. Ltd. — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Hero />
      <ServicesBanner />
      <Metrics />
      <FeaturedWork />
      <Verticals />
      <Inspire />
      <Values />
      <BehindTheScenes />
      <Awards />
      <Testimonial />
      <Reel />
      <Footer />
    </main>
  );
}
