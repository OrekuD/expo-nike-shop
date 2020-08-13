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

interface ProductScreenProps {}

const sizes = [7.5, 8, 8.5, 9, 9.5];
const SIZE = width * 0.135;
const IMAGE_THUMBNAIL_SIZE = width * 0.25;

const images = [
  { id: String(Math.random()), image: require("../assets/images/2.jpg") },
  { id: String(Math.random()), image: require("../assets/images/img-2.jpg") },
  { id: String(Math.random()), image: require("../assets/images/img-3.jpg") },
  { id: String(Math.random()), image: require("../assets/images/img-4.jpg") },
  { id: String(Math.random()), image: require("../assets/images/img-5.jpg") },
];

const ProductScreen = ({ navigation }: StackScreenProps<{}>) => {
  const { top: paddingTop } = useSafeAreaInsets();
  const [activeSizeIndex, setActiveSizeIndex] = useState<number>(3);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ ...styles.container, paddingTop }}>
        <Header navigation={navigation} />
        <View style={styles.imageContainer}>
          <Image
            source={images[activeImageIndex].image}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <View style={styles.row}>
            <Text text="React Infinity Run Flyknit" variant="subtitle" />
            <Rating rating={4} />
          </View>
          <Text text="Esse aliquip cupidatat cillum laboris nulla eiusmod laboris. Tempor elit aute et cillum mollit laborum minim." />
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
            renderItem={({ item: { image }, index }) => {
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
                    source={image}
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
            <RectButton style={styles.button}>
              <Text
                text="Add to cart"
                variant="tiny"
                style={{ color: "#fff" }}
              />
            </RectButton>
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
  },
  imageContainer: {
    width: width,
    height: height * 0.32,
    backgroundColor: palewhite,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "80%",
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
