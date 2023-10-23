import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Screems/home/index';
import AppStack from './src/Routes/App';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </>
  );
};

export default App;
