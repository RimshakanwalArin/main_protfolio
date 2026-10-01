import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  GitBranch,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { RotatingRole } from "@/components/rotating-role";
import { SiteHeader } from "@/components/site-header";
import { content, serviceIcons, socialIcons, toolIcons } from "@/data/content";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero page-shell" id="home" aria-labelledby="hero-title">
          <Reveal className="hero-art-wrap">
            <div className="hero-art-frame">
              <Image
                src="/robot-avatar-reference.svg"
                alt="Smiling teal-and-yellow robot with a pink antenna"
                fill
                priority
                sizes="(max-width: 760px) 82vw, 38vw"
                className="hero-art"
              />
            </div>
            <div className="hero-art-caption"><span>BASED IN {content.owner.location}</span><span>01 / 04</span></div>
          </Reveal>

          <div className="hero-copy">
            <Reveal delay={0.08}>
              <p className="eyebrow"><span className="eyebrow-line" /> Available for select projects</p>
              <h1 id="hero-title">Digital ideas,<br /><span>made tangible.</span></h1>
              <p className="hero-role">I&apos;m a <RotatingRole roles={content.owner.roles} /></p>
              <p className="hero-intro">{content.owner.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View Projects <ArrowDownRight size={17} aria-hidden="true" /></a>
                <a className="button button-quiet" href="#contact">Hire Me <ArrowUpRight size={17} aria-hidden="true" /></a>
              </div>
              <div className="hero-footnote"><span>SCROLL TO EXPLORE</span><span className="footnote-rule" /></div>
            </Reveal>
          </div>
          <span className="hero-index" aria-hidden="true">PORTFOLIO / 2026</span>
        </section>

        <section className="about-section section-space" id="about" aria-labelledby="about-title">
          <div className="page-shell about-layout">
            <Reveal className="about-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> A little about me</p>
              <h2 className="section-title" id="about-title">Design-minded.<br /><span>Detail-driven.</span></h2>
              <p className="body-copy">{content.owner.bio}</p>
              <a className="text-link" href={`mailto:${content.owner.email}`}>Let&apos;s make something useful <ArrowUpRight size={16} aria-hidden="true" /></a>
            </Reveal>
            <div className="services-grid" aria-label="Services">
              {content.services.map((service, index) => {
                const Icon = serviceIcons[service.icon];
                return (
                  <Reveal className="service-card glass-card" delay={index * 0.07} key={service.title}>
                    <span className="service-icon"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="service-number">0{index + 1}</span>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="availability-section page-shell" aria-label="Availability and tools">
          <Reveal className="availability-bar glass-card">
            <div className="availability-copy"><span className="availability-dot" /><div><strong>Currently available</strong><span>for freelance projects</span></div></div>
            <div className="tool-list" aria-label="Tools and technologies">
              {content.tools.map((tool) => {
                const Icon = toolIcons[tool.icon];
                return <span className="tool-item" key={tool.name}><Icon size={17} aria-hidden="true" /><span>{tool.name}</span></span>;
              })}
            </div>
          </Reveal>
        </section>

        <section className="orb-section" aria-label="Creative work, thoughtfully made">
          <Reveal className="orb-stage">
            <span className="orb-label orb-label-top">THOUGHTFUL BY DESIGN</span>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="logo-orb"><span>{content.owner.initials}</span><i /><b /></div>
            <span className="orb-label orb-label-bottom">BUILT WITH INTENTION</span>
          </Reveal>
        </section>

        <section className="projects-section section-space" id="projects" aria-labelledby="projects-title">
          <div className="page-shell">
            <Reveal className="section-heading-row">
              <div><p className="eyebrow"><span className="eyebrow-line" /> Selected work</p><h2 className="section-title" id="projects-title">Ideas in <span>progress.</span></h2></div>
              <p className="heading-aside">Web builds and AI-assisted<br />visual concepts.</p>
            </Reveal>
            <div className="projects-list">
              {content.projects.map((project, index) => (
                <Reveal className={`project-row ${index % 2 === 1 ? "project-row-reversed" : ""}`} key={project.title} delay={index * 0.04}>
                  <div className="project-visual">
                    <Image src={project.image} alt={`${project.title} project preview artwork`} fill sizes="(max-width: 760px) 90vw, 52vw" />
                    <span className="project-count">0{index + 1} / {String(content.projects.length).padStart(2, "0")}</span>
                  </div>
                  <article className="project-card glass-card">
                    <p className="project-kind">{project.kind}</p>
                    <h3>{project.title}</h3>
                    <p className="project-purpose">{project.purpose}</p>
                    <div className="project-detail"><span>TOOLS</span><p>{project.tools.join(" · ")}</p></div>
                    <div className="project-detail"><span>WHAT I LEARNED</span><p>{project.learning}</p></div>
                    <div className="project-links">
                      {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={14} aria-hidden="true" /></a>}
                      {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer"><GitBranch size={15} aria-hidden="true" /> GitHub</a>}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-space" id="contact" aria-labelledby="contact-title">
          <div className="page-shell contact-layout">
            <Reveal className="contact-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> Have a good one in mind?</p>
              <h2 className="section-title" id="contact-title">Let&apos;s make<br /><span>it happen.</span></h2>
              <p className="body-copy">{content.contactMessage}</p>
              <div className="contact-socials" aria-label="Social links">
                {content.socials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return <a href={social.url} key={social.name} aria-label={social.name} title={social.name} target="_blank" rel="noreferrer"><Icon size={18} aria-hidden="true" /></a>;
                })}
              </div>
            </Reveal>
            <Reveal delay={0.12} className="contact-options">
              <a className="contact-option" href={`mailto:${content.owner.email}`}>
                <span className="contact-option-icon"><Mail size={20} aria-hidden="true" /></span>
                <span className="contact-option-copy"><span>Email me</span><strong>{content.owner.email}</strong></span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="contact-option" href={`https://wa.me/${content.owner.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
                <span className="contact-option-icon contact-option-whatsapp"><MessageCircle size={20} aria-hidden="true" /></span>
                <span className="contact-option-copy"><span>WhatsApp</span><strong>{content.owner.whatsapp}</strong></span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <a className="footer-brand" href="#home"><span className="brand-mark">{content.owner.initials}</span><span>{content.owner.name}</span></a>
          <p>© {new Date().getFullYear()} {content.owner.name}. Built with care.</p>
          <div className="footer-actions">
            {content.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return <a href={social.url} key={social.name} aria-label={social.name} target="_blank" rel="noreferrer"><Icon size={17} aria-hidden="true" /></a>;
            })}
            <a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
    </>
  );
}