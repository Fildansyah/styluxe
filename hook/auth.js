import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { setBiodata } from "./slice/auth.slice";
import { tokenState, setToken } from "./slice/auth.slice";

const useAuth = () => {
  // const [token, setToken] = useState(null);
  const token = useSelector(tokenState);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTokenFromStorage = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("token");
        if (storedToken !== null) {
          dispatch(setToken(storedToken));
          // Check token expiry here
          const tokenExpires = await AsyncStorage.getItem("tokenExpires");
          
          if (tokenExpires) {
            const expirationTime = parseInt(tokenExpires) * 1000;
            if (expirationTime < Date.now()) {
              await AsyncStorage.removeItem("token");
              await AsyncStorage.removeItem("tokenExpires");
              dispatch(setToken(null));
              dispatch(setBiodata({}))
            }
          }

          if (storedToken === null) {
            await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("tokenExpires");
            dispatch(setToken(null));
            dispatch(setBiodata({}))
          }
        }
      } catch (error) {
        console.error("Error retrieving token:", error);
        // Handle error if token retrieval fails
      }
    };

    getTokenFromStorage();
  }, []);

  return token;
};

export default useAuth;
