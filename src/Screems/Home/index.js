import Header from '../../components/header';
import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import {Icon} from '@rneui/themed';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Home = () => {
  const hundlePressHome = () => {
    console.log('hola desde home');
  };

  const hundlePressProfile = () => {
    console.log('hola desde home');
    Profile.navigation.navigate(ProfileTab);
  };
  const hundlePressList = () => {
    console.log('hola desde home');
    Profile.navigation.navigate(ListsTab);
  };
  const hundlePressMaps = () => {
    console.log('hola desde home');
    Profile.navigation.navigate(MapsTab);
  };

  return (
    <>
      <SafeAreaView styles={styles.container}>
        <Header />
        <View style={{...styles.gridRow, flexDirection: 'row'}}>
          <View
            style={{
              ...styles.gridColumn,
              justifyContent: 'flex-end',
              paddingBottom: '5%',
            }}>
            <Pressable
              style={{...styles.gridButton, backgroundColor: 'red'}}
              onPress={hundlePressHome}>
              <Text style={{...styles.buttonTitle}}>Home</Text>
            </Pressable>
          </View>
          <View
            style={{
              ...styles.gridColumn,
              justifyContent: 'flex-end',
              paddingBottom: '5%',
            }}>
            <Pressable
              style={{...styles.gridButton, backgroundColor: 'pink'}}
              onPress={hundlePressList}>
              <Text style={{...styles.buttonTitle}}>Lista</Text>
            </Pressable>
          </View>
        </View>
        <View style={{...styles.gridRow, flexDirection: 'row'}}>
          <View
            style={{
              ...styles.gridColumn,
              justifyContent: 'flex-start',
              paddingTop: '5%',
            }}>
            <Pressable
              style={{...styles.gridButton, backgroundColor: 'blue'}}
              onPress={hundlePressMaps}>
              <Text style={{...styles.buttonTitle}}>Mapas</Text>
            </Pressable>
          </View>
          <View
            style={{
              ...styles.gridColumn,
              justifyContent: 'flex-start',
              paddingTop: '5%',
            }}>
            <Pressable
              style={{...styles.gridButton, backgroundColor: 'green'}}
              onPress={hundlePressProfile}>
              <Text style={{...styles.buttonTitle}}>Perfil</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  gridColumn: {
    flex: 1,
  },
  gridRow: {
    flex: 1,
  },
  gridButton: {
    backgroundColor: '#606060',
    width: Width * 0.4,
    height: Height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    elevation: 3,
  },
  Container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default Home;
