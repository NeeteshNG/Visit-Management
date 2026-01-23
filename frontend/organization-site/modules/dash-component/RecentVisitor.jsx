import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/public/icons/icons";
import { getVisitors } from "../data/dash_service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function RecentVisitor() {
  const router = useRouter();
  const [recentVisitors, setRecentVisitors] = useState(null);

  useEffect(() => {
    getVisitors({
      toast: toast,
      setVisitors: setRecentVisitors,
      searchtext: "",
      isApproved: "True",
    });
  }, []);

  const formatDateString = (inputDateString) => {
    const inputDate = new Date(inputDateString);
    const options = {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return inputDate.toLocaleString("en-US", options);
  };

  return (
    <div className="lg:w-[30%] w-[275px] h-[428px] p-6 shadow-3xl rounded-xl bg-white font-inter border border-ngtrysage/20">
      <h1 className="font-bold text-2xl leading-9 text-ngtrydeep">Recent Visitor</h1>
      {recentVisitors === null ? (
        <div></div>
      ) : (
        <>
          {recentVisitors.results.length <= 0 ? (
            <div className="flex flex-col h-full font-bold text-sm leading-5 items-center justify-center text-ngtrysage">
              <p>No Visitors</p>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-3 justify-between">
                {recentVisitors.results
                  .sort(
                    (a, b) => new Date(b.visited_at) - new Date(a.visited_at)
                  )
                  .slice(0, 4)
                  .map((profile, i) => {
                    return (
                      <div key={i} className="flex gap-3 mt-5 items-center hover:bg-ngtrylime/10 p-2 rounded-lg transition-colors cursor-pointer">
                        <img
                          src={"/user-avatar.png"}
                          alt="Organization Logo"
                          className="h-[40px] w-[40px] rounded-full object-cover ring-2 ring-ngtrysage/30"
                        />
                        <div className="flex flex-col">
                          <p className="font-bold text-sm leading-5 text-ngtrydeep">
                            {profile.full_name}
                          </p>
                          <p className="text-xs font-normal text-ngtrysage">
                            {formatDateString(profile.visited_at)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              {recentVisitors.results.length <= 3 ? (
                <></>
              ) : (
                <div className="flex gap-3 mt-10 items-center cursor-pointer group">
                  <p
                    className="text-ngtryprimary font-bold text-sm leading-5 group-hover:text-ngtrydeep transition-colors"
                    onClick={() => {
                      router.push("/visitor-list");
                    }}
                  >
                    Show All{" "}
                  </p>
                  <ArrowRightIcon className="text-sm text-ngtryprimary group-hover:text-ngtrydeep transition-colors" />
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
