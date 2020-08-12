import React, { useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Animated,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { pink, blue, palewhite, lightblue } from "../constants/Colors";
import { Header } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { width } from "../constants/Layout";
import { RectButton } from "react-native-gesture-handler";

interface HomeScreenProps {}

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
const BORDER_RADIUS = 20;

const HomeScreen = (props: HomeScreenProps) => {
  const { top: paddingTop } = useSafeAreaInsets();
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={{ ...styles.container, paddingTop }}>
      <View style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0)" }}>
        <Header home />

        <View style={{}}>
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
              { useNativeDriver: true }
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
                        style={{ ...styles.image }}
                      />
                    </View>
                    <View style={styles.slideContent}>
                      <Text> Nike Zoom Fly </Text>
                      <Text> Nike Zoom Fly </Text>
                      <TouchableOpacity style={styles.button}>
                        <Text style={{ color: lightblue }}>Add to cart</Text>
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
      </View>
      <View style={styles.background}>
        <View style={styles.left} />
        <View style={styles.right} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    zIndex: -1,
  },
  left: {
    flex: 4,
    backgroundColor: "#ffffff",
  },
  right: {
    flex: 1.2,
    backgroundColor: pink,
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
  },
  button: {
    width: "70%",
    height: "45%",
    borderTopLeftRadius: BORDER_RADIUS,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: pink,
    alignSelf: "flex-end",
  },
});
