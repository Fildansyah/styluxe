import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

const Stylist = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontFamily: "bold", fontSize: 40, color: "#233a64" }}>
        HIRE STYLIST
      </Text>
      <Image
        source={{
          uri: "https://i0.wp.com/iaihnwlotim.ac.id/wp-content/uploads/2022/12/Maintenance-Page.jpg?fit=1920%2C1080&ssl=1",
        }}
        style={{ width: "100%", height: "25%" }}
      />
    </SafeAreaView>
  );
};

export default Stylist;
