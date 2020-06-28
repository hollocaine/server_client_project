import 'react-native-gesture-handler';
import * as React from 'react';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
import AppNavigation from './navigators/AppNavigation';

const App = () => {
  return <AppNavigation />;
};

export default App;
