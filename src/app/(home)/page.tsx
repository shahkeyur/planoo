"use client";

import FAQ from "@/components/FAQ/FAQ";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";

function Home() {
  const handleRegister = () => {
    console.log("register");
  };

  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 bg-gray-200">
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
            className="rounded-full flex bg-white mt-8 max-w-md"
          >
            <Input
              placeholder="Enter your email"
              className="rounded-r-none w-full"
              type="email"
            />
            <Button
              type="submit"
              color="secondary"
              size="lg"
              className="h-full w-40 rounded-l-none"
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
