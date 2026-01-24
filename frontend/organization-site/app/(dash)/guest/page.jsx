"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  UserIcon,
  GroupIcon,
  LocationIcon,
  DropDownIcon,
  PhoneIcon,
  MailIcon,
  IdCardGrayIcon,
  TypeOfIcon,
  RoomIcon,
  AdvPaymentIcon,
  MoneyIcon,
  PayMethodIcon,
} from "@/public/icons/icons";

import { countries, validatePhoneNumber, getPhonePlaceholder } from "@/modules/data/countries";
import { getIdTypesForCountry } from "@/modules/data/idTypes";
import DefaultButton from "@/modules/core-ui/Button";

import { useAtom } from "jotai";
import { mannualdataAtom } from "@/jotai/dash-atoms";

const VisitForm = () => {
  const [value, setValue] = useAtom(mannualdataAtom);
  const [selectedCountry, setSelectedCountry] = useState(value.country || "india");
  const [idTypesList, setIdTypesList] = useState(getIdTypesForCountry(value.country || "india"));
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({ defaultValues: { ...value, country: value.country || "india" } });

  const handleCountryChange = (e) => {
    const countryValue = e.target.value;
    setSelectedCountry(countryValue);
    setIdTypesList(getIdTypesForCountry(countryValue));
  };
  const router = useRouter();

  const onSubmit = async (data) => {
    // Validate phone number based on selected country
    const phoneValidation = validatePhoneNumber(data.mobile_number, selectedCountry);
    if (!phoneValidation.valid) {
      setError("mobile_number", { type: "custom", message: phoneValidation.message });
      return;
    }
    setValue({ ...data, country: selectedCountry });
    router.push("/guest-preview");
  };

  return (
    <div className=" xl:w-[100%]  lg:w-[1367px] ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6 bg-white rounded-lg shadow-3xl">
          <h1 className="mb-4 text-2xl font-semibold">HOTEL GUEST CHECK-IN</h1>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Country Selection */}
            <div className="w-[600px]">
              <label
                htmlFor="country"
                className="text-sm font-semibold text-[#333333]"
              >
                Country
              </label>
              <div className="mt-2.5 relative">
                <select
                  className="block w-full p-4 text-[#A3A3A3] pl-12 placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary appearance-none"
                  {...register("country")}
                  onChange={handleCountryChange}
                >
                  {countries.map((country) => (
                    <option
                      key={country.id}
                      value={country.value}
                      className="text-sm font-semibold text-[#333333]"
                    >
                      {country.title} ({country.phoneCode})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <DropDownIcon />
                </div>
                <LocationIcon className="absolute text-2xl left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="w-[600px] ">
              <label
                htmlFor="full_name"
                className="text-sm font-semibold text-[#333333] "
              >
                Full Name
              </label>
              <div className="mt-[8px] relative">
                <UserIcon
                  className={`absolute text-2xl left-4 ${
                    errors.full_name ? "top-1/3" : "top-1/2"
                  }  transform -translate-y-1/2 text-gray-400`}
                />

                <input
                  type="text"
                  placeholder="Input full name"
                  className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                    errors.full_name ? "border-red-500" : ""
                  }`}
                  {...register("full_name", { required: true })}
                />
                {errors.full_name && (
                  <span className="text-red-500">Full Name is required</span>
                )}
              </div>
            </div>

            <div className="w-[600px] ">
              <label
                htmlFor="organization_name"
                className="text-sm font-semibold text-[#333333] "
              >
                Mobile Number
              </label>
              <div className="mt-2.5 relative">
                <PhoneIcon
                  className={`absolute text-2xl left-4 ${
                    errors.mobile_number ? "top-1/3" : "top-1/2"
                  }  transform -translate-y-1/2 text-gray-400`}
                />

                <input
                  type="text"
                  placeholder={getPhonePlaceholder(selectedCountry)}
                  className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                    errors.mobile_number ? "border-red-500" : ""
                  }`}
                  {...register("mobile_number", {
                    required: "Mobile Number is required",
                    onChange: () => clearErrors("mobile_number"),
                  })}
                />
                {errors.mobile_number && (
                  <span className="text-red-500">
                    {errors.mobile_number.message || "Mobile Number is required"}
                  </span>
                )}
              </div>
            </div>

            <div className="w-[600px] ">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-[#333333] "
              >
                Email address(optional)
              </label>
              <div className="mt-[8px] relative">
                <MailIcon
                  className={`absolute text-2xl left-4 ${
                    errors.email ? "top-1/3" : "top-1/2"
                  }  transform -translate-y-1/2 text-gray-400`}
                />

                <input
                  type="email"
                  placeholder="Input Email address"
                  className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-500">
                    Email address is required
                  </span>
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
                  <LocationIcon
                    className={`absolute text-2xl left-4 ${
                      errors.adultguest ? "top-1/2" : "top-1/2"
                    }  transform -translate-y-1/2 text-gray-400`}
                  />

                  <input
                    type="text"
                    placeholder="Input Number of Adult Guest"
                    className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                      errors.visiting ? "border-red-500" : ""
                    }`}
                    {...register("adultguest", { required: true })}
                  />
                  {errors.adultguest && (
                    <span className="text-red-500">
                      adult guest are required
                    </span>
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
                  <GroupIcon
                    className={`absolute text-2xl left-4 ${
                      errors.childguest ? "top-1/3" : "top-1/2"
                    }  transform -translate-y-1/2 text-gray-400`}
                  />

                  <input
                    type="text"
                    placeholder="Input Number of Child Guest"
                    className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                      errors.numvisitor ? "border-red-500" : ""
                    }`}
                    {...register("childguest", { required: true })}
                  />
                  {errors.childguest && (
                    <span className="text-red-500">
                      Number of child guest is required
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
                  <RoomIcon
                    className={`absolute text-2xl left-4 ${
                      errors.numofroom ? "top-1/3" : "top-1/2"
                    }  transform -translate-y-1/2 text-gray-400`}
                  />

                  <input
                    type="text"
                    placeholder="Input Number of Rooms"
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
                    className="block w-full p-4 text-[#A3A3A3] pl-12 placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary appearance-none"
                    {...register("typeid")}
                  >
                    <option value="" className="text-[#A3A3A3] ">
                      Select Type of ID
                    </option>
                    {idTypesList.map((idType) => (
                      <option
                        key={idType.id}
                        value={idType.value}
                        className="text-sm  font-semibold text-[#333333]"
                      >
                        {idType.title}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <DropDownIcon />
                  </div>
                  <TypeOfIcon
                    className={`absolute text-2xl left-4 ${
                      errors.typeid ? "top-1/3" : "top-1/2"
                    }  transform -translate-y-1/2 text-gray-400`}
                  />

                  {errors.typeid && (
                    <span className="text-red-500">
                      Please select Type of Id
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
                  ID Number
                </label>
                <div className="mt-2.5 relative">
                  <IdCardGrayIcon
                    className={`absolute text-2xl left-4 ${
                      errors.id_number ? "top-1/3" : "top-1/2"
                    }  transform -translate-y-1/2 text-gray-400`}
                  />

                  <input
                    type="text"
                    placeholder="Input ID Number"
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
                  <AdvPaymentIcon
                    className={`absolute text-2xl left-4 ${
                      errors.advancedPayment ? "top-1/3" : "top-1/2"
                    }  transform -translate-y-1/2 text-gray-400`}
                  />

                  <input
                    type="text"
                    placeholder="Input Advance Payment"
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
                  <MoneyIcon
                    className={`absolute text-2xl left-4 ${
                      errors.remainingPayment ? "top-1/3" : "top-1/2"
                    }  transform -translate-y-1/2 text-gray-400`}
                  />

                  <input
                    type="text"
                    placeholder="Input Remaining Payment"
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
                  <PayMethodIcon
                    className={`absolute text-2xl left-4 ${
                      errors.paymentmethod ? "top-1/3" : "top-1/2"
                    }  transform -translate-y-1/2 text-gray-400`}
                  />

                  <input
                    type="text"
                    placeholder="Input Payment Method"
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
        <div className="w-[320px] my-10">
          <DefaultButton text="Continue" />
        </div>
      </form>
    </div>
  );
};

export default VisitForm;
