import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

import React from 'react';
import { useSelector } from 'react-redux';

export default function ServiceDetailScreen({ route }) {

  const detailID = useSelector(state => state.details.selectedID);
  const details = useSelector(state => state.details.list);
  const item = details.find(item => item.id === detailID);
  
  return (
    <View style={styles.container}>
      <Image style={styles.logoService} source={item.img} />
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.description}</Text>

      <Text>Ingrese el {item.valueDesc}</Text>
      
      <TextInput
          placeholder={item.valueDesc}
          style={styles.input}
        />
        <Button
                  title="Continuar"
                  color="#AAAAAA"
                />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSansBold',
    marginBottom: 10,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
    marginBottom: 15
  },
  logoService:{
    width: 120, 
    height: 120
  }
});
