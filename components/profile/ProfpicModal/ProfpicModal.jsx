import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ProfpicModal.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import * as ImagePicker from "expo-image-picker";

const ProfpicModal = ({ setSelectedImage, setModalProfile }) => {
  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Sorry, we need camera roll permissions to make this work!"
        );
      }
    })();
  }, []);

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    handleImagePickerResult(result);
  };

  const chooseFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    handleImagePickerResult(result);
  };

  const handleImagePickerResult = (result) => {
    if (!result.cancelled) {
      setSelectedImage(result);
      setModalProfile(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Change Profile Picture</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.optionsBtn} onPress={takePicture}>
          <Ionicons name="camera-outline" size={24} color={COLORS.primary} />
          <Text style={styles.options}>Take Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionsBtn} onPress={chooseFromGallery}>
          <Ionicons name="albums-outline" size={24} color={COLORS.primary} />
          <Text style={styles.options}>Choose Existing Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionsBtn}>
          <Ionicons name="trash-outline" size={24} color={COLORS.red} />
          <Text style={styles.options}>Remove Picture</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfpicModal;
