import DocumentPicker from 'react-native-document-picker';
export const pickImage = async () => {
  try {
    const response = await DocumentPicker.pick({
      presentationStyle: 'fullScreen',
      type: 'image/*',
    });

    return response;
  } catch (e) {
    return null;
  }
};
