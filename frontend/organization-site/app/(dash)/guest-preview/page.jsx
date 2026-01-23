"use client";


import {
  CiMailIcon,
  FaMobileAltIcon,
  IoPersonOutlineIcon,
  MdArrowDropDownIcon,
  MdOutlineGroupIcon,
  MdOutlineLocationOnIcon,
  RiRectangleLineIcon,
} from "@/modules/icons/SvgIcons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


import axiosInstance from "@/modules/axios";
import { useUserData } from "@/modules/hooks/useUserData";

import { mannualdataAtom } from "@/jotai/dash-atoms";
import { useAtom } from "jotai";

const VisitForm = () => {
  const [value, setValue] = useAtom(mannualdataAtom);
  const {
    register,
    formState: { errors },
  } = useForm({ defaultValues: value });

  const router = useRouter();

  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useUserData();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    if (!isUserLoading && user?.id) {
      try {
        const formData = new FormData();
        formData.append("full_name", value.full_name || "");
        formData.append("mobile_number", value.mobile_number || "");
        formData.append("email", value.email || "");
        formData.append("numAdultguest", value.adultguest || "0");
        formData.append("numChildguest", value.childguest || "0");
        formData.append("numofroom", value.numofroom || "0");
        formData.append("type_of_id", value.typeid || "");
        formData.append("id_number", value.id_number || "");
        formData.append("advancedPayment", value.advancedPayment || "0");
        formData.append("remainingPayment", value.remainingPayment || "0");
        formData.append("paymentmethod", value.paymentmethod || "");
        formData.append("checkout_date", value.checkout_date || new Date().toISOString().split('T')[0]);

        const res = await axiosInstance.post(
          "/organization/guestcreate/",
          formData,
          {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: `Bearer ${localStorage?.getItem("access") || ""}`,
            },
          }
        );

        if (res.status === 200 || res.status === 201) {
          toast.success(`Guest ${value.full_name} checked in successfully`);
          router.push("/guest-list");
          setValue({});
        } else {
          toast.error("Failed to check in guest");
        }
      } catch (error) {
        console.error("Guest check-in error:", error);
        if (error?.response?.data) {
          const errorData = error.response.data;
          if (typeof errorData === 'object') {
            Object.values(errorData).forEach((msg) => {
              toast.error(Array.isArray(msg) ? msg[0] : msg);
            });
          } else {
            toast.error(errorData);
          }
        } else {
          toast.error("Failed to check in guest. Please try again.");
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      toast.error("User data not loaded. Please try again.");
    }
  };

  return (
    <div className="xl:w-[100%]  lg:w-[1367px] ">
      <div className="p-6 bg-white rounded-lg shadow-3xl">
        <h1 className="mb-4 text-2xl font-semibold">HOTEL GUEST CHECK-IN</h1>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="w-[600px] ">
            <label
              htmlFor="organization_name"
              className="text-sm font-semibold text-[#333333] "
            >
              Full Name
            </label>
            <div className="mt-[8px] relative">
              <IoPersonOutlineIcon
                className={`absolute text-2xl left-4 ${
                  errors.full_name ? "top-1/3" : "top-1/2"
                }  transform -translate-y-1/2 text-gray-400`}
              />

              <input
                type="text"
                readOnly={true}
                value={value.full_name}
                placeholder="Input full name"
                className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-textfromgray focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                  errors.full_name ? "border-red-500" : ""
                }`}
                {...register("full_name", { required: true })}
              />
              {errors.organization_name && (
                <span className="text-red-500">Full Name is required</span>
              )}
            </div>
          </div>

          <div className="w-[600px] ">
            <label
              htmlFor="mobile_number"
              className="text-sm font-semibold text-[#333333] "
            >
              Mobile Number
            </label>
            <div className="mt-[8px] relative">
              <FaMobileAltIcon
                className={`absolute text-2xl left-4 ${
                  errors.mobile_number ? "top-1/3" : "top-1/2"
                }  transform -translate-y-1/2 text-gray-400`}
              />

              <input
                type="text"
                readOnly={true}
                value={value.mobile_number}
                placeholder="Input Mobile number"
                className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-textfromgray focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                  errors.mobile_number ? "border-red-500" : ""
                }`}
                {...register("mobile_number", { required: true })}
              />
              {errors.mobile_number && (
                <span className="text-red-500">Mobile Number is required</span>
              )}
            </div>
          </div>
          <div className="w-[600px] ">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-[#333333] "
            >
              Email address
            </label>
            <div className="mt-[8px] relative">
              <CiMailIcon
                className={`absolute text-2xl left-4 ${
                  errors.email ? "top-1/3" : "top-1/2"
                }  transform -translate-y-1/2 text-gray-400`}
              />

              <input
                type="email"
                readOnly={true}
                value={value.email}
                placeholder="Input Email address"
                className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-textfromgray focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                  errors.email ? "border-red-500" : ""
                }`}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email address is required</span>
              )}
            </div>
          </div>
          <div className="w-[600px] mt-1 flex justify-between">
            <div className="w-[280px] mt-2">
              <label
                htmlFor="visiting"
                className="text-sm font-semibold text-[#333333] "
              >
                Number of Adult guest
              </label>
              <div className="mt-2.5 relative">
                <MdOutlineLocationOnIcon
                  className={`absolute text-2xl left-4 ${
                    errors.adultguest ? "top-1/2" : "top-1/2"
                  }  transform -translate-y-1/2 text-gray-400`}
                />

                <input
                  type="text"
                  placeholder="Input visiting from"
                  value={value.adultguest}
                  readOnly={true}
                  className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                    errors.visiting ? "border-red-500" : ""
                  }`}
                  {...register("adultguest", { required: true })}
                />
                {errors.adultguest && (
                  <span className="text-red-500">adult guest are required</span>
                )}
              </div>
            </div>
            <div className="w-[280px] mt-2">
              <label
                htmlFor="organization_name"
                className="text-sm font-semibold text-[#333333] "
              >
                Number of child guest
              </label>
              <div className="mt-2.5 relative">
                <MdOutlineGroupIcon
                  className={`absolute text-2xl left-4 ${
                    errors.numvisitor ? "top-1/3" : "top-1/2"
                  }  transform -translate-y-1/2 text-gray-400`}
                />

                <input
                  type="text"
                  placeholder="Input number of child visitor"
                  value={value.childguest}
                  className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                    errors.numvisitor ? "border-red-500" : ""
                  }`}
                  {...register("numvisitor", { required: true })}
                />
                {errors.numvisitor && (
                  <span className="text-red-500">
                    Number of visitor is required
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="w-[600px]   flex justify-between ">
            <div className="w-[280px] mt-2">
              <label
                htmlFor="organization_name"
                className="text-sm font-semibold text-[#333333] "
              >
                Number of rooms
              </label>
              <div className="mt-2.5 relative">
                <RiRectangleLineIcon
                  className={`absolute text-2xl left-4 ${
                    errors.numofroom ? "top-1/3" : "top-1/2"
                  }  transform -translate-y-1/2 text-gray-400`}
                />

                <input
                  type="text"
                  placeholder="Input number of visitor"
                  readOnly={true}
                  value={value.numofroom}
                  className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                    errors.id_number ? "border-red-500" : ""
                  }`}
                  {...register("numofroom", { required: true })}
                />
                {errors.id_number && (
                  <span className="text-red-500">
                    Number of room is required
                  </span>
                )}
              </div>
            </div>

            <div className="w-[280px] mt-2 ">
              <label
                htmlFor="organization_name"
                className="text-sm font-semibold text-[#333333] "
              >
                Type of ID
              </label>
              <div className="mt-2.5 relative">
                <select
                  readOnly={true}
                  value={value.typeid}
                  className="block w-full p-4 text-[#A3A3A3] pl-12 placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-textfromgray focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary appearance-none"
                  {...register("typeid", { required: true })}
                >
                  <option value="" className="text-[#A3A3A3] ">
                    {value.typeid}
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <MdArrowDropDownIcon />
                </div>
                <RiRectangleLineIcon
                  className={`absolute text-2xl left-4 ${
                    errors.typeid ? "top-1/3" : "top-1/2"
                  }  transform -translate-y-1/2 text-gray-400`}
                />

                {errors.typeid && (
                  <span className="text-red-500">Please select Type of Id</span>
                )}
              </div>
            </div>
          </div>

          <div className="w-[600px]   flex justify-between ">
            <div className="w-[280px] mt-2">
              <label
                htmlFor="organization_name"
                className="text-sm font-semibold text-[#333333] "
              >
                ID Number
              </label>
              <div className="mt-2.5 relative">
                <RiRectangleLineIcon
                  className={`absolute text-2xl left-4 ${
                    errors.id_number ? "top-1/3" : "top-1/2"
                  }  transform -translate-y-1/2 text-gray-400`}
                />

                <input
                  type="text"
                  placeholder="Input number of visitor"
                  value={value.id_number}
                  readOnly={true}
                  className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                    errors.id_number ? "border-red-500" : ""
                  }`}
                  {...register("id_number", { required: true })}
                />
                {errors.id_number && (
                  <span className="text-red-500">Id Number is required</span>
                )}
              </div>
            </div>
            <div className="w-[280px] mt-2">
              <label
                htmlFor="organization_name"
                className="text-sm font-semibold text-[#333333] "
              >
                Advanced payment
              </label>
              <div className="mt-2.5 relative">
                <RiRectangleLineIcon
                  className={`absolute text-2xl left-4 ${
                    errors.advancedPayment ? "top-1/3" : "top-1/2"
                  }  transform -translate-y-1/2 text-gray-400`}
                />

                <input
                  type="text"
                  placeholder="Input number of visitor"
                  value={value.advancedPayment}
                  readOnly={true}
                  className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                    errors.id_number ? "border-red-500" : ""
                  }`}
                  {...register("advancedPayment", { required: true })}
                />
                {errors.advancedPayment && (
                  <span className="text-red-500">
                    Advanced payment are required
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="w-[600px]   flex justify-between ">
            <div className="w-[280px] mt-2">
              <label
                htmlFor="organization_name"
                className="text-sm font-semibold text-[#333333] "
              >
                Remaining Payment
              </label>
              <div className="mt-2.5 relative">
                <RiRectangleLineIcon
                  className={`absolute text-2xl left-4 ${
                    errors.remainingPayment ? "top-1/3" : "top-1/2"
                  }  transform -translate-y-1/2 text-gray-400`}
                />

                <input
                  type="text"
                  placeholder="Input number of visitor"
                  value={value.remainingPayment}
                  readOnly={true}
                  className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                    errors.id_number ? "border-red-500" : ""
                  }`}
                  {...register("remainingPayment", { required: true })}
                />
                {errors.remainingPayment && (
                  <span className="text-red-500">
                    remaining payment is required
                  </span>
                )}
              </div>
            </div>
            <div className="w-[280px] mt-2">
              <label
                htmlFor="organization_name"
                className="text-sm font-semibold text-[#333333] "
              >
                Payment method
              </label>
              <div className="mt-2.5 relative">
                <RiRectangleLineIcon
                  className={`absolute text-2xl left-4 ${
                    errors.paymentmethod ? "top-1/3" : "top-1/2"
                  }  transform -translate-y-1/2 text-gray-400`}
                />

                <input
                  type="text"
                  placeholder="Input number of visitor"
                  value={value.paymentmethod}
                  readOnly={true}
                  className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                    errors.id_number ? "border-red-500" : ""
                  }`}
                  {...register("paymentmethod", { required: true })}
                />
                {errors.paymentmethod && (
                  <span className="text-red-500">
                    paymentmethod is required
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <button
          type="submit"
          className="w-[320px] h-[56px] mb-12 rounded-xl mt-10 flex items-center bg-gradient-to-b from-ngtryprimary to-ngtrydeep justify-center px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent focus:outline-none hover:opacity-90"
          onClick={() => {
            if (isLoading === false) {
              onSubmit();
            } else {
            }
          }}
        >
          {isLoading === false ? "Continue" : "Loading"}
        </button>
        <div
          type="submit"
          className="w-[320px] h-[56px] rounded-xl mb-12 mt-10 flex items-center bg-white justify-center  px-4 py-4 text-base font-semibold text-black transition-all duration-200    border-2 border-gray-950"
          onClick={() => {
            router.back();
          }}
        >
          Back
        </div>
      </div>
    </div>
  );
};

export default VisitForm;
