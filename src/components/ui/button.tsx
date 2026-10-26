import type { ComponentPropsWithoutRef } from "react";

import styles from "./button.module.css";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  /** "light" is for use on an ink background. */
  tone?: "dark" | "light";
};

export function Button({ tone = "dark", className, ...props }: ButtonProps) {
  const classes = [styles.button, tone === "light" ? styles.light : "", className]
    .filter(Boolean)
    .join(" ");
  return <a className={classes} {...props} />;
}
