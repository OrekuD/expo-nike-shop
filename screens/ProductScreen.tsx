import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Header } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { width, height } from "../constants/Layout";
import { palewhite } from "../constants/Colors";

interface ProductScreenProps {}

const ProductScreen = ({ navigation }: StackScreenProps<{}>) => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop }}>
      <Header navigation={navigation} />
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/2.jpg")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: width,
    height: height * 0.3,
    backgroundColor: palewhite,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
});
