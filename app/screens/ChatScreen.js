import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ChatBox from "../components/ChatBox";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BasicBtn from "../components/BasicBtn";
import { FlatList } from "react-native-gesture-handler";

//Test
const messages = [
  {
    id: 1,
    text: "ou may be one person to the world",
    time: "17:00",
    userid: 1,
    image: require("../assets/me.jpg"),
    username: "kai",
  },
  {
    id: 2,
    text: "ou may be one person to the world but you may",
    time: "17:00",
    userid: 2,
    image: require("../assets/me.jpg"),
    username: "ken",
  },
  {
    id: 3,
    text:
      "ou may be one person to the world but you may also be the world to one person. Audrey Hepburn lalallalalaallalalallalalalal",
    time: "17:00",
    userid: 3,
    image: require("../assets/me.jpg"),
    username: "louis",
  },
  {
    id: 4,
    text:
      "ou may be one person to the world but you may also be the world to one person. Audrey Hepburn",
    time: "17:00",
    userid: 2,
    image: require("../assets/me.jpg"),
    username: "ken",
  },
  {
    id: 5,
    text:
      "ou may be one person to the world but you may also be the world to one person. Audrey Hepburn",
    time: "17:00",
    userid: 1,
    image: require("../assets/me.jpg"),
    username: "kai",
  },
];

function ChatScreen(props) {
  return (
    <Screen style={styles.scrn}>
      <View style={styles.heading}>
        <AntDesign
          name="left"
          size={30}
          color={colors.text_on_s}
          style={styles.icon}
        />

        <AppText color={colors.text_on_s} style={styles.headingtxt}>
          Username1012
        </AppText>

        <Image source={require("../assets/me.jpg")} style={styles.profile} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.mainContainer}>
            <FlatList
              data={messages}
              keyExtractor={(message) => message.id.toString()}
              renderItem={({ item }) => (
                <ChatBox
                  time={item.time}
                  image={item.image}
                  text={item.text}
                  backgroundColor={
                    item.userid === 1 ? colors.p_dark : colors.secondary
                  }
                  justifyContent={item.userid === 1 ? "flex-end" : "flex-start"}
                />
              )}
            />

            <View style={styles.txtboxContainer}>
              <View style={styles.txtbox}>
                <TextInput placeholder="message..." />
              </View>
              <BasicBtn title="Sent" color="primary" />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  own: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  ownChatBox: {
    height: 50,
    backgroundColor: colors.primaryBtn,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderBottomLeftRadius: 20,
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,
  },
  ownImg: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  time: {
    fontSize: 12,
    color: colors.brown,
  },
  scrn: {
    backgroundColor: colors.secondary,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  mainContainer: {
    height: "100%",
    width: "97%",
    backgroundColor: colors.primary,
    borderRadius: 70,
    paddingTop: 55,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    height: "99%",
    width: "97%",
    borderRadius: 70,
    paddingLeft: 10,
    marginBottom: 25,
  },
  txtbox: {
    width: 200,
    height: 40,
    backgroundColor: colors.p_light,
    borderRadius: 20,

    justifyContent: "center",

    paddingLeft: 20,
  },
  txtboxContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    left: 60,
    alignItems: "flex-end",
  },
  heading: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  headingtxt: {
    fontSize: 20,
    fontWeight: "600",
  },
  icon: {
    position: "absolute",
    left: 10,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: "absolute",
    right: 20,
  },
});

export default ChatScreen;
