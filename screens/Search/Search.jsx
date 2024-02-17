import { View,  TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import styles from "./Search.style";
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";


const Search = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1 ,flexDirection:'row', alignItems: 'center', paddingHorizontal: 5, gap: 10}}>
      <TouchableOpacity onPressIn={()=>{ navigation.goBack()}}>
          <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary}/>
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value=""
            style={styles.searchInput}
            placeholder="What are you looking for ?"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
