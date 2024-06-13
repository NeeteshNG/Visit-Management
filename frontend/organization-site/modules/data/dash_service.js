import {
  allorgbranchesurl,
  baseurl,
  filtervisitorurl,
  getCustomersListUrl,
  getGuestListUrl,
  getMeetingListUrl,
  getadsbannerurl,
  getVisitorUrl,
  getsubscriptionurl,
} from "../apiurl";
import axiosInstance from "../axios";
import { saveAs } from "file-saver";

export const getOrgBranchList = async ({
  toast,
  setBranches,
  searchtext,
  startdate,
  enddate,
  id,
  page = 1,
  perPage = 10,
}) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(
      `/organization/${id}/branches/list`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          date_min: startdate,
          date_max: enddate,
          page: page,
          page_size: perPage,
          search: searchtext,
        },
      }
    );
    if (response.status === 200) {
      setBranches(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Failed to fetch branches. Please try again later.");
  }
};

export const deletebranch = async ({ toast, id }) => {
  try {
    const token = localStorage.getItem("access");

    const response = await axiosInstance.delete(`${allorgbranchesurl}${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 204) {
      toast.success("Branch Delete Successfully");
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};
export const deletevisitor = async ({ toast, id }) => {
  try {
    const token = localStorage.getItem("access");

    const response = await axiosInstance.delete(
      `/organization/visitor-history/${id}/delete`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 204) {
      toast.success("Branch Delete Successfully");
    } else {
      toast.error("Something went wrong");
      toast.error("Branch Delete Unsuccessfully");
    }
  } catch (error) {
    toast.error("Something went wrong");
    toast.error("Branch Delete Unsuccessfully");
  }
};

export const getNewVisitor = async ({
  toast,
  setvisitor,
  searchtext,
  startdate,
  enddate,
  page = 1,
  perPage = 10,
}) => {
  try {
    const token = localStorage.getItem("access");

    const response = await axiosInstance.get(
      `${getVisitorUrl}?search=${searchtext}&is_approved=True`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          date_min: startdate,
          date_max: enddate,
          page: page,
          page_size: perPage,
          search: searchtext,
        },
      }
    );

    if (response.status === 200) {
      setvisitor(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const getvisitorreport = async ({ setvisitor }) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(`/visitor/report/org`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      setvisitor(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};
export const getnextperviousvisitor = async ({
  toast,
  setvisitor,
  nexturl,
}) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(nexturl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      setvisitor(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};
export const getwaitingvisitor = async ({
  toast,
  setwaitingvisitor,
  searchtext,
}) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(
      `${getVisitorUrl}?search=${searchtext}&is_approved=False`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 200) {
      setwaitingvisitor(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const getAdsBanner = async ({ setBanner }) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(getadsbannerurl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      setBanner(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const filterreportgraph = async ({
  toast,
  setdata,
  id,
  startdate,
  enddate,
  purpose,
}) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(
      `${filtervisitorurl}/${id}/?start_date=${startdate}&end_date=${enddate}&purpose=${purpose}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 200) {
      setdata(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};
export const getSubscriptionInfo = async ({ toast, setSub }) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(getsubscriptionurl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      setSub(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const handleDownloadVisitorsPdf = async ({ toast }) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(`${getVisitorUrl}/download-pdf`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });

    if (response.status === 200) {
      const blob = new Blob([response.data], { type: "application/pdf" });
      saveAs(blob, "Visitor_list.pdf");
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong while downloading the PDF");
  }
};

const downloadCSV = async (file) => {
  try {
    const response = await fetch(file);
    const blob = await response.blob();

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "visiting.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading CSV:", error);
  }
};
export const downloadImage = async (originalImage) => {
  fetch(originalImage, {
    method: "GET",
    headers: {},
  })
    .then((response) => {
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.png"); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    })
    .catch((err) => {
      console.error(err);
    });
};
export const getVisitorsCount = async ({ toast, setcount, id }) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(
      `/organization/${id}/visitor-count`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 200) {
      setcount(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const getCustomersList = async ({
  toast,
  setvisitor,
  searchtext,
  startdate,
  enddate,
  page = 1,
  perPage = 10,
}) => {
  try {
    const token = localStorage.getItem("access");

    const response = await axiosInstance.get(
      `${getCustomersListUrl}?search=${searchtext}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          date_min: startdate,
          date_max: enddate,
          page: page,
          page_size: perPage,
          search: searchtext,
        },
      }
    );

    if (response.status === 200) {
      setvisitor(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const deleteCustomer = async ({ toast, id }) => {
  try {
    const token = localStorage.getItem("access");

    const response = await axiosInstance.delete(
      `${getCustomersListUrl}/${id}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 204) {
      toast.success("Customer Delete Successfully");
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const getGuestsList = async ({
  toast,
  setvisitor,
  searchtext,
  startdate,
  enddate,
  page = 1,
  perPage = 10,
}) => {
  try {
    const token = localStorage.getItem("access");

    const response = await axiosInstance.get(
      `${getGuestListUrl}?search=${searchtext}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          date_min: startdate,
          date_max: enddate,
          page: page,
          page_size: perPage,
          search: searchtext,
        },
      }
    );

    if (response.status === 200) {
      setvisitor(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const deleteGuest = async ({ toast, id }) => {
  try {
    const token = localStorage.getItem("access");

    const response = await axiosInstance.delete(`${getGuestListUrl}/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 204) {
      toast.success("Guest Delete Successfully");
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const getMeetingList = async ({
  toast,
  setvisitor,
  searchtext,
  startdate,
  enddate,
  page = 1,
  perPage = 10,
}) => {
  try {
    const token = localStorage.getItem("access");

    const response = await axiosInstance.get(
      `${getMeetingListUrl}?search=${searchtext}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          date_min: startdate,
          date_max: enddate,
          page: page,
          page_size: perPage,
          search: searchtext,
        },
      }
    );

    if (response.status === 200) {
      setvisitor(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const deleteMeeting = async ({ toast, id }) => {
  try {
    const token = localStorage.getItem("access");

    const response = await axiosInstance.delete(`${getMeetingListUrl}/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 204) {
      toast.success("Meeting Deleted Successfully");
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const getVisitors = async ({
  toast,
  setVisitors,
  searchtext,
  isApproved,
  startdate,
  enddate,
  page = 1,
  perPage = 10,
}) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(`${getVisitorUrl}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        date_min: startdate,
        date_max: enddate,
        page: page,
        page_size: perPage,
        search: searchtext,
        is_approved: isApproved,
      },
    });
    if (response.status === 200) {
      setVisitors(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const onLogout = async ({ toast, router }) => {
  try {
    const fcmToken = localStorage.getItem("fcmToken");

    const requestData = {
      fcm_token: fcmToken,
    };

    const response = await axiosInstance.post("/user/logout/", requestData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });

    if (response.status === 200) {
      localStorage.clear();
      router.replace("/login");
    } else {
      toast.error("Logout Failed. Unexpected server response");
    }
  } catch (error) {
    console.error("Logout Error:", error);
    toast.error("Logout Failed. Something went wrong");
  }
};

export const getKycOrgProfile = async ({ toast, setKycOrg, id }) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(
      `/organization/${id}/organization-kyc/list`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 200) {
      setKycOrg(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const getNotificationsCount = async ({
  toast,
  setnotificationscount,
  id,
}) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(
      `/notification/${id}/notifications-count`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 200) {
      setnotificationscount(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};
