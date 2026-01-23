"use client";


import {
  CgOrganisationIcon,
  CiCalendarIcon,
  CiFlag1Icon,
  CiMailIcon,
  FaFacebookIcon,
  FaWhatsappIcon,
  FaWordpressIcon,
  IoLocationOutlineIcon,
  MdAppRegistrationIcon,
  MdEditIcon,
  MdLocationOnIcon,
  MdLocationSearchingIcon,
  MdOutlineLocalPhoneIcon,
  MdOutlinePersonIcon,
  MdPanoramaWideAngleIcon,
  MdPhoneAndroidIcon,
  MdShareLocationIcon,
  PiBagLightIcon,
  RxCross2Icon,
  TbArrowBigRightIcon,
  TiLocationArrowOutlineIcon,
} from "@/modules/icons/SvgIcons";
import AdsComponent from "@/modules/dash-component/AdsComponent";
import QrComponent from "@/modules/dash-component/QrComponent";
import { useState } from "react";
import LineComponent from "@/modules/kyc-component/LineComponent";
import Image from "next/image";
import { useUserData } from "@/modules/hooks/useUserData";
import { baseurl } from "@/modules/apiurl";

import { useRouter } from "next/navigation";
import { useKycOrgProfile } from "@/modules/hooks/useKycOrgProfile";

export default function Profile() {
  const router = useRouter();
  const [viewkyc, setviewkyc] = useState(false);
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useUserData();

  // Use React Query hook for caching
  const { data: kycorg } = useKycOrgProfile(user?.id);

  const convertDate = (dateString) => {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return formattedDate;
  };
  return (
    <div>
      {user === null || isUserLoading ? (
        <></>
      ) : (
        <div className="flex justify-between">
          <section className="lg:w-[73%] w-[948px] ">
            <div className=" w-full rounded-xl bg-white shadow-lg mt-3 pb-10">
              <div className="bg-gradient-to-r from-[#636B2F] to-[#3D4127] h-[90px] w-full rounded-t-xl"></div>
              <div className="flex    justify-between px-10">
                <div className="flex  gap-6">
                  <div className="w-[181px] h-[181px] flex items-center justify-center rounded-xl bg-[#F1FBFF] -mt-10">
                    <Image
                      src={
                        kycorg === null || kycorg.results.length === 0 || !kycorg.results[0].logo
                          ? "/user-avatar.png"
                          : `${baseurl}${kycorg.results[0].logo}`
                      }
                      alt="some"
                      className="object-cover"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="flex flex-col mt-4 gap-1">
                    <div className="flex gap-2 items-center">
                      <p className="font-inter font-normal text-2xl">
                        {user?.full_name}
                      </p>
                      {user.is_kyc_verified === true ? (
                        <Image
                          src="/verify.png"
                          alt=""
                          className="h-5"
                          width={20}
                          height={20}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <CiCalendarIcon className="text-[#A3A3A3]" />
                      <p className="text-sm font-normal text-[#898989] font-inter">
                        {convertDate(user?.otp_created_at)}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <IoLocationOutlineIcon className="text-[#A3A3A3]" />
                      <p className="text-sm font-normal text-[#898989] font-inter">
                        {user?.address === null ? "" : user?.address}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <MdOutlineLocalPhoneIcon className="text-[#A3A3A3]" />
                      <p className="text-sm font-normal text-[#898989] font-inter">
                        {user?.mobile_number}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <CiMailIcon className="text-[#A3A3A3]" />
                      <p className="text-sm font-normal text-[#898989] font-inter">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between mt-4">
                  <div
                    className="flex  gap-1 cursor-pointer items-center rounded-xl text-white justify-center w-[159px] h-[48px] bg-primaryblue"
                    onClick={() => {
                      router.push("/edit-profile");
                    }}
                  >
                    <MdEditIcon className="text-lg" />
                    <p className="font-normal font-inter text-base">
                      Edit Profile
                    </p>
                  </div>
                  {kycorg === null || kycorg.results.length === 0 ? (
                    <></>
                  ) : (
                    <>
                      {viewkyc === false ? (
                        <p
                          className="text-sm font-normal font-inter text-end  text-primaryblue cursor-pointer"
                          onClick={() => {
                            setviewkyc(true);
                          }}
                        >
                          View Kyc
                        </p>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </div>
              </div>
              {viewkyc === true ? (
                <div className=" w-full mt-8 px-10">
                  <div className="flex w-full items-center gap-2 justify-between ">
                    <div className="bg-[#F4F4F4] h-[1px] w-[88%]"></div>
                    <div
                      className="flex  items-center cursor-pointer"
                      onClick={() => {
                        setviewkyc(false);
                      }}
                    >
                      <RxCross2Icon className="text-[15px]" />
                      <p className="font-normal text-sm">Hide kyc</p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-8">
                    <div className="flex flex-col">
                      <p className="font-bold text-2xl font-inter">
                        Personal Information
                      </p>
                      <div className="mt-6 space-y-4">
                        <LineComponent
                          Icon={CgOrganisation}
                          subtext={user.organization_name}
                          text="Organization Name"
                        />
                        <LineComponent
                          Icon={CiCalendar}
                          subtext={kycorg.results[0].establishment_year}
                          text="Established year"
                        />
                        <LineComponent
                          Icon={MdAppRegistration}
                          subtext={kycorg.results[0].registration_number}
                          text="Registration number"
                        />
                        <LineComponent
                          Icon={MdPanoramaWideAngle}
                          subtext={kycorg.results[0].pan_number}
                          text="PAN / VAT number"
                        />
                        <LineComponent
                          Icon={PiBagLight}
                          subtext={user.organization_type}
                          text="Organization type"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold text-2xl font-inter">Address</p>
                      <div className="mt-6 space-y-4">
                        <LineComponent
                          Icon={CiFlag1}
                          subtext={kycorg.results[0].country}
                          text="Country"
                        />
                        <LineComponent
                          Icon={MdLocationSearching}
                          subtext={kycorg.results[0].state}
                          text="State / Province"
                        />
                        <LineComponent
                          Icon={MdShareLocation}
                          subtext={kycorg.results[0].district}
                          text="District"
                        />
                        <div className="flex gap-0 items-center">
                          <MdLocationOnIcon className="text-xl text-[#898989]" />
                          <p className="font-bold text-base font-inter text-[#898989]">
                            Municipality / Rural Municipality:
                          </p>
                          <p className="font-normal text-base font-inter text-[#898989]">
                            {kycorg.results[0].municipality.slice(0, 8)}...
                          </p>
                        </div>
                        {/* <LineComponent Icon={MdLocationOn} subtext={kycorg.municipality} text="Municipality / Rural Municipality"/> */}
                        <LineComponent
                          Icon={TbArrowBigRight}
                          subtext={kycorg.results[0].ward_no}
                          text="Ward"
                        />
                        <LineComponent
                          Icon={TiLocationArrowOutline}
                          subtext={kycorg.results[0].city_village_area}
                          text="Address"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-9">
                    <div className="flex flex-col">
                      <p className="font-bold text-2xl font-inter">Contact</p>
                      <div className="mt-6 space-y-4">
                        <LineComponent
                          Icon={MdOutlinePerson}
                          subtext={kycorg.results[0].contact_person_full_name}
                          text="Contact Person"
                        />
                        <LineComponent
                          Icon={MdOutlineLocalPhone}
                          subtext={kycorg.results[0].telephone_number}
                          text="Telephone No."
                        />
                        <LineComponent
                          Icon={MdPhoneAndroid}
                          subtext={kycorg.results[0].telephone_number}
                          text="Mobile No"
                        />
                        <LineComponent
                          Icon={FaWhatsapp}
                          subtext={kycorg.results[0].whatsapp_viber_number}
                          text="WhatsApp / Viber"
                        />
                        <LineComponent
                          Icon={MdOutlineLocalPhone}
                          subtext={kycorg.results[0].secondary_number}
                          text="Alternative Contact No."
                        />
                        <LineComponent
                          Icon={CiMail}
                          subtext={user.email}
                          text="Email Address"
                        />

                        <LineComponent
                          Icon={FaWordpress}
                          subtext={kycorg.results[0].website}
                          text="Website"
                        />
                        <LineComponent
                          Icon={FaFacebook}
                          subtext={kycorg.results[0].social_media_links[0].link}
                          text="Social Media Link"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-[40%]">
                      <p className="font-bold text-2xl font-inter">Document</p>

                      <div className="flex flex-col">
                        {kycorg.results[0].registration_certificate ? (
                          <Image
                            src={`${baseurl}${kycorg.results[0].registration_certificate}`}
                            width={150}
                            height={150}
                            alt=""
                            className="object-contain my-2 h-[150px]"
                          />
                        ) : (
                          <div className="w-[150px] h-[150px] bg-gray-200 flex items-center justify-center my-2 rounded">
                            <span className="text-gray-500 text-sm">No document</span>
                          </div>
                        )}
                        <p className="font-bold text-sm text-[#898989]">
                          Registration Certificate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </section>
          <section className="flex m-2 flex-col lg:w-[25%] w-[388px]">
            <QrComponent
              user={user}
              isLoading={isUserLoading}
              isError={isUserError}
            />

            <AdsComponent />
          </section>
        </div>
      )}
    </div>
  );
}
