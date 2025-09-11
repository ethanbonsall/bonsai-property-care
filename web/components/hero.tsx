/* eslint-disable @next/next/no-img-element */
import generic from "@/public/assets/generic.jpeg";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col h-[110dvh] w-full">
      <img
        className=" object-cover h-[110dvh] w-full"
        src={generic.src}
        alt="Generic"
      />
      <p className="text-white font-bold text-4xl md:text-6xl absolute top-[45dvh] self-center left-[15dvw]">
        Brighten your home,
      </p>
      <p className=" text-white font-bold text-4xl md:text-6xl absolute top-[53dvh] self-center left-[15dvw]">
        Simplify your life.
      </p>
      <a
        className="flex flex-row p-2 bg-primary absolute text-text-50 top-[62dvh] font-bold left-[15dvw] text-xl"
        href="/services"
      >
        Schedule Now <ChevronRight className="h-7 w-auto" />
      </a>
    </div>
  );
};

export default Hero;
