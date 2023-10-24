import React, {component} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeStackScreen} from './HomeStack';
import {ProfileStackScreen} from './ProfileStack';
import {MapsStackScreen} from './MapsStack';
import {ListStackScreen} from './ListStack';
import {Icon} from '@rneui/themed';
import {theme} from '../constants';
const Tab = createMaterialBottomTabNavigator();
export const Tabs = () => {
  const {colors} = theme;
  return (
    <Tab.Navigator
      activeColor={colors.active} //'#f5c511' //'rgb(41,34,97)',
      inactiveColor={colors.inactive}
      barStyle={{
        backgroundColor: colors.bar,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'home'} type="font-awesome-5" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'user'} type="font-awesome-5" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ListsTab"
        component={ListStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name={'marker'}
              type="font-awesome-5"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MapsTab"
        component={MapsStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'map'} type="font-awesome-5" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
