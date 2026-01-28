import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function Products({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card} elevation={3}>
            <Card.Cover source={{ uri: item.thumbnail }} style={styles.image} />

            <Card.Content>
              <Text variant="titleMedium" style={styles.title}>
                {item.title}
              </Text>
              <Text numberOfLines={2} style={styles.desc}>
                {item.description}
              </Text>
              <Text style={styles.price}>${item.price}</Text>
            </Card.Content>

            <Card.Actions style={styles.actions}>
              <Button
                textColor="skyblue"
                onPress={() =>
                  navigation.navigate('ProductDetail', {
                    productId: item.id,
                  })
                }
              >
                Detail
              </Button>
              <Button buttonColor="skyblue">Add</Button>
              <Button buttonColor="skyblue">Delete</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f2f2f2',
  },
  card: {
    marginBottom: 15,
    borderRadius: 14,
    overflow: 'hidden',
  },
  image: {
    height: 160,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 6,
  },
  desc: {
    color: '#555',
  },
  price: {
    fontWeight: 'bold',
    color: 'skyblue',
    marginTop: 6,
  },
  actions: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
