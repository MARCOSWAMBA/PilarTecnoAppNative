import {createStackNavigator} from '@react-navigation/stack';
import Maps from '../Map/Maps';

const MapsStack = createStackNavigator();

export const MapsStackScreen = () => {
  return (
    <MapsStack.Navigator screenOptions={{headerShown: false}}>
      <MapsStack.Screen name="Maps" component={Maps} />
    </MapsStack.Navigator>
  );
};
