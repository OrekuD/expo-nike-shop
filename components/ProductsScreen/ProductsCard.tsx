import * as React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { ProductObj } from "../../types";
import { width } from "../../constants/Layout";
import { palewhite, deepblue, blue } from "../../constants/Colors";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import Text from "../Text";
import { IMAGE_BASE_URL } from "../../constants/Urls";
import { Ionicons } from "@expo/vector-icons";

interface ProductsCardProps {
  item: ProductObj;
  navigation: DrawerNavigationProp<{}>;
}

const ITEM_SIZE = width * 0.9;

const ProductsCard = ({ item, navigation }: ProductsCardProps) => {
  const { images, name, price } = item;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Product", { item })}
      style={styles.container}
    >
      <Image
        source={{ uri: `${IMAGE_BASE_URL + images[0].source}` }}
        resizeMode="contain"
        style={{ height: "70%", width: "60%", alignSelf: "center" }}
      />
      <Text text={name} />
      <View style={styles.row}>
        <Text text={price} price />
        <Ionicons name="md-arrow-round-forward" color={blue} size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductsCard;

const styles = StyleSheet.create({
  container: {
    width: ITEM_SIZE,
    height: ITEM_SIZE * 0.6,
    alignSelf: "center",
    marginBottom: 20,
    backgroundColor: palewhite,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
