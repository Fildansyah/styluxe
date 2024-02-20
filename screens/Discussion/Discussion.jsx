import {
  Animated,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { DiscussionHeader, DiscussionListCard } from "../../components";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const Discussion = () => {
  const navigation = useNavigation();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollOffset, setLastScrollOffset] = useState(0);
  const iconOpacity = useRef(new Animated.Value(1)).current;
  const [refreshing, setRefreshing] = useState(false);
  const scrollTimeout = useRef(null);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    Animated.timing(iconOpacity, {
      toValue: scrollDirection === "down" ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [scrollDirection]);

  const handleGesture = ({ nativeEvent }) => {
    if (nativeEvent.translationX > 50) {
      navigation.openDrawer();
    }
  };

  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const scrollUp = currentOffset < lastScrollOffset;
    setScrollDirection(scrollUp ? "up" : "down");
    setLastScrollOffset(currentOffset);

    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setScrollDirection("up");
    }, 10000);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  const discussionRepeater = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View>
          <DiscussionHeader title={"Explore"} />
        </View>
      </PanGestureHandler>

      <ScrollView
        ref={scrollViewRef}
        style={{ paddingHorizontal: 10 }}
        onScroll={(event) => handleScroll(event)}
        scrollEventThrottle={10}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {discussionRepeater.map((item, index) => (
          <DiscussionListCard key={index} />
        ))}
      </ScrollView>

      {scrollDirection === "up" ? (
        <TouchableOpacity>
          <View
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              padding: 15,
              backgroundColor: COLORS.primary,
              borderRadius: 50,
            }}
          >
            <Feather name="edit" size={24} color="white" />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={scrollToTop}>
          <View
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              padding: 15,
              backgroundColor: COLORS.primary,
              borderRadius: 50,
            }}
          >
            <Ionicons name="chevron-up" size={24} color={COLORS.white} />
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default Discussion;
