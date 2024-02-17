import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './MyAddressHeader.style';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../../constants';

const MyAddressHeader = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
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

          <Text
            style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}
          >
            My Address
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "normal",
              color: COLORS.primary,
              fontSize: 18,
            }}
          >
            Add Address
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default MyAddressHeader