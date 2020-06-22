import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
const WelcomeScreen = (props) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../app/assets/check_welcome.png')}
    >
      <Image style={styles.logo} source={require('../app/assets/logo_.png')} />
      <View style={styles.btnsContainer}>
        <AppButton title="Login" color="primary" />
        <AppButton title="Register" style={styles.registerBtn} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logo: {
    height: 500,
    width: 350,
    alignItems: 'center',
  },
  btnsContainer: {
    padding: 15,
    width: '100%',
  },
  loginBtn: {
    width: '100%',
    height: 70,
    backgroundColor: '#FF0B17',
  },
  registerBtn: {
    width: '100%',
    height: 70,
    backgroundColor: 'orange',
  },
  imagePos: {
    flex: 1,
  },
});
export default WelcomeScreen;
