import Header from '../../components/header';
import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, Dimensions, StyleSheet, Text, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {hasLocationPermission} from '../../services/LocationPermission';
import {Image, Icon} from '@rneui/themed';
import MapView, {Marker} from 'react-native-maps';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ASPECT_RATIO = Width / Height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Maps = () => {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    longitude: LONGITUDE,
    latitude: LATITUDE,
    longitude_delta: LONGITUDE_DELTA,
    latitude_delta: LATITUDE_DELTA,
  });

  useEffect(() => {
    hasLocationPermission();
  }, []);

  getLocation = async () => {
    await Geolocation.getCurrentPosition(
      async posicion => {
        const longitude = posicion.coords.longitude;
        const latitude = posicion.coords.latitude;

        mapRef.current.animateToRegion(
          {
            latitude,
            longitude,
            latitudeDelta: region.latitude_delta,
            longitudeDelta: region.longitude_delta,
          },
          1000,
        );

        setRegion({longitude, latitude, ...region});
        console.log(
          'posicion actual... Latitud: ' +
            `${JSON.stringify(longitude)}` +
            ' latitud:' +
            `${JSON.stringify(latitude)}`,
        );
      },
      error => {
        console.log(error.code, error.message);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
      },
    );
  };
  onRegionChange = region => {
    setRegion(region);
  };

  fitCoordinates = async () => {
    console.log('centrado de mapa');
    getLocation();
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapRef}
        mapType="standard"
        style={styles.map}
        initialRegion={region}
        // region={this.state.region}
        onRegionChangeComplete={onRegionChange}
      />
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 100,
          width: Width / 10,
          alignSelf: 'flex-end',
          margin: 20,
          marginRight: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          name="crosshairs"
          type="font-awesome"
          color="#8d2d84"
          size={Width / 10}
          onPress={() => fitCoordinates()}
        />
      </View>
      <View style={styles.markerFixed}>
        <Image
          style={styles.marker}
          source={require('../../Asset/imagen/pin.png')}
        />
      </View>
      <SafeAreaView style={styles.footer}>
        <Text style={styles.region}>
          longitud:
          {JSON.stringify(region.longitude)}
          {'\n'}latitud:
          {JSON.stringify(region.latitude)}
        </Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    margin: Width / 20,
    height: Width / 2.5,
    width: Width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    Width,
    Height,
    alignSelf: 'center',
  },
  marker: {
    height: 48,
    width: 48,
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 30,
    position: 'absolute',
    width: '100%',
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20,
    alignSelf: 'center',
  },
});

export default Maps;
