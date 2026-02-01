import { CSSProperties } from "react";

interface NeonBorderProps {
  children: React.ReactNode;
  color?: string; // hex like "#45B2FF"
  bgColor?: string; // hex like "#061E31"
}

function NeonBorder({ children, color = "#45B2FF", bgColor = "#061E31" }: NeonBorderProps) {
  const hexToRgb = (hex: string): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r} ${g} ${b}`;
  };

  const highlightRgb = hexToRgb(color);
  const backgroundRgb = hexToRgb(bgColor);

  return (
    <span
      style={
        {
          "--background": backgroundRgb,
          "--highlight": highlightRgb,
          "--bg-color": "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
          "--border-color": `linear-gradient(145deg,
            rgb(var(--highlight)) 0%,
            rgb(var(--highlight) / 0.3) 33.33%,
            rgb(var(--highlight) / 0.14) 66.67%,
            rgb(var(--highlight) / 0.1) 100%)`,
        } as CSSProperties
      }
      className="inline-flex rounded-full border border-transparent [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
    >
      {children}
    </span>
  );
}
export default NeonBorder;