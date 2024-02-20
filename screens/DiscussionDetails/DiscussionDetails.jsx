import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import styles from "./DiscussionDetails.style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";
import {
  DiscussionCommentCard,
  DiscussionResponseInput,
} from "../../components";

const DiscussionDetails = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
          padding: 10,
        }}
      >
        <TouchableOpacity
          onPressIn={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name="chevron-back-circle"
            size={30}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Post</Text>
      </View>
      <ScrollView style={styles.container}>
        <View
          style={{
            borderBottomColor: COLORS.gray2,
            borderBottomWidth: 3,
            paddingBottom: 30,
          }}
        >
          <View style={styles.userContainer}>
            <Image
              source={require("../../images/profile.jpeg")}
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
                <Text style={styles.time}>20/12/2022 • 16:00PM</Text>
              </View>
              <View style={styles.tagContainer}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Outfit</Text>
                </View>
              </View>
            </View>
          </View>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
            Ide Outfit belanja makanan kucing Jantan
          </Text>
          <View style={styles.content}>
            <Text style={styles.contentText}>
              Ketika berbelanja makanan kucing, keselesaan dan fungsionalitas
              harus menjadi prioritas utama. Ini berarti memilih pakaian yang
              memungkinkan gerakan bebas dan nyaman saat berjalan di sekitar
              toko hewan peliharaan. Pakaian yang terlalu ketat atau terlalu
              longgar dapat mengganggu dan mengurangi kenyamanan kita saat
              berbelanja.
            </Text>
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
            </View>
            <TouchableOpacity>
              <View style={styles.footerRight}>
                <Ionicons
                  name="heart-outline"
                  size={24}
                  color={COLORS.primary}
                />
                <Text style={styles.likes}>10</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <DiscussionResponseInput />

        <View style={{flexDirection: "column", gap: 5, paddingBottom: 10}}>
          <DiscussionCommentCard />
          <DiscussionCommentCard />
          <DiscussionCommentCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscussionDetails;
