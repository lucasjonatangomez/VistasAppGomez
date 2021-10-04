import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';

const GridItem = ({ item, onSelected }) => {
  return (
    <View style={styles.gridItem}>     
      <TouchableOpacity
        style={{ ...styles.container}}
        onPress={() => onSelected(item)}
      >       
        <View>
          <Image style={styles.logoService} source={item.img} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 130
  },
  container: {
    flex: 1,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 7,
    backgroundColor:'#FFFFFF',
    width: 120
  },
  title: {
    fontFamily: 'OpenSansBold',
    textAlign: 'center',
    marginTop:10
  },
  logoService:{
    width: 90, 
    height: 90
  }
});

export default GridItem;