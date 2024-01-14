import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Collection.style";

const Collection = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 16,  justifyContent: 'center' }}>
        <View style={{ flexDirection: "column", gap: 24 }}>
          <TouchableOpacity style={{ flexDirection: "column" }}>
            <Image
              source={{
                uri: "https://images.lululemon.com/is/image/lululemon/LW3EP2S_026083_1?size=800,800",
              }}
              style={{ width: 152, height: 162 }}
            />
            <Text style={{padding: 16, fontFamily: 'semibold'}}>Jacket</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: "column" }}>
            <Image
              source={{
                uri: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22969002/2023/5/2/7f9fe1c2-6da1-47fe-b639-281261cc89431682994331602VTRADITIONPinkFitFlareMidiDress1.jpg",
              }}
              style={{ width: 152, height: 250 }}
            />
            <Text style={{padding: 16, fontFamily: 'semibold'}}>Dresses</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "column", gap: 24 }}>
          <TouchableOpacity style={{ flexDirection: "column" }}>
            <Image
              source={{
                uri: "https://www.picture-organic-clothing.com/dw/image/v2/BGFP_PRD/on/demandware.static/-/Sites-poc-master-catalog/default/dw14527324/images/model/MPT127_B_03.jpg?sw=1200&sh=1200&sm=fit",
              }}
              style={{ width: 152, height: 276 }}
            />
            <Text style={{padding: 16, fontFamily: 'semibold'}}>Pants</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: "column" }}>
            <Image
              source={{
                uri: "https://ramrajcotton.in/cdn/shop/files/Shirt1.jpg?v=1697609752",
              }}
              style={{ width: 152, height: 135 }}
            />
            <Text style={{padding: 16, fontFamily: 'semibold'}}>Shirts</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Collection;
