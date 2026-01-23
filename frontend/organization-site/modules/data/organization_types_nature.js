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
// Import comprehensive country list from countries.js
// For backward compatibility, we keep a simplified list here
// Use countries.js for full features (phone validation, etc.)
const countries = [
  // South Asia
  { id: 1, code: "IN", title: "India", value: "india" },
  { id: 2, code: "NP", title: "Nepal", value: "nepal" },
  { id: 3, code: "BD", title: "Bangladesh", value: "bangladesh" },
  { id: 4, code: "PK", title: "Pakistan", value: "pakistan" },
  { id: 5, code: "LK", title: "Sri Lanka", value: "sri_lanka" },
  // Southeast Asia
  { id: 6, code: "SG", title: "Singapore", value: "singapore" },
  { id: 7, code: "MY", title: "Malaysia", value: "malaysia" },
  { id: 8, code: "TH", title: "Thailand", value: "thailand" },
  { id: 9, code: "ID", title: "Indonesia", value: "indonesia" },
  { id: 10, code: "PH", title: "Philippines", value: "philippines" },
  { id: 11, code: "VN", title: "Vietnam", value: "vietnam" },
  // Middle East
  { id: 12, code: "AE", title: "United Arab Emirates", value: "uae" },
  { id: 13, code: "SA", title: "Saudi Arabia", value: "saudi_arabia" },
  { id: 14, code: "QA", title: "Qatar", value: "qatar" },
  { id: 15, code: "KW", title: "Kuwait", value: "kuwait" },
  // East Asia
  { id: 16, code: "CN", title: "China", value: "china" },
  { id: 17, code: "JP", title: "Japan", value: "japan" },
  { id: 18, code: "KR", title: "South Korea", value: "south_korea" },
  // Europe
  { id: 19, code: "GB", title: "United Kingdom", value: "united_kingdom" },
  { id: 20, code: "DE", title: "Germany", value: "germany" },
  { id: 21, code: "FR", title: "France", value: "france" },
  { id: 22, code: "IT", title: "Italy", value: "italy" },
  { id: 23, code: "ES", title: "Spain", value: "spain" },
  { id: 24, code: "NL", title: "Netherlands", value: "netherlands" },
  { id: 25, code: "CH", title: "Switzerland", value: "switzerland" },
  // Americas
  { id: 26, code: "US", title: "United States", value: "united_states" },
  { id: 27, code: "CA", title: "Canada", value: "canada" },
  { id: 28, code: "MX", title: "Mexico", value: "mexico" },
  { id: 29, code: "BR", title: "Brazil", value: "brazil" },
  // Oceania
  { id: 30, code: "AU", title: "Australia", value: "australia" },
  { id: 31, code: "NZ", title: "New Zealand", value: "new_zealand" },
  // Africa
  { id: 32, code: "ZA", title: "South Africa", value: "south_africa" },
  { id: 33, code: "NG", title: "Nigeria", value: "nigeria" },
  { id: 34, code: "EG", title: "Egypt", value: "egypt" },
  { id: 35, code: "KE", title: "Kenya", value: "kenya" },
  // Russia & Turkey
  { id: 36, code: "RU", title: "Russia", value: "russia" },
  { id: 37, code: "TR", title: "Turkey", value: "turkey" },
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
// Global ID Types - Universal + Common regional types
const idTypes = [
  // Universal
  { id: 1, title: "Passport", value: "Passport" },
  { id: 2, title: "Driving License", value: "Driving License" },
  { id: 3, title: "National ID Card", value: "National ID Card" },
  // India
  { id: 4, title: "Aadhaar Card", value: "Aadhaar Card" },
  { id: 5, title: "PAN Card", value: "PAN Card" },
  { id: 6, title: "Voter ID", value: "Voter ID" },
  // Nepal
  { id: 7, title: "Citizenship", value: "Citizenship" },
  // UAE/Gulf
  { id: 8, title: "Emirates ID", value: "Emirates ID" },
  { id: 9, title: "Iqama", value: "Iqama" },
  // Singapore/Malaysia
  { id: 10, title: "NRIC", value: "NRIC" },
  { id: 11, title: "MyKad", value: "MyKad" },
  // US/Canada
  { id: 12, title: "Social Security Card", value: "Social Security Card" },
  { id: 13, title: "State/Provincial ID", value: "State ID" },
  // Europe
  { id: 14, title: "Residence Permit", value: "Residence Permit" },
  // Other
  { id: 15, title: "Work Permit", value: "Work Permit" },
  { id: 16, title: "Other Government ID", value: "Other Government ID" },
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
  { urls: ["/customer-list"], title: "Customer List" },
  { urls: ["/guest-list"], title: "Guest List" },
  { urls: ["/meeting-list"], title: "Meeting List" },
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
