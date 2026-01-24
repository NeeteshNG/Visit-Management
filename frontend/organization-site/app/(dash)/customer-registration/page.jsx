"use client";

import { useState } from "react";
import {
  CiMailIcon,
  FaMobileAltIcon,
  IoPersonOutlineIcon,
  MdArrowDropDownIcon,
  RiRectangleLineIcon,
} from "@/modules/icons/SvgIcons";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { countries, validatePhoneNumber, getPhonePlaceholder } from "@/modules/data/countries";
import { getIdTypesForCountry } from "@/modules/data/idTypes";
import { getStatesForCountry, getAddressLabels } from "@/modules/data/address";
import DefaultButton from "@/modules/core-ui/Button";

import { useAtom } from "jotai";
import { mannualdataAtom } from "@/jotai/dash-atoms";

const VisitForm = () => {
  const [value, setValue] = useAtom(mannualdataAtom);
  const [selectedCountry, setSelectedCountry] = useState(value.country || "india");
  const [idTypesList, setIdTypesList] = useState(getIdTypesForCountry(value.country || "india"));
  const [statesList, setStatesList] = useState(getStatesForCountry(value.country || "india"));
  const [addressLabels, setAddressLabels] = useState(getAddressLabels(value.country || "india"));

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({ defaultValues: { ...value, country: value.country || "india" } });
  const router = useRouter();

  const handleCountryChange = (e) => {
    const countryValue = e.target.value;
    setSelectedCountry(countryValue);
    setIdTypesList(getIdTypesForCountry(countryValue));
    setStatesList(getStatesForCountry(countryValue));
    setAddressLabels(getAddressLabels(countryValue));
  };

  const onSubmit = async (data) => {
    // Validate phone number based on selected country
    const phoneValidation = validatePhoneNumber(data.mobile_number, selectedCountry);
    if (!phoneValidation.valid) {
      setError("mobile_number", { type: "custom", message: phoneValidation.message });
      return;
    }
    setValue({ ...data, country: selectedCountry });
    router.push("/customer-preview");
  };

  return (
    <div className=" xl:w-[100%]  lg:w-[1367px] ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6 bg-white rounded-lg shadow-3xl">
          <h1 className="mb-4 text-2xl font-semibold">CUSTOMER REGISTRATION</h1>

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
                  className="block w-full p-4 text-[#A3A3A3] pl-4 placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary appearance-none"
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
                  <MdArrowDropDownIcon />
                </div>
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
                <IoPersonOutlineIcon
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
                <FaMobileAltIcon
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
                <CiMailIcon
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

            <div className="w-[600px]   flex justify-between ">
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
                    <MdArrowDropDownIcon />
                  </div>
                  <RiRectangleLineIcon
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
            </div>

            <div className="w-[600px] ">
              <label
                htmlFor="company_name"
                className="text-sm font-semibold text-[#333333] "
              >
                Company Name(optional)
              </label>
              <div className="mt-[8px] relative">
                <CiMailIcon
                  className={`absolute text-2xl left-4 ${
                    errors.company_name ? "top-1/3" : "top-1/2"
                  }  transform -translate-y-1/2 text-gray-400`}
                />

                <input
                  type="text"
                  placeholder="Input Company Name"
                  className={`block w-full p-4 pl-12 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                    errors.company_name ? "border-red-500" : ""
                  }`}
                  {...register("company_name")}
                />
                {errors.company_name && (
                  <span className="text-red-500">Company Name is required</span>
                )}
              </div>
            </div>
            {/* State/Province Selection */}
            <div className="w-[600px]">
              <label
                htmlFor="state"
                className="text-sm font-semibold text-[#333333]"
              >
                {addressLabels.state}
              </label>
              <div className="mt-2.5 relative">
                {statesList.length > 0 ? (
                  <>
                    <select
                      className="block w-full p-4 text-[#A3A3A3] pl-4 placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary appearance-none"
                      {...register("state", { required: true })}
                    >
                      <option value="">Select {addressLabels.state}</option>
                      {statesList.map((state, index) => (
                        <option
                          key={index}
                          value={state}
                          className="text-sm font-semibold text-[#333333]"
                        >
                          {state}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <MdArrowDropDownIcon />
                    </div>
                  </>
                ) : (
                  <input
                    type="text"
                    placeholder={`Input ${addressLabels.state}`}
                    className={`block w-full p-4 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                      errors.state ? "border-red-500" : ""
                    }`}
                    {...register("state", { required: true })}
                  />
                )}
                {errors.state && (
                  <span className="text-red-500">{addressLabels.state} is required</span>
                )}
              </div>
            </div>

            {/* City Input */}
            <div className="w-[600px]">
              <label
                htmlFor="city"
                className="text-sm font-semibold text-[#333333]"
              >
                {addressLabels.city}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  placeholder={`Input ${addressLabels.city}`}
                  className={`block w-full p-4 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary ${
                    errors.city ? "border-red-500" : ""
                  }`}
                  {...register("city", { required: true })}
                />
                {errors.city && (
                  <span className="text-red-500">{addressLabels.city} is required</span>
                )}
              </div>
            </div>
            <div className="w-[600px] ">
              <label
                htmlFor="additional_requirements"
                className="text-sm font-semibold text-[#333333] "
              >
                Additional Requirements
              </label>
              <textarea
                placeholder="Input Additional Requirements"
                className="block w-full p-4 text-black placeholder-[#A3A3A3] placeholder:font-normal transition-all duration-200 border border-greyneutral rounded-[10px] bg-white focus:outline-none focus:border-ngtryprimary focus:bg-white caret-ngtryprimary"
                {...register("additional_requirements")}
              />
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
