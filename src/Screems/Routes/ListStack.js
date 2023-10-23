import {createStackNavigator} from '@react-navigation/stack';
import List from '../List/List';
import Detalle from '../List/ListDetail';

const ListStack = createStackNavigator();

export const ListStackScreen = () => {
  return (
    <ListStack.Navigator screenOptions={{headerShown: false}}>
      <ListStack.Screen name="List" component={List} />
      <ListStack.Screen name="ListDetail" component={Detalle} />
    </ListStack.Navigator>
  );
};
