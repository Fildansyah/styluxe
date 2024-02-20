import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DiscussionHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: COLORS.gray2,
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={32} color={COLORS.primary} />
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "bold",
            fontSize: 18,
            color: COLORS.primary,
          }}
        >
          {title}
        </Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="notifications" size={32} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default DiscussionHeader;
