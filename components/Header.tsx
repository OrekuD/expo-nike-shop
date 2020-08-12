import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { width } from "../constants/Layout";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { blue, lightblue } from "../constants/Colors";
import { Feather } from "@expo/vector-icons";

interface HeaderProps {
  home?: boolean;
}

const Header = ({ home }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <BorderlessButton style={styles.menu}>
        <View style={styles.row}>
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <View style={styles.row}>
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </BorderlessButton>
      <Text>Header</Text>
      <BorderlessButton style={{ ...styles.menu, alignItems: "center" }}>
        <Feather name="shopping-bag" size={30} color={lightblue} />
      </BorderlessButton>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 70,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menu: {
    width: 40,
    height: 40,
    justifyContent: "space-evenly",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: lightblue,
  },
});
