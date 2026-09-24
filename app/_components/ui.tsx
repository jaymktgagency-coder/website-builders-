import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-[10px] px-5 text-[0.95rem] font-semibold tracking-[0.01em] transition-[transform,filter,background-color] duration-200 ease-out active:scale-[0.98]";

/** Foil-stamped primary action. */
export function PlateLink({ className = "", ...props }: ComponentProps<"a">) {
  return <a className={`${base} plate-gold hover:brightness-110 ${className}`} {...props} />;
}

/** Foil-edged secondary action. */
export function EdgeLink({ className = "", ...props }: ComponentProps<"a">) {
  return (
    <a
      className={`${base} foil-edge text-gold-bright hover:[--plate:var(--color-stock-2)] ${className}`}
      {...props}
    />
  );
}

/** Marks a fact the club hasn't confirmed yet. */
export function Placeholder({ children = "To be announced" }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line-strong px-3 py-1 text-[0.78rem] font-medium tracking-[0.02em] text-muted">
      <span aria-hidden className="size-1.5 rounded-full bg-gold-deep" />
      {children}
    </span>
  );
}

export function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="stamp foil text-balance text-[clamp(2.4rem,9vw,5.25rem)] leading-[0.9]"
    >
      {children}
    </h2>
  );
}

export function Lede({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`max-w-[58ch] text-pretty text-[1.05rem] leading-relaxed text-muted ${className}`}>
      {children}
    </p>
  );
}
