import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import styles from "./Category.style";
import { featuredData } from "../../mocks/product";
import { ProductCardView } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedCategoryState,
  setSelectedProduct,
} from "../../hook/slice/product.slice";

const Category = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectedCategoryState);

  const filteredData = featuredData.filter(
    (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle"
            size={30}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{selectedCategory}</Text>
        </View>
      </View>

      <View style={styles.listContainer}>
        {filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            renderItem={({ item }) => (
              <ProductCardView
                key={item.id}
                image_uri={item.img}
                category={item.category}
                price={item.price}
                title={item.title}
                rating={item.total_rating}
                onPressCard={() => dispatch(setSelectedProduct(item))}
              />
            )}
            contentContainerStyle={{
              columnGap: SIZES.medium,
              rowGap: SIZES.small,
            }}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 20 }}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/6134/6134065.png",
              }}
              style={{ width: 200, height: 200 }}
            />
            <Text style={{ fontFamily: "bold", fontSize: 20, color: COLORS.primary }}>Sorry We Dont Have {selectedCategory}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Category;
