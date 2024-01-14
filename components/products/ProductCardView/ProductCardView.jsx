import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./ProductCardView.style";
import { COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = ({ image_uri, title, category, price, onPressAdd, onPressCard }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails");
        onPressCard();
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: image_uri,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <View style={styles.addBtn}>
            <View>
              <Text style={styles.category} numberOfLines={1}>
                {category}
              </Text>
              <Text
                style={styles.price}
              >{`Rp. ${price.toLocaleString()}`}</Text>
            </View>
            <TouchableOpacity onPressIn={onPressAdd}>
              <Ionicons name="add-circle" size={35} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
