import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Routes/Index';
import {Provider} from 'react-redux';
import {store} from './src/Redux/index';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
