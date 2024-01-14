import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./ProfileMenu.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";

const ProfileMenu = ({ iconName, label, onPressIn }) => {
  return (
    <TouchableOpacity style={styles.container} onPressIn={onPressIn}> 
      <View style={styles.menuContainer}>
        <Ionicons name={iconName} size={24} color={COLORS.primary} />
        <Text style={styles.label}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" color={COLORS.primary} size={24} />
    </TouchableOpacity>
  );
};

export default ProfileMenu;
