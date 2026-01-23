import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

import {
  ShowIcon,
  SearchIcon,
  DoneGreenIcon,
  CrossRedIcon,
  NextIcon,
  PreviousIcon,
} from "@/public/icons/icons";

import { getVisitors } from "../data/dash_service";
import { handleVisitorApproval } from "../data/branch_service";

export default function VisitorWaiting() {
  const [waitingVisitor, setWaitingVisitors] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 5;

  const getWatingVisitorsFunction = (searchText = "", page = 1) => {
    getVisitors({
      toast: toast,
      setVisitors: (data) => {
        setWaitingVisitors(data);
        setTotalPages(Math.ceil(data.count / perPage));
      },
      searchtext: searchText,
      isApproved: "False",
      page: page,
      perPage: perPage,
    });
  };

  useEffect(() => {
    getWatingVisitorsFunction();
  }, []);

  function formatTimestamp(timestamp) {
    const dateObject = new Date(timestamp);

    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return dateObject.toLocaleString("en-US", options);
  }

  const handleSearch = (e) => {
    getWatingVisitorsFunction(e, currentPage);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      getWatingVisitorsFunction("", page);
    }
  };

  const visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="lg:w-[67%] w-[630px] h-[428px] rounded-xl flex flex-col justify-between p-7 shadow-3xl bg-white font-inter border border-ngtrysage/20">
      <div>
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl leading-9 text-ngtrydeep">Waiting Visitor's</h1>
          <div className="relative">
            <input
              type="text"
              className="border border-ngtrysage/50 p-4 rounded-xl h-[45px] w-[333px] focus:outline-none focus:border-ngtryprimary pl-10 transition-colors"
              placeholder="Search here..."
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
            <SearchIcon className="absolute text-xl left-3 top-1/2 transform -translate-y-1/2 text-ngtrysage" />
          </div>
        </div>
        {waitingVisitor === null ? (
          <div className="flex flex-col h-full font-bold text-sm leading-5 items-center justify-center text-ngtrysage">
            <p>Loading</p>
          </div>
        ) : (
          <>
            {waitingVisitor?.results?.length <= 0 ? (
              <div className="flex flex-col h-full font-bold text-sm leading-5 items-center justify-center text-ngtrysage">
                <p>No Visitors</p>
              </div>
            ) : (
              <>
                <table className="min-w-full divide-y divide-ngtrysage/30">
                  <thead>
                    <tr>
                      <th className="py-3 px-2 text-start font-bold text-xs font-inter text-ngtrysage">
                        SN
                      </th>
                      <th className="py-3 px-2 text-start font-bold text-xs font-inter text-ngtrysage">
                        Visitors
                      </th>
                      <th className="py-3 px-2 text-start font-bold text-xs font-inter text-ngtrysage">
                        Datetime
                      </th>
                      <th className="py-3 px-2 pl-[75px] text-start font-bold text-xs font-inter text-ngtrysage">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="py-20">
                    {waitingVisitor.results
                      .sort(
                        (a, b) =>
                          new Date(b.visited_at) - new Date(a.visited_at)
                      )
                      .map((row, index) => (
                        <tr key={index} className="hover:bg-ngtrylime/10 transition-colors">
                          <td className="py-2 px-2 font-bold text-xs font-inter text-ngtrydeep">
                            {index + 1 + (currentPage - 1) * perPage}
                          </td>
                          <td className="py-2 px-2 font-bold text-xs font-inter text-ngtrydeep">
                            {row.full_name}
                          </td>
                          <td className="py-2 px-2 font-normal text-xs font-inter text-ngtrysage">
                            {formatTimestamp(row.visited_at)}
                          </td>
                          <td className="py-2 px-2">
                            <div className="flex gap-3 items-end justify-end">
                              <Link
                                href={{
                                  pathname: "/visitor-details",
                                  query: {
                                    id: row.id,
                                  },
                                }}
                              >
                                <div className="rounded-lg h-[32px] w-[32px] flex cursor-pointer flex-col justify-center items-center border border-ngtrysage/50 hover:border-ngtryprimary transition-colors">
                                  <ShowIcon className="text-ngtrysage text-2xl" />
                                </div>
                              </Link>
                              <div
                                className="rounded-lg h-[32px] w-[32px] cursor-pointer flex flex-col justify-center items-center bg-ngtrylime/30 hover:bg-ngtrylime/50 transition-colors"
                                onClick={() => {
                                  handleVisitorApproval({
                                    toast: toast,
                                    id: row.id,
                                    isApproved: true,
                                  });
                                  getWatingVisitorsFunction("", currentPage);
                                }}
                              >
                                <DoneGreenIcon className="text-ngtryprimary text-2xl" />
                              </div>
                              <div
                                className="rounded-lg h-[32px] w-[32px] flex flex-col cursor-pointer justify-center items-center bg-[#FFE4E4] hover:bg-[#FFCCCC] transition-colors"
                                onClick={() => {
                                  handleVisitorApproval({
                                    toast: toast,
                                    id: row.id,
                                    isApproved: false,
                                  });
                                  getWatingVisitorsFunction("", currentPage);
                                }}
                              >
                                <CrossRedIcon className="text-[#FF3A3A] text-2xl" />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </>
            )}
          </>
        )}
      </div>
      <div className="flex items-end mt-5 justify-end">
        <div className="flex space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-ngtrysage hover:text-ngtryprimary transition-colors disabled:opacity-50"
          >
            <PreviousIcon />
          </button>

          {visiblePages.map((page) => (
            <button
              key={page}
              className={`w-[24px] h-[24px] flex items-center justify-center rounded-md text-xs font-inter font-normal transition-colors ${
                currentPage === page
                  ? "bg-ngtryprimary text-white"
                  : "text-ngtrysage hover:text-ngtryprimary"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="text-ngtrysage hover:text-ngtryprimary transition-colors disabled:opacity-50"
          >
            <NextIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
