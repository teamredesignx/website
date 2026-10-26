import Link from "next/link";

import { sendSiteLink } from "@/lib/site";

import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={`wrap ${styles.header}`}>
      <Link href="/" className={styles.logo} aria-label="Team Redesign, back to home">
        {/* The animated GIF is the brand logo. Reduced-motion visitors get the still SVG instead. */}
        <picture>
          <source media="(prefers-reduced-motion: reduce)" srcSet="/brand/team-redesign-lockup-ink.svg" />
          <img
            src="/brand/team-redesign-logo-animated.gif"
            alt="Team Redesign"
            width={167}
            height={38}
          />
        </picture>
      </Link>
      <a className={styles.mail} href={sendSiteLink}>
        Send us your site
      </a>
    </header>
  );
}
