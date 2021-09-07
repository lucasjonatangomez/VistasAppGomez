import { DETAILS } from '../data/servicesDetails';
import { FlatList } from 'react-native';
import React from 'react';
import ServiceItem from '../components/ServiceItem';

export default function CategoryServiceScreen({ navigation, route }) {
  const details = DETAILS.filter(detail => detail.category === route.params.categoryID);

  const handleSelected = (item) => {
    navigation.navigate('Detail', {
      productID: item.id,
      name: item.name,
    });
  } 

  const renderItem = ({ item }) => (
    <ServiceItem item={item} onSelected={handleSelected} />
  )

  return (
    <FlatList
      data={details}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
}
