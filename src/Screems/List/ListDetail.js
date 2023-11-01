import Header from '../../components/header';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {getPokemon} from '../../Api';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Detalle = props => {
  const {url} = props.route.params.item;
  const [abilities, setAbilities] = useState(null);
  const [habitat, setHabitad] = useState(null);
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    getPokemonDetail();
  }, [props]);

  getPokemonDetail = () => {
    getPokemon(url).then(data => {
      console.log(data);
      setAbilities(data.abilities);
      setHabitad(data.habitat);
      setSpecies(data.species);
    });
  };
  return (
    <>
      <SafeAreaView styles={styles.Container}>
        <Header
          leftComponent={
            <View style={styles.headerRight}>
              <TouchableOpacity
                style={{marginLeft: 10}}
                onPress={() => props.navigation.goBack()}>
                <Icon type="font-awesome-5" name="arrow-left" color="white" />
              </TouchableOpacity>
            </View>
          }
        />
        <View style={{...styles.gridRow, flexDirection: 'row'}}>
          <Text style={{fontSize: 20}}>
            {pokemon && JSON.stringify(pokemon)}
          </Text>
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
