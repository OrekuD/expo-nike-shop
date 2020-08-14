import * as React from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { palewhite, lightblue } from "../constants/Colors";
import { width } from "../constants/Layout";
import Text from "./Text";
import { StackNavigationProp } from "@react-navigation/stack";
import { ProductObj } from "../types";
import { IMAGE_BASE_URL } from "../constants/Urls";
import { useAppContext } from "../context/Context";

interface CardProps {
  navigation: StackNavigationProp<{}>;
  scale: Animated.AnimatedInterpolation;
  opacity: Animated.AnimatedInterpolation;
  item: ProductObj;
}
const BORDER_RADIUS = 20;
const ITEM_WIDTH = width * 0.5;

const Card = ({ navigation, scale, opacity, item }: CardProps) => {
  const { name, images, price } = item;
  const { manageCart, isProductInCart } = useAppContext();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("Product", { item })}
    >
      <Animated.View style={{ ...styles.slide, transform: [{ scale }] }}>
        <View style={styles.imageContainer}>
          <Animated.Image
            source={{ uri: `${IMAGE_BASE_URL + images[0].source}` }}
            resizeMode="contain"
            style={{ ...styles.image, opacity }}
          />
        </View>
        <View style={styles.slideContent}>
          <Text text={name} variant="subtitle" />
          <Text text={price} variant="subtitle" price />
          {isProductInCart(item) ? (
            <TouchableOpacity
              onPress={() => manageCart("REMOVE_FROM_CART", item)}
              style={styles.button}
              activeOpacity={0.8}
            >
              <Text
                text="Remove from cart"
                variant="tiny"
                style={{ color: "white" }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => manageCart("ADD_TO_CART", item)}
              style={styles.button}
              activeOpacity={0.8}
            >
              <Text
                text="Add to cart"
                variant="tiny"
                style={{ color: "white" }}
              />
            </TouchableOpacity>
          )}
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
