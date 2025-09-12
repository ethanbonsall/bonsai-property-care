/* eslint-disable @next/next/no-img-element */
import generic from "@/public/assets/generic.jpeg";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col h-[110dvh] w-full">
      <img
        className=" object-cover h-[110dvh] w-full"
        src={generic.src}
        alt="Generic"
      />
      <p className="text-white font-bold text-4xl md:text-5xl lg:text-6xl absolute top-[45dvh] md:top-[44dvh] lg:top-[45dvh] self-center left-[10dvw] md:left-[15dvw]">
        Brighten your home,
      </p>
      <p className=" text-white font-bold text-4xl md:text-5xl lg:text-6xl absolute top-[53dvh] md:top-[55dvh] lg:top-[53dvh] self-center left-[10dvw] md:left-[15dvw]">
        Simplify your life.
      </p>
      <Link
        className="flex flex-row p-2 md:p-3 bg-primary absolute text-text-50 top-[62dvh] md:top-[68dvh] lg:top-[62dvh] font-bold left-[10dvw] md:left-[15dvw] text-xl lg:text-2xl rounded-[4px]"
        href="/services"
      >
        Schedule Now <ChevronRight className="h-7 lg:h-9 w-auto" />
      </Link>
    </div>
  );
};

export default Hero;
