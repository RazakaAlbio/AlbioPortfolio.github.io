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
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col h-full">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative p-4 flex-1 flex flex-col">
        <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="text-gray-300 flex-1">{description}</p>
      </div>
    </div>
  );
};
