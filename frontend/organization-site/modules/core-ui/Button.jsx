import React from "react";

export default function DefaultButton({ text }) {
  return (
    <div>
      <button
        type="submit"
        className="inline-flex items-center bg-gradient-to-r from-[#BAC095]  to-[#636B2F] justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-xl bg-ngtryprimary focus:outline-none hover:bg-ngtrydeep focus:bg-ngtrydeep"
      >
        {text}
      </button>
    </div>
  );
}
