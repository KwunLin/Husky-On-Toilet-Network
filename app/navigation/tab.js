import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import ProfileScreen from "../screens/ProfileScreen";
import MainScreen from "../screens/MainScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ChatScreen from "../chat/ChatScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: colors.s_light,
          borderRadius: 25,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
                width: 80,
              }}
            >
              <FontAwesome5
                name="comment-alt"
                size={25}
                color={focused ? colors.s_dark : colors.secondary}
              />
              <AppText
                style={{ color: focused ? colors.s_dark : colors.secondary }}
              >
                Messages
              </AppText>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
                width: 80,
              }}
            >
              <View>
                <FontAwesome5
                  name="restroom"
                  size={25}
                  color={focused ? colors.s_dark : colors.secondary}
                />
              </View>
              <AppText
                style={{ color: focused ? colors.s_dark : colors.secondary }}
              >
                RestRoom
              </AppText>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
                width: 80,
              }}
            >
              <FontAwesome5
                name="user"
                size={25}
                color={focused ? colors.s_dark : colors.secondary}
              />
              <AppText
                style={{ color: focused ? colors.s_dark : colors.secondary }}
              >
                Profile
              </AppText>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#8c7b75",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.45,
    shadowRadius: 8.5,
    elevation: 5,
  },
});

export default Tabs;
