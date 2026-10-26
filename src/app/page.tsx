import { Checks } from "@/components/checks";
import { ClosingCta } from "@/components/closing-cta";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Work } from "@/components/work";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <a className={styles.skip} href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Checks />
        <Work />
        <Process />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
