import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import styles from "./ProductRow.style";
import { SIZES } from "../../../constants";
import { ProductCardView } from "../ProductCardView";
import { featuredData } from "../../../mocks/home";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../../hook/product.slice";

const ProductRow = () => {

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <FlatList
        data={featuredData}
        renderItem={({ item }) => (
          <ProductCardView
            key={item.id}
            image_uri={item.img}
            category={item.category}
            price={item.price}
            title={item.title}
            onPressCard={() => dispatch(setSelectedProduct(item))}
          />
        )}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;
