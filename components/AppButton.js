import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({ title, onPress, color = 'primary' }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    alignSelf: 'center',
    width: '80%',
    marginVertical: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 4,
    shadowRadius: 20,
    shadowOffset: { width: 5, height: 13 },
  },
  text: {
    color: colors.white,
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
