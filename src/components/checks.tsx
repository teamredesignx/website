import { SectionTitle } from "@/components/ui/section-title";
import { checks } from "@/lib/content";

import styles from "./checks.module.css";

export function Checks() {
  return (
    <section className={`wrap ${styles.section}`} aria-labelledby="checks-title">
      <SectionTitle id="checks-title" lite="What we check" bold="first" />
      <div className={styles.list}>
        {checks.map((check) => (
          <div key={check.question} className={styles.row}>
            <h3>{check.question}</h3>
            <p>{check.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
