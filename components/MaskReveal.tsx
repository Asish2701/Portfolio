import React, { useRef } from "react";

type MaskRevealProps = {
  base: React.ReactNode;
  reveal: React.ReactNode;
  className?: string;
  radius?: number;
};

export default function MaskReveal({
  base,
  reveal,
  className = "",
  radius = 110,
}: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    el.style.setProperty("--mr", `${radius}px`);
  };

  const resetMask = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={resetMask}
      className={`mask-reveal relative overflow-hidden ${className}`}
      style={
        {
          ["--mx" as string]: "50%",
          ["--my" as string]: "50%",
          ["--mr" as string]: `${radius}px`,
        } as React.CSSProperties
      }
    >
      <div>{base}</div>
      <div className="mask-reveal__layer absolute inset-0 pointer-events-none">
        {reveal}
      </div>
    </div>
  );
}