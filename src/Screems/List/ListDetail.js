import Header from '../../components/header';
import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Icon} from '@rneui/themed';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Detalle = () => {
  return (
    <>
      <SafeAreaView styles={styles.Container}>
        <Header
          leftComponent={
            <View style={styles.headerRight}>
              <TouchableOpacity
                style={{marginLeft: 10}}
                onPress={() => props.navigation.goBack()}>
                <Icon type="antdesign" name="rocket1" color="white" />
              </TouchableOpacity>
            </View>
          }
        />
        <View style={{...styles.gridRow, flexDirection: 'row'}}>
          <Text style={{fontSize: 20}}>Detalle</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    heid: Height,
    Width: Width,
  },
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

export default Detalle;
