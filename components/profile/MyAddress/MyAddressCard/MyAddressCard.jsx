import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../../../constants";
import { Ionicons } from "@expo/vector-icons";

const MyAddressCard = ({address}) => {
    const [isPrimary, setIsPrimary] = useState(false);
  return (
    <View
      style={{
        width: "100%",
        borderWidth: 1,
        borderColor: COLORS.gray,
        padding: 10,
        borderRadius: 5,
        flexDirection: "column",
      }}
    >
      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
        <Text style={{ fontFamily: "semibold", fontSize: 12 }}>Rumah</Text>
        <View
          style={{
            padding: 2,
            backgroundColor: COLORS.primary,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "semibold",
              fontSize: 10,
              color: COLORS.lightGray,
            }}
          >
            Primary
          </Text>
        </View>
      </View>
      <Text style={{ fontFamily: "bold", paddingVertical: 5 }}>{address?.receiver_name}</Text>
      <Text style={{ fontFamily: "regular" }}>{address?.mobile}</Text>
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={{ fontFamily: "regular" }}
      >
        {address?.address}
      </Text>

    <View style={{flexDirection: 'row', gap: 10 }}>
    <TouchableOpacity style={{flex: 1}}>
        <View
          style={{
            alignItems: "center",
            padding: 5,
            borderWidth: 1,
            borderColor: COLORS.gray,
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "semibold",
              fontSize: 12,
              color: COLORS.primary,
            }}
          >
            Change Address
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            padding: 5,
            borderWidth: 1,
            borderColor: COLORS.gray,
            borderRadius: 5,
            marginTop: 10,
            width: '100%'
          }}
        >
          <Ionicons name="ellipsis-horizontal" size={19} color={COLORS.primary} />
        </View>
      </TouchableOpacity>
    </View>
      
    </View>
  );
};

export default MyAddressCard;

const styles = StyleSheet.create({});
