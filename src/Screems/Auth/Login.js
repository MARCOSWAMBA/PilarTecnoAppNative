import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {appActions} from '../../Redux/AppRedux';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');

  handleChangeEmail = value => {
    console.log(value);
    setEmail(value);
  };
  handleChangePW = value => {
    setPW(value);
  };
  handlePress = () => {
    dispatch(appActions.setToken(true));
  };
  return (
    <>
      <SafeAreaView styles={styles.Container}>
        <View style={styles.formContainer}>
          <View>
            <Input
              containerStyle={styles.input}
              value={email}
              onChangeText={value => handleChangeEmail(value)}
              placeholder="Email"
              keyboardType="email-address"
            />
          </View>
          <View>
            <Input
              style={styles.input}
              value={pw}
              onChangeText={value => handleChangePW(value)}
              placeholder="Contraseña"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button onPress={handlePress}>Ingresar</Button>
          <Text>|</Text>
          <Button onPress={handlePress}>Registrarse</Button>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    heid: Height,
    Width: Width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    marginTop: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    width: Width * 9,
  },
  input: {
    height: 40,
    margin: 12,
    width: Width * 0.9,
    borderWidth: 1,
    padding: 10,
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

export default Login;
