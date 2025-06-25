import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 fixed inset-0 w-full h-full object-cover -z-30 pointer-events-none opacity-80"
      >
        <source src="/AlbioPortfolio.github.io/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
