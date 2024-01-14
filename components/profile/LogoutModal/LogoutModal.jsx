import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./LogoutModal.style";

const LogoutModal = ({onPressCancel, onPressYes}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Log Out</Text>
      </View>
      <Text style={styles.confirmation}>Are You Sure Want to Logout?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonCancel} onPressIn={onPressCancel}>
          <Text style={styles.textCancel}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonYes} onPressIn={onPressYes}>
          <Text style={styles.textYes}>Yes, Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogoutModal;
