import { View, FlatList } from "react-native";
import React from "react";
import styles from "./ProductRow.style";
import { SIZES } from "../../../constants";
import { ProductCardView } from "../ProductCardView";
import { featuredData } from "../../../mocks/product";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../../hook/slice/product.slice";

const ProductRow = () => {

  const dispatch = useDispatch();

  const filteredData = featuredData.filter((item) => item.isFeatured );

  return (
    <View style={styles.container}>
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
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;
