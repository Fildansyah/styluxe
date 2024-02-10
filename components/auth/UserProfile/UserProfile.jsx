import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import styles from "./UserProfile.styles";
import ReactNativeModal from "react-native-modal";
import { LogoutModal, ProfileMenu, ProfpicModal } from "../../profile";
import axios from "axios";
import useAuth from "../../../hook/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {API_URL} from "@env";

const UserProfile = () => {
  const [modalLogout, setModalLogout] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "https://cdn.idntimes.com/content-images/post/20230515/foto-cover-8ab93d18b48a0350a0b912cb1ffa411b_600x400.jpeg"
  );
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  const token = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/user/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  const toggleModal = () => {
    setModalLogout(!modalLogout);
  };

  const toggleModalProfile = () => {
    setModalProfile(!modalProfile);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");

    // setModalLogout(!modalLogout);
    Alert.alert("Success", "Logout successful");

    navigation.reset({ index: 0, routes: [{ name: "Profile" }] });
  };

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>PROFILE</Text>
      </View>

      <View style={styles.profileContainer}>
        <View>
          <Image
            source={
              selectedImage
                ? {
                    uri: selectedImage,
                  }
                : require("../../../images/userDefault.png")
            }
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
        <Text style={styles.profileName}>
          {isLoading ? "loading.." : data?.first_name + " " + data?.last_name}
        </Text>
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
        <LogoutModal onPressCancel={toggleModal} onPressYes={handleLogout} />
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
    </View>
  );
};

export default UserProfile;
