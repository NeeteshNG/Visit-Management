"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsNavigating(false);
    setProgress(100);

    const timer = setTimeout(() => {
      setProgress(0);
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleStart = () => {
      setIsNavigating(true);
      setProgress(30);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return prev;
          }
          return prev + 10;
        });
      }, 100);

      return () => clearInterval(interval);
    };

    const handleClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.href && !target.href.startsWith("#")) {
        const url = new URL(target.href);
        if (url.pathname !== pathname) {
          handleStart();
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return (
    <AnimatePresence>
      {(isNavigating || progress > 0) && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 h-1 bg-ngtrylime/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="h-full bg-ngtrylime shadow-lg shadow-ngtrylime/50"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
