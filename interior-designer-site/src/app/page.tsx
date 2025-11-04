import Image from "next/image";
import styles from "./page.module.css";

const services = [
  {
    icon: "01",
    title: "Full-Service Interiors",
    description:
      "Holistic design direction for renovations and new builds, from architectural finishes to art placement.",
    meta: "Concept to completion",
  },
  {
    icon: "02",
    title: "Furnishing & Styling",
    description:
      "Curated furniture, custom millwork, textiles, and styling that layer warmth and personality into every space.",
    meta: "Curated layers",
  },
  {
    icon: "03",
    title: "Boutique Hospitality",
    description:
      "Tailored guest experiences with atmospheric palettes, bespoke lighting, and storytelling vignettes.",
    meta: "Enchanting stays",
  },
];

const portfolio = [
  {
    title: "The Marlow Residence",
    tag: "Heritage brownstone",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Atelier Sol Loft",
    tag: "Sun-soaked loft",
    image:
      "https://images.unsplash.com/photo-1616594039964-196d5f9b9f50?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Maison Juniper",
    tag: "Modern retreat",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
];

const process = [
  {
    step: "Discover",
    title: "Vision & Narrative",
    text: "We translate your lifestyle, ambitions, and rituals into a guiding narrative that sets the tone for every decision.",
  },
  {
    step: "Design",
    title: "Immersive Concepts",
    text: "Mood studies, material palettes, renderings, and spatial planning bring the narrative to life with tactile depth.",
  },
  {
    step: "Deliver",
    title: "Detail & Orchestration",
    text: "We meticulously manage procurement, installation, and styling to craft spaces that feel effortless from day one.",
  },
];

const testimonials = [
  {
    quote:
      "Every room feels intentional and poetic. Atelier Lumen united our architectural bones with soulful layers that age gracefully.",
    name: "Clara & James W.",
    role: "Brooklyn Townhouse",
  },
  {
    quote:
      "Their mastery lies in nuance. The textures, lighting, and custom furniture harmonize our brand story with a sense of calm luxury.",
    name: "Elena Moretti",
    role: "Founder, Casa Venti Retreat",
  },
  {
    quote:
      "I felt heard at every turn. They anticipated needs I hadn’t yet considered and delivered a home that truly reflects who we are.",
    name: "Mohammed Farouk",
    role: "Tribeca Penthouse",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroBackdrop} />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Atelier Lumen</span>
            <h1 className={styles.heroTitle}>
              Interiors crafted for luminous, story-rich living.
            </h1>
            <p className={styles.heroSubtitle}>
              We partner with discerning homeowners and boutique hospitality founders to
              sculpt layered environments that feel collected, calm, and deeply personal.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact">
                Book a consultation
              </a>
              <a className={styles.secondaryButton} href="#portfolio">
                View portfolio
              </a>
            </div>
          </div>
          <div className={styles.heroImage} style={{ aspectRatio: "3 / 4" }}>
            <Image
              src="https://images.unsplash.com/photo-1543248939-ff40856f65d4?auto=format&fit=crop&w=1100&q=80"
              alt="Sunlit living room designed by Atelier Lumen"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 550px"
            />
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section} id="services">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Signature offerings</span>
            <h2 className={styles.sectionTitle}>
              Tailored interior design services for spaces with soulful resonance.
            </h2>
            <p className={styles.sectionDescription}>
              We art-direct every layer — from spatial planning to bespoke furnishings —
              to deliver homes and hospitality environments where texture, tone, and light
              invite you in.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceText}>{service.description}</p>
                <span className={styles.serviceMeta}>{service.meta}</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="about">
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutImage} style={{ aspectRatio: "4 / 5" }}>
              <Image
                src="https://images.unsplash.com/photo-1615526675159-e248c0d2f6d6?auto=format&fit=crop&w=1200&q=80"
                alt="Atelier Lumen design studio detail"
                fill
                sizes="(max-width: 900px) 100vw, 480px"
              />
            </div>
            <div className={styles.aboutContent}>
              <span className={styles.eyebrow}>About the studio</span>
              <h2 className={styles.sectionTitle}>
                A multidisciplinary team shaping timeless, modern sanctuaries.
              </h2>
              <p>
                Led by creative director Elise Laurent, Atelier Lumen blends architectural
                precision with the softness of curated objects and art. We believe your
                surroundings should evolve with you, embrace mindful materials, and offer
                moments of quiet beauty.
              </p>
              <div className={styles.aboutList}>
                <p>
                  <span className={styles.aboutHighlight}>Layered storytelling:</span>{" "}
                  Contextual research and mood narratives guide every project.
                </p>
                <p>
                  <span className={styles.aboutHighlight}>Material mastery:</span> We
                  collaborate with artisans to source heirloom-quality finishes, textiles,
                  and lighting.
                </p>
                <p>
                  <span className={styles.aboutHighlight}>Considered flow:</span> Spatial
                  planning ensures harmony between form, function, and daily rituals.
                </p>
              </div>
              <div className={styles.statRow}>
                <div className={styles.statCard}>
                  <div className={styles.statValue}>48</div>
                  <div className={styles.statLabel}>Projects delivered</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statValue}>18</div>
                  <div className={styles.statLabel}>Artisan partners</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statValue}>12</div>
                  <div className={styles.statLabel}>Years of practice</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="portfolio">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Recent work</span>
            <h2 className={styles.sectionTitle}>
              A curated glimpse into residences and retreats we have brought to life.
            </h2>
          </div>

          <div className={styles.portfolioGrid}>
            {portfolio.map((project) => (
              <article key={project.title} className={styles.portfolioCard}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                />
                <div className={styles.portfolioOverlay}>
                  <span className={styles.portfolioTag}>{project.tag}</span>
                  <h3 className={styles.portfolioTitle}>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="process">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Our method</span>
            <h2 className={styles.sectionTitle}>
              A collaborative process anchored in empathy, rigor, and artistry.
            </h2>
            <p className={styles.sectionDescription}>
              We choreograph every phase so you feel cared for and confident while your
              future space takes shape.
            </p>
          </div>

          <div className={styles.processGrid}>
            {process.map((item) => (
              <article key={item.title} className={styles.processItem}>
                <span className={styles.processStep}>{item.step}</span>
                <h3 className={styles.processTitle}>{item.title}</h3>
                <p className={styles.processText}>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="testimonials">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Words from clients</span>
            <h2 className={styles.sectionTitle}>
              “Their spaces feel like memories waiting to happen.”
            </h2>
          </div>
          <div className={styles.testimonialTrack}>
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className={styles.testimonialCard}>
                <p className={styles.testimonialText}>{testimonial.quote}</p>
                <footer className={styles.testimonialAuthor}>
                  <span className={styles.authorName}>{testimonial.name}</span>
                  <span>{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <section className={styles.ctaSection} id="contact">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Let’s compose the next chapter of your space.</h2>
          <p className={styles.ctaText}>
            Share your project vision and timeline, and our team will craft a tailored
            proposal that outlines scope, investment, and the emotive journey we’ll shape
            together.
          </p>
          <div className={styles.ctaActions}>
            <a className={styles.primaryButton} href="mailto:studio@atelierlumen.com">
              studio@atelierlumen.com
            </a>
            <a className={styles.lightButton} href="tel:+12125551234">
              +1 (212) 555-1234
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <span className={styles.footerBrand}>Atelier Lumen — Interior Design Studio</span>
            <p>New York | Los Angeles | Lisbon</p>
          </div>
          <nav className={styles.footerNav}>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#process">Process</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} Atelier Lumen. All rights reserved.</span>
            <span>Interior design for the quietly radiant.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
