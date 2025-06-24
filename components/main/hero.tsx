import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] md:top-[-340px] sm:top-[-200px] left-0 w-full max-w-full h-full object-cover -z-30 overflow-hidden"
      >
        <source src="/AlbioPortfolio.github.io/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
