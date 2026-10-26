"use client";

import { useEffect, useRef, type ReactNode } from "react";

import styles from "./work-preview.module.css";

/**
 * Wraps the project list. With a mouse, a screenshot of the site under the cursor follows the pointer.
 * Touch devices skip this: they show each thumbnail inline instead.
 */
export function WorkPreview({ children }: { children: ReactNode }) {
  const listRef = useRef<HTMLDivElement>(null);
  const peekRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const peek = peekRef.current;
    const image = imageRef.current;
    if (!list || !peek || !image) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smoothing = reduceMotion ? 1 : 0.16;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let frame = 0;

    const draw = () => {
      x += (targetX - x) * smoothing;
      y += (targetY - y) * smoothing;
      peek.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      const settled = Math.abs(targetX - x) <= 0.3 && Math.abs(targetY - y) <= 0.3;
      frame = settled ? 0 : requestAnimationFrame(draw);
    };

    const follow = (clientX: number, clientY: number) => {
      targetX = Math.min(clientX + 28, window.innerWidth - peek.offsetWidth - 16);
      targetY = Math.min(
        Math.max(clientY - peek.offsetHeight / 2, 12),
        window.innerHeight - peek.offsetHeight - 12,
      );
      if (!frame) frame = requestAnimationFrame(draw);
    };

    const rowFrom = (target: EventTarget | null) =>
      target instanceof Element ? target.closest<HTMLElement>("[data-preview]") : null;

    const show = (row: HTMLElement, clientX: number, clientY: number) => {
      image.src = row.dataset.preview ?? "";
      x = targetX = clientX + 28;
      y = targetY = clientY - peek.offsetHeight / 2;
      peek.dataset.visible = "true";
      follow(clientX, clientY);
    };

    const hide = () => {
      peek.dataset.visible = "false";
    };

    const onOver = (event: PointerEvent) => {
      const row = rowFrom(event.target);
      if (row) show(row, event.clientX, event.clientY);
    };
    const onMove = (event: PointerEvent) => {
      if (rowFrom(event.target)) follow(event.clientX, event.clientY);
    };
    const onFocusIn = (event: FocusEvent) => {
      const row = rowFrom(event.target);
      if (!row) return;
      const box = row.getBoundingClientRect();
      show(row, box.right - 340, box.top + box.height / 2);
    };

    list.addEventListener("pointerover", onOver);
    list.addEventListener("pointermove", onMove);
    list.addEventListener("pointerleave", hide);
    list.addEventListener("focusin", onFocusIn);
    list.addEventListener("focusout", hide);
    return () => {
      cancelAnimationFrame(frame);
      list.removeEventListener("pointerover", onOver);
      list.removeEventListener("pointermove", onMove);
      list.removeEventListener("pointerleave", hide);
      list.removeEventListener("focusin", onFocusIn);
      list.removeEventListener("focusout", hide);
    };
  }, []);

  return (
    <>
      <div ref={listRef} className={styles.list}>
        {children}
      </div>
      <div ref={peekRef} className={styles.peek} data-visible="false" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element -- the source changes with the pointer position */}
        <img ref={imageRef} alt="" width={1200} height={750} />
      </div>
    </>
  );
}
