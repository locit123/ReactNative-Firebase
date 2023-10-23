import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

const AppScreens = () => {
  const [isInput, setIsInput] = useState('');
  const [list, setList] = useState(undefined);

  //hàm Thêm Database
  const handleClickAdd = async () => {
    try {
      //.ref('tên tập hợp cha/key 1').set({value: 'loc'})
      const index = list.length;
      const res = await database().ref(`todo/${index}`).set({
        //truyền vào giá trị đã nhận từ TextInput
        name: isInput,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  //hàm GET database
  const getDatabase = async () => {
    try {
      //.on('value',(nhận vào function)=>{trả về funtction.val()}) : là hàm để lắng nghe và tích cực thay đổi giá trị khi có sự thay đổi
      const data = await database()
        .ref('todo')
        .on('value', snapshot => {
          console.log('SNAPSHOT=>>>>>>', setList(snapshot.val()));
        });
      console.log('data=>>>>>>>>', data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDatabase();
  }, []);

  return (
    <View style={styles.Container}>
      <StatusBar hidden={true} />

      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
        TODO APP
      </Text>
      <View>
        <TextInput
          value={isInput}
          style={styles.Ip}
          placeholder="Enter"
          onChangeText={value => setIsInput(value)}
        />
        <TouchableOpacity
          onPress={handleClickAdd}
          style={{
            backgroundColor: 'white',
            marginTop: 20,
            padding: 15,
            borderRadius: 20,
          }}>
          <Text style={{textAlign: 'center', color: 'black', fontSize: 18}}>
            Add
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
          TODO LIST
        </Text>

        <View style={{flex: 1}}>
          <FlatList
            data={list}
            renderItem={({item}) => {
              console.log(item);
              if (item !== null) {
                return (
                  <View>
                    <Text>{item.name}</Text>
                  </View>
                );
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};
const {width, height} = Dimensions.get('window');
export default AppScreens;

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
