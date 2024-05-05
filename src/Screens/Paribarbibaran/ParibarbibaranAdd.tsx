import {View, Text} from 'react-native';
import React from 'react';
import ParibarbibaranAddComponent from '../../components/Paribarbibaran/ParibarbibaranAddComponent';
import {Formik} from 'formik';
import {ParibarbibaranInitialValues} from '../../utils/Validation/Validation';
import {addFamilyData} from '../../APIS/API/api';
import ParibarBibaranAddComp from '../../components/Paribarbibaran/ParibarBibaranAddComp';
// import {insertFamilyData} from '../../APIS/API/api';

const ParibarbibaranAdd = () => {
  return (
    <ParibarBibaranAddComp />
    // <Formik
    //   initialValues={ParibarbibaranInitialValues}
    //   onSubmit={val => {
    //     const reqData = {
    //       agricultureType: val.agricultureType,
    //       wasteManagement: val.wasteManagement,
    //       remarks: val.remarks,
    //       diseasesType: val.disableType,
    //       educationType:
    //         parseInt(val.phd) > 0
    //           ? 'phd'
    //           : parseInt(val.master) > 0
    //           ? 'masters'
    //           : parseInt(val.bachelor) > 0
    //           ? 'bachelor'
    //           : parseInt(val.plusTwo) > 0
    //           ? 'plusTwo'
    //           : parseInt(val.madhymik) > 0
    //           ? 'madhymic'
    //           : parseInt(val.nimnaMadhymic) > 0
    //           ? 'nimna madhymic'
    //           : parseInt(val.prathamik) > 0
    //           ? 'prathamik'
    //           : parseInt(val.uneducated) > 0
    //           ? 'uneducated'
    //           : parseInt(val.samanyaLekhpad) > 0
    //           ? 'samanyaLekhpad'
    //           : 'plusTwo',
    //       number:
    //         parseInt(val.phd) > 0
    //           ? parseInt(val.phd)
    //           : parseInt(val.master) > 0
    //           ? parseInt(val.master)
    //           : parseInt(val.bachelor) > 0
    //           ? parseInt(val.bachelor)
    //           : parseInt(val.plusTwo) > 0
    //           ? parseInt(val.plusTwo)
    //           : parseInt(val.madhymik) > 0
    //           ? parseInt(val.madhymik)
    //           : parseInt(val.nimnaMadhymic) > 0
    //           ? parseInt(val.nimnaMadhymic)
    //           : parseInt(val.prathamik) > 0
    //           ? parseInt(val.prathamik)
    //           : parseInt(val.samanyaLekhpad) > 0
    //           ? parseInt(val.samanyaLekhpad)
    //           : parseInt(val.uneducated) > 0
    //           ? parseInt(val.uneducated)
    //           : 0,
    //       countryNameOne: val.countryNameOne,
    //       countryNameTwo: val.countryNameTwo,
    //       health: val.health,
    //       education: val.education,
    //       internet: val.internet,
    //       publicVehicle: val.publicVehicle,
    //       privateVehicle: val.privateVehicle,
    //       vehicleType: 'motor bike',
    //       vehicleNo: 'ba 123',
    //       bathroom: val.bathroom,
    //       water: val.water,
    //       waterSource: val.waterSource,
    //       toilet: val.toilet,
    //       toiletType: val.toiletType,
    //       electricity: val.electricity,
    //       cookingSource: val.cookingSource,
    //       disabilityType: val.disableType,
    //       age: val.pariwarSadasyaUmer,
    //       memberNo: val.memberNo,
    //       maleNo: val.maleNo,
    //       femaleNo: val.femaleNo,
    //       othersNo: val.othersNo,
    //       ownerNameEng: val.houseOwnerNameNepali,
    //       ownerNameNp: val.houseOwnerNameNepali,
    //       ownerFatherName: val.houseOwnerFathersName,
    //       ownerGrandFatherName: val.houseOwnerGrandFathersName,
    //       ownerMotherName: val.houseOwnerMothersName,
    //       motherTounge: val.motherTounge,
    //       caste: val.caste,
    //       religion: val.religion,
    //       citizenshipNo: val.citizenshipNum,
    //       citizenshipDistrict: val.citizenshipDistrict,
    //       OwnerAddress: val.ownerAddress,
    //       phone: val.phone,
    //       email: val.email,
    //       monthlyIncome: val.monthlyIncome,
    //       incomeMajorSource: val.incomeMajorSource,
    //       monthlyExpen: val.monthlyExpen,
    //     };
    //     addFamilyData(reqData).then(res => console.log(res));
    //   }}>
    //   {({values, errors, handleChange, handleSubmit}) => (
    //     <ParibarbibaranAddComponent
    //       values={values}
    //       handleChange={handleChange}
    //       handleSubmit={handleSubmit}
    //     />
    //   )}
    // </Formik>
  );
};

export default ParibarbibaranAdd;
