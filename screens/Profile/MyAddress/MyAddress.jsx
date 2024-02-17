import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyAddressCard, MyAddressHeader } from "../../../components/profile";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../constants";
import styles from "./MyAddress.style";

const MyAddress = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={{ borderBottomWidth: 1, borderBottomColor: COLORS.gray }}>
        <MyAddressHeader />
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              value=""
              style={styles.searchInput}
              placeholder="Search Your Address"
            />
          </View>
          <View>
            <TouchableOpacity style={styles.searchBtn}>
              <Feather name="search" size={24} color={COLORS.offwhite} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}} contentContainerStyle={{ paddingVertical: 5, paddingHorizontal: 5, gap: 5}}>
        <MyAddressCard />
        <MyAddressCard />
        <MyAddressCard />
        <MyAddressCard />
        <MyAddressCard />
        <MyAddressCard />
      </ScrollView>
      <View style={{ padding: 10, borderTopWidth: 2, borderColor: COLORS.gray2}}>
        <TouchableOpacity>
            <View style={{ alignItems: 'center', paddingVertical:5, backgroundColor:COLORS.primary, borderRadius: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center", color:'white' }}>
                    Choose Address
                </Text>
            </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyAddress;
