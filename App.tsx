import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import MainNavigation from "./navigation/Navigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    OswaldR: require("./assets/fonts/Oswald-Regular.ttf"),
    OswaldB: require("./assets/fonts/Oswald-Medium.ttf"),
    OswaldL: require("./assets/fonts/Oswald-Light.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="darkslategrey" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  );
}
