import * as React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { width } from "../../constants/Layout";
import { palewhite, pink, deepblue, blue } from "../../constants/Colors";
import { CartObj } from "../../types";
import { IMAGE_BASE_URL } from "../../constants/Urls";
import Text from "../Text";
import { Entypo } from "@expo/vector-icons";
import { useAppContext } from "../../context/Context";

interface CartItemProps {
  item: CartObj;
}

const IMAGE_CONTAINER_SIZE = width * 0.35;

const CartItem = ({ item }: CartItemProps) => {
  const { name, images, count, price } = item;
  const { manageCart } = useAppContext();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL + images[0].source}` }}
          style={{ width: "95%", height: "95%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Text text={name} variant="default" />
        <Text text={price} price variant="default" />
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => manageCart("DECREASE_ITEM_COUNT", item)}
            activeOpacity={0.7}
            style={styles.button}
          >
            <Entypo name="minus" color={deepblue} size={24} />
          </TouchableOpacity>
          <Text
            text={count}
            variant="tiny"
            style={{
              marginRight: 20,
            }}
          />
          <TouchableOpacity
            onPress={() => manageCart("INCREASE_ITEM_COUNT", item)}
            activeOpacity={0.7}
            style={styles.button}
          >
            <Entypo name="plus" color={deepblue} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: IMAGE_CONTAINER_SIZE + 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    alignSelf: "center",
  },
  content: {
    flex: 1,
    height: "100%",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  imageContainer: {
    width: IMAGE_CONTAINER_SIZE,
    height: IMAGE_CONTAINER_SIZE,
    backgroundColor: palewhite,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: blue,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
});
