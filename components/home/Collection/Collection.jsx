import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Collection.style";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../../hook/product.slice";

const Collection = ({ category }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 16, justifyContent: "center" }}>
        <View style={{ flexDirection: "column", gap: 24 }}>
          <TouchableOpacity
            style={{ flexDirection: "column" }}
            onPress={() => {
              navigation.navigate("Category");
              dispatch(setSelectedCategory(category[0].name));
            }}
          >
            <Image
              source={{
                uri: category[0]?.img,
              }}
              style={{ width: 152, height: 162 }}
            />
            <Text style={{ padding: 16, fontFamily: "semibold" }}>
              {category[0]?.name}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "column" }}
            onPress={() => {
              navigation.navigate("Category");
              dispatch(setSelectedCategory(category[1].name));
            }}
          >
            <Image
              source={{
                uri: category[1]?.img,
              }}
              style={{ width: 152, height: 250 }}
            />
            <Text style={{ padding: 16, fontFamily: "semibold" }}>
              {category[1]?.name}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "column", gap: 24 }}>
          <TouchableOpacity
            style={{ flexDirection: "column" }}
            onPress={() => {
              navigation.navigate("Category");
              dispatch(setSelectedCategory(category[2].name));
            }}
          >
            <Image
              source={{
                uri: category[2]?.img,
              }}
              style={{ width: 152, height: 276 }}
            />
            <Text style={{ padding: 16, fontFamily: "semibold" }}>
              {category[2]?.name}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "column" }}
            onPress={() => {
              navigation.navigate("Category");
              dispatch(setSelectedCategory(category[3].name));
            }}
          >
            <Image
              source={{
                uri: category[3]?.img,
              }}
              style={{ width: 152, height: 135 }}
            />
            <Text style={{ padding: 16, fontFamily: "semibold" }}>
              {category[3]?.name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Collection;
