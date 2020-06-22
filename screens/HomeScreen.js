import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <AppText>Home Screens</AppText>
      <Button
        title="Go to location Screen"
        onPress={() => navigation.navigate('Location')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
