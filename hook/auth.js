// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { setBiodata, setToken, tokenState } from "./slice/auth.slice";

const useAuth = () => {
  const token = useSelector(tokenState);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTokenFromStorage = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("token");
        const tokenExpires = await AsyncStorage.getItem("tokenExpires");

        if (storedToken !== null && tokenExpires !== null) {
          const expirationTime = parseInt(tokenExpires) * 1000;
          if (expirationTime > Date.now()) {
            dispatch(setToken(storedToken));
          } else {
            await clearTokenAndBiodata();
          }
        } else {
          await clearTokenAndBiodata();
        }
      } catch (error) {
        console.error("Error retrieving token:", error);
        // Handle error if token retrieval fails
      }
    };

    const clearTokenAndBiodata = async () => {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("tokenExpires");
      dispatch(setToken(null));
      dispatch(setBiodata({}));
    };

    getTokenFromStorage();
  }, [dispatch]);

  return token;
};

export default useAuth;
