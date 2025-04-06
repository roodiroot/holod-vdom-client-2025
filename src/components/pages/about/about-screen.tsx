import Image from "next/image";

const AboutScreen: React.FC = () => {
  return (
    <div className="relative w-[48rem] aspect-[16/11] max-w-none rounded-lg bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] overflow-hidden">
      <Image
        width={912}
        height={540}
        className="absolute w-full h-full object-cover"
        src="/image/about.jpg"
        alt="about"
      />
    </div>
  );
};

export default AboutScreen;
