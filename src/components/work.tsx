import Image from "next/image";

import { SectionTitle } from "@/components/ui/section-title";
import { WorkPreview } from "@/components/work-preview";
import { projects } from "@/lib/content";
import { withBasePath } from "@/lib/site";

import styles from "./work.module.css";

export function Work() {
  return (
    <section id="work" className={`wrap ${styles.section}`} aria-labelledby="work-title">
      <SectionTitle id="work-title" lite="Recent" bold="redesigns" />
      <WorkPreview>
        {projects.map((project) => (
          <a
            key={project.slug}
            className={styles.row}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            data-preview={withBasePath(project.image)}
          >
            {/* Phones have no hover, so the screenshot is shown inline there. */}
            <Image
              className={styles.thumb}
              src={withBasePath(project.image)}
              alt={project.alt}
              width={1200}
              height={750}
              sizes="(max-width: 640px) 100vw, 1px"
            />
            <strong>{project.name}</strong>
            <span className={styles.summary}>{project.summary}</span>
            <span className={`${styles.go} t-mono`}>View live site</span>
          </a>
        ))}
      </WorkPreview>
    </section>
  );
}
