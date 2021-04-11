import React, { useEffect, useState } from "react";

import {
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleShee,
  View,
  Text,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import Fire from "./Fire";
import AsyncStorage from "@react-native-community/async-storage";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { color } from "react-native-reanimated";

function Profile(props) {
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
}

export default class ChatScreen extends React.Component {
  getName() {
    const [uname, setUsername] = useState("");
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

    return username;
  }

  state = {
    messages: [],
  };

  get user() {
    return {
      _id: Fire.uid,
      name: Fire.name,
    };
  }

  componentDidMount() {
    Fire.get((message) =>
      this.setState((previous) => ({
        messages: GiftedChat.append(previous.messages, message),
      }))
    );
  }

  componentWillUnmount() {
    Fire.off();
  }

  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.send}
        user={this.user}
      />
    );

    if (Platform.OS === "android") {
      return (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={30}
          enabled
        >
          {chat}
        </KeyboardAvoidingView>
      );
    }

    return (
      <Screen style={{ backgroundColor: colors.secondary }}>
        <View style={{ marginLeft: 5 }}>
          <Text style={{ fontSize: 40, color: colors.text_on_s }}>
            {" "}
            Messages
          </Text>
        </View>
        <View
          style={{
            height: "80%",
            backgroundColor: colors.primary,
            borderRadius: 40,
          }}
        >
          {chat}
        </View>
      </Screen>
    );
  }
}
