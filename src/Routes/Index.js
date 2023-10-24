import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Tabs} from './Tabs';
import Login from '../Screems/Auth/Login';
import List from '../Screems/List/List';
import ListDetail from '../Screems/List/ListDetail';

const Stack = createStackNavigator();

export default AppStack = () => {
  const isLogged = true;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {true ? (
        <Stack.Screen name="AppStack" component={Tabs} />
      ) : (
        <Stack.Screen name="LogIn" component={Login} />
      )}
      <ListStack.Screen name="List" component={List} />
      <ListStack.Screen name="ListDetail" component={ListDetail} />
    </Stack.Navigator>
  );
};
