import { Button, FlatList, Text, View } from 'react-native';
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

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <View>
      <View style={{ flexDirection:'column' }}>
                <Text>Empresa, servicio o impuesto</Text>
              </View>
              <View style={{ flexDirection:'column' }}>
                <Button
                  title="Buscar"
                  color="#AAAAAA"
                />
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
