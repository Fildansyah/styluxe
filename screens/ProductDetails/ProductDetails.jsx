import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import styles from "./ProductDetails.style";

import {
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";
import { selectedProductState } from "../../hook/slice/product.slice";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);
  const countDisabled = count === 1;
  const selectedProduct = useSelector(selectedProductState);
  const [selectedSize, setSelectedSize] = useState("XS");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const slides = [selectedProduct?.img];

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-circle" size={30} color={COLORS.black} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.heartContainer}>
            <Ionicons name="heart" size={30} color={COLORS.primary} />
          </View>
        </TouchableOpacity>
      </View>

      <Carousel
        loop
        width={SIZES.width}
        height={SIZES.height / 2}
        data={slides}
        scrollAnimationDuration={2000}
        renderItem={({ index, item: src }) => (
          <View
            key={index}
            style={{
              flex: 1,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: src }}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
        )}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{selectedProduct?.title}</Text>
          <View style={styles.priceWrapper}>
            <Text
              style={styles.price}
            >{`Rp. ${selectedProduct?.price.toLocaleString()}`}</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((idx) => (
              <Ionicons
                key={idx}
                name={
                  idx <= selectedProduct?.total_rating ? "star" : "star-outline"
                }
                size={24}
                color={"gold"}
              />
            ))}
            <Text>({selectedProduct?.total_rating})</Text>
          </View>

          <View style={styles.counter}>
            <TouchableOpacity
              onPress={() => {
                decrement();
              }}
              disabled={countDisabled}
            >
              <SimpleLineIcons
                name="minus"
                size={20}
                color={countDisabled ? "gray" : "black"}
              />
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                increment();
              }}
            >
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sizeContainer}>
          <Text style={styles.sizeTitle}>Select Size</Text>
          <View style={styles.sizeSelection}>
            {sizes.map((size, idx) => (
              <TouchableOpacity
                key={idx}
                style={
                  selectedSize === size ? styles.size_selected : styles.size
                }
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  style={
                    selectedSize === size
                      ? styles.sizeText_selected
                      : styles.sizeText
                  }
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <ScrollView style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>{selectedProduct?.description}</Text>
        </ScrollView>
      </View>

      <View style={styles.cartRow}>
        <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
          <Text style={styles.cartTitle}>Buy Now</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.addCart}>
          <Fontisto name="shopping-bag" color={COLORS.lightWhite} size={22} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
