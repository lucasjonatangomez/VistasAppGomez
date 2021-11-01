import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../constants/colors';
import CartNavigator from '../cart';
import { Ionicons } from '@expo/vector-icons';
import OrdersNavigator from '../orders';
import React from 'react';
import ShopNavigator from '../virtualrecharge';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => (
  <BottomTabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarStyle: { ...styles.shadow, ...styles.tabBar },
      tabBarLabelStyle:{ ...styles.iconText },
    }}
    initialRouteName="Shop"
  >

    <BottomTabs.Screen
      name="Buscar Servicio"
      component={ShopNavigator}
      options={{
        tabBarIcon: () => (
          <View style={styles.item}>
            <Ionicons name="md-search" size={24} color={COLORS.primary} />
            {/* <Text style={styles.iconText}>Buscar Empresa</Text> */}
          </View>
        )
      }}
    />

  <BottomTabs.Screen
      name="Escanear"
      component={OrdersNavigator}
      options={{
        tabBarIcon: () => (
          <View style={styles.item}>
            <Ionicons name="ios-camera-outline" size={24} color={COLORS.primary} />
            {/* <Text style={styles.iconText}>Escanear</Text> */}
          </View>
        )
      }}
    />

    <BottomTabs.Screen
      name="Carrito"
      component={CartNavigator}
      options={{
        tabBarIcon: () => (
          <View style={styles.item}>
            <Ionicons name="md-cart" size={24} color={COLORS.primary} />
            {/* <Text style={styles.iconText}>Carrito</Text> */}
          </View>
        )
      }}
    />
  </BottomTabs.Navigator>
)


const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
  },
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText:{
    fontSize:12,
    marginTop:-15,
    marginBottom:15
  }
})

export default TabNavigator;

