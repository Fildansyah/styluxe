import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { PanGestureHandler } from "react-native-gesture-handler";
import { DiscussionHeader, DiscussionListCard } from "../../components";

const Discussion = () => {
  const navigation = useNavigation();

  const handleGesture = ({ nativeEvent }) => {
    if (nativeEvent.translationX > 50) {
      navigation.openDrawer();
    }
  };

  return (
    <PanGestureHandler onGestureEvent={handleGesture}>
      <SafeAreaView style={{ flex: 1 }}>
        <DiscussionHeader title={"Discussion"} />
        <ScrollView style={{paddingHorizontal: 10}}>
        <DiscussionListCard />
        </ScrollView>
      </SafeAreaView>
    </PanGestureHandler>
  );
};

export default Discussion;

const styles = StyleSheet.create({});
