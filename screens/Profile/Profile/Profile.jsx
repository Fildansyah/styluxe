import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Profile.styles";
import { Login, UserProfile } from "../../../components";
import useAuth from "../../../hook/auth"; 

const Profile = () => {
  const token = useAuth();

  console.log('token', token)

  return (
    <SafeAreaView style={styles.container}>
      {!token ? (
        <Login />
      ) : (
        <UserProfile />
      )}
    </SafeAreaView>
  );
};

export default Profile;
