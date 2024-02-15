import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { Cart, Category, MyProfile, ProductDetails, Search } from "./screens";
import { Provider } from "react-redux";
import store from "./hook/store";

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
          {/* profile */}

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
