import Header from '../../components/header';
import React from 'react';
import {SafeAreaView, Dimensions, StyleSheet, Text, View} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Profile = () => {
  return (
    <>
      <SafeAreaView styles={styles.Container}>
        <Header />
        <View style={{...styles.gridRow, flexDirection: 'row'}}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.description}>{user.description}</Text>
          <Button title="Cerrar Sesión" onPress={onLogout} />
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
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    margin: 10,
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

export default Profile;
