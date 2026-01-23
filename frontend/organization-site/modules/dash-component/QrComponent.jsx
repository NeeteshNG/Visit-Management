import React from "react";
import { saveAs } from "file-saver";

import { baseurl } from "../apiurl";
import { DownloadBlueIcon } from "@/public/icons/icons";
import { NGtryLogo } from "@/public/logo/logos";

export default function QrComponent({ user, isLoading, isError }) {
  const handleDownload = () => {
    if (user?.qr) {
      saveAs(`${baseurl}${user.qr}`);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !user) {
    return <div>Error loading user data</div>;
  }

  return (
    <div className="w-full shadow-3xl bg-white rounded-lg h-[599px] flex items-center justify-center flex-col p-4 border border-ngtrysage/20">
      <NGtryLogo />
      <div className="text-center border-ngtryprimary w-[240px] mt-9 h-[302px] border-[8px] rounded-2xl p-4">
        <p className="font-bold text-ngtrydeep text-2xl font-inter">Scan the QR</p>
        <div className="flex items-center justify-center">
          <img
            src={user.qr ? `${baseurl}${user.qr}` : "/user-avatar.png"}
            alt="User QR Code"
            height={180}
            width={180}
          />
        </div>
        <div className="terminal-no text-center mt-[-20px] text-ngtrydeep">
          <p className="terminal-number font-bold text-ngtryprimary mt-3 text-base font-inter">
            {user.id}
          </p>
          <p className="text-ngtrydeep text-base font-inter">Terminal No.</p>
        </div>
      </div>
      <p className="font-bold text-3xl font-inter mt-4 text-ngtrydeep">{user.full_name}</p>
      <p className="font-normal text-base font-inter mt-2 text-center text-ngtrysage">
        {user.address || ""}
      </p>
      <button
        className="bg-ngtryprimary gap-3 border flex items-center justify-center border-ngtryprimary rounded-xl mt-4 w-[182px] h-[48px] text-white hover:bg-ngtrydeep transition-colors"
        onClick={handleDownload}
      >
        Download QR <DownloadBlueIcon className="text-2xl" />
      </button>
    </div>
  );
}
