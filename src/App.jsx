import Hero from "./components/hero/Hero";
import MediaGrid from "./components/MediaGrid";
import ProfileActions from "./components/ProfileActions";
import TopNav from "./components/TopNav";

export default function App() {
  return (
    <div className="page">
      <div className="shell">
        <TopNav />
        <Hero />
        <ProfileActions />
        <MediaGrid />
      </div>
    </div>
  );
}
