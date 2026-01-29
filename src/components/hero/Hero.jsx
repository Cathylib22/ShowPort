import { profileData } from "../../data/profileData";
import HeroLeftCard from "./HeroLeftCard";
import HeroCenter from "./HeroCenter";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${profileData.hero.backgroundImage})`,
      }}
    >
      <div className="heroOverlay" />

      <div className="heroInner hero3col">
        <HeroLeftCard data={profileData.profileCard} />
        <HeroCenter data={profileData} />
        <HeroRight data={profileData} />
      </div>
    </section>
  );
}
