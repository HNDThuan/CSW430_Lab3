import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function ProductDetail() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, []);

  if (!product) return null;

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={{ marginBottom: 20 }}>
        Product Detail
      </Text>
      <Card>
        <Card.Cover source={{ uri: product.thumbnail }} />
        <Card.Content style={styles.content}>
          <Text variant="titleLarge">{product.title}</Text>
          <Text>Description: {product.description}</Text>
          <Text>Price: {product.price} USD</Text>
          <Text>Rating: {product.rating}</Text>
          <Text>Stock: {product.stock}</Text>
          <Text>Brand: {product.brand}</Text>
          <Text>Category: {product.category}</Text>
        </Card.Content>

        <Card.Actions>
          <Button>Delete</Button>
          <Button>Cancel</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  content: {
    marginBottom: 10,
    marginTop: 10,
  },
});
