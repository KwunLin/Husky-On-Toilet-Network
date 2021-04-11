import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../components/AppText";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return (
    <View style={styles.contianer}>
      <AppText style={styles.text}>{error}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  contianer: {
    marginHorizontal: 20,
  },
  text: {
    color: "red",
  },
});

export default ErrorMessage;
