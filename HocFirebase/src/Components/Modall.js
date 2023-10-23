import {StyleSheet, Text, View, Modal} from 'react-native';
import React, {useState} from 'react';

const Modall = ({dulieu, dulieu2}) => {
  const [anHien, setAnHien] = useState(false);
  return (
    <View style={styles.Container}>
      <Text>DELETE</Text>
      <Modal visible={anHien} transparent>
        <View style={styles.Content}>
          <View
            style={{
              width: 300,
              height: 300,
              backgroundColor: 'white',
              borderRadius: 9,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 30,
                color: 'green',
              }}>
              DELETE
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 18,
                color: 'red',
              }}>
              {`Ban Co Muon Xoa ${dulieu2}?`}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modall;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'pink',
    flexDirection: 'column',
  },
  Content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
});
