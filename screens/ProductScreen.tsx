import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Header, Text, Rating } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { width, height } from "../constants/Layout";
import { palewhite, blue } from "../constants/Colors";
import { RectButton } from "react-native-gesture-handler";
import { IMAGE_BASE_URL } from "../constants/Urls";
import { useAppContext } from "../context/Context";

interface ProductScreenProps {}

const sizes = [7.5, 8, 8.5, 9, 9.5];
const SIZE = width * 0.135;
const IMAGE_THUMBNAIL_SIZE = width * 0.25;

const ProductScreen = ({ navigation, route }: StackScreenProps<{}>) => {
  const [activeSizeIndex, setActiveSizeIndex] = useState<number>(3);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const { item } = route.params;
  const { name, price, description, images } = item;
  const { manageCart, isProductInCart } = useAppContext();
  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ ...styles.container, paddingTop }}>
        <Header navigation={navigation} productScreen />
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `${IMAGE_BASE_URL + images[activeImageIndex].source}`,
            }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <View style={styles.row}>
            <Text text={name} variant="subtitle" />
            <Rating rating={4} />
          </View>
          <Text text={description} />
          <Text text="Size" variant="subtitle" style={{ marginVertical: 10 }} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 5,
            }}
          >
            {sizes.map((size, index) => (
              <TouchableOpacity
                style={{
                  ...styles.size,
                  backgroundColor: activeSizeIndex === index ? blue : "#fff",
                }}
                key={index}
                onPress={() => setActiveSizeIndex(index)}
                activeOpacity={0.8}
              >
                <Text
                  text={size}
                  variant="tiny"
                  style={{ color: activeSizeIndex === index ? "#fff" : blue }}
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text
            text="Photos"
            variant="subtitle"
            style={{ marginVertical: 10 }}
          />
          <FlatList
            data={images}
            keyExtractor={({ id }) => id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item: { source }, index }) => {
              if (!source) {
                return <View />;
              }
              return (
                <TouchableOpacity
                  style={{
                    ...styles.thumbnail,
                    borderWidth: activeImageIndex === index ? 1 : 0,
                  }}
                  activeOpacity={0.8}
                  onPress={() => setActiveImageIndex(index)}
                >
                  <Image
                    source={{
                      uri: `${IMAGE_BASE_URL + source}`,
                    }}
                    style={styles.imageThumbnail}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              );
            }}
          />
          <View style={{ ...styles.row, marginTop: 20 }}>
            <Text
              text="199.99"
              price
              variant="title"
              style={{ marginVertical: 10 }}
            />
            {isProductInCart(item) ? (
              <RectButton
                onPress={() => manageCart("REMOVE_FROM_CART", item)}
                style={styles.button}
              >
                <Text
                  text="Remove from cart"
                  variant="tiny"
                  style={{ color: "#fff" }}
                />
              </RectButton>
            ) : (
              <RectButton
                onPress={() =>
                  manageCart("ADD_TO_CART", {
                    ...item,
                    size: sizes[activeSizeIndex],
                  })
                }
                style={styles.button}
              >
                <Text
                  text="Add to cart"
                  variant="tiny"
                  style={{ color: "#fff" }}
                />
              </RectButton>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  imageContainer: {
    width: width,
    height: height * 0.32,
    backgroundColor: palewhite,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "90%",
    height: "90%",
  },
  row: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  size: {
    width: SIZE,
    height: SIZE,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: blue,
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnail: {
    width: IMAGE_THUMBNAIL_SIZE,
    height: IMAGE_THUMBNAIL_SIZE,
    borderRadius: 10,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palewhite,
    borderColor: blue,
  },
  imageThumbnail: {
    height: "90%",
    width: "90%",
  },
  button: {
    width: "60%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: blue,
  },
});
