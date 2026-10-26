import { Button } from "@/components/ui/button";
import { cta } from "@/lib/content";
import { sendSiteLink, site } from "@/lib/site";

import styles from "./closing-cta.module.css";

export function ClosingCta() {
  return (
    <section className={`wrap ${styles.section}`} aria-labelledby="cta-title">
      <h2 id="cta-title" className={styles.title}>
        <span className={`${styles.lite} t-lite`}>{cta.lite}</span>
        <span className="t-bold">{cta.bold}</span>
      </h2>
      <div className={styles.row}>
        <Button href={sendSiteLink}>{cta.button}</Button>
        <a className={styles.email} href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>
    </section>
  );
}
