import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
function BasicBtn({
  title,
  onPress,
  color = "secondary",
  style,
  fontSize = 10,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, { fontSize }]}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: 80,
  },
  text: {
    color: colors.text_on_s,
    textTransform: "uppercase",
    fontWeight: "400",
  },
});
export default BasicBtn;
