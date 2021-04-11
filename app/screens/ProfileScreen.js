import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
} from "react-native";

import AppText from "../components/AppText";
import BasicBtn from "../components/BasicBtn";
import ListContainer from "../components/ListContainer";
import Screen from "../components/Screen";
import color from "../config/colors";
import ProfileListItem from "../components/ProfileListItem";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import * as firebase from "firebase";
import "firebase/firestore";
import { getEmail } from "../api/auth";
import AsyncStorage from "@react-native-community/async-storage";

function Profile({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [uname, setUsername] = useState("");
  const [email, setEamil] = useState("");

  const readEmail = async () => {
    //call local asyncstrorage
    const userEmail = await AsyncStorage.getItem("@emailkey");
    setEamil(userEmail);
    console.log(userEmail);
    //call firestroage get name by email
    const documentSnapshot = await firebase
      .firestore()
      .collection("emailToName")
      .doc(userEmail)
      .get()
      .then((documentSnapshot) => {
        const username = documentSnapshot.data().username;
        setUsername(username);
        console.log(username);
      });
  };
  useEffect(() => {
    console.log("Pass");
    readEmail();
  }, []);
  //useEffect(()=>{console.log("Pass")},[])
  //setRefreshing(true)
  //useEffect((readEmail,refreshing)

  const signOut = async () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  };

  return (
    <Screen style={styles.scrn}>
      <ImageBackground
        blurRadius={3}
        style={styles.logo}
        source={require("../assets/logo.png")}
      >
        <View style={styles.profileContainer}>
          <BasicBtn
            title="Edit"
            style={styles.edtBtn}
            color="p_light"
            fontSize={13}
          />
          <Image style={styles.profile} source={require("../assets/me.jpg")} />
          <Text>{}</Text>
          <AppText style={{ marginBottom: 5 }}>{uname}</AppText>
          <AppText>{email}</AppText>
          <BasicBtn title="Logout" style={styles.logouBtn} onPress={signOut} />
        </View>
      </ImageBackground>
    </Screen>
  );
}
const styles = StyleSheet.create({
  edtBtn: {
    position: "absolute",
    top: 7,
    right: 7,
  },
  logo: {
    width: 400,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  logouBtn: {
    position: "absolute",
    bottom: 10,
  },
  emailBtn: {
    position: "absolute",
    bottom: 100,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 130,
  },
  profileContainer: {
    paddingTop: 10,
    backgroundColor: color.p_light,
    borderRadius: 20,
    marginBottom: 20,
    width: "90%",
    height: 600,
    opacity: 0.8,
    alignItems: "center",
  },
  scrn: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
