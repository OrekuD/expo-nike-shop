import React, { useRef } from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { pink, blue, palewhite, lightblue } from "../constants/Colors";
import {
  Header,
  Text,
  NewArrivals,
  UpcomingSneakers,
  Searchbar,
  Background,
} from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { width } from "../constants/Layout";
import { RectButton } from "react-native-gesture-handler";
import { DrawerScreenProps } from "@react-navigation/drawer";

const HomeScreen = ({ navigation }: DrawerScreenProps<{}>) => {
  const { top: height } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container }}>
      <View style={{ height, backgroundColor: "#fff" }} />
      <View style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0)" }}>
        <Header home navigation={navigation} cartIcon />
        <Searchbar navigation={navigation} />
        <View style={{ marginVertical: 10 }}>
          <NewArrivals navigation={navigation} />
        </View>
        <View style={{ marginTop: 20 }}>
          <UpcomingSneakers navigation={navigation} />
        </View>
      </View>
      <Background />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
