import * as React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { width } from "../constants/Layout";
import { Feather } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface SearchbarProps {
  navigation: StackNavigationProp<{}> | DrawerNavigationProp<{}>;
}

const Searchbar = ({ navigation }: SearchbarProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#7190BA"
        style={styles.textInput}
      />
      <Feather name="search" color="#7190BA" size={24} />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    height: 55,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
