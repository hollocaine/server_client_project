import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required()
    .min(1)
    .label('Title'),
});

function ReportScreen(props) {
  return (
    <ImageBackground
      source={require('../app/assets/registration.png')}
      style={styles.image}
    >
      <Screen>
        <View style={{ marginBottom: 50 }}>
          <AppForm
            initialValues={{
              title: '',
              description: '',
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="face-outline"
              keyboardType="default"
              name="title"
              placeholder="Title"
              textContentType="name"
              maxLength={30}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="face-outline"
              keyboardType="default"
              name="description"
              placeholder="Description"
              textContentType="none"
              maxLength={255}
              multiline
            />
            <View>
              <View style={styles.textStyle}>
                <Text>RISK LEVEL</Text>
              </View>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
              >
                <View style={{ width: 100, marginRight: 10 }}>
                  <Button title="High" color="#CE3431" />
                </View>
                <View style={{ width: 100, marginRight: 10 }}>
                  <Button
                    title="Medium"
                    color="#31CBCE"
                    buttonStyle={styles.button}
                  />
                </View>
                <View style={{ width: 100 }}>
                  <Button
                    title="Low"
                    color="#7DCE31"
                    buttonStyle={styles.button}
                  />
                </View>
              </View>
            </View>
            <SubmitButton title="Save" />
          </AppForm>
        </View>
      </Screen>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    width: 370,
    marginLeft: 10,
  },
  textArea: {
    height: 150,
    marginLeft: 10,
    justifyContent: 'flex-start',
  },
  textStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  inputBox: {
    height: 40,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    width: 370,
    marginLeft: 10,
    paddingLeft: 10,
    alignContent: 'center',
    borderRadius: 10,
  },
  bottomPos: {
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#e9f8f9',
  },
});
export default ReportScreen;
