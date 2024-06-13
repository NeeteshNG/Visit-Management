import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getVisitorsCount } from "../data/dash_service";

export default function PercentageSection({ userId }) {
  const [count, setcount] = useState(null);

  useEffect(() => {
    getVisitorsCount({ toast: toast, id: userId, setcount: setcount });
  }, []);

  return (
    <div className="flex lg:w-full w-[948px] mt-10 gap-2 justify-between">
      {count === null ? (
        <></>
      ) : (
        <>
          <div className="w-[213px] h-[92px] rounded-xl shadow-3xl p-5 border border-primaryblue bg-white">
            <div className="flex gap-5 items-center">
              <p className="text-2xl font-bold font-inter leading-8">
                {count.results.length <= 0 ? "0" : count.results[2].count}
              </p>
            </div>
            <p className="text-base font-medium leading-6 font-inter">
              Number of Visitors
            </p>
          </div>

          <div className="w-[213px] h-[92px] shadow-3xl rounded-xl p-5 border bg-white border-primarysky">
            <div className="flex gap-5 items-center">
              <p className="text-2xl font-bold font-inter leading-8">
                {count.results.length <= 0
                  ? "0"
                  : count.results[0].count + count.results[1].count}
              </p>
            </div>
            <p className="text-base font-medium leading-6 font-inter">
              Number of Visit
            </p>
          </div>
          <div className="w-[213px] h-[92px] shadow-3xl rounded-xl p-5 border bg-white border-[#FFAB1E]">
            <div className="flex gap-5 items-center">
              <p className="text-2xl font-bold font-inter leading-8">
                {count.results.length <= 0 ? "0" : count.results[0].count}
              </p>
            </div>
            <p className="text-base font-medium leading-6 font-inter">
              Manual Entry Visits
            </p>
          </div>
          <div className="w-[213px] h-[92px] shadow-3xl rounded-xl p-5 border bg-white border-[#0FBC88]">
            <div className="flex gap-5 items-center">
              <p className="text-2xl font-bold font-inter leading-8">
                {count.results.length <= 0 ? "0" : count.results[1].count}
              </p>
            </div>
            <p className="text-base font-medium leading-6 font-inter">
              QR code scan visits
            </p>
          </div>
        </>
      )}
    </div>
  );
}
