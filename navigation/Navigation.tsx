import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  HomeStackParamList,
  DrawerParamList,
  ProductsStackParamList,
} from "../types";
import {
  HomeScreen,
  ProductScreen,
  CartScreen,
  ProductsScreen,
} from "../screens";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomDrawer } from "../components";
import { width } from "../constants/Layout";

const HomeStack = createStackNavigator<HomeStackParamList>();
const ProductsStack = createStackNavigator<ProductsStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Product" component={ProductScreen} />
    </HomeStack.Navigator>
  );
};

const ProductsNavigation = () => {
  return (
    <ProductsStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <ProductsStack.Screen name="Products" component={ProductsScreen} />
      <ProductsStack.Screen name="Product" component={ProductScreen} />
    </ProductsStack.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer props={props} />}
      drawerStyle={{ width: width * 0.8 }}
    >
      <Drawer.Screen name="Home" component={HomeNavigation} />
      <Drawer.Screen name="Products" component={ProductsNavigation} />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation;
