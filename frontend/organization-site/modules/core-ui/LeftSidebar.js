"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
import { showLeftSidebarAtom } from "@/jotai/ui-atoms";
import { toast } from "react-toastify";

import { NextIcon, LogoutIcon, SettingIcon } from "@/public/icons/icons";
import { EpassLogo } from "@/public/logo/logos";

import PreminumPlan from "../organization/PreminumPlan";
import ErrorDialog from "./ErrorDialog";
import { onLogout } from "../data/dash_service";
import { leftSideBarMenus } from "../data/organization_types_nature";

const LeftSidebar = () => {
  const [open, setOpen] = useState(false);
  const [showLeftSidebar] = useAtom(showLeftSidebarAtom);
  const router = useRouter();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubMenuToggle = (menuId) => {
    setIsSubMenuOpen((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  return (
    <AnimatePresence>
      {showLeftSidebar && (
        <motion.section
          id="container"
          className="min-w-[256px] h-full  w-[256px] pt-6  flex  overflow-y-auto pb-3 flex-col items-start justify-start  bg-white text-black fixed left-0 top-0 z-10 "
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.2 }}
        >
          <ErrorDialog
            handleClose={handleClose}
            onClick={() => onLogout({ toast: toast, router: router })}
            open={open}
            text={"logout?"}
          />
          <div className="flex justify-between">
            <section className="flex items-center justify-center px-4">
              <Link href="/dash">
                <EpassLogo />
              </Link>
            </section>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full px-4">
              {leftSideBarMenus.map((menuItem) => (
                <React.Fragment key={menuItem.id}>
                  {menuItem.subMenus ? (
                    <div
                      className="px-2 py-4 flex cursor-pointer items-center gap-3 h-[40px] rounded-xl w-full "
                      onClick={() => handleSubMenuToggle(menuItem.id)}
                    >
                      <menuItem.icon className="text-2xl" />
                      <p className="font-inter font-bold text-sm">
                        {menuItem.menu}
                      </p>
                      <span>{isSubMenuOpen[menuItem.id] ? "▲" : "▼"}</span>
                    </div>
                  ) : (
                    <div
                      className="px-2 py-4 flex cursor-pointer items-center gap-3 h-[40px] rounded-xl w-full "
                      onClick={() => router.push(menuItem.path)}
                    >
                      <menuItem.icon className="text-2xl" />
                      <p className="font-inter font-bold text-sm">
                        {menuItem.menu}
                      </p>
                    </div>
                  )}
                  {isSubMenuOpen[menuItem.id] && menuItem.subMenus && (
                    <div className="flex flex-col pl-8 -mt-2 space-y-2">
                      {menuItem.subMenus.map((subMenuItem) => (
                        <div
                          key={subMenuItem.id}
                          className="flex gap-3 items-center justify-between text-neutralBlack"
                          onClick={() => router.push(subMenuItem.path)}
                        >
                          <p className="text-xs font-bold font-inter text-neutralBlack cursor-pointer">
                            {subMenuItem.menu}
                          </p>
                          <NextIcon className="text-neutralBlack text-xl" />
                        </div>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="h-[1px] w-full bg-[#A3A3A3] my-4"></div>
            <div className="flex items-center w-full h-[21px] px-6 justify-between">
              <div
                className="flex gap-3 items-center text-neutralBlack cursor-pointer"
                onClick={() => {
                  router.push("/settings");
                }}
              >
                <SettingIcon className="text-xl" />
                <p className="text-sm font-bold font-inter ">Settings</p>
              </div>
            </div>
            <div className="flex items-center w-full h-[21px] px-6 mt-6 justify-between">
              <div
                className="flex gap-3 items-center text-neutralBlack cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <LogoutIcon className="text-xl" />
                <p className="text-sm font-bold font-inter ">Logout</p>
              </div>
            </div>
          </div>
          <PreminumPlan />
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default LeftSidebar;
