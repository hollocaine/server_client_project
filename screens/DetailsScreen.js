import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Button,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailsScreen = (props) => {
  return (
    <View>
      <View style={styles.textStyle}>
        <Text>Non Compliance</Text>
      </View>
      <TextInput
        style={styles.inputBox}
        onChangeText={(text) => onChangeText(text)}
        placeholder="Title"
        placeholderTextColor="grey"
        underlineColorAndroid="transparent"
      />
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Input report here"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
      </View>
      <View>
        <View style={styles.textStyle}>
          <Text>RISK LEVEL</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
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
            <Button title="Low" color="#7DCE31" buttonStyle={styles.button} />
          </View>
        </View>
      </View>
    </View>
  );
};
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
export default DetailsScreen;
