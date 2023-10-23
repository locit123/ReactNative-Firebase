import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  //Login
  const handleLogin = async () => {
    try {
      console.log('email=>', email);
      console.log('password=>', password);
      const getLogin = await auth().signInWithEmailAndPassword(email, password);
      console.log('login=>', getLogin);
      navigation.navigate('home', {
        email: getLogin.user.email,
        uid: getLogin.user.uid,
      });
      setMessage('');
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };
  return (
    <View style={styles.Container}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
        Login
      </Text>
      <View>
        <TextInput
          value={email}
          style={styles.Ip}
          placeholder="Enter email"
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          value={password}
          style={styles.Ip}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            backgroundColor: 'white',
            marginTop: 20,
            padding: 15,
            borderRadius: 20,
          }}>
          <Text style={{textAlign: 'center', color: 'black', fontSize: 18}}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('sign')}>
          <Text style={{textAlign: 'center', color: 'black', fontSize: 18}}>
            New Create Sing Up
          </Text>
        </TouchableOpacity>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'pink',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  Ip: {
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 20,
    width: width - 30,
    paddingLeft: 20,
  },
});
