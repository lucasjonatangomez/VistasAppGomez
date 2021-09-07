import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';

const ServiceItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.serviceItem}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <Image style={styles.logoService} source={require('../assets/right-arrow.png')} />
        <View>
          <Text style={styles.details}>Pago con {item.valueDesc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  serviceItem: {
    padding: 20,
    margin: 10,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSansBold',
  },
  details: {
    fontSize: 18,
  },
  logoService:{
    width: 20, 
    height: 20,
    alignSelf:'flex-end'
  }
});

export default ServiceItem;