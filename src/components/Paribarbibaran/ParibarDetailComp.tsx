import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {ActivityIndicator, Divider} from 'react-native-paper';
import {useQuery} from 'react-query';
import {RouteProp, useRoute} from '@react-navigation/native';
import {IMAGE_URL, paribarDetail} from '../../APIS/API/api';

type RootStackParamList = {
  detailKey: {id?: string};
};

const ParibarDetailComp = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'detailKey'>>();
  const {id} = route.params;
  const ID = parseInt(id as string);
  const {data, isLoading, isError} = useQuery(
    ['detail', id],
    async () => paribarDetail(ID),
    {
      onSettled: data => {
        // console.log(data);
        // console.log(data);
      },
    },
  );

  const incomeExpData = data?.family?.IncomeExps[0];
  const familyVehicles = data?.family?.FamilyVehicles[0];
  const familyAges = data?.family.FamilyAges[0];
  const LTD = data?.family.Ltds;
  const education = data?.family.Education;

  // console.log(LTD.diseasesType);

  const mapEducationTypeToNepali = (educationType: string): string => {
    switch (educationType) {
      case 'phd':
        return 'पीएचडी';
      case 'master':
        return 'मास्टर्स';
      case 'bachelor':
        return 'ब्याचलर';
      case 'plusTwo':
        return 'प्लस टू';
      case 'madhymic':
        return 'माध्यमिक';
      case 'nimna madhymic':
        return 'निम्न माध्यमिक';
      case 'prathamik':
        return 'प्राथमिक';
      case 'uneducated':
        return 'निरक्षर';
      case 'samanyaLekhpad':
        return 'सामान्य लेखपढ़';
      default:
        return educationType; // Return original value if no match found
    }
  };

  if (isLoading) {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" animating={true} color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView className="bg-slate-200">
        <View className="bg-[#fffdfd]   mt-40 px-5 py-2  rounded-tl-[45px] rounded-tr-[45px]">
          <View
            className="mt-[-80px] h-40 rounded-lg"
            style={{
              elevation: 5,
              backgroundColor: 'white',
            }}>
            {/* {data && data?.houses?.houseProfile?.image ? (
              <Image
                source={{
                  uri: `${IMAGE_URL}/${data.houses.houseProfile.image}`,
                }}
                className="h-full w-full object-contain rounded-lg"
              />
            ) : (
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99t_8bQSCEimMqBrecbl4pHDAy0xGECIITQ',
                }}
                className="h-full w-full object-cover rounded-lg"
              />
            )} */}
          </View>
        </View>

        <ScrollView className="bg-white px-2">
          <Text className="text-lg text-black">पारिवारिक विवरण</Text>
          <View style={styles.row}>
            <Text style={styles.text}>परिवार मुलीको नाम </Text>
            <Text style={styles.text}>
              {data?.family.FamilyOwner.ownerNameNp}
            </Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>परिवारमूलिको लिंग</Text>
            <Text style={styles.text}>
              {data?.family.FamilyOwner.familyOwnerGender}
            </Text>
          </View>
          <Divider style={styles.divider} />

          {data?.family && data?.family.FamilyOwner.ownerFatherName != '' && (
            <>
              <View style={styles.row}>
                <Text style={styles.text}>बुबाको नाम</Text>
                <Text style={styles.text}>
                  {data?.family.FamilyOwner.ownerFatherName}
                </Text>
              </View>
              <Divider style={styles.divider} />
            </>
          )}

          {data?.family &&
            data?.family.FamilyOwner.ownerGrandFatherName != '' && (
              <>
                <View style={styles.row}>
                  <Text style={styles.text}>हजुरबुबाको नाम </Text>
                  <Text style={styles.text}>
                    {data?.family.FamilyOwner.ownerGrandFatherName}
                  </Text>
                </View>
                <Divider style={styles.divider} />
              </>
            )}

          {data?.family && data?.family.FamilyOwner.ownerMotherName != '' && (
            <>
              <View style={styles.row}>
                <Text style={styles.text}>आमाको नाम </Text>
                <Text style={styles.text}>
                  {data?.family.FamilyOwner.ownerMotherName}
                </Text>
              </View>
              <Divider style={styles.divider} />
            </>
          )}

          <View style={styles.row}>
            <Text style={styles.text}>मातृभाषा </Text>
            <Text style={styles.text}>
              {data?.family.FamilyOwner.motherTounge}
            </Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>जाती</Text>
            <Text style={styles.text}>{data?.family.FamilyOwner.caste}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>धर्म</Text>
            <Text style={styles.text}>{data?.family.FamilyOwner.religion}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>नागरिकताको नम्बर</Text>
            <Text style={styles.text}>
              {data?.family.FamilyOwner.citizenshipNo}
            </Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>ठेगाना</Text>
            <Text style={styles.text}>
              {data?.family.FamilyOwner?.OwnerAddress}
            </Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>फोन</Text>
            <Text style={styles.text}>{data?.family.FamilyOwner?.phone}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>घर प्रकार</Text>
            <Text style={styles.text}>
              {data?.family.FamilyOwner?.isFamilyInRent}
            </Text>
          </View>
          <Divider style={styles.divider} />

          {LTD.length !== 0 && (
            <>
              <View style={styles.row}>
                <Text style={styles.text}>ltd</Text>
                <Text style={styles.text}>{LTD[0].diseasesType}</Text>
              </View>
              <Divider style={styles.divider} />
            </>
          )}

          <View style={styles.row}>
            <Text style={styles.text}>खाना पकाउने स्रोत</Text>
            <Text style={styles.text}>
              {data?.family.FamilyService?.cookingSource}
            </Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>स्वास्थ्य</Text>
            <Text style={styles.text}>
              {data?.family.FamilyService?.health}
            </Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>शिक्षा</Text>
            <Text style={styles.text}>
              {data?.family.FamilyService?.education}
            </Text>
          </View>
          <Divider style={styles.divider} />

          {education.length !== 0 && (
            <>
              <View style={styles.row}>
                <Text style={styles.text}>शिक्षा स्तर</Text>
                <Text style={styles.text}>
                  {mapEducationTypeToNepali(education[0].educationType)}
                </Text>
              </View>
              <Divider style={styles.divider} />
            </>
          )}

          <View style={styles.row}>
            <Text style={styles.text}>निजी गाडी</Text>
            <Text style={styles.text}>
              {data?.family.FamilyService?.privateVehicle}
            </Text>
          </View>
          <Divider style={styles.divider} />
          {/* {data?.family.FamilyVehicles.vehicleType != '' && ( */}
          <>
            <View style={styles.row}>
              <Text style={styles.text}>सवारीसाधन प्रकार</Text>

              {/* {data?.family.FamilyVehicles?.map((vehicle: any) => ( */}
              <Text style={styles.text}>{familyVehicles.vehicleType}</Text>
              {/* ))} */}
            </View>
            <Divider style={styles.divider} />
          </>
          {/* )} */}

          <View style={styles.row}>
            <Text style={styles.text}>सदस्य संख्या</Text>
            <Text style={styles.text}>
              {data?.family.FamilyPopulation?.memberNo}
            </Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>पुरुष संख्या</Text>
            <Text style={styles.text}>
              {data?.family.FamilyPopulation?.maleNo}
            </Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>महिला संख्या</Text>
            <Text style={styles.text}>
              {data?.family.FamilyPopulation?.femaleNo}
            </Text>
          </View>
          <Divider style={styles.divider} />

          {data?.family.FamilyPopulation?.othersNo != 0 && (
            <>
              <View style={styles.row}>
                <Text style={styles.text}>अन्य संख्या</Text>
                <Text style={styles.text}>
                  {data?.family.FamilyPopulation?.othersNo}
                </Text>
              </View>
              <Divider style={styles.divider} />
            </>
          )}

          <View style={styles.row}>
            <Text style={styles.text}>पारिवारिक सदस्यहरुको उमेर</Text>
            <Text style={styles.text}>{familyAges.age}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>महिनाको आम्दानी</Text>
            <Text style={styles.text}>{incomeExpData.monthlyIncome}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>आम्दानीको प्रमुख स्रोत</Text>
            <Text style={styles.text}>{incomeExpData.incomeMajorSource}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.text}>मासिक खर्च</Text>
            <Text style={styles.text}>{incomeExpData.monthlyExpen}</Text>
          </View>
          <Divider style={styles.divider} />

          {data?.family.FamilyOwner.remarks != '' ||
            (data?.family.FamilyOwner.remarks != null && (
              <>
                <View style={styles.row}>
                  <Text style={styles.text}>टिप्पणी:</Text>
                  <Text className="text-base text-black">
                    {data?.family.FamilyOwner.remarks}
                  </Text>
                </View>
                <Divider style={styles.divider} />
              </>
            ))}
        </ScrollView>

        {/* <Text className="text-black text-xl text-justify">
              चन्द्रपुर नगरपालिकामा विविधता र गतिशीलताको मध्यबिन्दुमा अवस्थित वडा
              मध्य आफ्नै विशिष्ट पहिचान र आकर्षण बोकेको वडा हो वडा नं ३ । साथै यस
              वडा चन्द्रपुरको समृद्ध सांस्कृतिक विरासत, समुदायको सक्रिय जीवन, र
              भविष्यको विकास सम्भावनाको रूप हो। यो भाग चन्द्रपुर भित्र मात्र
              भौगोलिक क्षेत्र मात्र नभई परम्परा र आधुनिकताको सहज सम्मिश्रण पनि हो।
            </Text>
            <Text className="text-black text-xl text-justify">
              वडा नं. ३ को आफ्नो आवासीय क्षेत्र, बजार, शैक्षिक संस्थान, स्रोत साधन
              र हरियाली क्षेत्रको यथास्थिति यहाँहरु समक्ष प्रस्तुत गरिएको छ । यहाँ
              वडाको व्यापक जनसांख्यिकीय, सांस्कृतिक, स्रोत साधन र अन्य विविधताको
              एक सूक्ष्म अवलोकन प्रदान गरिएको छ ।
            </Text> */}
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParibarDetailComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1eded',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    marginTop: 10,
    elevation: 5,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 40,
  },
  button: {
    backgroundColor: '#333',
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    borderRadius: 5,
  },
});
