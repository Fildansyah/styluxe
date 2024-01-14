import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./ProductCardView.style";
import { COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => {navigation.navigate("ProductDetails")}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://id-live-01.slatic.net/p/5bc4bdd41529e73877804b3f17adb838.jpg",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Baju Prabowo
          </Text>
          <View style={styles.addBtn}>
            <View>
              <Text style={styles.category} numberOfLines={1}>
                Shirts
              </Text>
              <Text style={styles.price}>Rp. 5000</Text>
            </View>
            <TouchableOpacity >
              <Ionicons name="add-circle" size={35} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
