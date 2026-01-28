import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

export default function ProductAdd() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        price: Number(price),
        discountPercentage: Number(discountPercentage),
        rating: Number(rating),
        stock: Number(stock),
        brand,
        category,
        images,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Added product:', data);
        Alert.alert('Success', 'Add successful');

        // reset form
        setTitle('');
        setDescription('');
        setPrice('');
        setDiscountPercentage('');
        setRating('');
        setStock('');
        setBrand('');
        setCategory('');
        setImages([]);
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Error', 'Add failed');
      });
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        Add Product
      </Text>

      <TextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        label="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Discount %"
        value={discountPercentage}
        onChangeText={setDiscountPercentage}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Rating"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Stock"
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Brand"
        value={brand}
        onChangeText={setBrand}
        style={styles.input}
      />
      <TextInput
        label="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />

      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { marginBottom: 20, textAlign: 'center' },
  input: { marginBottom: 10 },
  button: { backgroundColor: 'skyblue' },
});
