/**
 * Global ID Types Configuration
 * Country-specific identification document types
 */

// Universal ID types (available in all countries)
const universalIdTypes = [
  { id: 1, title: "Passport", value: "Passport" },
  { id: 2, title: "Driving License", value: "Driving License" },
];

// Country-specific ID types
const countryIdTypes = {
  // India
  india: [
    { id: 101, title: "Aadhaar Card", value: "Aadhaar Card" },
    { id: 102, title: "PAN Card", value: "PAN Card" },
    { id: 103, title: "Voter ID", value: "Voter ID" },
    { id: 104, title: "Ration Card", value: "Ration Card" },
  ],

  // Nepal
  nepal: [
    { id: 201, title: "Citizenship", value: "Citizenship" },
    { id: 202, title: "National ID Card", value: "National ID Card" },
    { id: 203, title: "PAN Card", value: "PAN Card" },
  ],

  // Bangladesh
  bangladesh: [
    { id: 301, title: "National ID Card (NID)", value: "NID" },
    { id: 302, title: "Birth Certificate", value: "Birth Certificate" },
  ],

  // Pakistan
  pakistan: [
    { id: 401, title: "CNIC", value: "CNIC" },
    { id: 402, title: "NICOP", value: "NICOP" },
    { id: 403, title: "POC", value: "POC" },
  ],

  // Sri Lanka
  sri_lanka: [
    { id: 501, title: "National ID Card", value: "National ID Card" },
  ],

  // United States
  united_states: [
    { id: 601, title: "Social Security Card", value: "Social Security Card" },
    { id: 602, title: "State ID", value: "State ID" },
    { id: 603, title: "Green Card", value: "Green Card" },
  ],

  // Canada
  canada: [
    { id: 701, title: "SIN Card", value: "SIN Card" },
    { id: 702, title: "Provincial ID", value: "Provincial ID" },
    { id: 703, title: "Health Card", value: "Health Card" },
  ],

  // United Kingdom
  united_kingdom: [
    { id: 801, title: "National Insurance Number", value: "NIN" },
    { id: 802, title: "Biometric Residence Permit", value: "BRP" },
  ],

  // Germany
  germany: [
    { id: 901, title: "Personalausweis (ID Card)", value: "Personalausweis" },
    { id: 902, title: "Aufenthaltstitel", value: "Aufenthaltstitel" },
  ],

  // France
  france: [
    { id: 1001, title: "Carte Nationale d'Identité", value: "CNI" },
    { id: 1002, title: "Titre de Séjour", value: "Titre de Sejour" },
  ],

  // UAE
  uae: [
    { id: 1101, title: "Emirates ID", value: "Emirates ID" },
    { id: 1102, title: "Residence Visa", value: "Residence Visa" },
  ],

  // Saudi Arabia
  saudi_arabia: [
    { id: 1201, title: "Iqama", value: "Iqama" },
    { id: 1202, title: "National ID", value: "National ID" },
  ],

  // Singapore
  singapore: [
    { id: 1301, title: "NRIC", value: "NRIC" },
    { id: 1302, title: "FIN", value: "FIN" },
    { id: 1303, title: "Employment Pass", value: "Employment Pass" },
  ],

  // Malaysia
  malaysia: [
    { id: 1401, title: "MyKad", value: "MyKad" },
    { id: 1402, title: "MyKAS", value: "MyKAS" },
  ],

  // Australia
  australia: [
    { id: 1501, title: "Medicare Card", value: "Medicare Card" },
    { id: 1502, title: "Photo ID Card", value: "Photo ID Card" },
  ],

  // China
  china: [
    { id: 1601, title: "Resident ID Card", value: "Resident ID Card" },
    { id: 1602, title: "Hukou", value: "Hukou" },
  ],

  // Japan
  japan: [
    { id: 1701, title: "My Number Card", value: "My Number Card" },
    { id: 1702, title: "Residence Card", value: "Residence Card" },
    { id: 1703, title: "Health Insurance Card", value: "Health Insurance Card" },
  ],

  // South Korea
  south_korea: [
    { id: 1801, title: "Resident Registration Card", value: "RRC" },
    { id: 1802, title: "Alien Registration Card", value: "ARC" },
  ],

  // Brazil
  brazil: [
    { id: 1901, title: "CPF", value: "CPF" },
    { id: 1902, title: "RG", value: "RG" },
    { id: 1903, title: "CNH", value: "CNH" },
  ],

  // South Africa
  south_africa: [
    { id: 2001, title: "ID Book", value: "ID Book" },
    { id: 2002, title: "Smart ID Card", value: "Smart ID Card" },
  ],

  // Nigeria
  nigeria: [
    { id: 2101, title: "NIN Slip", value: "NIN Slip" },
    { id: 2102, title: "Voter's Card", value: "Voters Card" },
  ],

  // Egypt
  egypt: [
    { id: 2201, title: "National ID Card", value: "National ID Card" },
  ],

  // Turkey
  turkey: [
    { id: 2301, title: "Nüfus Cüzdanı", value: "Nufus Cuzdani" },
    { id: 2302, title: "Kimlik Kartı", value: "Kimlik Karti" },
  ],

  // Russia
  russia: [
    { id: 2401, title: "Internal Passport", value: "Internal Passport" },
    { id: 2402, title: "SNILS", value: "SNILS" },
  ],

  // Mexico
  mexico: [
    { id: 2501, title: "INE/IFE", value: "INE" },
    { id: 2502, title: "CURP", value: "CURP" },
  ],
};

/**
 * Get ID types for a specific country
 * Returns universal types + country-specific types
 */
export const getIdTypesForCountry = (countryValue) => {
  const countrySpecific = countryIdTypes[countryValue] || [];
  return [...universalIdTypes, ...countrySpecific];
};

/**
 * Get all ID types (for backward compatibility)
 */
export const getAllIdTypes = () => {
  const allCountryTypes = Object.values(countryIdTypes).flat();
  const uniqueTypes = [];
  const seen = new Set();

  [...universalIdTypes, ...allCountryTypes].forEach(type => {
    if (!seen.has(type.value)) {
      seen.add(type.value);
      uniqueTypes.push(type);
    }
  });

  return uniqueTypes;
};

// Default export for backward compatibility
export const idTypes = [
  ...universalIdTypes,
  { id: 3, title: "Aadhaar Card", value: "Aadhaar Card" },
  { id: 4, title: "PAN Card", value: "PAN Card" },
  { id: 5, title: "Voter ID", value: "Voter ID" },
  { id: 6, title: "National ID Card", value: "National ID Card" },
  { id: 7, title: "Citizenship", value: "Citizenship" },
];

export default idTypes;
