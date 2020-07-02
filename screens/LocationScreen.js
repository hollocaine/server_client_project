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
  VirtualizedList,
} from 'react-native';
import axios from 'axios';

import ListLocations from '../components/ListLocations';
import useApi from '../app/hooks/useApi';
import locations from '../app/api/locations';
import colors from '../config/colors';
import Location from '../models/location';

const LocationScreen = ({ navigation }) => {
  const getLocationsApi = useApi(locations.getLocations);
  useEffect(() => {
    getLocationsApi.request();
  }, []);
  const loadedLocations = [];
  for (const key in getLocationsApi) {
    loadedLocations.push(new Location([key], 'lo1', getLocationsApi[key].name));
  }

  return (
    <ImageBackground
      source={require('../app/assets/location.png')}
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ width: 300, marginBottom: 10 }}>
          <FlatList
            data={getLocationsApi.data}
            renderItem={({ item, index }) => (
              <ListLocations
                key={Math.random().toString(36).substring(7)}
                location={item.name}
                locationID={item.id}
                navigation={navigation}
              />
            )}
            keyExtractor={(item) => {
              Math.random().toString(36).substring(7);
            }}
          />
          <Button
            title="Go to home Screen"
            onPress={() => navigation.navigate('Home')}
          />
          {/* <Button
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
          /> */}
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
