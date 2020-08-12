import React, { useRef } from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { width } from "../constants/Layout";
import Text from "./Text";
import { palewhite, lightblue } from "../constants/Colors";

interface UpcomingSneakersProps {}

const BORDER_RADIUS = 10;

const slides = [
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
];

const ITEM_WIDTH = width * 0.35;
const SPACER_WIDTH = (width - ITEM_WIDTH) / 2;

const UpcomingSneakers = (props: UpcomingSneakersProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Text text="Upcoming Sneakers" variant="subtitle" />
      <Animated.FlatList
        data={slides}
        horizontal
        contentContainerStyle={{
          alignItems: "center",
          paddingRight: 30,
          marginVertical: 15,
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: { id } }) => {
          return (
            <Animated.View key={id} style={{ ...styles.slide }}>
              <Text text="OCT 15" variant="subtitle" style={{ margin: 5 }} />
              <View style={styles.imageContainer}>
                <Animated.Image
                  source={require("../assets/images/4.jpg")}
                  resizeMode="contain"
                  style={{ ...styles.image }}
                />
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default UpcomingSneakers;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    marginVertical: 10,
  },
  slide: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    backgroundColor: palewhite,
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
    marginRight: 20,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  slideContent: {
    width: "100%",
    height: "40%",
    justifyContent: "space-between",
    paddingLeft: 20,
  },
  button: {
    width: "70%",
    height: "45%",
    borderTopLeftRadius: BORDER_RADIUS,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: lightblue,
    alignSelf: "flex-end",
  },
});
