import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import styles from "./DiscussionListCard.style";
import { useNavigation } from "@react-navigation/native";

const DiscussionListCard = () => {
  const navigation = useNavigation();

  const [images, setImages] = useState([
    { id: 1, source: require("../../../images/space.jpg"), preview: false },
    { id: 2, source: require("../../../images/space.jpg"), preview: false },
    { id: 3, source: require("../../../images/space.jpg"), preview: false },
  ]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DiscussionDetails")}
    >
      <View style={styles.container}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          Ide Outfit belanja makanan kucing Jantan
        </Text>
        <View style={styles.userContainer}>
          <Image
            source={require("../../../images/profile.jpeg")}
            style={styles.profileImage}
          />
          <View style={styles.userInfo}>
            <View style={styles.nameContainer}>
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
                <Text style={styles.name}>john Doe</Text>
                <Text style={styles.mail}>john@mail.com</Text>
              </View>
              <Text style={styles.time}>6h ago</Text>
            </View>
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Outfit</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            Ketika berbelanja makanan kucing, keselesaan dan fungsionalitas
            harus menjadi prioritas utama. Ini berarti memilih pakaian yang
            memungkinkan gerakan bebas dan nyaman saat berjalan di sekitar toko
            hewan peliharaan. Pakaian yang terlalu ketat atau terlalu longgar
            dapat mengganggu dan mengurangi kenyamanan kita saat berbelanja.
          </Text>
          {images.length === 1 ? (
            <TouchableOpacity style={{ flex: 1, maxHeight: 200 }}>
              <Image
                source={require("../../../images/space.jpg")}
                style={{ width: "100%", height: "100%" }}
              />
            </TouchableOpacity>
          ) : (
            <FlatList
              data={images}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{ flex: 1, maxHeight: 200, padding: 2 }}
                >
                  <Image
                    source={require("../../../images/space.jpg")}
                    style={{ width: "100%", height: "100%" }}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <TouchableOpacity>
              <Ionicons
                name="bookmark-outline"
                size={24}
                color={COLORS.primary}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("DiscussionDetails")}
            >
              <View style={styles.commentContainer}>
                <Ionicons name="chatbubble" size={18} color={COLORS.primary} />
                <Text style={styles.commentText}>add comment (30)</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View style={styles.footerRight}>
              <Ionicons name="heart-outline" size={24} color={COLORS.primary} />
              <Text style={styles.likes}>10</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DiscussionListCard;
