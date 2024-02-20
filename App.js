import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import {
  Cart,
  Category,
  MyAddress,
  MyProfile,
  ProductDetails,
  Register,
  Search,
} from "./screens";
import { Provider } from "react-redux";
import store from "./hook/store";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./fonts/Poppins-Regular.ttf"),
    light: require("./fonts/Poppins-Light.ttf"),
    medium: require("./fonts/Poppins-Medium.ttf"),
    semibold: require("./fonts/Poppins-SemiBold.ttf"),
    bold: require("./fonts/Poppins-Bold.ttf"),
    extrabold: require("./fonts/Poppins-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <NavigationContainer>
        <Stack.Navigator>
          {/* home */}
          <Stack.Screen
            name="Bottom Navigation"
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{ headerShown: false }}
          />
          {/* home */}

          {/* profile */}
          <Stack.Screen
            name="MyProfile"
            component={MyProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyAddress"
            component={MyAddress}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          {/* profile */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
