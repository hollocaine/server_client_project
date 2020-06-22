import React, { useState } from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../components/Screen';
import colors from '../config/colors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <ImageBackground
      source={require('../app/assets/login.png')}
      style={styles.image}
    >
      <Screen>
        <View style={{ marginBottom: 50 }}>
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            keyboardType="password"
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <AppButton
            title="Login"
            onPress={() => console.log(email, password)}
          />
        </View>
      </Screen>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 400,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#e9f8f9',
  },
  textInput: {
    fontSize: 18,
    //fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
export default LoginScreen;
