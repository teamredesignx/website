"use client";

import { useEffect, useRef } from "react";

import styles from "./countdown.module.css";

const SECONDS = 3;

/**
 * The headline's three seconds, run once on load: the number counts down and the bar drains.
 * Without JavaScript, or with reduced motion, it rests at the full 3.00.
 */
export function Countdown() {
  const numberRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const noteRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const number = numberRef.current;
    const bar = barRef.current;
    const note = noteRef.current;
    if (!number || !bar || !note) return;

    const start = performance.now() + 700;
    let frame = 0;
    const tick = (now: number) => {
      const left = Math.max(SECONDS - Math.max(now - start, 0) / 1000, 0);
      number.textContent = left.toFixed(2);
      bar.style.transform = `scaleX(${left / SECONDS})`;
      if (left > 0) {
        frame = requestAnimationFrame(tick);
      } else {
        note.textContent = "Time's up. Is your site ready?";
        note.dataset.done = "true";
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={styles.timer}>
      <span className={styles.number} ref={numberRef} aria-hidden="true">
        {SECONDS.toFixed(2)}
      </span>
      <span className={styles.track} aria-hidden="true">
        <span className={styles.bar} ref={barRef} />
      </span>
      <span className={`${styles.note} t-mono`} ref={noteRef}>
        Visitor patience
      </span>
    </div>
  );
}
