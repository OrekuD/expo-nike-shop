import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { deepblue } from "../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { width, height } from "../../constants/Layout";
import Text from "../Text";

interface CustomDrawerProps {
  props: DrawerContentComponentProps;
}

const PROFILE_IMAGE_SIZE = 60;

const CustomDrawer = ({ props }: CustomDrawerProps) => {
  const { navigation, state } = props;
  const screens = state.routes;
  const { top: paddingTop } = useSafeAreaInsets();
  const activeColor = "#F66A5C";

  return (
    <View style={{ ...styles.container, paddingTop }}>
      <View style={styles.profile}>
        <View style={styles.profileImage}></View>
        <Text text="Hey" variant="subtitle" style={{ color: "#888590" }} />
        <Text text="Afshin T2Y" variant="title" style={{ color: "#C6C6C6" }} />
      </View>
      <View style={styles.drawerItems}>
        {screens.map(({ name, key }, index) => (
          <TouchableOpacity
            key={key}
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
            <Text
              text={name}
              variant="tiny"
              style={{ color: state.index === index ? activeColor : "#C6C6C6" }}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.separator} />
      <TouchableOpacity activeOpacity={0.8} style={{ ...styles.item }}>
        <Text text="Sign out" variant="tiny" style={{ color: "#C6C6C6" }} />
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
    backgroundColor: "yellow",
    marginTop: 20,
    marginBottom: 10,
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
});
