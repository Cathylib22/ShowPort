import { useEffect, useMemo, useState } from "react";

function useIsMobile(breakpointPx = 640) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpointPx : false,
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpointPx);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpointPx]);

  return isMobile;
}

export default function BrandBlock({
  name = "Catherine Young",
  subtitle,

  /* LOGO */
  logoSrc,
  logoAlt = "Logo",
  logoNode, // ✅ NEW: React node (SVG component, JSX, etc.)

  /* STATS */
  stats,
  showStats = true,
  statsLayout = "inline", // "inline" | "card" | "pill"

  /* LAYOUT */
  align = "center",
  variant = "hero",
  size,

  /* COMPACT */
  compact = "auto",
  compactBreakpoint = 640,
  compactHideSubtitle = true,
  compactHideStats = false,
}) {
  const isMobile = useIsMobile(compactBreakpoint);
  const isCompact = compact === "auto" ? isMobile : Boolean(compact);

  const resolvedSize = useMemo(() => {
    if (size) return size;
    if (variant === "nav") return "sm";
    if (variant === "footer") return "md";
    return "xl";
  }, [size, variant]);

  const finalSize = isCompact
    ? resolvedSize === "xl"
      ? "lg"
      : resolvedSize === "lg"
        ? "md"
        : "sm"
    : resolvedSize;

  const hasStats =
    showStats &&
    Array.isArray(stats) &&
    stats.length > 0 &&
    !(isCompact && compactHideStats);

  const finalSubtitle = isCompact && compactHideSubtitle ? null : subtitle;

  return (
    <div
      className={[
        "brandBlock",
        `align-${align}`,
        `variant-${variant}`,
        `size-${finalSize}`,
        `stats-${statsLayout}`,
        isCompact ? "is-compact" : "",
      ].join(" ")}
    >
      <div className="brandHeader">
        {logoNode ? (
          <div className="brandLogoNode">{logoNode}</div>
        ) : logoSrc ? (
          <img className="brandLogoImg" src={logoSrc} alt={logoAlt} />
        ) : null}

        <div className="brandText">
          <div className="brandTitle">{name}</div>
          {finalSubtitle && (
            <div className="brandSubtitle">{finalSubtitle}</div>
          )}
        </div>
      </div>

      {hasStats && statsLayout === "inline" && (
        <div className="brandStatsInline">
          {stats.map((s, i) => (
            <span key={s.label}>
              <strong>{s.value}</strong> {s.label}
              {i < stats.length - 1 && <span className="dot"> · </span>}
            </span>
          ))}
        </div>
      )}

      {hasStats && statsLayout !== "inline" && (
        <div className="brandStats">
          {stats.map((s, idx) => (
            <div className="brandStat" key={`${s.label}-${idx}`}>
              <div className="brandStatNum">{s.value}</div>
              <div className="brandStatLabel">{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
