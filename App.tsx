import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Text, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import MainNavigation from "./navigation/Navigation";
import { Provider, useAppContext } from "./context/Context";

export default function App() {
  let [fontsLoaded] = useFonts({
    OswaldR: require("./assets/fonts/Oswald-Regular.ttf"),
    OswaldB: require("./assets/fonts/Oswald-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="darkslategrey" />
      </View>
    );
  }

  return (
    <Provider>
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}
