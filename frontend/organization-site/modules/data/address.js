/**
 * Global Address Data Structure
 * Supports multiple countries with their administrative divisions
 *
 * Structure: Country → State/Province → District/County → City/Municipality
 */

// ============================================
// STATES/PROVINCES BY COUNTRY
// ============================================

export const states = {
  // INDIA - 28 States + 8 Union Territories
  'india': [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    // Union Territories
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ],

  // NEPAL - 7 Provinces
  'nepal': [
    'Province 1', 'Province 2', 'Bagmati', 'Gandaki', 'Lumbini', 'Karnali', 'Sudur Paschim'
  ],

  // UNITED STATES - 50 States + DC
  'united_states': [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming', 'District of Columbia'
  ],

  // UNITED KINGDOM - 4 Countries
  'united_kingdom': [
    'England', 'Scotland', 'Wales', 'Northern Ireland'
  ],

  // CANADA - 13 Provinces and Territories
  'canada': [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
    'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island',
    'Quebec', 'Saskatchewan', 'Yukon'
  ],

  // AUSTRALIA - 6 States + 2 Territories
  'australia': [
    'New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia',
    'Tasmania', 'Australian Capital Territory', 'Northern Territory'
  ],

  // UAE - 7 Emirates
  'uae': [
    'Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah'
  ],

  // SINGAPORE - Planning Areas
  'singapore': [
    'Central Region', 'East Region', 'North Region', 'North-East Region', 'West Region'
  ],

  // BANGLADESH - 8 Divisions
  'bangladesh': [
    'Barishal', 'Chattogram', 'Dhaka', 'Khulna', 'Mymensingh', 'Rajshahi', 'Rangpur', 'Sylhet'
  ],

  // PAKISTAN - 4 Provinces + Territories
  'pakistan': [
    'Balochistan', 'Khyber Pakhtunkhwa', 'Punjab', 'Sindh',
    'Azad Kashmir', 'Gilgit-Baltistan', 'Islamabad Capital Territory'
  ],

  // SRI LANKA - 9 Provinces
  'sri_lanka': [
    'Central', 'Eastern', 'North Central', 'Northern', 'North Western',
    'Sabaragamuwa', 'Southern', 'Uva', 'Western'
  ],

  // GERMANY - 16 States
  'germany': [
    'Baden-Württemberg', 'Bavaria', 'Berlin', 'Brandenburg', 'Bremen', 'Hamburg', 'Hesse',
    'Lower Saxony', 'Mecklenburg-Vorpommern', 'North Rhine-Westphalia', 'Rhineland-Palatinate',
    'Saarland', 'Saxony', 'Saxony-Anhalt', 'Schleswig-Holstein', 'Thuringia'
  ],

  // FRANCE - 18 Regions
  'france': [
    'Auvergne-Rhône-Alpes', 'Bourgogne-Franche-Comté', 'Brittany', 'Centre-Val de Loire',
    'Corsica', 'Grand Est', 'Hauts-de-France', 'Île-de-France', 'Normandy',
    'Nouvelle-Aquitaine', 'Occitanie', 'Pays de la Loire', 'Provence-Alpes-Côte d\'Azur'
  ],

  // JAPAN - 47 Prefectures (Major Regions)
  'japan': [
    'Hokkaido', 'Aomori', 'Iwate', 'Miyagi', 'Akita', 'Yamagata', 'Fukushima',
    'Ibaraki', 'Tochigi', 'Gunma', 'Saitama', 'Chiba', 'Tokyo', 'Kanagawa',
    'Niigata', 'Toyama', 'Ishikawa', 'Fukui', 'Yamanashi', 'Nagano', 'Gifu',
    'Shizuoka', 'Aichi', 'Mie', 'Shiga', 'Kyoto', 'Osaka', 'Hyogo', 'Nara',
    'Wakayama', 'Tottori', 'Shimane', 'Okayama', 'Hiroshima', 'Yamaguchi',
    'Tokushima', 'Kagawa', 'Ehime', 'Kochi', 'Fukuoka', 'Saga', 'Nagasaki',
    'Kumamoto', 'Oita', 'Miyazaki', 'Kagoshima', 'Okinawa'
  ],

  // CHINA - 23 Provinces + 5 Autonomous Regions + 4 Municipalities
  'china': [
    'Anhui', 'Beijing', 'Chongqing', 'Fujian', 'Gansu', 'Guangdong', 'Guangxi',
    'Guizhou', 'Hainan', 'Hebei', 'Heilongjiang', 'Henan', 'Hubei', 'Hunan',
    'Inner Mongolia', 'Jiangsu', 'Jiangxi', 'Jilin', 'Liaoning', 'Ningxia',
    'Qinghai', 'Shaanxi', 'Shandong', 'Shanghai', 'Shanxi', 'Sichuan', 'Tianjin',
    'Tibet', 'Xinjiang', 'Yunnan', 'Zhejiang'
  ],

  // SOUTH AFRICA - 9 Provinces
  'south_africa': [
    'Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo',
    'Mpumalanga', 'North West', 'Northern Cape', 'Western Cape'
  ],

  // BRAZIL - 26 States + 1 Federal District
  'brazil': [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
    'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
    'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí',
    'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia',
    'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
  ],

  // MEXICO - 32 States
  'mexico': [
    'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas',
    'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima', 'Durango', 'Guanajuato',
    'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos', 'Nayarit',
    'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí',
    'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'
  ],

  // RUSSIA - Federal Districts (simplified)
  'russia': [
    'Central Federal District', 'Northwestern Federal District', 'Southern Federal District',
    'North Caucasian Federal District', 'Volga Federal District', 'Ural Federal District',
    'Siberian Federal District', 'Far Eastern Federal District'
  ],

  // SAUDI ARABIA - 13 Regions
  'saudi_arabia': [
    'Riyadh', 'Makkah', 'Madinah', 'Eastern Province', 'Asir', 'Tabuk', 'Hail',
    'Northern Borders', 'Jazan', 'Najran', 'Al Bahah', 'Al Jawf', 'Qassim'
  ],

  // MALAYSIA - 13 States + 3 Federal Territories
  'malaysia': [
    'Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak',
    'Perlis', 'Penang', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu',
    'Kuala Lumpur', 'Labuan', 'Putrajaya'
  ],

  // THAILAND - 77 Provinces (Major regions)
  'thailand': [
    'Bangkok', 'Central Thailand', 'Eastern Thailand', 'Northern Thailand',
    'Northeastern Thailand', 'Southern Thailand', 'Western Thailand'
  ],

  // INDONESIA - 34 Provinces
  'indonesia': [
    'Aceh', 'Bali', 'Banten', 'Bengkulu', 'Central Java', 'Central Kalimantan',
    'Central Sulawesi', 'East Java', 'East Kalimantan', 'East Nusa Tenggara',
    'Gorontalo', 'Jakarta', 'Jambi', 'Lampung', 'Maluku', 'North Kalimantan',
    'North Maluku', 'North Sulawesi', 'North Sumatra', 'Papua', 'Riau',
    'Riau Islands', 'South Kalimantan', 'South Sulawesi', 'South Sumatra',
    'Southeast Sulawesi', 'West Java', 'West Kalimantan', 'West Nusa Tenggara',
    'West Papua', 'West Sulawesi', 'West Sumatra', 'Yogyakarta'
  ],

  // PHILIPPINES - 17 Regions
  'philippines': [
    'Ilocos Region', 'Cagayan Valley', 'Central Luzon', 'CALABARZON', 'MIMAROPA',
    'Bicol Region', 'Western Visayas', 'Central Visayas', 'Eastern Visayas',
    'Zamboanga Peninsula', 'Northern Mindanao', 'Davao Region', 'SOCCSKSARGEN',
    'Caraga', 'NCR', 'CAR', 'BARMM'
  ],

  // NIGERIA - 36 States + FCT
  'nigeria': [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
    'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT Abuja', 'Gombe',
    'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos',
    'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto',
    'Taraba', 'Yobe', 'Zamfara'
  ],

  // EGYPT - 27 Governorates
  'egypt': [
    'Alexandria', 'Aswan', 'Asyut', 'Beheira', 'Beni Suef', 'Cairo', 'Dakahlia',
    'Damietta', 'Faiyum', 'Gharbia', 'Giza', 'Ismailia', 'Kafr El Sheikh', 'Luxor',
    'Matruh', 'Minya', 'Monufia', 'New Valley', 'North Sinai', 'Port Said', 'Qalyubia',
    'Qena', 'Red Sea', 'Sharqia', 'Sohag', 'South Sinai', 'Suez'
  ],

  // TURKEY - 81 Provinces (Major regions)
  'turkey': [
    'Marmara Region', 'Central Anatolia', 'Aegean Region', 'Mediterranean Region',
    'Black Sea Region', 'Eastern Anatolia', 'Southeastern Anatolia'
  ],

  // SOUTH KOREA - 17 Divisions
  'south_korea': [
    'Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Ulsan', 'Sejong',
    'Gyeonggi', 'Gangwon', 'North Chungcheong', 'South Chungcheong', 'North Jeolla',
    'South Jeolla', 'North Gyeongsang', 'South Gyeongsang', 'Jeju'
  ],

  // ITALY - 20 Regions
  'italy': [
    'Abruzzo', 'Aosta Valley', 'Apulia', 'Basilicata', 'Calabria', 'Campania',
    'Emilia-Romagna', 'Friuli Venezia Giulia', 'Lazio', 'Liguria', 'Lombardy',
    'Marche', 'Molise', 'Piedmont', 'Sardinia', 'Sicily', 'Trentino-South Tyrol',
    'Tuscany', 'Umbria', 'Veneto'
  ],

  // SPAIN - 17 Autonomous Communities
  'spain': [
    'Andalusia', 'Aragon', 'Asturias', 'Balearic Islands', 'Basque Country',
    'Canary Islands', 'Cantabria', 'Castile and León', 'Castilla-La Mancha',
    'Catalonia', 'Extremadura', 'Galicia', 'La Rioja', 'Madrid', 'Murcia',
    'Navarre', 'Valencian Community'
  ],

  // NETHERLANDS - 12 Provinces
  'netherlands': [
    'Drenthe', 'Flevoland', 'Friesland', 'Gelderland', 'Groningen', 'Limburg',
    'North Brabant', 'North Holland', 'Overijssel', 'South Holland', 'Utrecht', 'Zeeland'
  ],

  // SWITZERLAND - 26 Cantons
  'switzerland': [
    'Aargau', 'Appenzell Ausserrhoden', 'Appenzell Innerrhoden', 'Basel-Landschaft',
    'Basel-Stadt', 'Bern', 'Fribourg', 'Geneva', 'Glarus', 'Graubünden', 'Jura',
    'Lucerne', 'Neuchâtel', 'Nidwalden', 'Obwalden', 'Schaffhausen', 'Schwyz',
    'Solothurn', 'St. Gallen', 'Thurgau', 'Ticino', 'Uri', 'Valais', 'Vaud',
    'Zug', 'Zürich'
  ],

  // VIETNAM - 63 Provinces
  'vietnam': [
    'An Giang', 'Ba Ria-Vung Tau', 'Bac Giang', 'Bac Kan', 'Bac Lieu', 'Bac Ninh',
    'Ben Tre', 'Binh Dinh', 'Binh Duong', 'Binh Phuoc', 'Binh Thuan', 'Ca Mau',
    'Can Tho', 'Cao Bang', 'Da Nang', 'Dak Lak', 'Dak Nong', 'Dien Bien', 'Dong Nai',
    'Dong Thap', 'Gia Lai', 'Ha Giang', 'Ha Nam', 'Ha Noi', 'Ha Tinh', 'Hai Duong',
    'Hai Phong', 'Hau Giang', 'Ho Chi Minh City', 'Hoa Binh', 'Hung Yen', 'Khanh Hoa',
    'Kien Giang', 'Kon Tum', 'Lai Chau', 'Lam Dong', 'Lang Son', 'Lao Cai', 'Long An',
    'Nam Dinh', 'Nghe An', 'Ninh Binh', 'Ninh Thuan', 'Phu Tho', 'Phu Yen', 'Quang Binh',
    'Quang Nam', 'Quang Ngai', 'Quang Ninh', 'Quang Tri', 'Soc Trang', 'Son La',
    'Tay Ninh', 'Thai Binh', 'Thai Nguyen', 'Thanh Hoa', 'Thua Thien Hue', 'Tien Giang',
    'Tra Vinh', 'Tuyen Quang', 'Vinh Long', 'Vinh Phuc', 'Yen Bai'
  ],

  // KENYA - 47 Counties
  'kenya': [
    'Baringo', 'Bomet', 'Bungoma', 'Busia', 'Elgeyo-Marakwet', 'Embu', 'Garissa',
    'Homa Bay', 'Isiolo', 'Kajiado', 'Kakamega', 'Kericho', 'Kiambu', 'Kilifi',
    'Kirinyaga', 'Kisii', 'Kisumu', 'Kitui', 'Kwale', 'Laikipia', 'Lamu', 'Machakos',
    'Makueni', 'Mandera', 'Marsabit', 'Meru', 'Migori', 'Mombasa', 'Murang\'a',
    'Nairobi', 'Nakuru', 'Nandi', 'Narok', 'Nyamira', 'Nyandarua', 'Nyeri', 'Samburu',
    'Siaya', 'Taita-Taveta', 'Tana River', 'Tharaka-Nithi', 'Trans Nzoia', 'Turkana',
    'Uasin Gishu', 'Vihiga', 'Wajir', 'West Pokot'
  ],
};

// ============================================
// DISTRICTS BY STATE (Major Countries)
// ============================================

export const districts = {
  // INDIA - Districts by State
  // Maharashtra
  'Maharashtra': [
    'Mumbai City', 'Mumbai Suburban', 'Thane', 'Palghar', 'Raigad', 'Ratnagiri', 'Sindhudurg',
    'Nashik', 'Dhule', 'Nandurbar', 'Jalgaon', 'Ahmednagar', 'Pune', 'Solapur', 'Satara',
    'Sangli', 'Kolhapur', 'Aurangabad', 'Jalna', 'Beed', 'Latur', 'Osmanabad', 'Nanded',
    'Parbhani', 'Hingoli', 'Akola', 'Washim', 'Amravati', 'Buldhana', 'Yavatmal', 'Nagpur',
    'Wardha', 'Bhandara', 'Gondia', 'Chandrapur', 'Gadchiroli'
  ],

  // Karnataka
  'Karnataka': [
    'Bagalkot', 'Ballari', 'Belagavi', 'Bengaluru Rural', 'Bengaluru Urban', 'Bidar',
    'Chamarajanagar', 'Chikkaballapur', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada',
    'Davanagere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi', 'Kodagu', 'Kolar',
    'Koppal', 'Mandya', 'Mysuru', 'Raichur', 'Ramanagara', 'Shivamogga', 'Tumakuru',
    'Udupi', 'Uttara Kannada', 'Vijayapura', 'Yadgir'
  ],

  // Tamil Nadu
  'Tamil Nadu': [
    'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul',
    'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai',
    'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai',
    'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni',
    'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur',
    'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'
  ],

  // Gujarat
  'Gujarat': [
    'Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar',
    'Botad', 'Chhota Udaipur', 'Dahod', 'Dang', 'Devbhoomi Dwarka', 'Gandhinagar', 'Gir Somnath',
    'Jamnagar', 'Junagadh', 'Kheda', 'Kutch', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada',
    'Navsari', 'Panchmahal', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha', 'Surat',
    'Surendranagar', 'Tapi', 'Vadodara', 'Valsad'
  ],

  // Rajasthan
  'Rajasthan': [
    'Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner',
    'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur',
    'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur',
    'Pali', 'Pratapgarh', 'Rajsamand', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Sri Ganganagar',
    'Tonk', 'Udaipur'
  ],

  // Kerala
  'Kerala': [
    'Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam',
    'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram',
    'Thrissur', 'Wayanad'
  ],

  // Delhi
  'Delhi': [
    'Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'North East Delhi',
    'North West Delhi', 'Shahdara', 'South Delhi', 'South East Delhi', 'South West Delhi', 'West Delhi'
  ],

  // Uttar Pradesh
  'Uttar Pradesh': [
    'Agra', 'Aligarh', 'Allahabad', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya',
    'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki',
    'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli',
    'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farrukhabad', 'Fatehpur',
    'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur',
    'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj',
    'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kushinagar', 'Lakhimpur Kheri',
    'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau',
    'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh',
    'Rae Bareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur',
    'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur',
    'Unnao', 'Varanasi'
  ],

  // West Bengal
  'West Bengal': [
    'Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin Dinajpur', 'Darjeeling',
    'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kolkata', 'Malda',
    'Murshidabad', 'Nadia', 'North 24 Parganas', 'Paschim Bardhaman', 'Paschim Medinipur',
    'Purba Bardhaman', 'Purba Medinipur', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur'
  ],

  // Telangana
  'Telangana': [
    'Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally',
    'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem', 'Mahabubabad',
    'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal-Malkajgiri', 'Mulugu', 'Nagarkurnool',
    'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla',
    'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy',
    'Warangal Rural', 'Warangal Urban', 'Yadadri Bhuvanagiri'
  ],

  // Andhra Pradesh
  'Andhra Pradesh': [
    'Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Kadapa', 'Krishna', 'Kurnool',
    'Nellore', 'Prakasam', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 'West Godavari'
  ],

  // Bihar
  'Bihar': [
    'Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar',
    'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur',
    'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger',
    'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur',
    'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'
  ],

  // Madhya Pradesh
  'Madhya Pradesh': [
    'Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul',
    'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas',
    'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur',
    'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 'Morena', 'Narsinghpur',
    'Neemuch', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore',
    'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh',
    'Ujjain', 'Umaria', 'Vidisha'
  ],

  // Punjab
  'Punjab': [
    'Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur',
    'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga',
    'Pathankot', 'Patiala', 'Rupnagar', 'Sangrur', 'SAS Nagar', 'SBS Nagar', 'Sri Muktsar Sahib', 'Tarn Taran'
  ],

  // Haryana
  'Haryana': [
    'Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar',
    'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal',
    'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'
  ],

  // NEPAL - Districts by Province
  'Province 1': [
    'Bhojpur', 'Dhankuta', 'Ilam', 'Jhapa', 'Khotang', 'Morang', 'Okhaldhunga',
    'Panchthar', 'Sankhuwasabha', 'Solukhumbu', 'Sunsari', 'Taplejung', 'Terhathum', 'Udayapur'
  ],
  'Province 2': [
    'Bara', 'Dhanusa', 'Mahottari', 'Parsa', 'Rautahat', 'Saptari', 'Sarlahi', 'Siraha'
  ],
  'Bagmati': [
    'Bhaktapur', 'Chitwan', 'Dhading', 'Dolakha', 'Kathmandu', 'Kavrepalanchok', 'Lalitpur',
    'Makawanpur', 'Nuwakot', 'Ramechhap', 'Rasuwa', 'Sindhuli', 'Sindhupalchok'
  ],
  'Gandaki': [
    'Baglung', 'Gorkha', 'Kaski', 'Lamjung', 'Manang', 'Mustang', 'Myagdi',
    'Nawalparasi East', 'Parbat', 'Syangja', 'Tanahu'
  ],
  'Lumbini': [
    'Arghakhanchi', 'Banke', 'Bardiya', 'Dang', 'Gulmi', 'Kapilvastu', 'Nawalparasi West',
    'Palpa', 'Pyuthan', 'Rolpa', 'Rukum East', 'Rupandehi'
  ],
  'Karnali': [
    'Dailekh', 'Dolpa', 'Humla', 'Jajarkot', 'Jumla', 'Kalikot', 'Mugu', 'Rukum West', 'Salyan', 'Surkhet'
  ],
  'Sudur Paschim': [
    'Achham', 'Baitadi', 'Bajhang', 'Bajura', 'Dadeldhura', 'Darchula', 'Doti', 'Kailali', 'Kanchanpur'
  ],

  // UK - Counties/Areas by Country
  'England': [
    'Greater London', 'West Midlands', 'Greater Manchester', 'West Yorkshire', 'Merseyside',
    'South Yorkshire', 'Tyne and Wear', 'Hampshire', 'Kent', 'Essex', 'Lancashire',
    'Surrey', 'Hertfordshire', 'Norfolk', 'Devon', 'Oxfordshire', 'Cambridgeshire',
    'Suffolk', 'Somerset', 'Nottinghamshire', 'Derbyshire', 'Leicestershire', 'Warwickshire'
  ],
  'Scotland': [
    'Glasgow', 'Edinburgh', 'Aberdeen', 'Dundee', 'Highlands', 'Fife', 'South Lanarkshire',
    'North Lanarkshire', 'Aberdeenshire', 'Perth and Kinross'
  ],
  'Wales': [
    'Cardiff', 'Swansea', 'Newport', 'Rhondda Cynon Taf', 'Caerphilly', 'Flintshire',
    'Carmarthenshire', 'Gwynedd', 'Pembrokeshire', 'Wrexham'
  ],
  'Northern Ireland': [
    'Belfast', 'Derry and Strabane', 'Armagh', 'Newry', 'Lisburn', 'Antrim', 'Down', 'Tyrone', 'Fermanagh'
  ],

  // UAE - Areas by Emirate
  'Dubai': [
    'Bur Dubai', 'Deira', 'Downtown Dubai', 'Dubai Marina', 'Jumeirah', 'Business Bay',
    'Palm Jumeirah', 'Dubai Silicon Oasis', 'Al Barsha', 'Jebel Ali', 'Al Quoz'
  ],
  'Abu Dhabi': [
    'Abu Dhabi City', 'Al Ain', 'Al Dhafra', 'Yas Island', 'Saadiyat Island', 'Reem Island',
    'Khalifa City', 'Mohammed Bin Zayed City', 'Masdar City'
  ],
  'Sharjah': [
    'Sharjah City', 'Al Majaz', 'Al Nahda', 'Al Qasimia', 'Al Khan', 'Muwaileh'
  ],

  // Singapore - Towns by Region
  'Central Region': [
    'Bishan', 'Bukit Merah', 'Bukit Timah', 'Downtown Core', 'Geylang', 'Kallang',
    'Marina East', 'Marina South', 'Marine Parade', 'Museum', 'Newton', 'Novena',
    'Orchard', 'Outram', 'Queenstown', 'River Valley', 'Rochor', 'Singapore River',
    'Southern Islands', 'Tanglin', 'Toa Payoh'
  ],
  'East Region': [
    'Bedok', 'Changi', 'Changi Bay', 'Pasir Ris', 'Paya Lebar', 'Tampines'
  ],
  'North Region': [
    'Central Water Catchment', 'Lim Chu Kang', 'Mandai', 'Sembawang', 'Simpang',
    'Sungei Kadut', 'Woodlands', 'Yishun'
  ],
  'North-East Region': [
    'Ang Mo Kio', 'Hougang', 'North-Eastern Islands', 'Punggol', 'Seletar', 'Sengkang', 'Serangoon'
  ],
  'West Region': [
    'Boon Lay', 'Bukit Batok', 'Bukit Panjang', 'Choa Chu Kang', 'Clementi', 'Jurong East',
    'Jurong West', 'Pioneer', 'Tengah', 'Tuas', 'Western Islands', 'Western Water Catchment'
  ],
};

// ============================================
// CITIES BY DISTRICT (Major Cities)
// ============================================

export const cities = {
  // India - Maharashtra
  'Mumbai City': ['Colaba', 'Fort', 'Marine Lines', 'Churchgate', 'Nariman Point', 'Cuffe Parade'],
  'Mumbai Suburban': ['Andheri', 'Bandra', 'Borivali', 'Goregaon', 'Kandivali', 'Malad', 'Mulund', 'Powai', 'Vikhroli'],
  'Thane': ['Thane City', 'Kalyan', 'Dombivli', 'Ulhasnagar', 'Bhiwandi', 'Mira-Bhayandar', 'Ambernath'],
  'Pune': ['Pune City', 'Pimpri-Chinchwad', 'Hadapsar', 'Kothrud', 'Wakad', 'Hinjewadi', 'Baner', 'Viman Nagar'],
  'Nagpur': ['Nagpur City', 'Kamptee', 'Hingna', 'Koradi', 'Butibori'],

  // India - Karnataka
  'Bengaluru Urban': ['Whitefield', 'Electronic City', 'Koramangala', 'Indiranagar', 'Jayanagar', 'BTM Layout', 'HSR Layout', 'Marathahalli', 'Yelahanka', 'Bannerghatta'],
  'Mysuru': ['Mysuru City', 'Nanjangud', 'Hunsur', 'Periyapatna'],

  // India - Tamil Nadu
  'Chennai': ['T. Nagar', 'Adyar', 'Anna Nagar', 'Velachery', 'OMR', 'Porur', 'Guindy', 'Tambaram', 'Ambattur'],
  'Coimbatore': ['Coimbatore City', 'Gandhipuram', 'RS Puram', 'Peelamedu', 'Saibaba Colony'],

  // India - Gujarat
  'Ahmedabad': ['Ahmedabad City', 'Maninagar', 'Satellite', 'Vastrapur', 'Navrangpura', 'Bodakdev', 'SG Highway'],
  'Surat': ['Surat City', 'Adajan', 'Vesu', 'Athwa', 'Varachha'],

  // India - Delhi
  'Central Delhi': ['Connaught Place', 'Karol Bagh', 'Paharganj', 'Chandni Chowk'],
  'South Delhi': ['Greater Kailash', 'Saket', 'Hauz Khas', 'Vasant Kunj', 'Mehrauli'],
  'New Delhi': ['NDMC Area', 'Chanakyapuri', 'Lodhi Colony'],

  // Nepal - Bagmati
  'Kathmandu': ['Kathmandu Metropolitan City', 'Kirtipur', 'Budhanilkantha', 'Tokha', 'Chandragiri', 'Dakshinkali', 'Nagarjun', 'Kageshwori Manohara', 'Gokarneshwor', 'Shankharapur', 'Tarakeshwor'],
  'Lalitpur': ['Lalitpur Metropolitan City', 'Godawari', 'Mahalaxmi', 'Konjyosom', 'Bagmati'],
  'Bhaktapur': ['Bhaktapur Municipality', 'Madhyapur Thimi', 'Suryabinayak', 'Changunarayan'],
};

// ============================================
// LEGACY SUPPORT - Province/Municipality mappings
// ============================================

// For backward compatibility with existing code that uses 'province' for states
export const province = {
  'Nepal': states['nepal'],
  'India': states['india'],
  // Add other country mappings as needed
};

// For backward compatibility
export const municipalites = cities;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get states/provinces for a country
 */
export const getStatesForCountry = (countryValue) => {
  const normalizedCountry = countryValue?.toLowerCase().replace(/\s+/g, '_');
  return states[normalizedCountry] || [];
};

/**
 * Get districts for a state
 */
export const getDistrictsForState = (stateName) => {
  return districts[stateName] || [];
};

/**
 * Get cities for a district
 */
export const getCitiesForDistrict = (districtName) => {
  return cities[districtName] || [];
};

/**
 * Get address hierarchy labels for a country
 */
export const getAddressLabels = (countryValue) => {
  const normalizedCountry = countryValue?.toLowerCase().replace(/\s+/g, '_');

  const labelMappings = {
    india: { state: 'State', district: 'District', municipality: 'City/Town', city: 'Area/Locality' },
    nepal: { state: 'Province', district: 'District', municipality: 'Municipality', city: 'City/Town' },
    united_states: { state: 'State', district: 'County', municipality: 'City', city: 'City' },
    united_kingdom: { state: 'Country', district: 'County/Region', municipality: 'City/Town', city: 'City/Town' },
    canada: { state: 'Province/Territory', district: 'Region', municipality: 'City', city: 'City' },
    australia: { state: 'State/Territory', district: 'Region', municipality: 'Suburb/City', city: 'Suburb/City' },
    uae: { state: 'Emirate', district: 'Area', municipality: 'District', city: 'City' },
    singapore: { state: 'Region', district: 'Planning Area', municipality: 'Town', city: 'Town' },
    germany: { state: 'State (Bundesland)', district: 'District (Kreis)', municipality: 'City/Town', city: 'City/Town' },
    france: { state: 'Region', district: 'Department', municipality: 'City/Commune', city: 'City/Commune' },
    japan: { state: 'Prefecture', district: 'City/District', municipality: 'Ward/Town', city: 'Ward/Town' },
    china: { state: 'Province', district: 'Prefecture/City', municipality: 'District/County', city: 'City' },
    brazil: { state: 'State', district: 'Municipality', municipality: 'District', city: 'City' },
    south_africa: { state: 'Province', district: 'District', municipality: 'Municipality', city: 'City' },
    bangladesh: { state: 'Division', district: 'District', municipality: 'Upazila', city: 'City' },
    pakistan: { state: 'Province', district: 'District', municipality: 'Tehsil', city: 'City' },
    sri_lanka: { state: 'Province', district: 'District', municipality: 'Divisional Secretariat', city: 'City' },
    malaysia: { state: 'State', district: 'District', municipality: 'Mukim', city: 'Town' },
    thailand: { state: 'Province', district: 'District', municipality: 'Sub-district', city: 'City' },
    indonesia: { state: 'Province', district: 'Regency/City', municipality: 'District', city: 'City' },
    philippines: { state: 'Region', district: 'Province', municipality: 'City/Municipality', city: 'City' },
    vietnam: { state: 'Province', district: 'District', municipality: 'Commune', city: 'City' },
    south_korea: { state: 'Province/City', district: 'District', municipality: 'Neighborhood', city: 'City' },
    nigeria: { state: 'State', district: 'Local Government', municipality: 'Town', city: 'City' },
    egypt: { state: 'Governorate', district: 'Markaz', municipality: 'City/Village', city: 'City' },
    kenya: { state: 'County', district: 'Sub-County', municipality: 'Ward', city: 'City' },
    saudi_arabia: { state: 'Region', district: 'Governorate', municipality: 'City', city: 'City' },
    turkey: { state: 'Region', district: 'Province', municipality: 'District', city: 'City' },
    russia: { state: 'Federal District', district: 'Oblast/Republic', municipality: 'City/District', city: 'City' },
    mexico: { state: 'State', district: 'Municipality', municipality: 'Locality', city: 'City' },
    italy: { state: 'Region', district: 'Province', municipality: 'Municipality', city: 'City' },
    spain: { state: 'Autonomous Community', district: 'Province', municipality: 'Municipality', city: 'City' },
    netherlands: { state: 'Province', district: 'Municipality', municipality: 'City/Town', city: 'City/Town' },
    switzerland: { state: 'Canton', district: 'District', municipality: 'Municipality', city: 'City' },
  };

  return labelMappings[normalizedCountry] || { state: 'State/Province', district: 'District/County', municipality: 'City/Town', city: 'City' };
};

/**
 * Check if a country uses ward numbers
 */
export const countryUsesWardNumber = (countryValue) => {
  const countriesWithWard = ['nepal', 'japan', 'south_korea', 'kenya'];
  return countriesWithWard.includes(countryValue?.toLowerCase().replace(/\s+/g, '_'));
};

export default { states, districts, cities, province, municipalites, getStatesForCountry, getDistrictsForState, getCitiesForDistrict, getAddressLabels, countryUsesWardNumber };
