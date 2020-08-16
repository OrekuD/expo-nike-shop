import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { deepblue } from "../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { width, height } from "../../constants/Layout";
import Text from "../Text";
import {
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

interface CustomDrawerProps {
  props: DrawerContentComponentProps;
}

const PROFILE_IMAGE_SIZE = 60;
const activeColor = "#F66A5C";
const inactiveColor = "#D7D7D7";

const Icon = ({ name, isActive }: { name: string; isActive: boolean }) => {
  if (name === "Home") {
    return (
      <Feather
        name="home"
        color={isActive ? activeColor : inactiveColor}
        size={20}
      />
    );
  } else if (name === "Cart") {
    return (
      <MaterialCommunityIcons
        name="shopping"
        color={isActive ? activeColor : inactiveColor}
        size={20}
      />
    );
  } else if (name === "Products") {
    return (
      <MaterialCommunityIcons
        name="fireplace-off"
        color={isActive ? activeColor : inactiveColor}
        size={20}
      />
    );
  } else {
    return null;
  }
};

const CustomDrawer = ({ props }: CustomDrawerProps) => {
  const { navigation, state } = props;
  const screens = state.routes;
  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, paddingTop }}>
      <View style={styles.profile}>
        <View style={styles.profileImage}>
          <Image
            source={require("../../assets/images/user.png")}
            resizeMode="cover"
            style={{ height: "100%", width: "100%" }}
          />
        </View>
        <Text text="Hey" variant="subtitle" style={{ color: "#888590" }} />
        <Text text="David" variant="title" style={{ color: "#D7D7D7" }} />
      </View>
      <View style={styles.drawerItems}>
        {screens.map(({ name }, index) => (
          <TouchableOpacity
            key={name}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(name)}
            style={{
              ...styles.item,
              backgroundColor:
                state.index === index
                  ? "rgba(246, 106, 92, 0.1)"
                  : "transparent",
            }}
          >
            <View style={styles.icon}>
              <Icon name={name} isActive={state.index === index} />
            </View>
            <Text
              text={name}
              variant="tiny"
              style={{ color: state.index === index ? activeColor : "#D7D7D7" }}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.separator} />
      <TouchableOpacity activeOpacity={0.8} style={{ ...styles.item }}>
        <View style={styles.icon}>
          <Ionicons name="md-log-out" color={inactiveColor} size={24} />
        </View>
        <Text text="Sign out" variant="tiny" style={{ color: "#D7D7D7" }} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: deepblue,
    paddingLeft: width > 400 ? 40 : 30,
  },
  profile: {
    width: "100%",
    height: height * 0.2,
    marginTop: 20,
  },
  profileImage: {
    width: PROFILE_IMAGE_SIZE,
    height: PROFILE_IMAGE_SIZE,
    borderRadius: 10,
    backgroundColor: inactiveColor,
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  drawerItems: {
    marginTop: 30,
  },
  item: {
    width: width * 0.45,
    height: 45,
    // backgroundColor: "purple",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
  },
  separator: {
    width: width * 0.4,
    height: 2,
    backgroundColor: "#888590",
    marginTop: 10,
    marginBottom: 30,
  },
  icon: {
    marginLeft: 15,
    marginRight: 25,
  },
});
