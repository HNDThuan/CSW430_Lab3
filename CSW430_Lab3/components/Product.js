import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function Products() {
  const [product, setProduct] = useState();
  const apiURL = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error(
          'There has been a problem with your fetch operation:',
          error,
        );
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={product?.products || []}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Cover source={{ uri: item.thumbnail }} />
            <Card.Content>
              <Text
                variant="titleMedium"
                style={{ fontWeight: 'bold', marginTop: 5, marginBottom: 5 }}
              >
                {item.title}
              </Text>
              <Text style={{ fontSize: 12 }}>{item.description}</Text>
              <Text
                style={{ fontWeight: 'bold', marginTop: 5, marginBottom: 5 }}
              >
                Price: {item.price} VND
              </Text>
            </Card.Content>

            <Card.Actions>
              <Button textColor="skyblue">Detail</Button>
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
    backgroundColor: '#e4e4e4',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'grey',
  },
  card: {
    marginBottom: 10,
  },
});
