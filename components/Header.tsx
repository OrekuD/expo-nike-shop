import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { width } from "../constants/Layout";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { blue, lightblue } from "../constants/Colors";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import Nike from "../svg/Nike";

interface HeaderProps {
  home?: boolean;
  navigation: StackNavigationProp<{}>;
}

const Header = ({ home, navigation }: HeaderProps) => {
  return (
    <View style={styles.container}>
      {home ? (
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
      ) : (
        <BorderlessButton
          onPress={navigation.goBack}
          style={{ ...styles.menu, alignItems: "center" }}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            color={lightblue}
            size={40}
          />
        </BorderlessButton>
      )}
      {home && <Nike size={60} />}
      <View style={{ flexDirection: "row" }}>
        {!home && (
          <BorderlessButton
            style={{ ...styles.menu, alignItems: "center", marginRight: 20 }}
          >
            <Ionicons name="md-heart" color="#FF0707" size={34} />
          </BorderlessButton>
        )}
        <BorderlessButton style={{ ...styles.menu, alignItems: "center" }}>
          <Feather name="shopping-bag" size={30} color={lightblue} />
        </BorderlessButton>
      </View>
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
