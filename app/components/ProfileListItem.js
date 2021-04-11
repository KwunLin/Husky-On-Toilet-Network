import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";

function ProfileListItem({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText>{subtitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    marginVertical: 5,
    paddingRight: 5,
  },
  title: {
    position: "absolute",
    left: 20,
  },
});
export default ProfileListItem;
