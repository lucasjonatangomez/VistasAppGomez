import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

import { DETAILS } from '../data/servicesDetails';
import React from 'react';

export default function ServiceDetailScreen({ route }) {
  const item = DETAILS.find(item => item.id === route.params.productID);
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
