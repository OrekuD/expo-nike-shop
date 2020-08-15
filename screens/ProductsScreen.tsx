import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header, Background, Text, ProductsCard } from "../components";
import { width } from "../constants/Layout";
import { RectButton } from "react-native-gesture-handler";
import { useAppContext } from "../context/Context";

const SIZE = 40;

const slides = [
  { id: String(Math.random()) },
  { id: String(Math.random()) },
  { id: String(Math.random()) },
  { id: String(Math.random()) },
  { id: String(Math.random()) },
];

const ProductsScreen = ({ navigation }: DrawerScreenProps<{}>) => {
  const { top: paddingTop } = useSafeAreaInsets();
  const { allProducts } = useAppContext();
  return (
    <>
      <RectButton style={styles.filterContainer}>
        <Image
          source={require("../assets/images/sort.jpg")}
          resizeMode="contain"
          style={{ width: "30%", height: "100%" }}
        />
        <Text text="Filters" variant="tiny" style={{ color: "#000" }} />
      </RectButton>
      <View style={{ ...styles.container, paddingTop }}>
        <Background />
        <FlatList
          data={allProducts}
          ListHeaderComponent={() => (
            <Header navigation={navigation} menuIcon />
          )}
          keyExtractor={({ id }) => id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ProductsCard item={item} navigation={navigation} />
          )}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      </View>
    </>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    position: "absolute",
    bottom: 20,
    left: width / 2 - SIZE,
    width: SIZE * 2,
    height: SIZE,
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    elevation: 1,
    justifyContent: "space-evenly",
  },
});
