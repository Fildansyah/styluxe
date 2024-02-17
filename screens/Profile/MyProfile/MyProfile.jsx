import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./MyProfile.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import { SelectList } from "react-native-dropdown-select-list";
import { useSelector } from "react-redux";
import { biodataState } from "../../../hook/slice/auth.slice";

const MyProfile = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://cdn.idntimes.com/content-images/post/20230515/foto-cover-8ab93d18b48a0350a0b912cb1ffa411b_600x400.jpeg"
  );

  const biodata = useSelector(biodataState)
  const [tempData, setTempData] = useState(biodata)
    
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState("");
  const data = [
    {key:'1', value:'Male'},
    {key:'2', value:'Female'},
]

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPressIn={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name="chevron-back-circle"
            size={30}
            color={COLORS.primary}
          />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}>
          My Profile
        </Text>
      </View>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
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
            <TouchableOpacity style={styles.editBtn} onPress={() => {}}>
              <Ionicons
                name="ios-pencil-outline"
                size={24}
                color={COLORS.offwhite}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>{tempData?.first_name + " " + tempData?.last_name}</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Account Details</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput placeholder="First Name" style={styles.inputText} value={tempData?.first_name} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput placeholder="Last Name" style={styles.inputText} value={tempData?.last_name} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput placeholder="Email" style={styles.inputText} value={tempData?.email} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Mobile</Text>
            <TextInput placeholder="Mobile" style={styles.inputText} value={tempData?.mobile} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Gender</Text>
            <SelectList
              setSelected={(val) => setSelectedGender(val)}
              data={data}
              save="value"
              
            />
          </View>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Password</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Old Password</Text>
            <TextInput placeholder="Input Old Password" style={styles.inputText} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>New Password</Text>
            <TextInput placeholder="Input New Password" style={styles.inputText} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Repeat New Password</Text>
            <TextInput placeholder="Repeat New Password" style={styles.inputText} />
          </View>
        </View>

        <TouchableOpacity
          style={{ paddingBottom: 80, paddingHorizontal: 30, paddingTop: 20 }}
        >
          <View
            style={{
              padding: 10,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: COLORS.lightWhite,
                fontSize: 16,
                fontFamily: "semibold",
              }}
            >
              Save
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfile;
