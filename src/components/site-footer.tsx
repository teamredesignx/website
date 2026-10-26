import Link from "next/link";

import { site, socials, withBasePath } from "@/lib/site";

import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <Link href="/" aria-label="Team Redesign, back to home">
          {/* eslint-disable-next-line @next/next/no-img-element -- a small static SVG needs no optimiser */}
          <img
            src={withBasePath("/brand/team-redesign-lockup-paper.svg")}
            alt="Team Redesign"
            width={186}
            height={38}
          />
        </Link>
        <ul className={styles.links} aria-label="Team Redesign on social platforms">
          {socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
        <p className={`${styles.note} t-mono`}>
          {site.name}, {site.locality}, {site.country}. The plumbing example above is fictional.
        </p>
      </div>
    </footer>
  );
}
