  import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { Ionicons } from "@expo/vector-icons";
  import styles from "./Login.style";
  import { COLORS } from "../../../constants";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import axios from "axios";
  import { useNavigation } from "@react-navigation/native";
  import { API_URL } from "../../../utils/env";

  const Login = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [authData, setAuthData] = useState({
      email: "",
      password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    const handleLogin = async () => {
      console.log('api ur', API_URL)

      try {
        setIsLoading(true);
  
        const response = await axios.post(`${API_URL}/auth/login`, authData);
  
        const token = response.data.token;
        const responseCode = response.data.code;
        const tokenExpires = response.data.expiresIn;
  
        if (responseCode === 200) {
          await AsyncStorage.setItem("token", token);
          await AsyncStorage.setItem("tokenExpires", tokenExpires);

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
      } finally {
        setIsLoading(false);
      }
    };

    const toggleVisibility = () => {
      setIsHidden(!isHidden);
    };

    return (
      <View style={styles.container}>
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
              <Text style={{ color: COLORS.offwhite, fontFamily: "bold" }}>
              {isLoading ? "Logging In..." : "Log In"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  export default Login;
