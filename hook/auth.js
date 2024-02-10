import React, { useEffect, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuth = () => {
    const [token, setToken] = useState(null);
    useEffect(() => {
        const getTokenFromStorage = async () => {
          try {
            const storedToken = await AsyncStorage.getItem('token');
            if (storedToken !== null) {
              setToken(storedToken);
            }
          } catch (error) {
            console.error('Error retrieving token:', error);
            // Handle error if token retrieval fails
          }
        };
    
        getTokenFromStorage();
      }, []);
    
      return token;
    };
    
    export default useAuth;