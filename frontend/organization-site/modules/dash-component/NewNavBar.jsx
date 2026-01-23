import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { showLeftSidebarAtom } from "@/jotai/ui-atoms";

import { MenuIcon, NotificationIcon, SearchIcon } from "@/public/icons/icons";
import { baseurl } from "../apiurl";
import { allPagePaths, urlCategories } from "../data/organization_types_nature";
import { useKycOrgProfile } from "../hooks/useKycOrgProfile";
import { useNotificationCount } from "../hooks/useNotificationCount";

const NewNavBar = ({ user }) => {
  const router = useRouter();
  const pageFullUrl = usePathname();
  const [showLeftSidebar, setShowLeftSidebar] = useAtom(showLeftSidebarAtom);

  const [searchTerm, setSearchTerm] = useState("");
  const [objects] = useState(allPagePaths);

  // Use React Query hooks for caching
  const { data: kycorg } = useKycOrgProfile(user?.id);
  const { data: notificationCount } = useNotificationCount(user?.id);

  const filteredObjects = objects.filter((obj) =>
    obj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div className="flex lg:w-full w-[1367px] mt-4 sm:p-7 p-4 md:pr-9 pr-0 justify-between bg-white border-b border-ngtrysage/20">
      <div className="flex gap-4 items-center">
        <MenuIcon
          className="text-3xl cursor-pointer text-ngtryprimary hover:text-ngtrydeep transition-colors"
          onClick={() => {
            setShowLeftSidebar(!showLeftSidebar);
          }}
        />
        <div className="flex flex-col">
          <p className="text-ngtrysage font-inter text-xs font-normal">
            Page / <span className="text-ngtryprimary">{pageTitle}</span>
          </p>
          <p className="font-bold text-base font-inter mt-1 text-ngtrydeep">{pageTitle}</p>
        </div>
      </div>
      <div className="flex items-center md:gap-6 gap-0 relative">
        <div className="relative">
          <form autoComplete="off">
            <input
              type="search"
              autoComplete="new-password"
              className="border border-ngtrysage/50 p-4 rounded-xl h-[45px] w-[333px] focus:outline-none focus:border-ngtryprimary pl-10 transition-colors"
              placeholder="Search here..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          <SearchIcon className="absolute text-xl left-3 top-1/2 transform -translate-y-1/2 text-ngtrysage" />
          <div
            className={`${
              searchTerm === "" ? "hidden" : "absolute"
            } z-50 p-7 bg-white shadow-3xl rounded-lg h-max w-[333px] mt-2 border border-ngtrysage/20`}
          >
            {filteredObjects.map((e, i) => {
              return (
                <p
                  key={i}
                  className="font-inter font-normal text-sm py-2 cursor-pointer hover:text-ngtryprimary transition-colors"
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
            <NotificationIcon className="text-3xl text-ngtryprimary hover:text-ngtrydeep transition-colors" />
            <div className="h-4 w-4 absolute -top-1 -right-1 flex items-center justify-center rounded-full bg-ngtrylime text-ngtrydeep border-2 border-white">
              <span style={{ fontSize: "10px" }} className="font-bold">
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
          <p className="font-bold font-inter text-base text-ngtrydeep">{user?.full_name}</p>
          <div className="h-[40px] w-[40px] rounded-full ring-2 ring-ngtryprimary ring-offset-2">
            <img
              src={
                !kycorg || !kycorg.results || kycorg.results.length === 0 || !kycorg.results[0].logo
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
