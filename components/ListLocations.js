import React from 'react';
import { View, StyleSheet, Button, Platform, StatusBar } from 'react-native';

import AppButton from '../components/AppButton';

function ListLocations({ location, locationID, navigation }) {
  return (
    <View style={{ width: 300, marginBottom: 10 }}>
      <AppButton
        title={location}
        onPress={() =>
          navigation.navigate('Question', {
            locationID,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
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

export default ListLocations;
