import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Appearance, Text } from "react-native";
import { useState } from "react";

import Ionicons from '@expo/vector-icons/Ionicons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  Theme,
} from 'mr-design';
import { FIREBASE_AUTH } from './config/firebase/FirebaseConfig';
import Trainings from './pages/Trainings';
import Home from './pages/Home';
import Profile from './pages/Profile';

const Tab = createBottomTabNavigator();

export default function Main() {
  const theme = React.useContext(Theme.themeContext)
  const [isConnected, setIsConnected] = useState(FIREBASE_AUTH.currentUser ? true : false)

  React.useEffect(() => {
    GoogleSignin.configure({ webClientId: "35452144833-fnoq8bm7tav4s5r8og289p3m6fihimfi.apps.googleusercontent.com" });
  }, [])

  return (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            safeAreaInsets={{ bottom: 0 }}
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                const theme = React.useContext(Theme.themeContext)
                let iconName;
                let rn = route.name

                switch (rn) {
                  case "Home": iconName = "home-sharp"
                    break;
                  case "Profile": iconName = "person-sharp"
                    break;
                  case "Trainings": iconName = "barbell-sharp"
                    break;
                }
                if (focused) {
                  return <Ionicons name={iconName} size={28} color={theme.theme.colors.primary} />
                }
                return <Ionicons name={iconName} size={28} color={theme.theme.colors.text} />
              },
            })

            }
          >
            <Tab.Screen
              name="Trainings"
              component={Trainings}
            />
            <Tab.Screen
              name="Home"
              component={Home}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
            />

          </Tab.Navigator>
        </NavigationContainer>
  );
}
