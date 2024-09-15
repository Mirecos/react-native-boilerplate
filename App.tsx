import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Appearance, Text } from "react-native";
import { useState } from "react";

import CustomLightTheme from "./src/config/themes/LightTheme";
import CustomDarkTheme from "./src/config/themes/DarkTheme";
import UserContext from './src/context/User';
import { FIREBASE_AUTH } from './src/config/firebase/FirebaseConfig';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  Theme,
  LightTheme,
  DarkTheme,
  type CustomTheme
} from 'mr-design';
import Main from './src/Main';

LightTheme.setLightTheme(CustomLightTheme);
DarkTheme.setDarkTheme(CustomDarkTheme);

export default function App() {
  const [isConnected, setIsConnected] = useState(FIREBASE_AUTH.currentUser ? true : false)

  React.useEffect(() => {
    GoogleSignin.configure({ webClientId: "35452144833-fnoq8bm7tav4s5r8og289p3m6fihimfi.apps.googleusercontent.com" });
  }, [])

  return (
    <UserContext.Provider value={{ setConnectionStatus: setIsConnected, status: isConnected, userData: isConnected ? FIREBASE_AUTH.currentUser : null }}>
      <Theme.ThemeManager>
        <Main/>
      </Theme.ThemeManager>
    </UserContext.Provider>
  );
}
