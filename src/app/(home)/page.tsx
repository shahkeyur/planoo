"use client";

import FAQ from "@/components/FAQ/FAQ";
import { Button } from "@nextui-org/react";
import Image from "next/image";

function Home() {
  const handleRegister = () => {
    console.log("register");
  };

  return (
    <div>
      <div className="grid grid-cols-3 bg-gray-200">
        <div className="col-span-2 flex flex-col mx-auto py-8">
          <h1 className="text-7xl font-medium text-gray-400">
            Get ready to
            <br />
            <span className="text-black text-8xl">supercharge</span>
            <br />
            your goal-
            <br />
            setting and
            <br />
            planning with
            <br />
            AI Planner.
          </h1>
          <form
            onSubmit={handleRegister}
            className="rounded-full flex bg-white mt-8"
          >
            <input
              placeholder="Enter your email"
              className="rounded-full text-lg w-full"
            />
            <Button
              type="submit"
              color="secondary"
              size="lg"
              className="rounded-full ml-2 w-40"
            >
              Register
            </Button>
          </form>
          <div className="mt-8">
            <p className="flex items-center">
              Best your efficiency with
              <span className="pl-2">
                <Image alt="Planno" src="/logo.png" width="100" height="100" />
              </span>
            </p>
            <p>Get more done, effortlessly.</p>
          </div>
        </div>
        <div className="relative">
          <Image src="/dalle.png" alt="hero" fill objectFit="cover" />
        </div>
      </div>
      <div className="px-[10rem] mx-auto">
        <FAQ />
      </div>
    </div>
  );
}

export default Home;
