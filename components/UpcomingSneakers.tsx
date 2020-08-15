import React, { useRef, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { width } from "../constants/Layout";
import Text from "./Text";
import { palewhite, lightblue } from "../constants/Colors";
import { ProductObj } from "../types";
import { BASE_URL, IMAGE_BASE_URL } from "../constants/Urls";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useAppContext } from "../context/Context";

interface UpcomingSneakersProps {
  navigation: StackNavigationProp<{}> | DrawerNavigationProp<{}>;
}

const BORDER_RADIUS = 10;

const ITEM_WIDTH = width * 0.35;
const SPACER_WIDTH = (width - ITEM_WIDTH) / 2;

const UpcomingSneakers = ({ navigation }: UpcomingSneakersProps) => {
  const [products, setProducts] = useState<Array<ProductObj>>([]);
  const { addProducts } = useAppContext();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/shoes/recommended`);
      const data = await response.json();
      if (data.products.length !== 0) {
        setProducts(data.products);
        addProducts(data.products);
      }
    } catch (error) {
      Alert.alert("Error");
    }
  };

  if (products.length === 0) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#121212" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text
        text="Upcoming Sneakers"
        variant="subtitle"
        style={{ marginLeft: 20 }}
      />
      <Animated.FlatList
        data={products}
        horizontal
        contentContainerStyle={{
          alignItems: "center",
          marginVertical: 15,
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const { id, images } = item;
          if (!images[5].source) {
            return <View />;
          }
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Product", { item })}
            >
              <Animated.View
                key={id}
                style={{ ...styles.slide, marginLeft: index === 0 ? 20 : 0 }}
              >
                <Text text="OCT 15" variant="subtitle" style={{ margin: 5 }} />
                <View style={styles.imageContainer}>
                  <Animated.Image
                    source={{ uri: `${IMAGE_BASE_URL + images[5].source}` }}
                    resizeMode="contain"
                    style={{ ...styles.image }}
                  />
                </View>
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default UpcomingSneakers;

const styles = StyleSheet.create({
  container: {
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
