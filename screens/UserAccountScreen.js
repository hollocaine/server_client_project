import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';

import colors from '../config/colors';

function UserAccountScreen(props) {
  return (
    <ImageBackground
      source={require('../app/assets/bg_profile.png')}
      style={styles.image}
    >
      <Screen>
        <View style={styles.container}>
          <ListItem
            title="Alan Flynn"
            subTitle="alanflynnn@gmail.com"
            image={require('../app/assets/profile.png')}
            department="Warehouse"
          />
        </View>
        <ListItem
          title="Log out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe44d" />}
        />
      </Screen>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#e9f8f9',
  },
});
export default UserAccountScreen;
