import { View, Text } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import OnboardingScreen from "./screen/Onbording1";
import LoginScreen from "./screen/LoginScreen";
import SignupScreen from "./screen/SignupScreen";
import Homepage from "./component/Home";
import SplashScreen from "./screen/SplashScreen";

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onbording"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // } else {
  // 	return <LoginScreen />;
  // }
}
