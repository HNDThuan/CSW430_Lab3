import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function ProductDetail({ route }) {
  const [product, setProduct] = useState(null);

  const productId = route?.params?.productId ?? 1;

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [productId]);
  if (!product) return null;

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.header}>
        Product Detail
      </Text>

      <Card style={styles.card} elevation={4}>
        <Card.Cover source={{ uri: product.thumbnail }} style={styles.image} />

        <Card.Content style={styles.content}>
          <Text variant="titleLarge" style={styles.title}>
            {product.title}
          </Text>

          <Text style={styles.description}>{product.description}</Text>

          <Text style={styles.price}>${product.price}</Text>

          <View style={styles.infoRow}>
            <Text>Rating: {product.rating} </Text>
            <Text>Stock: {product.stock}</Text>
          </View>

          <Text style={styles.meta}>Brand: {product.brand}</Text>
          <Text style={styles.meta}>Category: {product.category}</Text>
        </Card.Content>

        <Card.Actions style={styles.actions}>
          <Button mode="outlined" textColor="red" style={styles.actionBtn}>
            Delete
          </Button>
          <Button
            mode="contained"
            buttonColor="skyblue"
            style={styles.actionBtn}
          >
            Cancel
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    marginBottom: 16,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    height: 220,
  },
  content: {
    paddingVertical: 12,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    color: '#555',
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'skyblue',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  meta: {
    color: '#666',
    fontSize: 13,
  },
  actions: {
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  actionBtn: {
    borderRadius: 8,
  },
});
