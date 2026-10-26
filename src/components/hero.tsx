import { Compare } from "@/components/compare/compare";
import { AfterSite, BeforeSite } from "@/components/compare/example-site";
import { Button } from "@/components/ui/button";
import { compare, hero } from "@/lib/content";
import { sendSiteLink } from "@/lib/site";

import styles from "./hero.module.css";

export function Hero() {
  return (
    <div className={`wrap ${styles.hero}`}>
      <h1 className={styles.title}>
        <span className={`${styles.lite} t-lite`}>{hero.lite}</span>
        <span className={styles.pipe} aria-hidden="true" />
        <span className={`${styles.bold} t-bold`}>{hero.bold}</span>
      </h1>

      <div className={styles.sub}>
        <p>{hero.lead}</p>
        <Button href={sendSiteLink}>{hero.cta}</Button>
        <a className={styles.link} href="#work">
          {hero.secondary}
        </a>
      </div>

      <Compare
        before={<BeforeSite />}
        after={<AfterSite />}
        label={compare.label}
        beforeCaption={compare.before}
        afterCaption={compare.after}
      />
    </div>
  );
}
