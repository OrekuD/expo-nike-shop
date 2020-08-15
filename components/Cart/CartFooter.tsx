import * as React from "react";
import { View, StyleSheet } from "react-native";
import { width } from "../../constants/Layout";
import Text from "../Text";
import { useAppContext } from "../../context/Context";
import { RectButton } from "react-native-gesture-handler";
import { pink, blue } from "../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CartFooterProps {}

const CartFooter = (props: CartFooterProps) => {
  const { cartTotal } = useAppContext();
  const { bottom: paddingBottom } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingBottom }}>
      <View style={styles.row}>
        <Text text="Total" variant="tiny" />
        <Text text={cartTotal} price variant="subtitle" />
      </View>
      <RectButton style={styles.button}>
        <Text text="NEXT" style={{ color: "#fff" }} />
      </RectButton>
    </View>
  );
};

export default CartFooter;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 120,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-evenly",
    borderTopWidth: 1,
    borderColor: pink,
    backgroundColor: "#fff",
  },
  row: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 5,
    height: 50,
    borderRadius: 10,
    backgroundColor: blue,
  },
});
