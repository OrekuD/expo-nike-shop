import * as React from "react";
import { View, StyleSheet } from "react-native";
import { width } from "../constants/Layout";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { blue, lightblue } from "../constants/Colors";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import Nike from "../svg/Nike";
import Text from "./Text";
import { useAppContext } from "../context/Context";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface HeaderProps {
  home?: boolean;
  cartIcon?: boolean;
  productScreen?: boolean;
  menuIcon?: boolean;
  navigation: DrawerNavigationProp<{}> | StackNavigationProp<{}>;
}

const Header = ({
  home,
  navigation,
  cartIcon,
  productScreen,
  menuIcon,
}: HeaderProps) => {
  const { cart } = useAppContext();
  return (
    <View style={styles.container}>
      {home || menuIcon ? (
        <BorderlessButton onPress={navigation.openDrawer} style={styles.menu}>
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
      {home && <Nike size={50} />}
      {productScreen && (
        <View style={{ flexDirection: "row" }}>
          <BorderlessButton
            style={{ ...styles.menu, alignItems: "center", marginRight: 20 }}
          >
            <Ionicons name="md-heart" color="#FF0707" size={30} />
          </BorderlessButton>
          <BorderlessButton
            onPress={() => navigation.navigate("Cart")}
            style={{ ...styles.menu, alignItems: "center" }}
          >
            <View style={styles.cartSize}>
              <Text
                text={cart.length}
                variant="tiny"
                style={{ color: "#fff" }}
              />
            </View>
            <Feather name="shopping-bag" size={26} color={lightblue} />
          </BorderlessButton>
        </View>
      )}
      {cartIcon && (
        <BorderlessButton
          onPress={() => navigation.navigate("Cart")}
          style={{ ...styles.menu, alignItems: "center" }}
        >
          <View style={styles.cartSize}>
            <Text text={cart.length} variant="tiny" style={{ color: "#fff" }} />
          </View>
          <Feather name="shopping-bag" size={26} color={lightblue} />
        </BorderlessButton>
      )}
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
    width: 32,
    height: 32,
    justifyContent: "space-evenly",
    position: "relative",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: lightblue,
  },
  cartSize: {
    position: "absolute",
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: lightblue,
    top: -6,
    right: -6,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
    paddingBottom: 2,
  },
});
