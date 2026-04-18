import {
  Hero,
  About,
  Stats,
  Centers,
  Features,
  Journey,
  Team,
  Gallery,
} from "@/components/SharedCentersPage";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Hero />
      <About />
      <Stats />
      <Centers />
      <Features />
      <Journey />
      <Team />
      <Gallery />
    </div>
  );
}
