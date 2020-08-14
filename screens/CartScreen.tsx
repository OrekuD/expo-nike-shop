import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header, CartFooter, CartItem, Text } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { width } from "../constants/Layout";
import { useAppContext } from "../context/Context";

const CartScreen = ({ navigation }: StackScreenProps<{}>) => {
  const { top: paddingTop } = useSafeAreaInsets();

  const { cart } = useAppContext();

  return (
    <View style={{ ...styles.container, paddingTop }}>
      <Header navigation={navigation} cart />
      {cart.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text text="Empty cart" />
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
            // contentContainerStyle={{ alignItems: "center" }}
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
