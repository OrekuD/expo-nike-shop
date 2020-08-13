import React, { useRef } from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { pink, blue, palewhite, lightblue } from "../constants/Colors";
import { Header, Text, NewArrivals, UpcomingSneakers } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { width } from "../constants/Layout";
import { RectButton } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";

const HomeScreen = ({ navigation }: StackScreenProps<{}>) => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop }}>
      <View style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0)" }}>
        <Header home navigation={navigation} />
        <View style={{ marginVertical: 10 }}>
          <NewArrivals navigation={navigation} />
        </View>
        <View style={{ marginTop: 20 }}>
          <UpcomingSneakers />
        </View>
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