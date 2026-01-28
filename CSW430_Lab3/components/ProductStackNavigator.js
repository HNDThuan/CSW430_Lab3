import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './Product';
import ProductDetail from './Detail';

const Stack = createNativeStackNavigator();

export default function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{ title: 'Products' }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ title: 'Product Detail' }}
      />
    </Stack.Navigator>
  );
}
