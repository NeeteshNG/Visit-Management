import {
  IdCardIcon,
  CustomerRegisterIcon,
  MeetingIcon,
  GuestIcon,
  DashboardIcon,
  UserIcon,
  BranchesIcon,
  CheckInIcon,
  VisitorIcon,
  ReportIcon,
  CustomerIcon,
  HotelGuestIcon,
  MeetingAppointmentIcon,
  NotificationBellIcon,
} from "@/public/icons/icons";

const organizationTypes = [
  { id: 1, title: "Private", value: "private" },
  { id: 2, title: "Non-Government", value: "non-government" },
  { id: 3, title: "Government", value: "government" },
  { id: 4, title: "Public", value: "public" },
  // { id: 5, title: "Educational", value: "educational" },
  // { id: 6, title: "Healthcare", value: "healthcare" },
  // { id: 7, title: "Research", value: "research" },
  // { id: 8, title: "Non-Profit", value: "non-profit" },
  // { id: 9, title: "Technology", value: "technology" },
  // { id: 10, title: "Financial", value: "financial" },
  // { id: 11, title: "Entertainment", value: "entertainment" },
  // { id: 12, title: "Retail", value: "retail" },
  // { id: 13, title: "Hospitality", value: "hospitality" },
  // { id: 14, title: "Agriculture", value: "agriculture" },
  // { id: 15, title: "Manufacturing", value: "manufacturing" },
  // { id: 16, title: "Environmental", value: "environmental" },
  // { id: 17, title: "Arts and Culture", value: "arts-and-culture" },
  // { id: 18, title: "Social Services", value: "social-services" },
  // { id: 19, title: "Sports", value: "sports" },
  // { id: 20, title: "Media", value: "media" },
  // { id: 21, title: "Religious", value: "religious" },
  { id: 22, title: "Other", value: "other" },
];
const countries = [
  { id: 1, title: "Nepal", value: "nepal" },
  { id: 2, title: "India", value: "india" },
];
const purpose = [
  { id: 1, title: "Administrative Work", value: "Administrative Work" },
  { id: 2, title: "Meeting ", value: "Meeting" },
  { id: 3, title: "Interview", value: "Interview" },
  { id: 4, title: "Others", value: "Others" },
];
const purpose2 = [
  { id: 1, title: "Total Visitor ", value: "Total Visitor" },
  { id: 2, title: "Branch Visitor ", value: "Branch Visitor" },
];
const notificationTypes = [
  { id: 1, title: "All ", value: "all" },
  { id: 2, title: "wishes ", value: "wishes" },
  { id: 3, title: "promotional ", value: "promotional" },
  { id: 4, title: "other ", value: "other" },
];
const notificationAudiences = [
  { id: 1, title: "All", value: "all" },
  { id: 2, title: "Visitors", value: "visitor" },
  { id: 3, title: "Branch", value: "branch" },
  { id: 4, title: "Staff", value: "staff" },
  { id: 5, title: "Organization", value: "organization" },
  { id: 6, title: "Individual User", value: "Individual User" },
];
const notificationfilter = [
  { id: 1, title: "Week", value: "week" },
  { id: 2, title: "Daily ", value: "today" },
  { id: 3, title: "Month", value: "month" },
  { id: 4, title: "Year", value: "year" },
  { id: 5, title: "All", value: "" },
];
const idTypes = [
  { id: 1, title: "Citizenship", value: "Citizenship" },
  { id: 2, title: "Driving License", value: "License" },
  { id: 3, title: "Passport", value: "Passport" },
  { id: 4, title: "National ID Card", value: "National ID Card" },
  { id: 5, title: "Pan Card", value: "Pan Card" },
];
const organizationNatureTypes = [
  { id: 1, title: "Service Based", value: "service-based" },
  { id: 2, title: "Product Based", value: "product-based" },
  { id: 3, title: "Non Profit", value: "non-profit" },
  { id: 4, title: "Educational", value: "educational" },
  { id: 5, title: "Healthcare", value: "healthcare" },
  { id: 6, title: "Research", value: "research" },
  { id: 7, title: "Technology", value: "technology" },
  { id: 8, title: "Financial", value: "financial" },
  { id: 9, title: "Entertainment", value: "entertainment" },
  { id: 10, title: "Retail", value: "retail" },
  { id: 11, title: "Hospitality", value: "hospitality" },
  { id: 12, title: "Agriculture", value: "agriculture" },
  { id: 13, title: "Manufacturing", value: "manufacturing" },
  { id: 14, title: "Environmental", value: "environmental" },
  { id: 15, title: "Arts and Culture", value: "arts-and-culture" },
  { id: 16, title: "Social Services", value: "social-services" },
  { id: 17, title: "Sports", value: "sports" },
  { id: 18, title: "Media", value: "media" },
  { id: 19, title: "Religious", value: "religious" },
  { id: 20, title: "Other", value: "other" },
];

const meetingtypes = [
  { id: 1, title: "In-Person", value: "In-Person" },
  { id: 2, title: "Online", value: "Online" },
  { id: 3, title: "Hybrid", value: "Hybrid" },
  { id: 3, title: "Phone Conference", value: "Phone Conference" },
];

const dashboardFeatures = [
  {
    id: 1,
    name: "Visitor Check-in",
    icon: IdCardIcon,
    endpoint: "/manual-entry",
  },
  {
    id: 2,
    name: "Hotel Guest Check In",
    icon: GuestIcon,
    endpoint: "/guest",
  },
  {
    id: 3,
    name: "Customer Register",
    icon: CustomerRegisterIcon,
    endpoint: "/customer-registration",
  },
  {
    id: 4,
    name: "Meeting Appointment",
    icon: MeetingIcon,
    endpoint: "/meeting",
  },
];

const allPagePaths = [
  { id: 1, name: "Sub-admin", path: "/sub-admin-list" },
  { id: 2, name: "Branch", path: "/branch-list" },
  { id: 3, name: "Create Branch", path: "/create-branch" },
  { id: 4, name: "Create sub-admin", path: "/create-sub-admin" },
  { id: 5, name: "Manual Entry", path: "/manual-entry" },
  { id: 6, name: "Notification", path: "/notifications" },
  { id: 7, name: "Create Notification", path: "/create-notification" },
  { id: 8, name: "Visitor", path: "/visitor-list" },
  { id: 9, name: "Settings", path: "/settings" },
  { id: 10, name: "Log Activity", path: "/settings" },
];

const urlCategories = [
  { urls: ["/verify-kyc", "/kyc-preview"], title: "Kyc" },
  {
    urls: ["/manual-entry", "/manual-preview"],
    title: "Manual Visitor Entry Form",
  },
  { urls: ["/create-sub-admin"], title: "Create New Sub Admin User" },
  { urls: ["/visitor-report"], title: "Visitor Report" },
  { urls: ["/profile", "/edit-profile"], title: "Profile" },
  { urls: ["/settings"], title: "Setting" },
  { urls: ["/create-notification"], title: "Create Notification" },
  { urls: ["/create-branch"], title: "Create Branch" },
  { urls: ["/notifications"], title: "Notification" },
  { urls: ["/visitor-details"], title: "Visitor Details" },
  { urls: ["/sub-admin-list", "/sub-admin-list/details"], title: "Sub Admin" },
  { urls: ["/branch-list", "/branch-list/details"], title: "Branch" },
  { urls: ["/visitor-list"], title: "Visitor List" },
  { urls: ["/"], title: "Dashboard" },
];

const leftSideBarMenus = [
  {
    id: 1,
    menu: "Dashboard",
    path: "/dash",
    icon: DashboardIcon,
  },
  {
    id: 2,
    menu: "Sub-admin",
    subMenus: [
      { id: 1, menu: "Create sub-admin", path: "/create-sub-admin" },
      { id: 2, menu: "All sub-admin", path: "/sub-admin-list" },
    ],
    icon: UserIcon,
  },
  {
    id: 3,
    menu: "Branch",
    subMenus: [
      { id: 1, menu: "Create branch", path: "/create-branch" },
      { id: 2, menu: "All branch", path: "/branch-list" },
    ],
    icon: BranchesIcon,
  },
  {
    id: 4,
    menu: "Manual Check-in",
    subMenus: [
      { id: 1, menu: "Create manual Check-in", path: "/manual-entry" },
      { id: 2, menu: "All manual", path: "/visitor-list" },
    ],
    icon: CheckInIcon,
  },
  {
    id: 5,
    menu: "Visitor",
    path: "/visitor-list",
    icon: VisitorIcon,
  },
  {
    id: 6,
    menu: "Report",
    path: "/visitor-report",
    icon: ReportIcon,
  },
  {
    id: 7,
    menu: "Customers",
    path: "/customer-list",
    icon: CustomerIcon,
  },
  {
    id: 8,
    menu: "Guests",
    path: "/guest-list",
    icon: HotelGuestIcon,
  },
  {
    id: 9,
    menu: "Meeting Appointments",
    path: "/meeting-list",
    icon: MeetingAppointmentIcon,
  },
  {
    id: 10,
    menu: "Notification",
    subMenus: [
      { id: 1, menu: "Create notification", path: "/create-notification" },
      { id: 2, menu: "All notification", path: "/notifications" },
    ],
    icon: NotificationBellIcon,
  },
];

export {
  meetingtypes,
  organizationTypes,
  organizationNatureTypes,
  notificationfilter,
  purpose2,
  countries,
  idTypes,
  purpose,
  notificationTypes,
  notificationAudiences,
  dashboardFeatures,
  allPagePaths,
  urlCategories,
  leftSideBarMenus,
};
