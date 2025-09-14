import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen md:h-[110dvh] w-full bg-cover bg-top md:bg-center bg-[url('/assets/generic.jpeg')] ">
      <div className="flex flex-col mx-auto md:mx-[15%] md:my-[5%] gap-y-2 xl:gap-y-3 justify-center align-middle min-h-screen md:h-[110dvh]">
        <p className="text-white font-bold text-[42px] md:text-5xl lg:text-6xl xl:text-[80px] 2xl:text-[144px]">
          Brighten your home
        </p>
        <p className="text-white font-bold text-[42px] md:text-5xl lg:text-6xl xl:text-[80px] 2xl:text-[144px]">
          Simplify your life.
        </p>
        <Link
          className="flex flex-row p-3 xl:p-4 2xl:p-6 xl:my-4 2xl:my-6 my-3 bg-primary text-text-50 text-2xl lg:text-4xl 2xl:text-6xl font-semibold rounded-[4px] w-fit"
          href="/services"
        >
          Schedule Now <ChevronRight className="h-7 lg:h-9 w-auto" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
