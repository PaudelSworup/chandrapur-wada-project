import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import {dropDownData} from '../../utils/testingData';
import {ScrollView} from 'react-native';

const ParibarbibaranAddComponent = ({
  values,
  handleChange,
  handleSubmit,
}: any) => {
  return (
    <SafeAreaView className="bg-[#fff]">
      <ScrollView className="mx-3">
        <Text className="text-lg text-black">घर सम्बन्धी विवरण भर्नुहोस </Text>
        <View className="mb-4">
          <TextInput
            mode="outlined"
            label="घर धनिको नाम "
            onChangeText={handleChange('houseOwnerNameNepali')}
            value={values.houseOwnerNameNepali}
            className="h-12 px-2 bg-white"
            placeholder="घर धनिको नाम "
          />
          {/* {errors?.houseOwnerFathersName && (
          <Text className="text-red-500 ml-1">
            {errors?.houseOwnerFathersName}
          </Text>
        )} */}
        </View>

        <View className="mb-4">
          <TextInput
            mode="outlined"
            label="घर मुलिको बुबा नाम "
            onChangeText={handleChange('houseOwnerFathersName')}
            value={values.houseOwnerFathersName}
            className="h-12 px-2 bg-white"
            placeholder="घर मुलिको बुबा नाम "
          />
          {/* {errors?.houseOwnerFathersName && (
          <Text className="text-red-500 ml-1">
            {errors?.houseOwnerFathersName}
          </Text>
        )} */}
        </View>

        <View className="mb-4">
          <TextInput
            mode="outlined"
            label="घर मुलिको आमा नाम "
            onChangeText={handleChange('houseOwnerMothersName')}
            value={values.houseOwnerMothersName}
            className="h-12 px-2 bg-white"
            placeholder="घर मुलिको आमा नाम "
          />
          {/* {errors?.houseOwnerMothersName && (
          <Text className="text-red-500 ml-1">
            {errors?.houseOwnerMothersName}
          </Text>
        )} */}
        </View>

        <View className="mb-4">
          <TextInput
            mode="outlined"
            label="घर मुलिको हजुरबुबाको नाम"
            onChangeText={handleChange('houseOwnerGrandFathersName')}
            value={values.houseOwnerGrandFathersName}
            className="h-12 px-2 bg-white"
            placeholder="घर मुलिको हजुरबुबाको नाम"
          />
          {/* {errors?.houseOwnerGrandFathersName && (
          <Text className="text-red-500 ml-1">
            {errors?.houseOwnerGrandFathersName}
          </Text>
        )} */}
        </View>

        <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {borderColor: '#7B66AB', borderWidth: 2, backgroundColor: '#fff'},
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            placeholder="मातृभाषा"
            onChange={item => handleChange('motherTounge')(item?.values)}
          />
        </View>

        <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {borderColor: '#7B66AB', borderWidth: 2, backgroundColor: '#fff'},
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            placeholder="जाति"
            onChange={item => handleChange('caste')(item?.values)}
          />
        </View>

        <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {borderColor: '#7B66AB', borderWidth: 2, backgroundColor: '#fff'},
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            placeholder="धर्म"
            onChange={item => handleChange('religion')(item?.values)}
          />
        </View>

        <View className="mb-4">
          <TextInput
            label="नागरिकता नं "
            mode="outlined"
            placeholder="नागरिकता नं "
            onChangeText={handleChange('citizenshipNum')}
            value={values.nagritaNum}
            className="h-12 px-2 bg-white"
          />
          {/* {errors?.nagritaNum && (
          <Text className="text-red-500 ml-1">{errors?.nagritaNum}</Text>
        )} */}
        </View>

        <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {borderColor: '#7B66AB', borderWidth: 2, backgroundColor: '#fff'},
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            placeholder="नागरिकता लिएको जिल्ला "
            onChange={item => handleChange('citizenshipDistrict')(item?.values)}
          />
        </View>

        <View className="mb-4">
          <TextInput
            label="नागरिकताको ठेगाना"
            mode="outlined"
            placeholder="नागरिकताको ठेगाना"
            onChangeText={handleChange('ownerAddress')}
            value={values.nagritakoThegana}
            className="h-12 px-2 bg-white"
          />
          {/* {errors?.nagritakoThegana && (
          <Text className="text-red-500 ml-1">{errors?.nagritakoThegana}</Text>
        )} */}
        </View>

        <View className="mb-4">
          <TextInput
            label="फोन"
            mode="outlined"
            placeholder="फोन"
            onChangeText={handleChange('phone')}
            value={values.phone}
            className="h-12 px-2 bg-white"
          />
          {/* {errors?.phone && (
          <Text className="text-red-500 ml-1">{errors?.phone}</Text>
        )} */}
        </View>

        <View className="mb-4">
          <TextInput
            label="ईमेल"
            mode="outlined"
            placeholder="ईमेल"
            onChangeText={handleChange('email')}
            value={values.email}
            className="h-12 px-2 bg-white"
          />
          {/* {errors?.email && (
          <Text className="text-red-500 ml-1">{errors?.email}</Text>
        )} */}
        </View>

        <View className="mb-4 border p-4">
          <Text className="text-black text-lg">पारिवारिक तथ्यांक</Text>
          <View className="mb-4">
            <TextInput
              placeholder="परिवार संख्या"
              label="परिवार संख्या"
              onChangeText={handleChange('memberNo')}
              value={values.memberNo}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="पुरुषको संख्या"
              label="पुरुषको संख्या"
              onChangeText={handleChange('maleNo')}
              value={values.maleNo}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="महिलाको संख्या"
              onChangeText={handleChange('femaleNo')}
              value={values.femaleNo}
              label="महिलाको संख्या"
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="अन्य"
              label="अन्य"
              onChangeText={handleChange('othersNo')}
              value={values.othersNo}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="पारिवारिक सदस्यहरुको उमेर(, ले छुट्टाउनुहोस) "
              label="पारिवारिक सदस्यहरुको उमेर(, ले छुट्टाउनुहोस)"
              onChange={handleChange('pariwarSadasyaUmer')}
              value={values.pariwarSadasyaUmer}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>
        </View>

        <View className="mb-4 border p-4">
          <Text className="text-black text-lg">
            दीर्घकालीन रोग सम्बन्धी विवरण
          </Text>

          <View className="mb-4">
            <TextInput
              placeholder="दीर्घकालीन रोगी भए संख्या "
              label="दीर्घकालीन रोगी भए संख्या "
              onChangeText={handleChange('ltdNo')}
              value={values.ltdNo}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="रोगको प्रकार"
              onChange={item => handleChange('ltdType')(item?.values)}
            />
          </View>
        </View>

        <View className="mb-4 border p-4">
          <Text className="text-black text-lg">अपंगता सम्बन्धी विवरण</Text>

          <View className="mb-4">
            <TextInput
              placeholder="अपंगता भए संख्या"
              label="अपंगता भए संख्या"
              onChangeText={handleChange('disableNo')}
              value={values.disableNo}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="अपंगताको प्रकार"
              onChange={item => handleChange('disableType')(item?.values)}
            />
          </View>
        </View>

        <View className="mb-4 border p-4">
          <Text className="text-black text-lg">
            आवास सुबिधाहारु सम्बन्धी विवरण
          </Text>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="bathroom"
              onChange={item => handleChange('bathroom')(item?.values)}
            />
          </View>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="खानेपानिको उपलब्धता"
              onChange={item => handleChange('water')(item?.values)}
            />
          </View>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="खानेपानिको श्रोत"
              onChange={item => handleChange('waterSource')(item?.values)}
            />
          </View>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="शौचालय सुबिधा"
              onChange={item => handleChange('toilet')(item.values)}
            />
          </View>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="शौचालयको प्रकार"
              onChange={item => handleChange('toiletType')(item?.values)}
            />
          </View>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="बिजुलीको सुबिधा"
              onChange={item => handleChange('electricity')(item.values)}
            />
          </View>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="खाना पकाउने इंधन"
              onChange={item => handleChange('cookingSource')(item.values)}
            />
          </View>
        </View>

        <View className="mb-4 border p-4">
          <Text className="text-black text-lg">आय वय समबन्धी विवरण</Text>

          <View className="mb-4">
            <TextInput
              placeholder="प्रति महीना कुल आय"
              label="प्रति महीना कुल आय"
              onChangeText={handleChange('monthlyIncome')}
              value={values.monthlyIncome}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="आम्दानिको मुख्य श्रोत"
              onChange={item => handleChange('incomeMajorSource')(item.values)}
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="कुल अनुमानित मासिक खर्च"
              label="कुल अनुमानित मासिक खर्च"
              onChangeText={handleChange('monthlyExpen')}
              value={values.monthlyExpen}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>
        </View>

        <View className="mb-4 border p-4">
          <Text className="text-black text-lg">सेवाहरुमा पहुँच</Text>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="स्वस्थ्यको सुबिधा"
              onChange={item => handleChange('health')(item.values)}
            />
          </View>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="शैक्षिक संस्थाको सुबिधा"
              onChange={item => handleChange('education')(item.values)}
            />
          </View>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="इंटरनेटको सुबिधा "
              onChange={item => handleChange('internet')(item?.values)}
            />
          </View>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="सार्बजनिक यातायातको उपलब्धता"
              onChange={item => handleChange('publicVehicle')(item.values)}
            />
          </View>

          <View className="mb-4">
            <Dropdown
              style={[
                styles.dropdown,
                {
                  borderColor: '#7B66AB',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              maxHeight={300}
              labelField="label"
              valueField="values"
              placeholder="निजी यातायात"
              onChange={item => handleChange('privateVehicle')(item.values)}
            />
          </View>
        </View>

        <View className="mb-4 border p-4">
          <Text className="text-black text-lg">
            शैक्षिक योग्यता समबन्धी विवरण
          </Text>
          <View className="mb-4">
            <TextInput
              placeholder="पी.एच.डी संख्या "
              label="पीएचडी संख्या "
              onChangeText={handleChange('phd')}
              value={values.phd}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="मास्टर संख्या "
              onChangeText={handleChange('master')}
              value={values.master}
              label="मास्टर संख्या "
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="इस्नातक संख्या"
              onChangeText={handleChange('bachelor')}
              value={values.bachelor}
              label="इस्नातक संख्या"
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="१० + २ संख्या "
              label="१० + २ संख्या "
              onChangeText={handleChange('plusTwo')}
              value={values.plusTwo}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="माध्यमिक संख्या"
              label="माध्यमिक संख्या"
              onChangeText={handleChange('madhymik')}
              value={values.madhymik}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="निम्न माध्यमिक संख्या "
              label="निम्न माध्यमिक संख्या "
              mode="outlined"
              onChangeText={handleChange('nimnaMadhymic')}
              value={values.nimnaMadhymic}
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="प्राथमिक संख्या "
              label="प्राथमिक संख्या "
              mode="outlined"
              onChangeText={handleChange('prathamik')}
              value={values.prathamik}
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="सामान्य लेख पढ़ संख्या "
              label="सामान्य लेख पढ़ संख्या "
              mode="outlined"
              onChangeText={handleChange('samanyaLekhpad')}
              value={values.samanyaLekhpad}
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="अशिक्षित संख्या "
              label="अशिक्षित संख्या "
              onChangeText={handleChange('uneducated')}
              value={values.uneducated}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>
        </View>

        <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {
                borderColor: '#7B66AB',
                borderWidth: 2,
                backgroundColor: '#fff',
              },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            placeholder="फोहोर व्यवस्थापन"
            onChange={item => handleChange('wasteManagement')(item.values)}
          />
        </View>

        <View className="mb-4">
          <Dropdown
            style={[
              styles.dropdown,
              {
                borderColor: '#7B66AB',
                borderWidth: 2,
                backgroundColor: '#fff',
              },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dropDownData}
            maxHeight={300}
            labelField="label"
            valueField="values"
            placeholder="agriculture"
            onChange={item => handleChange('agricultureType')(item.values)}
          />
        </View>

        <View className="mb-4 border p-4">
          <Text className="text-black text-lg">
            बैदेशिक अध्ययन सम्बन्धी विवरण
          </Text>
          <View className="mb-4">
            <TextInput
              placeholder="सदस्य संख्या "
              label="सदस्य संख्या "
              onChangeText={handleChange('foreignStudySadasya')}
              value={values.foreignStudySadasya}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="देशको नाम(, ले छुटाउनु होस )"
              label="देशको नाम(, ले छुटाउनु होस )"
              onChangeText={handleChange('countryNameOne')}
              value={values.countryNameOne}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>
        </View>

        <View className="mb-4 border p-4">
          <Text className="text-black text-lg">बैदेशिक रोजगार</Text>
          <View className="mb-4">
            <TextInput
              placeholder="सदस्य संख्या "
              label="सदस्य संख्या "
              onChangeText={handleChange('foreignWorkSadasya')}
              value={values.foreignWorkSadasya}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder="देशको नाम(, ले छुटाउनु होस )"
              label="देशको नाम(, ले छुटाउनु होस )"
              onChangeText={handleChange('countryNameTwo')}
              value={values.countryNameTwo}
              mode="outlined"
              className="h-12 px-2 bg-white"
            />
          </View>
        </View>

        <View className="mb-4">
          <TextInput
            placeholder="अन्य "
            label="अन्य "
            onChangeText={handleChange('remarks')}
            value={values.remarks}
            mode="outlined"
            className="h-16 px-2 bg-white"
          />
        </View>

        <View className="mb-4 mx-5">
          <Button
            className="bg-sky-800 p-1 rounded-md"
            onPress={() => handleSubmit()}>
            <Text className="text-lg text-white uppercase">Submit</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParibarbibaranAddComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // padding: 16,
    marginBottom: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: -7,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
