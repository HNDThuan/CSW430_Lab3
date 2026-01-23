import * as React from 'react';
import { BottomNavigation, MD3LightTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Products from './components/Product';
import ProductAdd from './components/Add';
import ProductSearch from './components/SearchProduct';
import ProductDetail from './components/Detail';

export default function App() {
  const [index, setIndex] = React.useState(0);
  const theme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      secondaryContainer: '#32323239',
    },
  };
  const [routes] = React.useState([
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
    products: Products,
    add: ProductAdd,
    search: ProductSearch,
    detail: ProductDetail,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        theme={theme}
      />
    </SafeAreaProvider>
  );
}
