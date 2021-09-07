import { COLORS } from '../constants/colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryServiceScreen from '../screens/CategoryServiceScreen';
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from 'react-native';
import React from 'react';
import ServiceDetailScreen from '../screens/ServiceDetailScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ROUTES = {
  HOME: 'Home',
}

const ServiceNavigator = () => (
  <NavigationContainer>
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
          title: 'Ripsa Pagos - Carga Virtual',
          headerStyle: { backgroundColor: COLORS.accent },
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
  </NavigationContainer>
);

export default ServiceNavigator;
