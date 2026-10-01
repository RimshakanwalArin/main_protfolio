"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { content } from "@/data/content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label={`${content.owner.name}, home`}>
          <span className="brand-mark">{content.owner.initials}</span>
          <span className="brand-name">{content.owner.name}</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
        <nav id="primary-navigation" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {content.navigation.map((item) => (
            <a
              href={item.href}
              key={item.label}
              className={item.label === "Contact" ? "nav-contact" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}