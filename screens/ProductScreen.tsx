import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface ProductScreenProps {}

const ProductScreen = (props: ProductScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ProductScreen</Text>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {},
});
