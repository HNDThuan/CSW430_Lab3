import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TextInput, Button, Card, Text } from 'react-native-paper';

export default function ProductSearch() {
  const [keyword, setKeyword] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    if (!keyword) return;

    fetch(`https://dummyjson.com/products/search?q=${keyword}`)
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error(err));
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Search product"
        value={keyword}
        onChangeText={setKeyword}
        style={styles.input}
      />

      <Button mode="contained" onPress={handleSearch}>
        Search
      </Button>

      <FlatList
        data={products || []}
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
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  card: {
    marginTop: 10,
  },
});
