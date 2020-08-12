import React, { useRef } from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { width } from "../constants/Layout";
import Text from "./Text";
import { palewhite, lightblue } from "../constants/Colors";

interface NewArrivalsProps {}

const BORDER_RADIUS = 20;

const slides = [
  { key: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { id: Math.random().toString() },
  { key: Math.random().toString() },
];

const ITEM_WIDTH = width * 0.5;
const SPACER_WIDTH = (width - ITEM_WIDTH) / 2;

const NewArrivals = (props: NewArrivalsProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <Text text="New arrivals" variant="subtitle" style={styles.title} />
      <Animated.FlatList
        data={slides}
        horizontal
        contentContainerStyle={{ alignItems: "center" }}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item: { id, key }, index }) => {
          const inputRange = [
            (index - 2) * ITEM_WIDTH,
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: "clamp",
          });

          if (id) {
            return (
              <Animated.View
                key={id}
                style={{ ...styles.slide, transform: [{ scale }] }}
              >
                <View style={styles.imageContainer}>
                  <Animated.Image
                    source={require("../assets/images/1.jpg")}
                    resizeMode="contain"
                    style={{ ...styles.image, opacity }}
                  />
                </View>
                <View style={styles.slideContent}>
                  <Text text="Nike Zoom Fly" variant="subtitle" />
                  <Text text="199.99" variant="subtitle" price />
                  <TouchableOpacity style={styles.button}>
                    <Text
                      text="Add to cart"
                      variant="tiny"
                      style={{ color: "white" }}
                    />
                  </TouchableOpacity>
                </View>
              </Animated.View>
            );
          } else {
            return <View key={key} style={{ width: SPACER_WIDTH }} />;
          }
        }}
      />
    </View>
  );
};

export default NewArrivals;

const styles = StyleSheet.create({
  title: {
    paddingLeft: 20,
    marginVertical: 10,
  },
  slide: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH * 1.5,
    backgroundColor: palewhite,
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
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
