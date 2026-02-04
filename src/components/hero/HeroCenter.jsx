// @ts-nocheck
import BrandBlock from '../BrandBlock';

export default function HeroCenter({ data }) {
  const { brand, stats } = data;

  return (
    <div className="heroCenter">
      <BrandBlock
        variant="hero"
        align="center"
        name={brand.name}
        title={brand.title}
        intro={brand.intro}
        badges={[...brand.affiliations, ...brand.roles]}
        location={brand.location}
        stats={stats}
        statsLayout="inline"
        compact="auto"
        compactHideStats={false}
      />
    </div>
  );
}
