/**
 * Global Countries Configuration
 * Supports worldwide countries with phone formats, ID types, and address structures
 */

export const countries = [
  // South Asia
  { id: 1, code: "IN", title: "India", value: "india", phoneCode: "+91", phoneLength: 10, phoneRegex: "^[6-9]\\d{9}$" },
  { id: 2, code: "NP", title: "Nepal", value: "nepal", phoneCode: "+977", phoneLength: 10, phoneRegex: "^(98|97|96)\\d{8}$" },
  { id: 3, code: "BD", title: "Bangladesh", value: "bangladesh", phoneCode: "+880", phoneLength: 10, phoneRegex: "^1[3-9]\\d{8}$" },
  { id: 4, code: "PK", title: "Pakistan", value: "pakistan", phoneCode: "+92", phoneLength: 10, phoneRegex: "^3\\d{9}$" },
  { id: 5, code: "LK", title: "Sri Lanka", value: "sri_lanka", phoneCode: "+94", phoneLength: 9, phoneRegex: "^7\\d{8}$" },
  { id: 6, code: "BT", title: "Bhutan", value: "bhutan", phoneCode: "+975", phoneLength: 8, phoneRegex: "^(17|77)\\d{6}$" },
  { id: 7, code: "MV", title: "Maldives", value: "maldives", phoneCode: "+960", phoneLength: 7, phoneRegex: "^(7|9)\\d{6}$" },
  { id: 8, code: "AF", title: "Afghanistan", value: "afghanistan", phoneCode: "+93", phoneLength: 9, phoneRegex: "^7\\d{8}$" },

  // Southeast Asia
  { id: 9, code: "SG", title: "Singapore", value: "singapore", phoneCode: "+65", phoneLength: 8, phoneRegex: "^[89]\\d{7}$" },
  { id: 10, code: "MY", title: "Malaysia", value: "malaysia", phoneCode: "+60", phoneLength: 10, phoneRegex: "^1\\d{8,9}$" },
  { id: 11, code: "TH", title: "Thailand", value: "thailand", phoneCode: "+66", phoneLength: 9, phoneRegex: "^[689]\\d{8}$" },
  { id: 12, code: "VN", title: "Vietnam", value: "vietnam", phoneCode: "+84", phoneLength: 9, phoneRegex: "^[35789]\\d{8}$" },
  { id: 13, code: "ID", title: "Indonesia", value: "indonesia", phoneCode: "+62", phoneLength: 11, phoneRegex: "^8\\d{9,10}$" },
  { id: 14, code: "PH", title: "Philippines", value: "philippines", phoneCode: "+63", phoneLength: 10, phoneRegex: "^9\\d{9}$" },
  { id: 15, code: "MM", title: "Myanmar", value: "myanmar", phoneCode: "+95", phoneLength: 9, phoneRegex: "^9\\d{8}$" },
  { id: 16, code: "KH", title: "Cambodia", value: "cambodia", phoneCode: "+855", phoneLength: 9, phoneRegex: "^[1-9]\\d{7,8}$" },

  // East Asia
  { id: 17, code: "CN", title: "China", value: "china", phoneCode: "+86", phoneLength: 11, phoneRegex: "^1[3-9]\\d{9}$" },
  { id: 18, code: "JP", title: "Japan", value: "japan", phoneCode: "+81", phoneLength: 10, phoneRegex: "^[789]0\\d{8}$" },
  { id: 19, code: "KR", title: "South Korea", value: "south_korea", phoneCode: "+82", phoneLength: 10, phoneRegex: "^1[0-9]\\d{8}$" },
  { id: 20, code: "TW", title: "Taiwan", value: "taiwan", phoneCode: "+886", phoneLength: 9, phoneRegex: "^9\\d{8}$" },
  { id: 21, code: "HK", title: "Hong Kong", value: "hong_kong", phoneCode: "+852", phoneLength: 8, phoneRegex: "^[5-9]\\d{7}$" },

  // Middle East
  { id: 22, code: "AE", title: "United Arab Emirates", value: "uae", phoneCode: "+971", phoneLength: 9, phoneRegex: "^5[024568]\\d{7}$" },
  { id: 23, code: "SA", title: "Saudi Arabia", value: "saudi_arabia", phoneCode: "+966", phoneLength: 9, phoneRegex: "^5\\d{8}$" },
  { id: 24, code: "QA", title: "Qatar", value: "qatar", phoneCode: "+974", phoneLength: 8, phoneRegex: "^[3567]\\d{7}$" },
  { id: 25, code: "KW", title: "Kuwait", value: "kuwait", phoneCode: "+965", phoneLength: 8, phoneRegex: "^[569]\\d{7}$" },
  { id: 26, code: "BH", title: "Bahrain", value: "bahrain", phoneCode: "+973", phoneLength: 8, phoneRegex: "^[36]\\d{7}$" },
  { id: 27, code: "OM", title: "Oman", value: "oman", phoneCode: "+968", phoneLength: 8, phoneRegex: "^[79]\\d{7}$" },
  { id: 28, code: "IL", title: "Israel", value: "israel", phoneCode: "+972", phoneLength: 9, phoneRegex: "^5\\d{8}$" },
  { id: 29, code: "TR", title: "Turkey", value: "turkey", phoneCode: "+90", phoneLength: 10, phoneRegex: "^5\\d{9}$" },

  // Europe
  { id: 30, code: "GB", title: "United Kingdom", value: "united_kingdom", phoneCode: "+44", phoneLength: 10, phoneRegex: "^7\\d{9}$" },
  { id: 31, code: "DE", title: "Germany", value: "germany", phoneCode: "+49", phoneLength: 11, phoneRegex: "^1[5-7]\\d{8,9}$" },
  { id: 32, code: "FR", title: "France", value: "france", phoneCode: "+33", phoneLength: 9, phoneRegex: "^[67]\\d{8}$" },
  { id: 33, code: "IT", title: "Italy", value: "italy", phoneCode: "+39", phoneLength: 10, phoneRegex: "^3\\d{9}$" },
  { id: 34, code: "ES", title: "Spain", value: "spain", phoneCode: "+34", phoneLength: 9, phoneRegex: "^[67]\\d{8}$" },
  { id: 35, code: "PT", title: "Portugal", value: "portugal", phoneCode: "+351", phoneLength: 9, phoneRegex: "^9[1236]\\d{7}$" },
  { id: 36, code: "NL", title: "Netherlands", value: "netherlands", phoneCode: "+31", phoneLength: 9, phoneRegex: "^6\\d{8}$" },
  { id: 37, code: "BE", title: "Belgium", value: "belgium", phoneCode: "+32", phoneLength: 9, phoneRegex: "^4[5-9]\\d{7}$" },
  { id: 38, code: "CH", title: "Switzerland", value: "switzerland", phoneCode: "+41", phoneLength: 9, phoneRegex: "^7[5-9]\\d{7}$" },
  { id: 39, code: "AT", title: "Austria", value: "austria", phoneCode: "+43", phoneLength: 10, phoneRegex: "^6\\d{9}$" },
  { id: 40, code: "SE", title: "Sweden", value: "sweden", phoneCode: "+46", phoneLength: 9, phoneRegex: "^7\\d{8}$" },
  { id: 41, code: "NO", title: "Norway", value: "norway", phoneCode: "+47", phoneLength: 8, phoneRegex: "^[49]\\d{7}$" },
  { id: 42, code: "DK", title: "Denmark", value: "denmark", phoneCode: "+45", phoneLength: 8, phoneRegex: "^[2-9]\\d{7}$" },
  { id: 43, code: "FI", title: "Finland", value: "finland", phoneCode: "+358", phoneLength: 9, phoneRegex: "^4\\d{8}$" },
  { id: 44, code: "PL", title: "Poland", value: "poland", phoneCode: "+48", phoneLength: 9, phoneRegex: "^[5-8]\\d{8}$" },
  { id: 45, code: "IE", title: "Ireland", value: "ireland", phoneCode: "+353", phoneLength: 9, phoneRegex: "^8[35-9]\\d{7}$" },
  { id: 46, code: "GR", title: "Greece", value: "greece", phoneCode: "+30", phoneLength: 10, phoneRegex: "^69\\d{8}$" },
  { id: 47, code: "CZ", title: "Czech Republic", value: "czech_republic", phoneCode: "+420", phoneLength: 9, phoneRegex: "^[67]\\d{8}$" },
  { id: 48, code: "RO", title: "Romania", value: "romania", phoneCode: "+40", phoneLength: 9, phoneRegex: "^7\\d{8}$" },
  { id: 49, code: "HU", title: "Hungary", value: "hungary", phoneCode: "+36", phoneLength: 9, phoneRegex: "^[237]0\\d{7}$" },
  { id: 50, code: "RU", title: "Russia", value: "russia", phoneCode: "+7", phoneLength: 10, phoneRegex: "^9\\d{9}$" },
  { id: 51, code: "UA", title: "Ukraine", value: "ukraine", phoneCode: "+380", phoneLength: 9, phoneRegex: "^[3-9]\\d{8}$" },

  // North America
  { id: 52, code: "US", title: "United States", value: "united_states", phoneCode: "+1", phoneLength: 10, phoneRegex: "^[2-9]\\d{9}$" },
  { id: 53, code: "CA", title: "Canada", value: "canada", phoneCode: "+1", phoneLength: 10, phoneRegex: "^[2-9]\\d{9}$" },
  { id: 54, code: "MX", title: "Mexico", value: "mexico", phoneCode: "+52", phoneLength: 10, phoneRegex: "^[1-9]\\d{9}$" },

  // South America
  { id: 55, code: "BR", title: "Brazil", value: "brazil", phoneCode: "+55", phoneLength: 11, phoneRegex: "^[1-9]\\d{10}$" },
  { id: 56, code: "AR", title: "Argentina", value: "argentina", phoneCode: "+54", phoneLength: 10, phoneRegex: "^[1-9]\\d{9}$" },
  { id: 57, code: "CL", title: "Chile", value: "chile", phoneCode: "+56", phoneLength: 9, phoneRegex: "^9\\d{8}$" },
  { id: 58, code: "CO", title: "Colombia", value: "colombia", phoneCode: "+57", phoneLength: 10, phoneRegex: "^3\\d{9}$" },
  { id: 59, code: "PE", title: "Peru", value: "peru", phoneCode: "+51", phoneLength: 9, phoneRegex: "^9\\d{8}$" },

  // Oceania
  { id: 60, code: "AU", title: "Australia", value: "australia", phoneCode: "+61", phoneLength: 9, phoneRegex: "^4\\d{8}$" },
  { id: 61, code: "NZ", title: "New Zealand", value: "new_zealand", phoneCode: "+64", phoneLength: 9, phoneRegex: "^2[0-9]\\d{7}$" },

  // Africa
  { id: 62, code: "ZA", title: "South Africa", value: "south_africa", phoneCode: "+27", phoneLength: 9, phoneRegex: "^[6-8]\\d{8}$" },
  { id: 63, code: "NG", title: "Nigeria", value: "nigeria", phoneCode: "+234", phoneLength: 10, phoneRegex: "^[789]\\d{9}$" },
  { id: 64, code: "EG", title: "Egypt", value: "egypt", phoneCode: "+20", phoneLength: 10, phoneRegex: "^1[0125]\\d{8}$" },
  { id: 65, code: "KE", title: "Kenya", value: "kenya", phoneCode: "+254", phoneLength: 9, phoneRegex: "^7\\d{8}$" },
  { id: 66, code: "GH", title: "Ghana", value: "ghana", phoneCode: "+233", phoneLength: 9, phoneRegex: "^[235]\\d{8}$" },
  { id: 67, code: "MA", title: "Morocco", value: "morocco", phoneCode: "+212", phoneLength: 9, phoneRegex: "^[67]\\d{8}$" },
  { id: 68, code: "TN", title: "Tunisia", value: "tunisia", phoneCode: "+216", phoneLength: 8, phoneRegex: "^[259]\\d{7}$" },
  { id: 69, code: "ET", title: "Ethiopia", value: "ethiopia", phoneCode: "+251", phoneLength: 9, phoneRegex: "^9\\d{8}$" },
  { id: 70, code: "TZ", title: "Tanzania", value: "tanzania", phoneCode: "+255", phoneLength: 9, phoneRegex: "^[67]\\d{8}$" },
];

/**
 * Get country by code or value
 */
export const getCountryByCode = (code) => {
  return countries.find(c => c.code === code || c.value === code);
};

/**
 * Get country by ID
 */
export const getCountryById = (id) => {
  return countries.find(c => c.id === id);
};

/**
 * Validate phone number for a specific country
 */
export const validatePhoneNumber = (phone, countryCode) => {
  const country = getCountryByCode(countryCode);
  if (!country) return { valid: false, message: "Invalid country" };

  const cleanPhone = phone.replace(/\D/g, '');

  if (cleanPhone.length !== country.phoneLength) {
    return {
      valid: false,
      message: `Phone number must be ${country.phoneLength} digits for ${country.title}`
    };
  }

  const regex = new RegExp(country.phoneRegex);
  if (!regex.test(cleanPhone)) {
    return {
      valid: false,
      message: `Invalid phone number format for ${country.title}`
    };
  }

  return { valid: true, message: "" };
};

/**
 * Get phone placeholder for a country
 */
export const getPhonePlaceholder = (countryCode) => {
  const country = getCountryByCode(countryCode);
  if (!country) return "Enter phone number";
  return `${country.phoneCode} ${'X'.repeat(country.phoneLength)}`;
};

export default countries;
