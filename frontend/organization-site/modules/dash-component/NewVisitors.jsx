import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

import {
  ShowIcon,
  SearchIcon,
  NextIcon,
  PreviousIcon,
  DownloadIcon,
} from "@/public/icons/icons";

import { handleDownloadVisitorsPdf, getVisitors } from "../data/dash_service";

export default function NewVisitors() {
  const showAdjacentPages = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [newVisitors, setNewVisitors] = useState(null);

  const getNewVisitorsFunction = (searchText = "", pageNumber = currentPage, perPage = 5) => {
    getVisitors({
      toast: toast,
      setVisitors: setNewVisitors,
      searchtext: searchText,
      isApproved: "True",
      page: pageNumber,
      perPage: perPage,
    });
  };

  useEffect(() => {
    getNewVisitorsFunction();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    getNewVisitorsFunction("", pageNumber, 5);
  };

  const totalPageCount = Math.ceil(newVisitors?.count / 5);
  const startPage = Math.max(currentPage - showAdjacentPages, 1);
  const endPage = Math.min(currentPage + showAdjacentPages, totalPageCount);
  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  const handlesearch = (e) => {
    getNewVisitorsFunction(e);
  };

  const convertDate = (dateString) => {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return formattedDate;
  };
  return (
    <div className="lg:w-full w-[958px] h-[438.25px]  mt-10 rounded-xl p-7  shadow-3xl bg-white font-inter">
      {newVisitors === null ? (
        <></>
      ) : (
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex justify-between">
              <h1 className="font-bold text-2xl leading-9 ">New Visitor</h1>
              <div className="flex gap-2 items-center">
                <div className="relative">
                  <input
                    type="text"
                    className="border  border-[#898989] p-4 rounded-xl h-[45px] w-[333px]  focus:outline-none pl-10"
                    placeholder="Search here..."
                    onChange={(e) => {
                      handlesearch(e.target.value);
                    }}
                  />
                  <SearchIcon className="absolute text-xl left-3 top-1/2  transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <p
                    className="font-bold font-inter text-xs "
                    onClick={() => {
                      handleDownloadVisitorsPdf({
                        toast: toast,
                      });
                    }}
                  >
                    Download PDF
                  </p>
                  <DownloadIcon />
                </div>
              </div>
            </div>
            {newVisitors.results.length === 0 ? (
              <div className="flex flex-col mt-5 h-full font-bold text-sm leading-5  items-center justify-center">
                <p>No Data</p>
              </div>
            ) : (
              <>
                <table className="min-w-full divide-y divide-gray-300 ">
                  <thead>
                    <tr>
                      <th className="py-3 px-2 text-start font-bold text-xs font-inter text-[#A3A3A3]">
                        SN
                      </th>
                      <th className="py-3 px-2 text-start font-bold text-xs font-inter text-[#A3A3A3]">
                        Date/Time
                      </th>
                      <th className="py-3 px-2 pl-4 text-start font-bold text-xs font-inter text-[#A3A3A3]">
                        Name
                      </th>
                      <th className="py-3 px-2 text-start font-bold text-xs font-inter text-[#A3A3A3]">
                        Address
                      </th>
                      <th className="py-3 px-2 text-start font-bold text-xs font-inter text-[#A3A3A3]">
                        Mobile No.
                      </th>
                      <th className="py-3 px-2 text-start font-bold text-xs font-inter text-[#A3A3A3]">
                        Email address
                      </th>

                      <th className="py-3 px-2 text-start font-bold text-xs font-inter text-[#A3A3A3]">
                        Purpose
                      </th>
                      <th className="py-3 px-2 text-start font-bold text-xs font-inter text-[#A3A3A3]"></th>
                    </tr>
                  </thead>
                  <tbody className="py-20">
                    {newVisitors.results
                      .sort(
                        (a, b) =>
                          new Date(b.visited_at) - new Date(a.visited_at)
                      )
                      .map((row, index) => (
                        <tr key={index}>
                          <td className="py-2 px-2 font-semibold text-xs font-inter text-greyScale">
                            {index + 1}
                          </td>
                          <td className="py-2 px-2 font-semibold text-xs font-inter w-[125px] text-greyScale">
                            {convertDate(row.visited_at)}
                          </td>
                          <td className="py-2 px-2 pl-4 font-semibold text-xs font-inter text-greyScale">
                            {row.full_name}
                          </td>
                          <td className="py-2 px-2 font-semibold text-xs font-inter text-greyScale">
                            {row?.visiting_from}
                          </td>
                          <td className="py-2 px-2 font-semibold text-xs font-inter text-greyScale">
                            {row?.mobile_number}
                          </td>
                          <td className="py-2 px-2 font-semibold text-xs font-inter text-greyScale">
                            <div className="flex gap-4 items-center">
                              {row?.email}
                            </div>
                          </td>

                          <td className="py-2 px-2 font-semibold text-xs font-inter">
                            {row.purpose}
                          </td>
                          <td>
                            {" "}
                            <Link
                              href={{
                                pathname: "/visitor-details",
                                query: {
                                  id: row.id,
                                },
                              }}
                            >
                              {" "}
                              <div className="rounded-lg my-2 h-[32px] w-[32px] flex flex-col justify-center items-center border border-[#898989]">
                                <ShowIcon className="text-[#898989] text-2xl" />
                              </div>
                            </Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
          <div className="flex items-end mt-5 justify-end">
            <div className="flex space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <PreviousIcon />
              </button>

              {visiblePages.map((page) => (
                <button
                  key={page}
                  className={`w-[24px] h-[24px] flex items-center justify-center rounded-md text-xs font-inter font-normal ${
                    currentPage === page
                      ? "bg-ngtrydeep text-white"
                      : "text-[#A3A3A3] text-xs font-normal font-inter"
                  } "
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPageCount}
              >
                <NextIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
