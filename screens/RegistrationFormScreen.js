import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';

const validationSchema = Yup.object().shape({
  fname: Yup.string()
    .required()
    .min(2)
    .label('First name'),
  surname: Yup.string()
    .required()
    .min(2)
    .label('Surname'),
  email: Yup.string()
    .required()
    .email()
    .label('Email'),
  password: Yup.string()
    .required()
    .min(8)
    .label('Password'),
});

function RegistrationFormScreen(props) {
  return (
    <ImageBackground
      source={require('../app/assets/registration.png')}
      style={styles.image}
    >
      <Screen>
        <View style={{ marginBottom: 50 }}>
          <AppForm
            initialValues={{
              fname: '',
              sname: '',
              department: '',
              email: '',
              password: '',
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="face-outline"
              keyboardType="default"
              name="fname"
              placeholder="First Name"
              textContentType="name"
              maxLength={15}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="face-outline"
              keyboardType="default"
              name="sname"
              placeholder="Surname"
              textContentType="name"
              maxLength={15}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="worker"
              keyboardType="default"
              name="department"
              placeholder="Department"
              textContentType="jobTitle"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
              maxLength={255}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              maxLength={12}
            />
            <SubmitButton title="Save" />
          </AppForm>
        </View>
      </Screen>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#e9f8f9',
  },
});
export default RegistrationFormScreen;
