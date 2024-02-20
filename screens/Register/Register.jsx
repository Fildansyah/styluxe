import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";
import { SelectList } from "react-native-dropdown-select-list";
import { useRegisterMutation } from "../../hook/api/authApi";

const Register = () => {
  const [isHidden, setIsHidden] = useState(true);
  const navigation = useNavigation();

  const [registerMutation, { isLoading, error }] = useRegisterMutation();

  const [registerData, setRegisterData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    re_password: "",
  });

  const handleRegister = async () => {
    try {
      const { data } = await registerMutation({
        first_name: registerData.first_name,
        last_name: registerData.last_name,
        email: registerData.email,
        mobile: registerData.mobile,
        password: registerData.password,
      });
      const responseCode = data?.code;
      if (responseCode === 201) {
        Alert.alert("Success", "Register successful.", [
          {
            text: "OK",
            onPress: () => navigation.navigate("Profile"),
          },
        ]);
      } else {
        console.log("erorregister", error);
        Alert.alert("User Error", "Register failed. Please try again.");
      }
    } catch (error) {
      console.log("erorregister", error);
      Alert.alert("System Error", "Register failed. Please try again.");
    }
  };

  const isPasswordFalse = () => {
    if (registerData.password !== registerData.re_password) {
      return true;
    } else {
      return false;
    }
  };

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const requiredField = () => {
    if (
      registerData.first_name === "" ||
      registerData.email === "" ||
      registerData.password === "" ||
      registerData.re_password === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const data = [
    { key: "male", value: "Male" },
    { key: "female", value: "Female" },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../../assets/logo_nob.png")}
          style={{ width: 120, height: 120, marginBottom: 20 }}
        />
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.input_container}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput
              placeholder="First Name"
              style={styles.inputText}
              value={registerData.first_name}
              onChangeText={(text) =>
                setRegisterData({ ...registerData, first_name: text })
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput
              placeholder="Last Name"
              style={styles.inputText}
              value={registerData.last_name}
              onChangeText={(text) =>
                setRegisterData({ ...registerData, last_name: text })
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              placeholder="Email"
              style={styles.inputText}
              value={registerData.email}
              onChangeText={(text) =>
                setRegisterData({ ...registerData, email: text })
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Mobile</Text>
            <TextInput
              placeholder="Mobile"
              style={styles.inputText}
              value={registerData.mobile}
              onChangeText={(text) => {
                setRegisterData({ ...registerData, mobile: text });
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View
              style={{ ...styles.password_container, backgroundColor: "white" }}
            >
              <TextInput
                placeholder="Password"
                style={styles.input_password}
                secureTextEntry={isHidden}
                value={registerData.password}
                onChangeText={(password) => {
                  setRegisterData({ ...registerData, password: password });
                }}
              />
              <TouchableOpacity onPress={toggleVisibility}>
                <Ionicons
                  name={isHidden ? "eye-off" : "eye"}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Repeat Password</Text>
            <View
              style={{
                ...styles.password_container,
                backgroundColor: isPasswordFalse() ? "pink" : "white",
              }}
            >
              <TextInput
                placeholder="New Password"
                style={styles.input_password}
                secureTextEntry={isHidden}
                value={registerData.re_password}
                onChangeText={(re_password) => {
                  setRegisterData({
                    ...registerData,
                    re_password: re_password,
                  });
                }}
              />
              <TouchableOpacity onPress={toggleVisibility}>
                <Ionicons
                  name={isHidden ? "eye-off" : "eye"}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={{ paddingVertical: 16 }}
            disabled={isPasswordFalse() || requiredField()}
            onPress={handleRegister}
          >
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
                  Register
                </Text>
              )}
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ fontFamily: "regular" }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Text style={{ fontFamily: "bold", color: COLORS.primary }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "bold",
  },
  input_container: {
    paddingTop: 32,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    width: "100%",
  },
  password_container: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input_password: {
    fontFamily: "regular",
    width: "90%",
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    fontFamily: "regular",
  },
  inputContainer: { flexDirection: "column", gap: 12 },
  inputLabel: { fontSize: 16, fontFamily: "semibold", color: "#6C7275" },
});
