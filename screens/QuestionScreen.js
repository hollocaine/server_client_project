import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Question({ question }) {
  return (
    <View style={styles.questPos}>
      <Text>{question}</Text>
      <View style={styles.buttonHolder}>
        <View style={{ width: 100, marginRight: 10 }}>
          <Button title="Yes" color="#33aa77" />
        </View>
        <View style={{ width: 100, marginRight: 10 }}>
          <Button title="No" color="#ff4500" />
        </View>
        <View style={{ width: 100 }}>
          <Button title="N/A" color="#00bfff" />
        </View>
      </View>
    </View>
  );
}
const QuestionScreen = () => {
  const DATA = [
    {
      id: '1',
      question: 'Is there a fire extinguisher?',
    },

    {
      id: '2',
      question: 'Is there a fire alarm?',
    },

    {
      id: '3',
      question: 'Is there a fire hose?',
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
          renderItem={({ item }) => <Question question={item.question} />}
          keyExtractor={(item) => item.id}
        />
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
  questPos: {
    marginBottom: 3,
    marginLeft: 20,
    marginRight: 15,
    fontSize: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#e9f8f9',
  },
  buttonHolder: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
});
export default QuestionScreen;
