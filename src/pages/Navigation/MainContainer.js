import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IonIcons from "@expo/vector-icons/Ionicons";

//Screens
import Home from "../Home";
import ScanQRPage from "../ScanQRPage";
import History from "../History";
import Settings from "../Settings";

//Screen names
const homeName = "Home";
const scanName = "Scan";
const historyName = "History";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            let routeName = route.name;

            if (routeName == homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (routeName == scanName) {
              iconName = focused ? "qr-code" : "qr-code-outline";
            } else if (routeName == historyName) {
              iconName = focused ? "reload-circle" : "reload-circle-outline";
            } else if (routeName == settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <IonIcons name={iconName} size={27} color={color} />;
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "#005954",
          tabBarStyle: {
            height: 70,
            borderBlockColor: "#D7D7D7",
            
          },
        })}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={scanName} component={ScanQRPage} />
        <Tab.Screen name={historyName} component={History} />
        <Tab.Screen name={settingsName} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
