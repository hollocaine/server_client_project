import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
const validationSchema = Yup.object().shape({
  question: Yup.string()
    .required()
    .min(10)
    .label('Question'),
});

function QuestionFormScreen(props) {
  return (
    <ImageBackground
      source={require('../app/assets/registration.png')}
      style={styles.image}
    >
      <Screen>
        <View style={{ marginBottom: 50 }}>
          <AppForm
            initialValues={{
              question: '',
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="face-outline"
              keyboardType="default"
              name="question"
              placeholder="Question"
              textContentType="none"
              maxLength={30}
            />
            <SubmitButton title="Save" />
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
export default QuestionFormScreen;
