import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../../constants";

const DiscussionResponseInput = () => {
  return (
    <View style={{ paddingVertical: 20 }}>
      <View style={{ flexDirection: "row", gap: 13, alignItems: "center" }}>
        <Text style={{ fontFamily: "semibold", fontSize: 20 }}>Response</Text>
        <View
          style={{
            paddingHorizontal: 9,
            paddingVertical: 5,
            backgroundColor: COLORS.primary,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontFamily: "semibold", color: COLORS.white }}>
            18
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: COLORS.lightWhite,
          marginTop: 20,
          borderRadius: 10,
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
          <Text
            style={{
              fontFamily: "semibold",
              fontSize: 14,
            }}
          >
            john Doe
          </Text>
        </View>
        <TextInput
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          style={{ padding: 5 }}
          placeholder="Write a comment"
        />
        <View>
          <TouchableOpacity
            style={{
              paddingVertical: 5,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              borderRadius: 5,
              width: "20%",
              alignSelf: "flex-end",
              marginHorizontal: 12,
              marginVertical: 10,
            }}
          >
            <Text style={{ fontFamily: "semibold", color: COLORS.white }}>
              Post
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DiscussionResponseInput;
