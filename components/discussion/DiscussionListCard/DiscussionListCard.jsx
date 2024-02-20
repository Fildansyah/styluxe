import { Image, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import styles from "./DiscussionListCard.style";

const DiscussionListCard = () => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        Ide Outfit belanja makanan kucing Jantan
      </Text>
      <View style={styles.userContainer}>
        <Image
          source={require("../../../images/profile.jpeg")}
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>john Doe</Text>
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
          The three main languages you need to know well are HTML, CSS, and
          JavaScript. From there you can focus on frameworks, libraries, and
          other useful tools.
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Ionicons name="bookmark-outline" size={24} color={COLORS.primary} />
          <View style={styles.commentContainer}>
            <Ionicons name="chatbubble" size={18} color={COLORS.primary} />
            <Text style={styles.commentText}>add comment (30)</Text>
          </View>
        </View>
        <View style={styles.footerRight}>
          <Ionicons name="heart-outline" size={24} color={COLORS.primary} />
          <Text style={styles.likes}>10</Text>
        </View>
      </View>
    </View>
  );
};

export default DiscussionListCard;
