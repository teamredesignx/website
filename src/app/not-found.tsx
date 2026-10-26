import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className={`wrap ${styles.main}`}>
        <h1 className={styles.title}>
          <span className="t-lite">This page</span> <span className="t-bold">isn&apos;t here.</span>
        </h1>
        <p>The link may be old, or the address may have a typo.</p>
        <Button href="/">Back to the homepage</Button>
      </main>
      <SiteFooter />
    </>
  );
}
