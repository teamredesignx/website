"use client";

import { useEffect, useRef, useState } from "react";

import { HomeLink } from "@/components/home-link";

import { sendSiteLink, withBasePath } from "@/lib/site";

import styles from "./site-header.module.css";

/**
 * Sticks to the top. Once the page scrolls it gains a hairline and a thin bar that fills with
 * how far down the page the visitor is.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      barRef.current?.style.setProperty("--progress", String(progress));
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <div className={`wrap ${styles.inner}`}>
        <HomeLink className={styles.logo} aria-label="Team Redesign, back to home">
          {/* The animated GIF is the brand logo. Reduced-motion visitors get the still SVG instead. */}
          <picture>
            <source
              media="(prefers-reduced-motion: reduce)"
              srcSet={withBasePath("/brand/team-redesign-lockup-ink.svg")}
            />
            <img
              src={withBasePath("/brand/team-redesign-logo-animated.gif")}
              alt="Team Redesign"
              width={167}
              height={38}
            />
          </picture>
        </HomeLink>
        <nav className={styles.nav} aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#process">Process</a>
        </nav>
        <a className={styles.mail} href={sendSiteLink}>
          <span className={styles.long}>Send us your site</span>
          <span className={styles.short} aria-hidden="true">
            Send your site
          </span>
        </a>
      </div>
      <span ref={barRef} className={styles.bar} aria-hidden="true" />
    </header>
  );
}
