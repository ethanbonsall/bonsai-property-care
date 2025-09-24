/* eslint-disable @next/next/no-html-link-for-pages */
import NavBar from "@/components/nav_bar_home";
import { ChevronRight } from "lucide-react";

const four04 = () => {
  return (
    <div className="bg-background flex flex-col items-center text-text font-roboto min-h-screen">
      <NavBar />
      <div className="flex flex-col self-center text-center h-screen justify-center gap-16 align-middle ">
        <h1 className="font-bold text-6xl">Nothing to see here!</h1>
        <a
          className="font-bold text-4xl p-4 bg-primary text-text-50 rounded-[8px]"
          href="/"
        >
          Go back and find the service you need!
          <ChevronRight className="inline h-16 w-auto" />
        </a>
      </div>
    </div>
  );
};

export default four04;
