import * as React from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { palewhite, lightblue } from "../constants/Colors";
import { width } from "../constants/Layout";
import Text from "./Text";
import { StackNavigationProp } from "@react-navigation/stack";

interface CardProps {
  navigation: StackNavigationProp<{}>;
  scale: Animated.AnimatedInterpolation;
  opacity: Animated.AnimatedInterpolation;
}
const BORDER_RADIUS = 20;
const ITEM_WIDTH = width * 0.5;

const Card = ({ navigation, scale, opacity }: CardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("Product")}
    >
      <Animated.View style={{ ...styles.slide, transform: [{ scale }] }}>
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
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {},
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
