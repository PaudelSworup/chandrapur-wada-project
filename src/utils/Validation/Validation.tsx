import * as Yup from 'yup';
export const initialValues = {
  houseOwnerNameNeplai: '',
  houseOwnerName: '',
  bubaKoNam: '',
  aamaKoNam: '',
  toleDropDown: '',
  gharNum: '',
  matribhasaDropdown: '',
  jatiDropdown: '',
  dharma: '',
  nagritaNum: '',
  nagritaJillaDropdown: '',
  sthaiThegana: '',
  phoneNum: '',
  pariwarSankhya: '',
  purusSankhya: '',
  mahilaSankhya: '',
  aanya: '',
  eighteenAbove: '',
  eighteenBelow: '',
};

export const validationSchema = Yup.object().shape({
  nameEng: Yup.string()
    .min(3, 'too short')
    .max(50, 'too long')
    .required('Name is required'),
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
  remarks: Yup.string().required('remarks is required'),
});

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
  remarks: Yup.string().required('remarks गर्नुहोस्'),
});
