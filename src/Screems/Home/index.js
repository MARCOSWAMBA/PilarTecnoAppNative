import Header from '../../components/header';
import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Icon} from '@rneui/themed';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Home = () => {
  const hundlePressHome = () => {
    console.log('hola desde home');
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
            <TouchableOpacity
              style={{...styles.gridButton, backgroundColor: 'red'}}
              onPress={hundlePressHome}>
              <Text style={{...styles.buttonTitle}}>Home</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              ...styles.gridColumn,
              justifyContent: 'flex-end',
              paddingBottom: '5%',
            }}>
            <TouchableOpacity
              style={{...styles.gridButton, backgroundColor: 'pink'}}>
              <Text style={{...styles.buttonTitle}}>Pokemons</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{...styles.gridRow, flexDirection: 'row'}}>
          <View
            style={{
              ...styles.gridColumn,
              justifyContent: 'flex-start',
              paddingTop: '5%',
            }}>
            <TouchableOpacity
              style={{...styles.gridButton, backgroundColor: 'blue'}}>
              <Text style={{...styles.buttonTitle}}>Mapas</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              ...styles.gridColumn,
              justifyContent: 'flex-start',
              paddingTop: '5%',
            }}>
            <TouchableOpacity
              style={{...styles.gridButton, backgroundColor: 'green'}}>
              <Text style={{...styles.buttonTitle}}>Perfil</Text>
            </TouchableOpacity>
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
