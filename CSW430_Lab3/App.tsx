import * as React from 'react';
import { useState } from 'react';
import { BottomNavigation, MD3LightTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import ProductStack from './components/ProductStackNavigator';
import ProductAdd from './components/Add';
import ProductSearch from './components/SearchProduct';
import ProductDetail from './components/Detail';

export default function App() {
  const [index, setIndex] = useState(0);

  const theme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      secondaryContainer: '#32323239',
    },
  };

  const [routes] = useState([
    {
      key: 'products',
      title: 'Products',
      focusedIcon: 'shopping',
    },
    {
      key: 'add',
      title: 'Add',
      focusedIcon: 'plus',
    },
    {
      key: 'search',
      title: 'Search',
      focusedIcon: 'magnify',
    },
    {
      key: 'detail',
      title: 'Detail',
      focusedIcon: 'information',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    products: ProductStack,
    add: ProductAdd,
    search: ProductSearch,
    detail: ProductDetail,
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          theme={theme}
        />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
