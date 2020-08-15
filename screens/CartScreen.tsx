import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Header, CartFooter, CartItem, Text, Background } from "../components";
import { useAppContext } from "../context/Context";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CartScreen = ({ navigation }: DrawerScreenProps<{}>) => {
  const { cart } = useAppContext();
  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, paddingTop }}>
      <Background />
      <Header navigation={navigation} menuIcon />
      {cart.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text text="Your cart is empty" />
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            ListHeaderComponent={() => (
              <Text text="Cart" variant="title" style={{ marginLeft: 20 }} />
            )}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <CartItem item={item} />}
          />
          <CartFooter />
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyCartContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
});
