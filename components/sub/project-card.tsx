import Image from "next/image";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col h-full md:h-[480px] lg:h-[500px]">
      <div className="relative w-full h-48 md:h-52 lg:h-56 overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative p-4 flex-1 flex flex-col md:h-[220px] lg:h-[240px]">
        <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="text-gray-300 flex-1 text-sm leading-relaxed overflow-hidden">{description}</p>
      </div>
    </div>
  );
};
