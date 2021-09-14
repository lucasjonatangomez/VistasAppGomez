import React, { useEffect } from 'react';
import { filterDetails, selectDetail } from '../store/actions/detail.actions';
import { useDispatch, useSelector } from 'react-redux';

import { FlatList } from 'react-native';
import ServiceItem from '../components/ServiceItem';

export default function CategoryServiceScreen({ navigation }) {
  const dispatch = useDispatch();
  const categoryID = useSelector(state => state.categories.selectedID);
  const details = useSelector(state => state.details.filteredDetails);

  useEffect(() => {
    dispatch(filterDetails(categoryID));
  }, [categoryID]);

  const handleSelected = (item) => {
    dispatch(selectDetail(item.id));
    navigation.navigate('Detail', {
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
