"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef, MouseEvent } from "react";

/** A link to the homepage that scrolls to the top when the visitor is already there. */
export function HomeLink({ onClick, ...props }: Omit<ComponentPropsWithoutRef<typeof Link>, "href">) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || pathname !== "/") return;
    // Plain left-clicks only, so "open in new tab" still works.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return <Link href="/" onClick={handleClick} {...props} />;
}
