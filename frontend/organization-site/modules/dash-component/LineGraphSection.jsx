import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

import { filterreportgraph } from "../data/dash_service";

function convertDateFormat(inputDateString) {
  const originalDate = new Date(inputDateString);
  const year = originalDate.getFullYear();
  const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
  const day = originalDate.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function LineGraphSection({ userId }) {
  const today = new Date();
  const weekAgo = new Date(today);
  weekAgo.setDate(today.getDate() - 6); // 7 days including today

  const todayFormatted = convertDateFormat(today);
  const weekAgoFormatted = convertDateFormat(weekAgo);

  const [selectedDate, setSelectedDate] = useState(weekAgoFormatted);
  const [endselecteddate, setEndSelectedDate] = useState(todayFormatted);
  const [linedata, setData] = useState(null);

  useEffect(() => {
    filterreportgraph({
      toast: toast,
      id: userId,
      setdata: setData,
      startdate: weekAgoFormatted,
      enddate: todayFormatted,
    });
  }, []);

  const handleStartDateChange = (event) => {
    setSelectedDate(event.target.value);
    filterreportgraph({
      toast: toast,
      enddate: endselecteddate,
      id: userId,
      setdata: setData,
      startdate: event.target.value,
    });
  };

  const handleEndDateChange = (event) => {
    setEndSelectedDate(event.target.value);
    filterreportgraph({
      toast: toast,
      enddate: event.target.value,
      id: userId,
      setdata: setData,
      startdate: selectedDate,
    });
  };

  return (
    <div className="lg:w-full w-[958px] mt-10 shadow-3xl justify-between bg-white p-6">
      <h1 className="font-bold text-2xl leading-9 mb-3">Visitor Report</h1>
      <div className="flex gap-5 py-4">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="datepicker"
          >
            Start Date:
          </label>
          <input
            type="date"
            id="datepicker"
            value={selectedDate}
            pattern="\d{4}-\d{2}-\d{2}"
            onChange={handleStartDateChange}
            className="p-2 border w-[150px] rounded focus:outline-none focus:border-ngtryprimary"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="enddatepicker"
          >
            End Date:
          </label>
          <input
            type="date"
            id="enddatepicker"
            value={endselecteddate}
            pattern="\d{4}-\d{2}-\d{2}"
            onChange={handleEndDateChange}
            className="p-2 border w-[150px] rounded focus:outline-none focus:border-ngtryprimary"
          />
        </div>
      </div>
      {linedata === null ? (
        <div></div>
      ) : (
        <>
          {linedata.length <= 0 ? (
            <div>No data available</div>
          ) : (
            <Line
              data={{
                labels: linedata.map((data) => data.label),
                datasets: [
                  {
                    label: "Check In",
                    data: linedata.map((data) => data.check_in),
                    backgroundColor: "#636B2F",
                    borderColor: "#636B2F",
                  },
                  {
                    label: "Check Out",
                    data: linedata.map((data) => data.check_out),
                    backgroundColor: "#3D4127",
                    borderColor: "#3D4127",
                  },
                  {
                    label: "Total",
                    data: linedata.map((data) => data.totalvisit),
                    backgroundColor: "#D4DE95",
                    borderColor: "#BAC095",
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: "bottom",
                    title: {
                      font: {
                        size: 12,
                        weight: 700,
                      },
                    },
                    labels: {
                      padding: 9,
                      textAlign: "center",
                      usePointStyle: true,
                    },
                  },
                },
                elements: {
                  line: {
                    tension: 0.5,
                  },
                },
              }}
            />
          )}
        </>
      )}
    </div>
  );
}
