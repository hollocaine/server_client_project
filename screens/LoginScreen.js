import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email()
    .label('Email'),
  password: Yup.string()
    .required()
    .min(8)
    .label('Password'),
});

function LoginScreen(props) {
  return (
    <ImageBackground
      source={require('../app/assets/login.png')}
      style={styles.image}
    >
      <Screen>
        <View style={{ marginBottom: 50 }}>
          <AppForm
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Login" />
          </AppForm>
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
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
export default LoginScreen;
