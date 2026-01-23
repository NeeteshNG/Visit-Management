"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
import { showLeftSidebarAtom } from "@/jotai/ui-atoms";
import { toast } from "react-toastify";

import { NextIcon, LogoutIcon, SettingIcon } from "@/public/icons/icons";
import { NGtryLogo } from "@/public/logo/logos";

import PreminumPlan from "../organization/PreminumPlan";
import ErrorDialog from "./ErrorDialog";
import { onLogout } from "../data/dash_service";
import { leftSideBarMenus } from "../data/organization_types_nature";

const LeftSidebar = () => {
  const [open, setOpen] = useState(false);
  const [showLeftSidebar] = useAtom(showLeftSidebarAtom);
  const router = useRouter();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const [prefetchedRoutes, setPrefetchedRoutes] = useState(new Set());

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubMenuToggle = (menuId) => {
    setIsSubMenuOpen((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  const handlePrefetch = useCallback((path) => {
    if (!prefetchedRoutes.has(path)) {
      router.prefetch(path);
      setPrefetchedRoutes((prev) => new Set([...prev, path]));
    }
  }, [router, prefetchedRoutes]);

  return (
    <AnimatePresence>
      {showLeftSidebar && (
        <motion.section
          id="container"
          className="min-w-[256px] h-screen w-[256px] flex overflow-y-auto flex-col bg-gradient-to-b from-ngtrydeep to-ngtryprimary text-white fixed left-0 top-0 z-10 shadow-xl"
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

          {/* Logo Section - Full width white header */}
          <div className="bg-white py-4 px-5 flex items-center justify-center">
            <Link href="/dash" prefetch={true} className="block">
              <NGtryLogo width={150} height={55} />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-3 overflow-y-auto">
            <ul className="space-y-1">
              {leftSideBarMenus.map((menuItem) => (
                <li key={menuItem.id}>
                  {menuItem.subMenus ? (
                    <>
                      <button
                        className="w-full px-3 py-3 flex items-center justify-between rounded-lg hover:bg-ngtrysage/20 transition-colors"
                        onClick={() => handleSubMenuToggle(menuItem.id)}
                        onMouseEnter={() => {
                          menuItem.subMenus.forEach((sub) => handlePrefetch(sub.path));
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <menuItem.icon className="w-5 h-5 text-ngtrylime" />
                          <span className="font-inter font-semibold text-sm text-white">
                            {menuItem.menu}
                          </span>
                        </div>
                        <span className="text-ngtrysage text-xs">
                          {isSubMenuOpen[menuItem.id] ? "▲" : "▼"}
                        </span>
                      </button>
                      {isSubMenuOpen[menuItem.id] && (
                        <ul className="ml-4 mt-1 space-y-1 border-l-2 border-ngtrysage/30">
                          {menuItem.subMenus.map((subMenuItem) => (
                            <li key={subMenuItem.id}>
                              <Link
                                href={subMenuItem.path}
                                prefetch={true}
                                className="flex items-center gap-2 pl-4 pr-3 py-2 text-white/80 hover:text-ngtrylime hover:bg-ngtrysage/10 rounded-r-lg transition-colors"
                                onMouseEnter={() => handlePrefetch(subMenuItem.path)}
                              >
                                <NextIcon className="w-3 h-3 text-ngtrysage" />
                                <span className="text-xs font-medium font-inter">
                                  {subMenuItem.menu}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={menuItem.path}
                      prefetch={true}
                      className="w-full px-3 py-3 flex items-center gap-3 rounded-lg hover:bg-ngtrysage/20 transition-colors"
                      onMouseEnter={() => handlePrefetch(menuItem.path)}
                    >
                      <menuItem.icon className="w-5 h-5 text-ngtrylime" />
                      <span className="font-inter font-semibold text-sm text-white">
                        {menuItem.menu}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto border-t border-ngtrysage/30">
            <div className="px-3 py-4 space-y-1">
              <Link
                href="/settings"
                prefetch={true}
                className="w-full px-3 py-3 flex items-center gap-3 rounded-lg hover:bg-ngtrysage/20 transition-colors"
                onMouseEnter={() => handlePrefetch("/settings")}
              >
                <SettingIcon className="w-5 h-5 text-ngtrylime" />
                <span className="text-sm font-semibold font-inter text-white">Settings</span>
              </Link>
              <button
                className="w-full px-3 py-3 flex items-center gap-3 rounded-lg hover:bg-ngtrysage/20 transition-colors"
                onClick={() => setOpen(true)}
              >
                <LogoutIcon className="w-5 h-5 text-ngtrylime" />
                <span className="text-sm font-semibold font-inter text-white">Logout</span>
              </button>
            </div>
            <PreminumPlan />
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default LeftSidebar;
