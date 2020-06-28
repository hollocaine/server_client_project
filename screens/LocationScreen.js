import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import axios from 'axios';

import ListLocations from '../components/ListLocations';

import colors from '../config/colors';

function useLocations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('http://192.168.68.103:8000/location')
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      });
  }, []);
  return locations;
}
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
const LocationScreen = ({ navigation }) => {
  const locations = useLocations();
  const data = JSON.stringify(locations);
  if (!isEmpty(data)) {
    return data;
  }
  return (
    <ImageBackground
      source={require('../app/assets/location.png')}
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item, i }) => (
            <ListLocations
              location={item.name}
              locationID={item.id}
              navigation={navigation}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={{ width: 300, marginBottom: 10 }}>
          <Button
            style={styles.locationBtn}
            title="Go to Login"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            title="Go to home Screen"
            onPress={() => navigation.navigate('Home')}
          />
          <Button
            title="Go to registration"
            onPress={() => navigation.navigate('Registration Form')}
          />
          <Button
            title="Go todo"
            onPress={() => navigation.navigate('TodoList')}
          />
          <Button
            title="Go to location screen"
            onPress={() => navigation.navigate('Location Form')}
          />
          <Button
            title="Go to calander screen"
            onPress={() => navigation.navigate('Calander')}
          />
          <Button
            title="Go to questions screen"
            onPress={() => navigation.navigate('Create questions')}
          />
          <Button
            title="Go to camera screen"
            onPress={() => navigation.navigate('Camera')}
          />
          <Button
            title="Go to Report Screen"
            onPress={() => navigation.navigate('Report')}
          />
          <Button
            title="Go to welcome Screen"
            onPress={() => navigation.navigate('Welcome')}
          />
          <Button
            title="Go to user account Screen"
            onPress={() => navigation.navigate('User Account')}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.border,
    borderWidth: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#e9f8f9',
  },
  locationBtn: {
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 15,
    width: 300,
    textAlign: 'center',
    fontSize: 100,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
});

export default LocationScreen;
