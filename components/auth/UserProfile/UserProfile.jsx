import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

import styles from "./UserProfile.styles";
import ReactNativeModal from "react-native-modal";
import { LogoutModal, ProfileMenu, ProfpicModal } from "../../profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  biodataState,
  setBiodata,
  setToken,
  tokenState,
} from "../../../hook/slice/auth.slice";
import { useGetProfileQuery } from "../../../hook/api/profileAPI";
import { useGetAddressesQuery } from "../../../hook/api/addressApi";
import { setAddress } from "../../../hook/slice/profile.slice";

const UserProfile = () => {
  const [modalLogout, setModalLogout] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "https://cdn.idntimes.com/content-images/post/20230515/foto-cover-8ab93d18b48a0350a0b912cb1ffa411b_600x400.jpeg"
  );
  const biodata = useSelector(biodataState);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { data: profile, error, isLoading, refetch } = useGetProfileQuery();
  const { data: address } = useGetAddressesQuery();
  const token = useSelector(tokenState);

  console.log('adress', address)

  useEffect(() => {
    if (token) {
      refetch();
    }
    if (profile) {
      dispatch(setBiodata(profile.data));
    }
  }, [token, profile]);

  const toggleModal = () => {
    setModalLogout(!modalLogout);
  };

  const toggleModalProfile = () => {
    setModalProfile(!modalProfile);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    dispatch(setToken(null));
    dispatch(setBiodata({}));
    Alert.alert("Success", "Logout successful");

    navigation.reset({ index: 0, routes: [{ name: "Profile" }] });
  };

  const handleAddress = () => {
    if (address) {
      dispatch(setAddress(address.data));
      navigation.navigate("MyAddress");
    }
  }

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <>
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
            </View>
            <Text style={styles.profileName}>
              {biodata?.first_name + " " + biodata?.last_name}
            </Text>
          </View>

          <View style={styles.listContainer}>
            <ProfileMenu
              iconName={"person-outline"}
              label={"My Profile"}
              onPressIn={() => {
                navigation.navigate("MyProfile");
              }}
            />
            <ProfileMenu
              iconName={"home-outline"}
              label={"My Address"}
              onPressIn={handleAddress}
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
            <LogoutModal
              onPressCancel={toggleModal}
              onPressYes={handleLogout}
            />
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
        </>
      )}
    </View>
  );
};

export default UserProfile;
