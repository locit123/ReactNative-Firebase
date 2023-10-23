import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation, route}) => {
  const {email, uid} = route.params;
  return (
    <View>
      <Text>{email}</Text>
      <Text>{uid}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
