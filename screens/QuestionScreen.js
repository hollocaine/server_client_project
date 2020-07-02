import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListQuestions from '../components/ListQuestions';
import colors from '../config/colors';

const QuestionScreen = (props) => {
  const [locationID, setLocationID] = useState(props.route.params.locationID);
  const DATA = [
    {
      locationID: '1',
      questions: [
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
      ],
    },
    {
      locationID: '2',
      questions: [
        {
          id: '1',
          question: 'Is there a bigger fire extinguisher?',
        },
        {
          id: '2',
          question: 'Is there a smaller fire alarm?',
        },
        {
          id: '3',
          question: 'Is there a larger fire hose?',
        },
      ],
    },
    {
      locationID: '3',
      questions: [
        {
          id: '1',
          question: 'Get the  hell out theres a fire?',
        },
        {
          id: '2',
          question: 'Any marshmallows?',
        },
        {
          id: '3',
          question: 'Put the kettle on?',
        },
        {
          id: '4',
          question: 'Call the fire brigade?',
        },
      ],
    },
  ];
  return (
    <ImageBackground
      source={require('../app/assets/extinguisher.png')}
      style={styles.image}
    >
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) =>
            item.locationID === locationID.toString()
              ? item.questions.map((v, i) => (
                  <ListQuestions key={i} question={v.question} />
                ))
              : null
          }
          keyExtractor={(item) => item.locationID}
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
    borderColor: colors.border,
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
