import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularDays({ days }) {
  return (
    <div className="">
      <CircularProgressbarWithChildren
        value={days}
        className="h-24 text-white"
        styles={buildStyles({
          rotation: 0.15,
          strokeLinecap: "butt",
          textSize: "16px",
          pathTransitionDuration: 0.5,
          pathColor: `#D4DE95`,
          textColor: "#FFFFFF",
          trailColor: "rgba(186, 192, 149, 0.3)",
          backgroundColor: "#636B2F",
        })}
      >
        {" "}
        <div className="flex items-center justify-center flex-col text-xs text-white">
          <p className="text-base">{days}</p>
          <p>Days Left</p>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}
