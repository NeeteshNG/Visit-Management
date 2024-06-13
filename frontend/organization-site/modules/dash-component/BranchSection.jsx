import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import {
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
  BranchIcon,
} from "@/public/icons/icons";

import { getOrgBranchList } from "../data/dash_service";

export default function BranchSection({ userId }) {
  const router = useRouter();
  const [allBranches, setAllBranches] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    getOrgBranchList({
      toast: toast,
      setBranches: setAllBranches,
      searchtext: "",
      enddate: "",
      id: userId,
      startdate: "",
    });
  }, []);

  return (
    <>
      {allBranches === null ? (
        <div></div>
      ) : (
        <div
          className={`flex flex-col lg:w-full w-[388px] ${
            isExpanded === false
              ? "h-[323.09px]"
              : "h-[65.94px]  justify-center"
          } p-2 rounded-xl bg-[#0FBC88] mt-10`}
        >
          <div className="flex text-white justify-between w-full items-center p-5">
            <div className="flex gap-3 items-center ">
              <BranchIcon className="text-2xl" />

              <p className="font-medium text-base font-inter">
                Total Branches{" "}
              </p>
              <p className="font-bold text-2xl leading-8">
                {allBranches.count}
              </p>
            </div>
            <div
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            >
              {isExpanded === false ? (
                <MinusIcon className="text-2xl cursor-pointer" />
              ) : (
                <PlusIcon className="text-2xl cursor-pointer" />
              )}
            </div>
          </div>
          <div
            className={`w-full ${
              isExpanded === false ? "h-[254px] block" : "h-0 hidden"
            } bg-white p-2 flex flex-col justify-between rounded-xl`}
          >
            {allBranches.results.length <= 0 ? (
              <div className="flex flex-col h-full font-bold text-sm leading-5  items-center justify-center">
                <p>No Branches</p>
              </div>
            ) : (
              <>
                <table className="min-w-full divide-y divide-gray-300 ">
                  <thead>
                    <tr>
                      <th className="py-3 px-2 text-start font-bold text-xs font-inter text-[#A3A3A3]">
                        Branch Name
                      </th>
                      <th className="py-3 px-2 text-start font-bold text-xs font-inter text-[#A3A3A3]">
                        Branch No.
                      </th>
                      <th className="py-3 px-2 text-start font-bold text-xs font-inter text-[#A3A3A3]">
                        Address
                      </th>
                    </tr>
                  </thead>
                  <tbody className="py-20">
                    {allBranches.results.slice(0, 4).map((row, index) => (
                      <tr key={index}>
                        <td className="py-2 px-2 font-bold text-xs font-inter">
                          {row.name}
                        </td>
                        <td className="py-2 px-2 font-bold text-xs font-inter">
                          {row.branch_no}
                        </td>
                        <td className="py-2 px-2 font-normal text-xs font-inter">
                          {row.district}
                        </td>
                        <td className="py-2 px-2 "></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div
                  className="flex gap-3 p-2 pt-3 items-center cursor-pointer"
                  onClick={() => {
                    router.push("/branch-list");
                  }}
                >
                  <p className="text-primaryblue font-bold text-sm leading-5 ">
                    Show All{" "}
                  </p>
                  <ArrowRightIcon className="text-sm text-primaryblue" />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
