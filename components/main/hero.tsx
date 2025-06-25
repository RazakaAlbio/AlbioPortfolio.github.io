import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-200px] md:top-[-250px] sm:top-[-150px] left-0 w-full max-w-full h-auto object-contain -z-30 overflow-hidden pointer-events-none scale-110"
      >
        <source src="/AlbioPortfolio.github.io/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
