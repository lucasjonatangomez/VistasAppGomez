import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import GridItem from '../../components/GridItem';
import React from 'react';
import { selectCategory } from '../../store/actions/category.actions';

export default function CategoriesScreen({ navigation }) {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.list); 
  
  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      name: item.title,
    });
  }

  // const handleSelectedServicio = (item) => {
  //   dispatch(selectCategory(item.id));
  //   navigation.navigate('Products', {
  //     name: item.title,
  //   });
  // }

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <View>
      <View style={{...styles.container}}>
        <TextInput style={{...styles.inputBuscar}} placeholder="Ingrese empresa, servicio o impuesto"></TextInput>
        <TouchableOpacity style={{...styles.buscar}}>
          <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Buscar</Text>
        </TouchableOpacity>
      </View> 

      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={renderGridItem}
        numColumns={3}
      />      
    

     </View>    
  );
}

const styles = StyleSheet.create({
  container: {
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
    width: '100%',
    margin: 15
  },
  buscar:{
    backgroundColor:'#005689',
    margin: 20,
    borderRadius: 6,
    width: 100,
    height: 50,
    alignItems: 'center',
    padding: 15,
  },
  inputBuscar:{
    fontSize:20,
    fontWeight:'bold',
    margin:20
  }
});