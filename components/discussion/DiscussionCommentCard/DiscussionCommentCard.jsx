import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants";

const DiscussionCommentCard = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderColor: COLORS.gray2,
      }}
    >
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../images/profile.jpeg")}
          style={{
            width: 38,
            height: 38,
            borderRadius: 5,
          }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontFamily: "semibold",
              fontSize: 14,
            }}
          >
            john Doe
          </Text>
          <Text
            style={{
              fontFamily: "regular",
              fontSize: 12,
            }}
          >
            1h ago
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ padding: 5, fontFamily: "regular" }}>
          Mantap Banget Infonya Brok
        </Text>
      </View>
    </View>
  );
};

export default DiscussionCommentCard;

const styles = StyleSheet.create({});
