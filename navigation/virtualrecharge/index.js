import { COLORS } from '../../constants/colors';
import CategoriesScreen from '../../screens/virtualrecharge/CategoriesScreen';
import CategoryServiceScreen from '../../screens/virtualrecharge/CategoryServiceScreen';
import { Platform } from 'react-native';
import React from 'react';
import ServiceDetailScreen from '../../screens/virtualrecharge/ServiceDetailScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ROUTES = {
  HOME: 'Home',
}

const VirtualRechargeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}
  >
    <Stack.Screen
      name={ROUTES.HOME}
      component={CategoriesScreen}
      options={{
        title: 'Buscar Servicio',
      }}
    />
    <Stack.Screen
      name="Products"
      component={CategoryServiceScreen}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
    <Stack.Screen
      name="Detail"
      component={ServiceDetailScreen}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </Stack.Navigator>
);

export default VirtualRechargeNavigator;
