// SVG Icon Components - Replacements for react-icons
// All icons accept className and onClick props for styling and interaction
// Icons use width/height="1em" to scale with font-size (text-xl, text-2xl, etc.)

export const BsPersonIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  </svg>
);

export const CgOrganisationIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/>
  </svg>
);

export const CiCalendarIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export const CiFlag1Icon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
    <line x1="4" y1="22" x2="4" y2="15"/>
  </svg>
);

export const CiLockIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
);

export const MdLockOutlineIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
  </svg>
);

export const TfiUnlockIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
  </svg>
);

export const AiOutlineAlignLeftIcon = ({ className = "", onClick, size }) => (
  <svg className={className} onClick={onClick} width={size || "1em"} height={size || "1em"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3h18v2H3V3zm0 4h12v2H3V7zm0 4h18v2H3v-2zm0 4h12v2H3v-2zm0 4h18v2H3v-2z"/>
  </svg>
);

export const AiOutlineAlignRightIcon = ({ className = "", onClick, size }) => (
  <svg className={className} onClick={onClick} width={size || "1em"} height={size || "1em"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3h18v2H3V3zm6 4h12v2H9V7zm-6 4h18v2H3v-2zm6 4h12v2H9v-2zm-6 4h18v2H3v-2z"/>
  </svg>
);

export const CiMailIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export const CiShare2Icon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);

export const FaFacebookIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export const FaFacebookFIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
  </svg>
);

export const FaInstagramIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const FaWhatsappIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const FaWordpressIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.034 1.23-.1 1.23-.1.579-.068.51-.92-.069-.886 0 0-1.739.136-2.86.136-1.055 0-2.827-.136-2.827-.136-.579-.034-.646.852-.067.886 0 0 .549.066 1.13.1l1.678 4.605-2.359 7.08-3.927-11.685c.647-.034 1.23-.1 1.23-.1.579-.068.511-.92-.068-.886 0 0-1.739.136-2.86.136-.201 0-.438-.006-.689-.015C3.813 3.15 7.613.7 12 .7c3.271 0 6.252 1.253 8.486 3.302-.053-.003-.106-.009-.161-.009-1.055 0-1.803.92-1.803 1.907 0 .886.511 1.637 1.055 2.523.41.72.887 1.638.887 2.967 0 .921-.354 1.988-.823 3.476l-1.08 3.611-3.912-11.647zm-5.303 17.35c-1.2-.43-2.295-1.073-3.24-1.884l3.076-8.918 3.146 8.619c.021.051.047.098.076.141-1.012.359-2.087.555-3.212.555-.624 0-1.235-.051-1.826-.15l-.02.367zm-5.3-4.035c-1.668-2.2-2.656-4.937-2.656-7.895 0-2.038.462-3.967 1.289-5.686l3.561 9.76-3.194 3.821z"/>
  </svg>
);

export const FaXTwitterIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const FaYoutubeIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const FiMessageSquareIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

export const GoDownloadIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.97 11.03a.75.75 0 1 1 1.06-1.06L11 14.94V2.75a.75.75 0 0 1 1.5 0v12.19l4.97-4.97a.75.75 0 1 1 1.06 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0l-6.25-6.25zM4.75 18.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H4.75z"/>
  </svg>
);

export const HiOutlineDocumentTextIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
  </svg>
);

export const IoLocationOutlineIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const IoMdArrowDropdownIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10l5 5 5-5z"/>
  </svg>
);

export const IoMdLaptopIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
  </svg>
);

export const IoPersonOutlineIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

export const IoSearchSharpIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

export const IoIosPhonePortraitIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
  </svg>
);

export const LuUploadIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
);

export const MdAppRegistrationIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 17h4v-2h-4v2zm6-6h-4v2h4v-2zM8 9h4V7H8v2zm12 1V4H4v16h8v-5h-2v3H6V6h12v4h2z"/>
    <path d="M20.42 14.34l-1.41 1.41L21.17 18l-2.16 2.17 1.41 1.41L24 18l-3.58-3.66z"/>
    <path d="M18.83 18l-2.16-2.17-1.41 1.41L18.83 21l1.41-1.41L18.83 18z"/>
  </svg>
);

export const MdArrowDropDownIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10l5 5 5-5z"/>
  </svg>
);

export const MdEditIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
  </svg>
);

export const MdKeyboardArrowLeftIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
  </svg>
);

export const MdKeyboardArrowRightIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
  </svg>
);

export const MdLocationOnIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

export const MdLocationSearchingIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
  </svg>
);

export const MdOutlineDeleteIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/>
  </svg>
);

export const MdOutlineFilterAltIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 6h10l-5.01 6.3L7 6zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"/>
  </svg>
);

export const MdOutlineGroupIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

export const MdOutlineGroupsIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
  </svg>
);

export const MdOutlineLocalPhoneIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"/>
  </svg>
);

export const MdOutlineLocationOnIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);

export const MdOutlinePersonIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

export const MdOutlinePictureAsPdfIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm12 6V9c0-.55-.45-1-1-1h-2v5h2c.55 0 1-.45 1-1zm-2-3h1v3h-1V9zm4 2h1v-1h-1V9h1V8h-2v5h1v-2zm-8 0h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9v5h1v-2zm0-2h1v1h-1V9z"/>
  </svg>
);

export const MdOutlineRectangleIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4v16h20V4H2zm18 14H4V6h16v12z"/>
  </svg>
);

export const MdOutlineVisibilityIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/>
  </svg>
);

export const MdOutlineVisibilityOffIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"/>
  </svg>
);

export const MdPanoramaWideAngleIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6c2.45 0 4.71.2 7.29.64.47 1.78.71 3.58.71 5.36s-.24 3.58-.71 5.36c-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12s.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4z"/>
  </svg>
);

export const MdPhoneAndroidIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"/>
  </svg>
);

export const MdShareLocationIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.02 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.42-1.43c-1.11.86-2.44 1.44-3.9 1.62zM4.03 12c0-4.05 3.03-7.41 6.95-7.93V2.05C5.95 2.58 2.03 6.84 2.03 12c0 5.16 3.92 9.42 8.95 9.95v-2.02c-3.92-.52-6.95-3.88-6.95-7.93zM19.95 11h2.02c-.2-2.01-1-3.84-2.21-5.32l-1.43 1.43c.86 1.1 1.44 2.43 1.62 3.89zM18.34 4.26c-1.48-1.21-3.32-2.01-5.32-2.21v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM18.33 16.9l1.43 1.42c1.21-1.48 2.01-3.31 2.21-5.32h-2.02c-.18 1.46-.76 2.79-1.62 3.9z"/>
    <path d="M16 11.1C16 8.61 14.1 7 12 7s-4 1.61-4 4.1c0 1.66 1.33 3.63 4 5.9 2.67-2.27 4-4.24 4-5.9zm-4 1.4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

export const PiBagLightIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

export const RiEBike2FillIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm14-6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-8-9h4l-1.5 2H12V7h3l3 4h-4l-2-2H8l-1 2H4l2-4h5z"/>
  </svg>
);

export const RiRectangleLineIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="18" height="14" rx="2"/>
  </svg>
);

export const RxCross2Icon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export const TbArrowBigRightIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12h13"/>
    <path d="M12 5l7 7-7 7"/>
  </svg>
);

export const TbLayoutDashboardIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7"/>
    <rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/>
  </svg>
);

export const TbLocationIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const TbTopologyStarIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2"/>
    <circle cx="12" cy="4" r="2"/>
    <circle cx="20" cy="12" r="2"/>
    <circle cx="12" cy="20" r="2"/>
    <circle cx="4" cy="12" r="2"/>
    <path d="M12 6v4"/>
    <path d="M18 12h-4"/>
    <path d="M12 18v-4"/>
    <path d="M6 12h4"/>
  </svg>
);

export const TiLocationArrowOutlineIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.368 19.102c.349 1.049 1.011 1.086 1.478.086l5.309-11.375c.467-1.002.062-1.406-.938-.938L4.842 12.184c-1.002.468-.963 1.129.085 1.478l4.073 1.367 1.368 4.073z"/>
  </svg>
);

export const FaPlusIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
);

export const FaMobileAltIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4.2-5.78v1.75l3.2-2.99L12.8 9v1.7c-3.11.43-4.35 2.56-4.8 4.7 1.11-1.5 2.58-2.18 4.8-2.18z"/>
  </svg>
);

export const FaMobileScreenIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
  </svg>
);

export const FaTwitterIcon = ({ className = "", onClick }) => (
  <svg className={className} onClick={onClick} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

// Export all icons with a consistent naming pattern
export const IconMap = {
  BsPerson: BsPersonIcon,
  CgOrganisation: CgOrganisationIcon,
  CiCalendar: CiCalendarIcon,
  CiFlag1: CiFlag1Icon,
  CiLock: CiLockIcon,
  CiMail: CiMailIcon,
  CiShare2: CiShare2Icon,
  FaFacebook: FaFacebookIcon,
  FaFacebookF: FaFacebookFIcon,
  FaInstagram: FaInstagramIcon,
  FaMobileAlt: FaMobileAltIcon,
  FaMobileScreen: FaMobileScreenIcon,
  FaPlus: FaPlusIcon,
  FaTwitter: FaTwitterIcon,
  FaWhatsapp: FaWhatsappIcon,
  FaWordpress: FaWordpressIcon,
  FaXTwitter: FaXTwitterIcon,
  FaYoutube: FaYoutubeIcon,
  FiMessageSquare: FiMessageSquareIcon,
  GoDownload: GoDownloadIcon,
  HiOutlineDocumentText: HiOutlineDocumentTextIcon,
  IoIosPhonePortrait: IoIosPhonePortraitIcon,
  IoLocationOutline: IoLocationOutlineIcon,
  IoMdArrowDropdown: IoMdArrowDropdownIcon,
  IoMdLaptop: IoMdLaptopIcon,
  IoPersonOutline: IoPersonOutlineIcon,
  IoSearchSharp: IoSearchSharpIcon,
  LuUpload: LuUploadIcon,
  MdAppRegistration: MdAppRegistrationIcon,
  MdArrowDropDown: MdArrowDropDownIcon,
  MdEdit: MdEditIcon,
  MdKeyboardArrowLeft: MdKeyboardArrowLeftIcon,
  MdKeyboardArrowRight: MdKeyboardArrowRightIcon,
  MdLocationOn: MdLocationOnIcon,
  MdLocationSearching: MdLocationSearchingIcon,
  MdOutlineDelete: MdOutlineDeleteIcon,
  MdOutlineFilterAlt: MdOutlineFilterAltIcon,
  MdOutlineGroup: MdOutlineGroupIcon,
  MdOutlineGroups: MdOutlineGroupsIcon,
  MdOutlineLocalPhone: MdOutlineLocalPhoneIcon,
  MdOutlineLocationOn: MdOutlineLocationOnIcon,
  MdOutlinePerson: MdOutlinePersonIcon,
  MdOutlinePictureAsPdf: MdOutlinePictureAsPdfIcon,
  MdOutlineRectangle: MdOutlineRectangleIcon,
  MdOutlineVisibility: MdOutlineVisibilityIcon,
  MdOutlineVisibilityOff: MdOutlineVisibilityOffIcon,
  MdPanoramaWideAngle: MdPanoramaWideAngleIcon,
  MdPhoneAndroid: MdPhoneAndroidIcon,
  MdShareLocation: MdShareLocationIcon,
  PiBagLight: PiBagLightIcon,
  RiEBike2Fill: RiEBike2FillIcon,
  RiRectangleLine: RiRectangleLineIcon,
  RxCross2: RxCross2Icon,
  TbArrowBigRight: TbArrowBigRightIcon,
  TbLayoutDashboard: TbLayoutDashboardIcon,
  TbLocation: TbLocationIcon,
  TbTopologyStar: TbTopologyStarIcon,
  TiLocationArrowOutline: TiLocationArrowOutlineIcon,
};
