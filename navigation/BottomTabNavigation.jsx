import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Discussion, Home, Profile, Stylist } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/index";
import DrawerNavigationDiscussion from "./DrawerNavigationDiscussion";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarHideOnKeyboard: true,
  headerShown: false,
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={20}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Discussion"
        component={DrawerNavigationDiscussion}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "chatbubbles" : "chatbubbles-outline"}
                size={20}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Stylist"
        component={Stylist}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "shirt" : "shirt-outline"}
                size={20}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={20}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
