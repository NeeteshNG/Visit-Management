import React from "react";
import { useRouter } from "next/navigation";

export default function ManualEntry() {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-r from-ngtrylime/20 to-ngtrysage/20 p-5 font-inter lg:w-full w-[948px] h-[185px] rounded-xl mt-8 shadow-3xl flex justify-between items-center border border-ngtrysage/30">
      <div>
        <p className="font-bold text-2xl leading-9 text-ngtrydeep">Manual Visitor Check-in</p>
        <p className="font-normal text-base leading-6 w-[540px] text-ngtrysage">
          Please fill your required details for visitor check-in.
        </p>
        <button
          className="h-[36px] w-[124px] rounded-xl border-ngtryprimary border mt-3 text-ngtryprimary hover:bg-ngtryprimary hover:text-white transition-colors font-semibold"
          onClick={() => router.push("/manual-entry")}
        >
          Fill Manually
        </button>
      </div>
      <img src="/mannual entry.png" alt="Manual Entry Image" />
    </div>
  );
}
