"use client";

import { useEffect, useRef, type KeyboardEvent, type ReactNode } from "react";

import styles from "./compare.module.css";

type CompareProps = {
  before: ReactNode;
  after: ReactNode;
  label: string;
  beforeCaption: string;
  afterCaption: string;
};

const KEY_STEP = 5;

function ease(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * A draggable divider between the old and the redesigned site. It sweeps once on load,
 * then follows the visitor. The position lives in a CSS variable, so dragging never re-renders React.
 */
export function Compare({ before, after, label, beforeCaption, afterCaption }: CompareProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  const frameRef = useRef(0);
  const stoppedRef = useRef(false);

  const setPosition = (value: number) => {
    const stage = stageRef.current;
    const range = rangeRef.current;
    if (!stage || !range) return;
    stage.style.setProperty("--pos", `${value}%`);
    range.value = String(value);
    range.setAttribute("aria-valuetext", `${Math.round(value)}% of the old site showing`);
  };

  const stopSweep = () => {
    stoppedRef.current = true;
    cancelAnimationFrame(frameRef.current);
  };

  useEffect(() => {
    const target = window.innerWidth < 640 ? 40 : 50;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setPosition(50);
      return;
    }

    const from = 97;
    const duration = 1500;
    let start = 0;
    setPosition(from);

    const step = (now: number) => {
      if (stoppedRef.current) return;
      if (!start) start = now;
      const t = Math.min((now - start) / duration, 1);
      setPosition(Number((from + (target - from) * ease(t)).toFixed(2)));
      if (t < 1) frameRef.current = requestAnimationFrame(step);
    };

    const timer = window.setTimeout(() => {
      if (!stoppedRef.current) frameRef.current = requestAnimationFrame(step);
    }, 1200);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    stopSweep();
    const current = Number(event.currentTarget.value);
    const moves: Record<string, number> = {
      ArrowLeft: current - KEY_STEP,
      ArrowDown: current - KEY_STEP,
      ArrowRight: current + KEY_STEP,
      ArrowUp: current + KEY_STEP,
      Home: 0,
      End: 100,
    };
    if (event.key in moves) {
      event.preventDefault();
      setPosition(Math.min(100, Math.max(0, moves[event.key])));
    }
  };

  return (
    <div className={styles.compare}>
      <div ref={stageRef} className={styles.stage} role="group" aria-label={label}>
        <div className={styles.layer}>{after}</div>
        <div className={`${styles.layer} ${styles.before}`}>{before}</div>
        <div className={styles.handle} aria-hidden="true">
          <div className={styles.knob}>‹›</div>
        </div>
        <input
          ref={rangeRef}
          className={styles.range}
          type="range"
          min={0}
          max={100}
          step={0.1}
          defaultValue={50}
          aria-label="Move the divider between the old site and the redesigned site"
          onInput={(event) => {
            stopSweep();
            setPosition(Number(event.currentTarget.value));
          }}
          onPointerDown={stopSweep}
          onKeyDown={onKeyDown}
        />
      </div>
      <div className={styles.captions}>
        <p>
          <strong className="t-mono">Before.</strong> {beforeCaption}
        </p>
        <p>
          <strong className="t-mono">After.</strong> {afterCaption}
        </p>
      </div>
    </div>
  );
}
