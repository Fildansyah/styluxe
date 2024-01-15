import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import styles from "./Profile.styles";
import ReactNativeModal from "react-native-modal";
import {
  LogoutModal,
  ProfileMenu,
  ProfpicModal,
} from "../../components/profile";

const Profile = () => {
  const [modalLogout, setModalLogout] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "https://cdn.idntimes.com/content-images/post/20230515/foto-cover-8ab93d18b48a0350a0b912cb1ffa411b_600x400.jpeg"
  );

  const toggleModal = () => {
    setModalLogout(!modalLogout);
  };

  const toggleModalProfile = () => {
    setModalProfile(!modalProfile);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>PROFILE</Text>
      </View>

      <View style={styles.profileContainer}>
        <View>
          <Image
            source={{
              uri: selectedImage,
            }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editBtn} onPress={toggleModalProfile}>
            <Ionicons
              name="ios-pencil-outline"
              size={24}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>Fildansyah Basudara </Text>
      </View>

      <View style={styles.listContainer}>
        <ProfileMenu
          iconName={"person-outline"}
          label={"Your Profile"}
          onPressIn={() => {}}
        />
        <ProfileMenu
          iconName={"home-outline"}
          label={"My Address"}
          onPressIn={() => {}}
        />
        <ProfileMenu
          iconName={"card-outline"}
          label={"Payment Methods"}
          onPressIn={() => {}}
        />
        <ProfileMenu
          iconName={"receipt-outline"}
          label={"My Orders"}
          onPressIn={() => {}}
        />
        <ProfileMenu
          iconName={"settings-outline"}
          label={"Settings"}
          onPressIn={() => {}}
        />
        <ProfileMenu
          iconName={"exit-outline"}
          label={"Log Out"}
          onPressIn={() => {
            toggleModal();
          }}
        />
      </View>

      <ReactNativeModal
        isVisible={modalLogout}
        onBackdropPress={toggleModal}
        swipeDirection={"down"}
        onSwipeComplete={toggleModal}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <LogoutModal onPressCancel={toggleModal} />
      </ReactNativeModal>

      <ReactNativeModal
        isVisible={modalProfile}
        animationIn={"zoomIn"}
        animationOut={"zoomOut"}
        onBackdropPress={toggleModalProfile}
      >
        <ProfpicModal
          setSelectedImage={setSelectedImage}
          setModalProfile={setModalProfile}
        />
      </ReactNativeModal>
    </SafeAreaView>
  );
};

export default Profile;
