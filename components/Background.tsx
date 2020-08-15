import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { pink } from "../constants/Colors";

interface BackgroundProps {}

const Background = (props: BackgroundProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.left} />
      <View style={styles.right} />
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    zIndex: -1,
  },
  left: {
    flex: 4,
    backgroundColor: "#ffffff",
  },
  right: {
    flex: 1.2,
    backgroundColor: pink,
  },
});
