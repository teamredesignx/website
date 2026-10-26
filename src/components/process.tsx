import { SectionTitle } from "@/components/ui/section-title";
import { stack, steps } from "@/lib/content";

import styles from "./process.module.css";

export function Process() {
  return (
    <section id="process" className={styles.section} aria-labelledby="process-title">
      <div className="wrap">
        <SectionTitle id="process-title" lite="How we" bold="work" />
        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.name}>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className={styles.stack}>
          <p className={styles.label}>{stack.label}</p>
          <p className={styles.text}>{stack.text}</p>
        </div>
      </div>
    </section>
  );
}
