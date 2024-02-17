import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import {
  Carousels,
  Collection,
  Headings,
  ProductRow,
  Welcome,
} from "../../components";
import { COLORS } from "../../constants";
import { featuredMenu } from "../../mocks/home";

const Home = () => {
  const slides = [
    "https://tlz.ae/wp-content/uploads/2022/10/TZ_featured-image.png",
    "https://media.glamourmagazine.co.uk/photos/657b2069cd763cb5be091396/16:9/w_1280,c_limit/AW%20FASHION%20TRENDS%20141223%20AW-FASHION-TRENDS-MAIN.jpg",
    "https://www.womanindonesia.co.id/wp-content/uploads/2021/11/Trend-fashion-2022-terins-dari-flora-dan-fauna_womanindonesia.jpg",
  ];
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Ionicons
              name="location-outline"
              size={24}
              color={COLORS.primary}
            />
            <Text>
              Shipped to <Text style={styles.location}>Rumah Fildan </Text>{" "}
            </Text>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>9</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-basket" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousels
          autoPlay
          loop
          slides={slides}
          calc={4}
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
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
          )}
        />
        <Headings title={"Featured"} />
        <ProductRow />
        <Headings title={"Collection"} />

        <Carousels
          slides={featuredMenu}
          loop={false}
          calc={1.5}
          renderItem={({ index, item }) => <Collection category={item.category} />}
        />
       <View style={{height:40}}>
      </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default Home;
