"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";

import { ArrowRightIcon } from "@/public/icons/icons";

import { useUserData } from "@/modules/hooks/useUserData";
import { dashboardFeatures } from "@/modules/data/organization_types_nature";
import KycSection from "@/modules/dash-component/KycSection";
import MannualEntry from "@/modules/dash-component/MannualEntry";
import RecentVisitor from "@/modules/dash-component/RecentVisitor";
import VisitorWaiting from "@/modules/dash-component/VisitorWaiting";
import NewVisitors from "@/modules/dash-component/NewVisitors";
import PercentageSection from "@/modules/dash-component/PercentageSection";
import LineGraphSection from "@/modules/dash-component/LineGraphSection";
import BranchSection from "@/modules/dash-component/BranchSection";
import AdsComponent from "@/modules/dash-component/AdsComponent";
import QrComponent from "@/modules/dash-component/QrComponent";

export default function Dash() {
  const router = useRouter();
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isError,
  } = useUserData();

  const features = useMemo(() => dashboardFeatures);

  const handleFeatureClick = (endpoint) => {
    router.push(endpoint);
  };

  return (
    <div>
      <div className="flex items-start justify-between gap-5">
        <section className="lg:w-[70%] w-[948px]">
          <div className="flex justify-between gap-2 mt-2 w-full">
            {features.map((item) => (
              <div
                key={item.id}
                className="w-[213px] h-[150px] cursor-pointer font-inter rounded-lg bg-white shadow-3xl p-6"
                onClick={() => handleFeatureClick(item.endpoint)}
              >
                <div className="bg-blue-100 p-2 rounded-full flex items-center justify-center h-[56px] w-[56px]">
                  <item.icon className="text-primaryblue text-4xl" />
                </div>
                <div className="flex justify-between mt-3 items-center">
                  <p
                    className={`text-sm font-inter font-medium ${
                      item.id === 1 ? "w-[55%]" : "w-[70%]"
                    }`}
                  >
                    {item.name}
                  </p>
                  <ArrowRightIcon className="text-xl text-primaryblue" />
                </div>
              </div>
            ))}
          </div>
          {user ? !user.is_kyc_verified && <KycSection /> : null}
          <MannualEntry />
          <div className="mt-10 flex justify-between w-full">
            <RecentVisitor />
            <VisitorWaiting />
          </div>
          <NewVisitors />
          <PercentageSection userId={user.id} />
          <LineGraphSection userId={user.id} />
        </section>
        <section className="flex m-2 flex-col lg:w-[25%] w-[388px]">
          <QrComponent
            user={user}
            isLoading={isUserLoading}
            isError={isError}
          />
          <BranchSection userId={user.id} />
          <AdsComponent />
        </section>
      </div>
      <div className="mt-20 bg-primaryblue h-[46px] w-full -mb-4 flex justify-center items-center">
        <p className="font-inter text-base font-medium text-white">
          © 2024 ePass. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
