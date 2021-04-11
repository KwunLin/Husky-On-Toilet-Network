import React from "react";
import { Platform, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Cochin",
  },
});
export default AppText;
