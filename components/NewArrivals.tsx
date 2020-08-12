import React, { useRef } from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { width } from "../constants/Layout";
import Text from "./Text";
import { palewhite, lightblue } from "../constants/Colors";
import Card from "./Card";
import { StackScreenProps, StackNavigationProp } from "@react-navigation/stack";

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

interface NewArrivalsProps {
  navigation: StackNavigationProp<{}>;
}

const NewArrivals = ({ navigation }: NewArrivalsProps) => {
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
            return <Card key={id} {...{ navigation, scale, opacity }} />;
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
});
