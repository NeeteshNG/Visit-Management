"use client";

import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserData } from "@/modules/hooks/useUserData";
import LoadingComponent from "@/modules/core-ui/LoadingComponent";
import LeftSidebar from "@/modules/core-ui/LeftSidebar";
import NewNavBar from "@/modules/dash-component/NewNavBar";
import NavigationProgress from "@/modules/core-ui/NavigationProgress";
import { useAtom } from "jotai";
import { showLeftSidebarAtom } from "@/jotai/ui-atoms";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [showLeftSidebar] = useAtom(showLeftSidebarAtom);

  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useUserData();

  useEffect(() => {
    if (!isUserLoading && isUserError) {
      router.push("/login");
    }
  }, [isUserLoading, isUserError, user?.is_kyc_verified, router]);

  if (isUserLoading) {
    return <LoadingComponent />;
  }

  if (isUserLoading && isUserError) {
    return router.push("/login");
  }

  return (
    <div className="flex">
      <Suspense fallback={null}>
        <NavigationProgress />
      </Suspense>
      <LeftSidebar />
      <section
        className={`w-full pl-4 ${
          showLeftSidebar ? "ml-[256px]" : "ml-0"
        }  bg-gradient-to-br from-white to-ngtrylime/5`}
      >
        <NewNavBar user={user} />
        <main className="px-7 my-1 ">{children}</main>
      </section>
    </div>
  );
}
