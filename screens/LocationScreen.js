import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ImageBackground,
} from 'react-native';

function Question({ location }) {
  return (
    <View style={{ width: 300, marginBottom: 10 }}>
      <Button title={location} style={styles.locationBtn} />
    </View>
  );
}

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
      source={require('../assets/check_app_.png')}
      style={styles.image}
    >
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Question location={item.location} />}
          keyExtractor={(item) => item.id}
        />
        <View style={{ width: 300, marginBottom: 10 }}>
          <Button
            style={styles.locationBtn}
            title="Go to question"
            onPress={() => navigation.navigate('Question')}
          />
          <Button
            title="Go to home Screen"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#bb3700',
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
