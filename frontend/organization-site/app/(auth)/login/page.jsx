"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

import { ShowIcon, HideIcon, UserIcon, LockIcon } from "@/public/icons/icons";

const AuthSlider = dynamic(
  () => import("@/modules/auth-component/AuthSlider"),
  {
    ssr: false,
  }
);
import axiosInstance from "@/modules/axios";
import { generateToken } from "./firebase";
import { NGtryLogo } from "@/public/logo/logos";

const Page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleLoginSuccess = async (response) => {
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);
    toast.success("Logged in Successfully");
    router.replace("/dash");
  };

  const onLoginSubmit = async (data) => {
    try {
      setIsLoading(true);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const login_type = emailRegex.test(data.mobile_number)
        ? "email"
        : "mobile";

      let fcmToken = null;
      try {
        fcmToken = await generateToken();
        localStorage.setItem("fcmToken", fcmToken);
      } catch (fcmError) {
        console.log("FCM token generation failed, continuing without it");
      }

      const requestData = {
        username: data.mobile_number,
        password: data.password,
        login_type: login_type,
        ...(fcmToken && { fcm_token: fcmToken }),
      };

      const response = await axiosInstance.post("/user/login/", requestData);

      if (response.status === 200) {
        handleLoginSuccess(response);
      } else {
        setIsLoading(false);
        toast.error("Login Failed, check your credentials");
      }
    } catch (error) {
      setIsLoading(false);
      if (error?.response?.status === 500 || error?.response?.status === 404) {
        toast.error("Login Failed, Try Again");
      } else {
        if (error && Object.values(error?.response?.data || []).length >= 1) {
          Object.values(error?.response?.data).map((e) => toast.error(e));
        } else {
          toast.error("Login Failed, Try Again");
        }
      }
    }
  };

  return (
    <div className="grid px-5 py-2 somecontainer font-inter md:grid-cols-2 max-w-9xl xl:px-32">
      <div
        id="container"
        className="flex items-start container justify-start px-4 bg-white md:px-0 lg:py-10"
      >
        <div
          className="xl:w-full xl:max-w-[568px] 2xl:max-w-[568px]"
          style={{ width: "96%" }}
        >
          <div className="text-center text-black flex justify-between items-center">
            <NGtryLogo style={{ width: '150px', height: '45px' }} />
            <p>
              Dont have an account?{" "}
              <span className="">
                <Link
                  href="/register"
                  title="Create free account at NGtry"
                  className="ml-1 font-medium text-[#636B2F] transition-all duration-200 hover:text-[#3D4127] hover:underline focus:text-ngtrydeep"
                >
                  Register
                </Link>
              </span>
            </p>
          </div>
          <h2 className="text-2xl font-semibold leading-tight mt-16 text-black sm:text-3xl">
            Login
          </h2>
          <p className="mt-2 text-sm text-[#090A0A] font-normal">
            To log in, input your registered mobile number or email and password
          </p>
          <form
            onSubmit={handleSubmit(onLoginSubmit)}
            method="POST"
            className="mt-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="mobile_number"
                  className="text-sm font-normal text-[#A3A3A3]"
                >
                  Email address or Mobile Number
                </label>
                <div className="mt-2.5 relative">
                  <UserIcon
                    className={`absolute text-2xl left-4 ${
                      errors.mobile_number ? "top-1/3" : "top-1/2"
                    } transform -translate-y-1/2 text-gray-400`}
                  />
                  <input
                    type="tel"
                    {...register("mobile_number", {
                      required: "Mobile number is required",
                    })}
                    placeholder="Input your mobile number or email"
                    className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-gray-400 rounded-lg bg-gray-50 focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                      errors.mobile_number ? "border-red-500" : ""
                    }`}
                  />
                  {errors.mobile_number && (
                    <p className="mt-1 text-red-500">
                      {errors.mobile_number.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-normal text-[#A3A3A3]"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2.5 relative">
                  <LockIcon
                    className={`absolute text-2xl left-4 ${
                      errors.password ? "top-1/3" : "top-1/2"
                    } transform -translate-y-1/2 text-gray-400`}
                  />
                  <div
                    onClick={() => setIsVisible(!isVisible)}
                    className="cursor-pointer"
                  >
                    {isVisible === false ? (
                      <ShowIcon
                        className={`absolute text-2xl right-4 ${
                          errors.password ? "top-1/3" : "top-1/2"
                        } transform -translate-y-1/2 text-gray-400`}
                      />
                    ) : (
                      <HideIcon
                        className={`absolute text-2xl right-4 ${
                          errors.password ? "top-1/3" : "top-1/2"
                        } transform -translate-y-1/2 text-gray-400`}
                      />
                    )}
                  </div>
                  <input
                    type={isVisible == false ? "password" : "text"}
                    {...register("password", {
                      value: password,
                      onChange: (e) => setPassword(e.target.value),
                      required: "Password is required",
                    })}
                    placeholder="Enter your password"
                    className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-gray-400 rounded-lg bg-gray-50 focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />
                  {errors.password && (
                    <p className="mt-1 text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <label
                    className="flex items-center font-bold text-gray-500"
                    htmlFor="remember"
                  >
                    <input
                      className="ml-2 leading-tight w-[20px] h-[20px] rounded-lg"
                      type="checkbox"
                      id="remember"
                      name="remember"
                    />
                    <span className="ml-1 text-sm font-normal">
                      Remember me
                    </span>
                  </label>
                </div>
                <Link
                  href="/forgot"
                  title="forgot password"
                  className="text-sm font-medium text-[#636B2F] hover:underline hover:text-[#3D4127] focus:text-[#3D4127]"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="z-20">
                <button
                  type="submit"
                  className="inline-flex items-center bg-gradient-to-r from-[#636B2F] to-[#3D4127] justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md focus:outline-none hover:from-[#3D4127] hover:to-[#2a2d1b] focus:from-[#3D4127] focus:to-[#2a2d1b]"
                >
                  {isLoading === false ? "Log in" : "Loading"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <AuthSlider />
    </div>
  );
};

export default Page;
