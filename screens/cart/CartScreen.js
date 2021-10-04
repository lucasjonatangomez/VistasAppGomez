import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { confirmCart, removeItem } from '../../store/actions/cart.actions';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../../constants/colors';
import CartItem from '../../components/CartItem';
import React from 'react';

const CartScreen = () => {
   const dispatch = useDispatch();
   const items = useSelector(state => state.cart.items);
   const total = useSelector(state => state.cart.total);
   const status = useSelector(state => state.cart.status);
   const userId = useSelector(state => 1);

   const handlerDeleteItem = (id) => dispatch(removeItem(id));
   const handlerConfirmCart = () => dispatch(confirmCart(items, userId));

   const renderItem = (data) => (
     <CartItem item={data.item} onDelete={handlerDeleteItem} />
   );
 
  return (
    <View style={styles.container}>
       <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        {status === 'loading'
         ? (
            <ActivityIndicator
              size="large"
              color={COLORS.accent}
            />
         )
         : (
            <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
              <Text>Confirmar</Text>
              <View style={styles.total}>
                <Text style={styles.text}>Total</Text>
                <Text style={styles.text}>${total}</Text>
              </View>
            </TouchableOpacity>
         )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontFamily: 'OpenSansBold',
    padding: 8,
  },
});

export default CartScreen;