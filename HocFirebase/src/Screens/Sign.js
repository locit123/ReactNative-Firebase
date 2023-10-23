import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

import auth from '@react-native-firebase/auth';

const Sign = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  //SIGN UP
  const handleSign = async () => {
    try {
      console.log('email=>', email);
      console.log('password=>', password);
      const res = await auth().createUserWithEmailAndPassword(email, password);
      console.log('res=>', res);
      navigation.navigate('login');
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };
  return (
    <View style={styles.Container}>
      <StatusBar hidden={true} />

      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
        META HUB
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
          onPress={handleSign}
          style={{
            backgroundColor: 'white',
            marginTop: 20,
            padding: 15,
            borderRadius: 20,
          }}>
          <Text style={{textAlign: 'center', color: 'black', fontSize: 18}}>
            Sign up
          </Text>
        </TouchableOpacity>
        <Text>{message}</Text>
      </View>
    </View>
  );
};
const {width, height} = Dimensions.get('window');
export default Sign;

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
