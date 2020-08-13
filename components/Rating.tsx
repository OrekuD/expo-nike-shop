import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  let data = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    data.push("star");
  }
  for (let i = 0; i < 5 - Math.floor(rating); i++) {
    data.push("star-o");
  }

  return (
    <View style={styles.container}>
      {data.map((name) => (
        <View style={styles.star} key={String(Math.random())}>
          <FontAwesome name={name} color="#F8A74C" size={22} />
        </View>
      ))}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  star: {
    marginRight: 5,
  },
});
