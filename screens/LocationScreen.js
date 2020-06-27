import React from 'react';
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

import ListLocations from '../components/ListLocations';

import colors from '../config/colors';

const LocationScreen = ({ navigation }) => {
  const DATA = [
    {
      id: '1',
      location: 'Main Office',
    },
    {
      id: '2',
      location: 'Accounts',
    },
    {
      id: '3',
      location: 'Warehouse',
    },
    {
      id: '4',
      location: 'Factory Floor',
    },
    {
      id: '5',
      location: 'Dispatch',
    },
  ];
  return (
    <ImageBackground
      source={require('../app/assets/location.png')}
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <ListLocations
              location={item.location}
              locationID={item.id}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
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
