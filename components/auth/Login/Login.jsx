import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Login.style";
import { COLORS } from "../../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useLoginMutation } from "../../../hook/api/authApi";

const Login = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const [loginMutation, { isLoading }] = useLoginMutation();

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const { data } = await loginMutation(authData); // Call the mutation with authData
      const token = data.token;
      const responseCode = data.code;
      const tokenExpires = data.expiresIn;

      if (responseCode === 200) {
        await AsyncStorage.setItem("token", token);
        await AsyncStorage.setItem("tokenExpires", tokenExpires.toString());

        Alert.alert("Success", "Login successful.", [
          {
            text: "OK",
            onPress: () =>
              navigation.reset({ index: 0, routes: [{ name: "Profile" }] }),
          },
        ]);
      } else {
        Alert.alert("Error", "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      Alert.alert("Error", "Login failed. Please try again.");
    }
  };

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo_nob.png")}
        style={{ width: 120, height: 120, marginBottom: 20 }}
      />
      <Text style={styles.title}>Log in</Text>

      <View style={styles.input_container}>
        <TextInput
          placeholder="Email"
          style={styles.input_email}
          value={authData?.email}
          onChangeText={(email) => setAuthData({ ...authData, email })}
        />

        <View style={styles.password_container}>
          <TextInput
            placeholder="Password"
            style={styles.input_password}
            secureTextEntry={isHidden}
            value={authData?.password}
            onChangeText={(password) => setAuthData({ ...authData, password })}
          />
          <TouchableOpacity onPress={toggleVisibility}>
            <Ionicons
              name={isHidden ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleLogin} style={{ paddingVertical: 16 }}>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              paddingVertical: 8,
              backgroundColor: COLORS.primary,
              borderRadius: 8,
            }}
          >
            {isLoading ? (
              <ActivityIndicator size={"small"} color={COLORS.offwhite} />
            ) : (
              <Text style={{ color: COLORS.offwhite, fontFamily: "bold" }}>
                Log In
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
