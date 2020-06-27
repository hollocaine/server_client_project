import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LocationScreen from '../screens/LocationScreen';
import QuestionScreen from '../screens/QuestionScreen';
import ReportScreen from '../screens/ReportScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import colors from '../config/colors';
import RegistrationFormScreen from '../screens/RegistrationFormScreen';
import LocationFormScreen from '../screens/LocationFormScreen';
import QuestionFormScreen from '../screens/QuestionFormScreen';
import CalanderScreen from '../screens/CalanderScreen';
const Stack = new createStackNavigator();

const AppNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: 'bold',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Calander" component={CalanderScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Location Form" component={LocationFormScreen} />
        <Stack.Screen name="Create questions" component={QuestionFormScreen} />
        <Stack.Screen
          name="Registration Form"
          component={RegistrationFormScreen}
        />
        <Stack.Screen name="User Account" component={UserAccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
