import {
  allorgbranchesurl,
  visitorApprovalHandleUrl,
  getpropuseurl,
  getVisitorUrl,
  getsubadminurl,
  updatestaffurl,
} from "../apiurl";
import axiosInstance from "../axios";

export const getorgbranchdetails = async ({
  toast,
  setbranchesdetails,
  id,
}) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(`${allorgbranchesurl}${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      setbranchesdetails(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const branchupdate = async ({ toast, id, request }) => {
  try {
    const token = localStorage.getItem("access");
    const data = {
      lock_branch: request,
    };
    const response = await axiosInstance.patch(
      `${allorgbranchesurl}${id}/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 200) {
      toast.success("Updated");
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};
export const aciveanddiactivethesubadmin = async ({ toast, id, isactive }) => {
  try {
    const token = localStorage.getItem("access");
    const data = {
      active: isactive,
    };
    const response = await axiosInstance.post(
      `${updatestaffurl}/${id}/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 200) {
      toast.success("Access granted");
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const getorgvisitordetails = async ({
  toast,
  setvisitordetails,
  id,
}) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(`${getVisitorUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      setvisitordetails(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};
export const getsubadmindetails = async ({ toast, setsubadmin, id }) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(`${getsubadminurl}${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      setsubadmin(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};
export const getsubadminlist = async ({ toast, setsubadmin, searchtext }) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(
      `${getsubadminurl}?search=${searchtext}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 200) {
      setsubadmin(response.data.results);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const getpurposes = async ({ setpurpose }) => {
  try {
    const token = localStorage.getItem("access");
    const response = await axiosInstance.get(getpropuseurl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      setpurpose(response.data);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const deletesubadmin = async ({ toast, id }) => {
  try {
    const token = localStorage.getItem("access");

    const response = await axiosInstance.delete(`${getsubadminurl}${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 204) {
      toast.success("Sub admin Delete Successfully");
    } else {
      toast.error("Sub admin Delete Unsuccessfully");
    }
  } catch (error) {
    toast.error("Sub admin Delete Unsuccessfully");
  }
};

export const handleVisitorApproval = async ({ toast, id, isApproved }) => {
  try {
    const token = localStorage.getItem("access");
    const data = {
      visit_id: id,
      is_approved: isApproved,
    };

    const response = await axiosInstance.post(visitorApprovalHandleUrl, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      toast.success(response.data.message);
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.log(error);
  }
};
