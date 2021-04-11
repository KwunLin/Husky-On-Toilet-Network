import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";

function ChatBox({
  username,
  image,
  time,
  text,
  justifyContent,
  backgroundColor = colors.p_dark,
}) {
  return (
    <View style={[styles.own, { justifyContent }]}>
      {justifyContent === "flex-start" && (
        <Image style={styles.image} source={image} />
      )}
      <View style={{ width: "100%", alignItems: justifyContent }}>
        <AppText style={{ marginHorizontal: 15 }}>username</AppText>
        <View style={[styles.ownChatBox, { backgroundColor }]}>
          <AppText>{text}</AppText>
          <View style={{ alignSelf: justifyContent }}>
            <AppText style={styles.time}>{time}</AppText>
          </View>
        </View>
      </View>

      {justifyContent === "flex-end" && (
        <Image style={styles.image} source={image} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  own: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  ownChatBox: {
    width: "50%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,

    borderRadius: 15,
  },

  time: {
    fontSize: 12,
    color: colors.text_on_s,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignSelf: "flex-start",
    marginTop: 15,
  },
});

export default ChatBox;
