import * as Yup from 'yup';
export const ParibarbibaranInitialValues = {
  houseId: '',
  houseOwnerNameNepali: '',
  houseOwnerFathersName: '',
  houseOwnerGrandFathersName: '',
  houseOwnerMothersName: '',
  motherTounge: '',
  caste: '',
  religion: '',
  citizenshipNum: '',
  citizenshipDistrict: '',
  ownerAddress: '',
  phone: '',
  email: '',
  memberNo: '',
  maleNo: '',
  femaleNo: '',
  othersNo: '',
  familyAge: '',
  ltdNo: '',
  ltdType: '',
  disableNo: '',
  disableType: '',
  // bathroom: '',
  // water: '',
  // waterSource: '',
  // toilet: '',
  // toiletType: '',
  // electricity: '',
  cookingSource: '',
  monthlyIncome: '',
  incomeMajorSource: '',
  monthlyExpen: '',
  health: '',
  education: '',

  privateVehicle: 'छैन',
  phd: '',
  master: '',
  bachelor: '',
  plusTwo: '',
  madhymik: '',
  nimnaMadhymic: '',
  prathamik: '',
  samanyaLekhpad: '',
  uneducated: '',
  agricultureType: '',
  wasteManagement: '',
  foreignStudySadasya: '',
  countryNameOne: '',
  foreignWorkSadasya: '',
  countryNameTwo: '',
  remarks: '',
  vehicleType: '',
  vehicleNo: '',
  transportType: '',
  gender: '',
  isRented: '',
  // entryBy: '',
};

export const homeInitialvalues = {
  houseOwnerNameNeplai: '',
  citizenshipNum: '',
  latitude: '',
  longitude: '',
  houseTypeDropDown: '',
  houseCategoryDropDown: '',
  buildYear: '',
  floor: '',
  frontLength: '',
  backBredth: '',
  wardDropDown: '',
  toleDropDown: '',
  remarks: '',
  gender: '',
  bathroom: '',
  water: '',
  waterSource: '',
  toilet: '',
  toiletType: '',
  electricity: '',
  internet: '',
  publicVehicle: '',
  // entryBy: '',
};

export const homeValidationSchema = Yup.object().shape({
  houseOwnerNameNeplai: Yup.string()
    .min(3, 'too short')
    .max(50, 'too long')
    .required('कृपया आफ्नो नाम भर्नुहोला '),
  citizenshipNum: Yup.string().required('कृपया आफ्नो नागरिकता नं हाल्नु होला '),
  latitude: Yup.string().required('कृपया latitude हाल्नु होला'),
  longitude: Yup.string().required('कृपया longitude हाल्नु होला'),
  houseTypeDropDown: Yup.string().required('कम्तिमा एउटा वस्तु चयन गर्नुहोस्'),
  houseCategoryDropDown: Yup.string().required(
    'कम्तिमा एउटा वस्तु चयन गर्नुहोस्',
  ),
  buildYear: Yup.string().required('कृपया घर बनेको बर्ष  हाल्नु होला'),
  floor: Yup.string().required('कृपया घरको तल्ला हाल्नु होला'),
  frontLength: Yup.string().required('कृपया घरको अगाडि (लम्बाई)  हाल्नु होला'),
  backBredth: Yup.string().required('कृपया घरको पछाडि (चौडाइ)  हाल्नु होला'),
  wardDropDown: Yup.string().required('कम्तिमा एउटा वस्तु चयन गर्नुहोस्'),
  toleDropDown: Yup.string().required('कम्तिमा एउटा वस्तु चयन गर्नुहोस्'),
  remarks: Yup.string(),
  gender: Yup.string().required('लिङ्ग प्रकार आवश्यक छ'),
  bathroom: Yup.string().required('बाथरूम सेवा आवश्यक छ।'),
  water: Yup.string().required('खानेपानिको उपलब्धता आवश्यक छ।'),
  waterSource: Yup.string().required('खानेपानिको श्रोत आवश्यक छ'),
  toilet: Yup.string().required('शौचालय सुबिधा आवश्यक छ।'),
  toiletType: Yup.string().required('शौचालयको प्रकार आवश्यक छ।'),
  electricity: Yup.string().required('बिजुलीको सुबिधा आवश्यक छ।'),
  internet: Yup.string().required('इंटरनेटको सुबिधा आवश्यक छ।'),
  publicVehicle: Yup.string().required(
    'सार्बजनिक यातायातको उपलब्धता आवश्यक छ।',
  ),

  // entryBy: Yup.string().required('एंट्री गर्ने वेक्ति को नाम आवश्यक छ।'),
});

export const registerInitialValues = {
  fullname: '',
  email: '',
  password: '',
  confirm_password: '',
};

export const registerValidationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(3, 'too short')
    .max(50, 'too long')
    .required('कृपया आफ्नो पुरा नाम भर्नुहोला '),
  email: Yup.string()
    .email("'मान्य इमेल ठेगाना प्रविष्ट गर्नुहोस्'")
    .required('कृपया आफ्नो इमेल एड्रेस भर्नुहोला ')
    .trim(),
  password: Yup.string().required('कृपया आफ्नो पासवर्ड भर्नुहोला'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'पुष्टि पासवर्ड मिल्नुपर्छ')
    .required('कृपया पुष्टि पासवर्ड प्रविष्ट गर्नुहोस्'),
});

export const loginInitialValues = {
  email: '',
  password: '',
};

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('मान्य इमेल ठेगाना प्रविष्ट गर्नुहोस्')
    .required('कृपया आफ्नो इमेल एड्रेस भर्नुहोला ')
    .trim(),
  password: Yup.string().required('कृपया आफ्नो पासवर्ड भर्नुहोला'),
});

export const familyValidationSchema = Yup.object().shape({
  houseId: Yup.string().required('घर आईडी आवश्यक छ।'),
  houseOwnerNameNepali: Yup.string().required('नाम आवश्यक छ।'),
  houseOwnerFathersName: Yup.string(),
  houseOwnerGrandFathersName: Yup.string(),
  houseOwnerMothersName: Yup.string(),
  motherTounge: Yup.string().required('मातृभाषा आवश्यक छ।'),
  caste: Yup.string().required('जाति आवश्यक छ।'),
  religion: Yup.string().required('धर्म आवश्यक छ।'),
  citizenshipNum: Yup.string().required('नागरिकता नम्बर आवश्यक छ।'),
  citizenshipDistrict: Yup.string().required('नागरिकता जिल्ला आवश्यक छ।'),
  ownerAddress: Yup.string().required('ठेगाना आवश्यक छ।'),
  phone: Yup.string().required('फोन नम्बर आवश्यक छ।'),
  email: Yup.string().email('सही इमेल ढाँचा प्रविष्ट गर्नुहोस्').trim(),
  memberNo: Yup.number().required('सदस्य संख्या आवश्यक छ।'),
  maleNo: Yup.number().required('पुरुष संख्या आवश्यक छ।'),
  femaleNo: Yup.number().required('महिला संख्या आवश्यक छ।'),
  othersNo: Yup.number(),
  familyAge: Yup.string().required('परिवारको उमेर आवश्यक छ।'),
  // bathroom: Yup.string().required('बाथरूम सेवा आवश्यक छ।'),
  // water: Yup.string().required('खानेपानिको उपलब्धता आवश्यक छ।'),
  // waterSource: Yup.string().required('खानेपानिको श्रोत आवश्यक छ'),
  // toilet: Yup.string().required('शौचालय सुबिधा आवश्यक छ।'),
  // toiletType: Yup.string().required('शौचालयको प्रकार आवश्यक छ।'),
  // electricity: Yup.string().required('बिजुलीको सुबिधा आवश्यक छ।'),
  cookingSource: Yup.string().required('खाना पकाउने इंधन आवश्यक छ।'),
  monthlyIncome: Yup.number().required('प्रति महीना कुल आय आवश्यक छ।'),
  incomeMajorSource: Yup.string().required('आम्दानिको मुख्य श्रोत आवश्यक छ।'),
  monthlyExpen: Yup.number().required('कुल अनुमानित मासिक खर्च आवश्यक छ।'),
  health: Yup.string().required('स्वस्थ्यको सुबिधा आवश्यक छ।'),
  education: Yup.string().required('शैक्षिक संस्थाको सुबिधा आवश्यक छ।'),

  isRented: Yup.string().required('घर प्रकार आवश्यक छ'),
  agricultureType: Yup.string().required('बहु-कृषि आवश्यक छ'),
  wasteManagement: Yup.string().required('फोहोर व्यवस्थापन आवश्यक छ'),

  // ltdNo: Yup.number(),
  // ltdType: Yup.string(),
  // disableNo: Yup.number(),
  // disableType: Yup.string(),
  // privateVehicle: Yup.string(),
  // phd: Yup.number(),
  // master: Yup.number(),
  // bachelor: Yup.number(),
  // plusTwo: Yup.number(),
  // madhymik: Yup.number(),
  // nimnaMadhymic: Yup.number(),
  // prathamik: Yup.number(),
  // samanyaLekhpad: Yup.number(),
  // uneducated: Yup.number(),
  // agricultureType: Yup.string(),
  // wasteManagement: Yup.string(),
  // foreignStudySadasya: Yup.string(),
  // countryNameOne: Yup.string(),
  // foreignWorkSadasya: Yup.string(),
  // countryNameTwo: Yup.string(),
  remarks: Yup.string(),
  gender: Yup.string().required('लिङ्ग प्रकार आवश्यक छ'),
  // vehicleType: Yup.string(),
  // vehicleNo: Yup.string(),
  // transportType: Yup.string(),
  // entryBy: Yup.string().required('एंट्री गर्ने वेक्ति को नाम आवश्यक छ।'),
});

export const roadInitialValues = {
  nameEng: '',
  nameNepali: '',
  startLandmark: '',
  startLongitude: '',
  startLatitude: '',
  currentPurposeWidth: '',
  FuturePuropseWidth: '',
  startWardDropDown: '',
  StartToleDropDown: '',
  remarks: '',
};

export const roadValidationSchema = Yup.object().shape({
  nameEng: Yup.string().min(3, 'too short').max(50, 'too long'),
  nameNepali: Yup.string()
    .min(3, 'too short')
    .max(50, 'too long')
    .required('Nepali ma name halnuhos'),
  startLandmark: Yup.string().required('Landmark is required'),
  startLongitude: Yup.string().required('Longitude is required'),
  startLatitude: Yup.string().required('Latitude is required'),
  currentPurposeWidth: Yup.string().required('current width is required'),
  FuturePuropseWidth: Yup.string().required('Future width is required'),
  startWardDropDown: Yup.string().required('select atleast one item'),
  StartToleDropDown: Yup.string().required('select atleast one item'),
  remarks: Yup.string(),
});

export const endPointValue = {
  endLandmark: '',
  endLongitude: '',
  endLatitude: '',
  endWardDropDown: '',
  endToleDropDown: '',
};

export const endPointValuesSchema = Yup.object().shape({
  endLandmark: Yup.string().required('Landmark is required'),
  endLongitude: Yup.string().required('Longitude is required'),
  endLatitude: Yup.string().required('Latitude is required'),
  endWardDropDown: Yup.string().required('select atleast one item'),
  endToleDropDown: Yup.string().required('select atleast one item'),
});
