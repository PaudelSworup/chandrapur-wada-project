import {View, Text, BackHandler, SafeAreaView} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ParibarbibaranInitialValues,
  familyValidationSchema,
} from '../../utils/Validation/Validation';
import {Formik} from 'formik';
import {ScrollView} from 'react-native';
import FirstRegistrationView from './FirstRegistrationView';
import SecondRegistrationView from './SecondRegistrationView';
import ThirdRegistrationView from './ThirdRegistrationView';
import FourthRegistrationView from './FourthRegistrationView';
import FifthRegistrationView from './FifthRegistrationView';
import {TouchableOpacity} from 'react-native';
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from 'react-native-heroicons/outline';
import {useFocusEffect} from '@react-navigation/native';
import {addFamilyData} from '../../APIS/API/api';
import {useToast} from 'react-native-toast-notifications';
import {useAppSelector} from '../../store/store';
import {useDispatch} from 'react-redux';
import {setFirstCoordinate} from '../../store/coordinateSlice';
const ParibarBibaranAddComp = () => {
  const toast = useToast();

  const dispatch = useDispatch();

  const {id} = useAppSelector((state: any) => state.users);

  const [ViewShow1, setViewShow1] = useState(false);

  const [ViewShow2, setViewShow2] = useState(false);

  const [ViewShow3, setViewShow3] = useState(false);

  const [ViewShow4, setViewShow4] = useState(false);

  const [ViewShow5, setViewShow5] = useState(false);

  const showNext = () => {
    if (!ViewShow1) {
      setViewShow1(true);

      setViewShow2(true);
    } else if (ViewShow2) {
      setViewShow2(false);

      setViewShow3(true);
    } else if (ViewShow3) {
      setViewShow3(false);

      setViewShow4(true);
    } else if (ViewShow4) {
      setViewShow4(false);

      setViewShow5(true);
    }
  };

  const handleBackPress = () => {
    console.log('hello button');
    if (ViewShow5) {
      // If in the third view, go back to the second view
      setViewShow5(false);
      setViewShow4(true);
      return true;
    } else if (ViewShow4) {
      // If in the second view, go back to the first view
      setViewShow4(false);
      setViewShow3(true);
      return true; // Prevent default back behavior
    } else if (ViewShow3) {
      setViewShow3(false);
      setViewShow2(true);
      return true;
    } else if (ViewShow1) {
      setViewShow2(false);
      setViewShow1(false);
      return true;
    }
    // Otherwise, allow default back behavior
    return false;
  };

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      };
    }, [handleBackPress]),
  );

  return (
    <Formik
      initialValues={ParibarbibaranInitialValues}
      validationSchema={familyValidationSchema}
      onSubmit={(val: any, {resetForm}) => {
        console.log(val);
        const ltdTypeString = Array.isArray(val.ltdType)
          ? val.ltdType.join(',')
          : '';
        const disableTypeString = Array.isArray(val.disableType)
          ? val.disableType.join(',')
          : '';

        const vehicleTypeString = Array.isArray(val.vehicleType)
          ? val.vehicleType.join(',')
          : '';
        // console.log(val.ltdType.join(','));
        const reqData = {
          houseId: val.houseId,
          agricultureType: val.agricultureType,
          wasteManagement: val.wasteManagement,
          remarks: val.remarks,
          diseasesType: ltdTypeString,
          educationType:
            parseInt(val.phd) > 0
              ? 'phd'
              : parseInt(val.master) > 0
              ? 'masters'
              : parseInt(val.bachelor) > 0
              ? 'bachelor'
              : parseInt(val.plusTwo) > 0
              ? 'plusTwo'
              : parseInt(val.madhymik) > 0
              ? 'madhymic'
              : parseInt(val.nimnaMadhymic) > 0
              ? 'nimna madhymic'
              : parseInt(val.prathamik) > 0
              ? 'prathamik'
              : parseInt(val.uneducated) > 0
              ? 'uneducated'
              : parseInt(val.samanyaLekhpad) > 0
              ? 'samanyaLekhpad'
              : 'plusTwo',
          number:
            parseInt(val.phd) > 0
              ? parseInt(val.phd)
              : parseInt(val.master) > 0
              ? parseInt(val.master)
              : parseInt(val.bachelor) > 0
              ? parseInt(val.bachelor)
              : parseInt(val.plusTwo) > 0
              ? parseInt(val.plusTwo)
              : parseInt(val.madhymik) > 0
              ? parseInt(val.madhymik)
              : parseInt(val.nimnaMadhymic) > 0
              ? parseInt(val.nimnaMadhymic)
              : parseInt(val.prathamik) > 0
              ? parseInt(val.prathamik)
              : parseInt(val.samanyaLekhpad) > 0
              ? parseInt(val.samanyaLekhpad)
              : parseInt(val.uneducated) > 0
              ? parseInt(val.uneducated)
              : 0,
          countryNameOne: val.countryNameOne,
          countryNameTwo: val.countryNameTwo,
          health: val.health,
          education: val.education,
          privateVehicle: val.privateVehicle,
          vehicleType: vehicleTypeString,
          vehicleNo: val.vehicleNo,
          cookingSource: val.cookingSource,
          disabilityType: disableTypeString,
          age: val.familyAge,
          memberNo: val.memberNo,
          maleNo: val.maleNo,
          femaleNo: val.femaleNo,
          othersNo:
            val.othersNo === '' || val.othersNo === null ? 0 : val.othersNo,
          ownerNameEng: val.houseOwnerNameNepali,
          ownerNameNp: val.houseOwnerNameNepali,
          ownerFatherName: val.houseOwnerFathersName,
          ownerGrandFatherName: val.houseOwnerGrandFathersName,
          ownerMotherName: val.houseOwnerMothersName,
          motherTounge: val.motherTounge,
          caste: val.caste,
          religion: val.religion,
          citizenshipNo: val.citizenshipNum,
          citizenshipDistrict: val.citizenshipDistrict,
          OwnerAddress: val.ownerAddress,
          phone: val.phone,
          email: val.email === '' ? null : val.email,
          monthlyIncome: val.monthlyIncome,
          incomeMajorSource: val.incomeMajorSource,
          monthlyExpen: val.monthlyExpen,
          isFamilyInRent: val.isRented,
          familyOwnerGender: val.gender,
          userId: id,
        };
        addFamilyData(reqData).then(res => {
          if (res?.success === true) {
            toast.show(`${res?.message}`, {
              type: 'success',
              placement: 'bottom',
            });

            dispatch(
              setFirstCoordinate({
                lattitude: 0,
                longitude: 0,
                coordinateType: 'one',
              }),
            );
            resetForm();
          } else {
            toast.show(`${res?.error}`, {
              type: 'danger',
              placement: 'bottom',
            });
          }
        });
      }}>
      {({values, errors, handleChange, handleSubmit, setFieldValue}) => (
        <SafeAreaView className="bg-white">
          <ScrollView className="mx-3">
            {!ViewShow1 && (
              <FirstRegistrationView
                values={values}
                handleChange={handleChange}
                errors={errors}
              />
            )}

            {ViewShow2 && (
              <SecondRegistrationView
                values={values}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
                errors={errors}
              />
            )}

            {ViewShow3 && (
              <ThirdRegistrationView
                values={values}
                handleChange={handleChange}
                errors={errors}
              />
            )}

            {ViewShow4 && (
              <FourthRegistrationView
                values={values}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
                errors={errors}
              />
            )}

            {ViewShow5 && (
              <FifthRegistrationView
                values={values}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            )}

            <View className="flex-row justify-between p-4 px-3">
              <TouchableOpacity>
                <ArrowLeftCircleIcon
                  color="green"
                  size={35}
                  onPress={handleBackPress}
                />
              </TouchableOpacity>

              {!ViewShow5 && (
                <TouchableOpacity>
                  <ArrowRightCircleIcon
                    color="green"
                    size={35}
                    onPress={showNext}
                  />
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
        // <ParibarbibaranAddComponent
        //   values={values}
        //   handleChange={handleChange}
        //   handleSubmit={handleSubmit}
        // />
      )}
    </Formik>
  );
};

export default ParibarBibaranAddComp;
