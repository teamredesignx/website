import styles from "./section-title.module.css";

type SectionTitleProps = {
  id: string;
  lite: string;
  bold: string;
};

/** The logo's pairing as a heading: narrow-light, a bar, then wide-heavy. */
export function SectionTitle({ id, lite, bold }: SectionTitleProps) {
  return (
    <h2 id={id} className={styles.title}>
      <span className={`${styles.lite} t-lite`}>{lite}</span>
      <span className={styles.pipe} aria-hidden="true" />
      <span className="t-bold">{bold}</span>
    </h2>
  );
}
