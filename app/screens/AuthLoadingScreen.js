import React from "react";

import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";

import firebase from "firebase/app";

export default function AuthLoadingScreen({ navigation }) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is logged in
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } else {
      // User is not logged in
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }
  });

  return (
    <View style={styles.logoContainer}>
      <ImageBackground
        style={styles.logo}
        source={require("../assets/logo.png")}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
});
