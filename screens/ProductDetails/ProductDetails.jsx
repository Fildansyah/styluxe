import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import styles from "./ProductDetails.style";
// import { SliderBox } from "react-native-image-slider-box";

import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";

const ProductDetails = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);
  const countDisabled = count === 1;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const slides = [
    "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/596/2023/11/19/project_20231119_1559550-01-2610195424.jpg",
    "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/596/2023/11/19/project_20231119_1559550-01-2610195424.jpg",
    "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/596/2023/11/19/project_20231119_1559550-01-2610195424.jpg",
  ];

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

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
                width={width}
                height={height/2 }
                data={slides}
                scrollAnimationDuration={2000}
                renderItem={({ index, item: src }) => (
                    <View
                        style={{
                            flex: 1,
                            borderRadius: 10,
                        }}
                    >
                        <Image 
                        source={{ uri: src }}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        />
                    </View>
                )}
            />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>Rp. 50.000</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((idx) => (
              <Ionicons key={idx} name="star" size={24} color={"gold"} />
            ))}
            <Text>(5)</Text>
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

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            TERSEDIA SIZE S M L XL XXL Warna : Hitam merah kuning orange putih
            marun navy biru bahan Cotton Combed 30s Tersedia SIZE S,M,L,XL,2XL
            (Panjang x Lebar) S = 58 x 38 cm M = 63 x 41 cm L = 69 x 50 cm XL =
            71 x 53 cm Silahkan req warna dan size di catatan atau chat :D
          </Text>
        </View>

        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Ionicons name="location-outline" size={20} />
              <Text>Jakarta</Text>
            </View>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text>Free Delivery</Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
              <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
                <Text style={styles.cartTitle}>Buy Now</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
                <Fontisto name="shopping-bag" color={COLORS.lightWhite} size={22}/>
              </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
