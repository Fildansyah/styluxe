import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Collection,  Home, Profile, Stylist } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/index";
import DrawerNavigationDiscussion from "./DrawerNavigationDiscussion";
import { Text } from "react-native";

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
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontFamily: "bold",
                  color: focused ? COLORS.primary : COLORS.gray2,
                  fontSize: 12,
                }}
              >
                Home
              </Text>
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
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontFamily: "bold",
                  color: focused ? COLORS.primary : COLORS.gray2,
                  fontSize: 12,
                }}
              >
                Discussion
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Collection"
        component={Collection}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={20}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontFamily: "bold",
                  color: focused ? COLORS.primary : COLORS.gray2,
                  fontSize: 12,
                }}
              >
                Collection
              </Text>
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
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontFamily: "bold",
                  color: focused ? COLORS.primary : COLORS.gray2,
                  fontSize: 12,
                }}
              >
                Stylist
              </Text>
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
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontFamily: "bold",
                  color: focused ? COLORS.primary : COLORS.gray2,
                  fontSize: 12,
                }}
              >
                Profile
              </Text>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
