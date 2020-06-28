import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
//import * as Permissions from 'expo-permissions';

import colors from '../config/colors';
const ImageSelector = (props) => {
  const [selectedImage, setSelectedImage] = useState();
  //   //verifyPermissions is for IOS
  //   const verifyPermissions = () => {
  //    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //    if (result.status !== 'granted') {
  //        Alert.alert("You need to grant permissions",[{text: 'Ok'}]);
  //         return false;
  //    }
  //    return true;
  //   };

  const takePhotoHandler = async () => {
    // const hasPermission = await verifyPermissions();
    // if (!hasPermission) {
    //   return;
    // }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setSelectedImage(image.uri);
  };
  return (
    <View style={styles.imgPicker}>
      <View style={styles.imgPreview}>
        {!selectedImage ? (
          <Text>No image picked yet</Text>
        ) : (
          <Image style={styles.img} source={{ uri: selectedImage }} />
        )}
        <Button
          title="Take Photo"
          color={colors.primary}
          onPress={takePhotoHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgPicker: {
    alignItems: 'center',
  },
  imgPreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
export default ImageSelector;
