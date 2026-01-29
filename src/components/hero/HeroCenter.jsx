import BrandBlock from "../BrandBlock";

export default function HeroCenter({ data }) {
  const { brand, stats } = data;

  return (
    <div className="heroCenter">
      <BrandBlock
        variant="hero"
        align="center"
        name={brand.name}
        subtitle={brand.subtitle}
        stats={stats}
        statsStyle="card"
        compact="auto"
        compactStatsStyle="pill"
        compactHideSubtitle={true}
      />
    </div>
  );
}
