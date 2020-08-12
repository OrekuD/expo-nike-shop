import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface CardProps {}

const Card = (props: CardProps) => {
  return (
    <View style={styles.container}>
      <Text>Card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {},
});
