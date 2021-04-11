import "firebase/auth";
import * as firebase from "firebase";
import { useEffect } from "react";
import React, { userState } from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

export const logoutUser = () => {
  firebase.auth().signOut();
};

export const signUpUser = async ({ name, email, password }) => {
  await AsyncStorage.setItem("@emailkey", email);
  const userE = await AsyncStorage.getItem("@emailkey");
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    firebase.auth().currentUser.updateProfile({
      displayName: name,
    });

    const mapping = await firebase
      .firestore()
      .collection("emailToName")
      .doc(email)
      .set({
        username: name,
      })
      .then(() => {
        console.log("User added!");
      });
    //get name by email
    const documentSnapshot = await firebase
      .firestore()
      .collection("emailToName")
      .doc(email)
      .get()
      .then((documentSnapshot) => {
        const uname = documentSnapshot.data().username;
        console.log(uname);
      });
    return { user };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const loginUser = async ({ email, password }) => {
  await AsyncStorage.setItem("@emailkey", email);
  const userE = await AsyncStorage.getItem("@emailkey");

  console.log(userE);

  try {
    //get name by email
    const documentSnapshot = await firebase
      .firestore()
      .collection("emailToName")
      .doc(email)
      .get()
      .then((documentSnapshot) => {
        const uname = documentSnapshot.data().username;
        console.log(uname);
      });

    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    const saveData = async () => {
      try {
        await AsyncStorage.setItem("@emailkey", email);
        console.log("data save!");
        alert("Data successfully saved");
      } catch (e) {
        alert("Failed to save the data to the storage");
      }
    };

    return { user };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const sendEmailWithPassword = async (email) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    return {
      error: error.message,
    };
  }
};
