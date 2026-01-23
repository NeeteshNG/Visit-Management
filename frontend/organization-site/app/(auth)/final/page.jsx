"use client";

import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

import finalimage from "../../assets/On the way.png";
import AuthSlider from "@/modules/auth-component/AuthSlider";
import { NGtryLogo } from "@/public/logo/logos";

export default function Final() {
  const router = useRouter();
  return (
    <div className="grid px-5 py-2 mx-auto font-inter xl:px-32 md:grid-cols-2 max-w-9xl">
      <div className="flex items-center justify-start px-4  bg-white md:px-0 ">
        <div className="xl:w-full xl:max-w-[80%] 2xl:max-w-[80%] mt-12 items-center flex flex-col justify-center">
          <div className="flex flex-row items-start justify-start w-full">
            <NGtryLogo style={{ width: "100px", height: "100px" }} />
          </div>
          <Image src={finalimage} width={340} alt="something" />
          <p className="text-3xl text-center font-bold">
            Congratulation! <br /> Welcome to NGtry
          </p>
          <p className="text-sm font-normal text-center mt-4 w-[85%]">
            We are happy to have you. It’s time to scan and track the visitor
            details and manage it.{" "}
          </p>
          <button
            type="submit"
            className="inline-flex mt-7 w-[560px] items-center bg-gradient-to-r from-[#BAC095]  to-[#636B2F] justify-center  px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-ngtryprimary focus:outline-none hover:bg-ngtrydeep focus:bg-ngtrydeep"
            onClick={() => {
              router.push("/login");
            }}
          >
            Continue
          </button>
        </div>
      </div>

      <AuthSlider />
    </div>
  );
}
