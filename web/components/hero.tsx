import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen md:h-[110dvh] w-full bg-cover bg-top md:bg-center bg-[url('/assets/generic.jpeg')] ">
      <div className="flex flex-col mx-auto md:mx-[15%] md:my-[5%] gap-y-2 justify-center align-middle min-h-screen md:h-[110dvh]">
        <p className="flex text-white font-bold text-5xl  lg:text-6xl">
          Brighten your home
        </p>
        <p className="flex text-white font-bold text-5xl lg:text-6xl">
          Simplify your life.
        </p>
        <Link
          className="flex flex-row p-2 md:p-3 my-2 md:my-3 bg-primary text-text-50 text-2xl font-semibold rounded-[4px] w-fit"
          href="/services"
        >
          Schedule Now <ChevronRight className="h-7 lg:h-9 w-auto" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
