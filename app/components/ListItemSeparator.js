import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ListItemSeparator(props) {
  return <View style={styles.border} />;
}

const styles = StyleSheet.create({
  border: {
    backgroundColor: colors.p_light,
    width: "100%",
    height: 1,
  },
});
export default ListItemSeparator;
