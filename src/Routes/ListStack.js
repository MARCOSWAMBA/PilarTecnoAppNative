import {createStackNavigator} from '@react-navigation/stack';
import List from '../Screems/List/List';
import Detalle from '../Screems/List/ListDetail';

const ListStack = createStackNavigator();

export const ListStackScreen = () => {
  return (
    <ListStack.Navigator screenOptions={{headerShown: false}}>
      <ListStack.Screen name="List" component={List} />
      <ListStack.Screen name="ListDetail" component={Detalle} />
    </ListStack.Navigator>
  );
};
