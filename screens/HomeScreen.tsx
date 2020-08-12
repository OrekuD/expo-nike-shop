import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { pink } from "../constants/Colors";
import { Header } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop }}>
      <View style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0)" }}>
        <Header home />
      </View>
      <View style={styles.background}>
        <View style={styles.left} />
        <View style={styles.right} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
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
