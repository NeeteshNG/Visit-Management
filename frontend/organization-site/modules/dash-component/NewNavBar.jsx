import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAtom } from "jotai";
import { showLeftSidebarAtom } from "@/jotai/ui-atoms";

import { MenuIcon, NotificationIcon, SearchIcon } from "@/public/icons/icons";
import { baseurl } from "../apiurl";
import { allPagePaths, urlCategories } from "../data/organization_types_nature";
import { getKycOrgProfile, getNotificationsCount } from "../data/dash_service";

const NewNavBar = ({ user }) => {
  const router = useRouter();
  const pageFullUrl = usePathname();
  const [showLeftSidebar, setShowLeftSidebar] = useAtom(showLeftSidebarAtom);

  const [searchTerm, setSearchTerm] = useState("");
  const [objects] = useState(allPagePaths);

  const [notificationCount, setNotificationCount] = useState(null);
  const filteredObjects = objects.filter((obj) =>
    obj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [kycorg, setkycorg] = useState(null);

  useEffect(() => {
    if (user === null) {
    } else {
      getKycOrgProfile({ toast: toast, setKycOrg: setkycorg, id: user.id });
      getNotificationsCount({
        toast: toast,
        id: user.id,
        setnotificationscount: setNotificationCount,
      });
    }
  }, [user]);

  const getCategoryTitle = (url) => {
    for (const category of urlCategories) {
      if (category.urls.includes(url)) {
        return category.title;
      }
    }
    return "Dashboard";
  };

  const pageTitle = getCategoryTitle(pageFullUrl);

  return (
    <div className="flex lg:w-full w-[1367px] mt-4 sm:p-7 p-4 md:pr-9 pr-0 justify-between">
      <div className="flex gap-4 items-center">
        <MenuIcon
          className="text-3xl cursor-pointer"
          onClick={() => {
            setShowLeftSidebar(!showLeftSidebar);
          }}
        />
        <div className="flex flex-col">
          <p className="text-[#A0AEC0] font-inter text-xs font-normal">
            Page / <span className="text-[#2D3748] ">{pageTitle}</span>
          </p>
          <p className="font-bold text-base font-inter mt-1">{pageTitle}</p>
        </div>
      </div>
      <div className="flex items-center md:gap-6 gap-0 relative">
        <div className="relative">
          <form autoComplete="off">
            <input
              type="search"
              autoComplete="new-password"
              className="border  border-[#898989] p-4 rounded-xl h-[45px] w-[333px]   focus:outline-none pl-10"
              placeholder="Search here..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          <SearchIcon className="absolute text-xl left-3 top-1/2  transform -translate-y-1/2" />
          <div
            className={`${
              searchTerm === "" ? "hidden" : "absolute"
            } z-50 p-7 bg-white shadow-3xl rounded-lg h-max w-[333px] mt-2`}
          >
            {filteredObjects.map((e, i) => {
              return (
                <p
                  key={i}
                  className="font-inter font-normal text-sm py-2 cursor-pointer"
                  onClick={() => {
                    router.push(e.path);
                    setSearchTerm("");
                  }}
                >
                  {e.name}
                </p>
              );
            })}
          </div>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => {
            router.push("/notifications");
          }}
        >
          <div className="relative">
            <NotificationIcon className="text-3xl" />
            <div className="h-3 w-3 absolute top-1 right-1 flex items-center justify-center rounded-full bg-red-500 text-white">
              <span style={{ fontSize: "10px" }}>
                {notificationCount ? notificationCount?.count : 0}
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            router.push("/profile");
          }}
        >
          <p className="font-bold font-inter text-base">{user?.full_name}</p>
          <div className="h-[40px] w-[40px] rounded-full">
            <img
              src={
                kycorg === null || kycorg.results.length === 0
                  ? "/user-avatar.png"
                  : `${baseurl}${kycorg.results[0].logo}`
              }
              alt="Organization Logo"
              className="h-[40px] w-[40px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNavBar;
