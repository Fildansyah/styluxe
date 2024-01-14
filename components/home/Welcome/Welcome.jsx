import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xxLarge - 5)}>
          Place to Find
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, SIZES.xxLarge - 10)}>
          Your Fashion Solution
        </Text>
      </View>

      <TouchableOpacity
        style={styles.searchContainer}
        onPressIn={() => {
          navigation.navigate("Search");
        }}
      >
        <View style={styles.searchWrapper}>
          <View style={styles.searchInput}>
            <Text>What are you looking for ?</Text>
          </View>
        </View>
        <View style={styles.searchBtn}>
          <Feather name="search" size={SIZES.xLarge} color={COLORS.offwhite} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
