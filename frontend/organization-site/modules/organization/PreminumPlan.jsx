import React from "react";

import { useSubscriptionInfo } from "../hooks/useSubscriptionInfo";
import CircularDays from "../dash-component/CircularDays";

export default function PreminumPlan() {
  const { data: subscriptionInfo } = useSubscriptionInfo();

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return dateObject.toLocaleString("en-US", options);
  };

  const calculateDaysDifference = (dateString1, dateString2) => {
    const today = new Date();
    const date1 = formatDate(today);
    const date2 = formatDate(dateString2);

    const startDate = new Date(date1);
    const endDate = new Date(date2);

    const differenceInMilliseconds = endDate - startDate;

    const daysLeft = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    return daysLeft;
  };

  return (
    <>
      {!subscriptionInfo ? (
        <></>
      ) : (
        <>
          <div className="flex flex-col gap-4 px-5 mt-[10%] w-full">
            <p className="text-ngtrylime font-bold font-inter text-sm">
              Subscription Plan
            </p>
            {subscriptionInfo.length <= 0 ? (
              <></>
            ) : (
              <div className="flex items-center flex-col p-5 w-full rounded-xl bg-ngtrysage/20 border border-ngtrysage/30">
                <CircularDays
                  days={calculateDaysDifference(
                    subscriptionInfo[0].start_subscription,
                    subscriptionInfo[0].end_subscription
                  )}
                />
                <p className="text-white text-xs font-normal mt-3">
                  Renew Date: {formatDate(subscriptionInfo[0].start_subscription)}
                </p>
                <p className="text-white text-xs font-normal">
                  Expiry Date:{formatDate(subscriptionInfo[0].end_subscription)}
                </p>
                <button className="bg-ngtrylime text-ngtrydeep font-bold text-xs rounded-xl w-full mt-2 h-[35px] hover:bg-ngtrysage transition-colors">
                  Renew Now
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
