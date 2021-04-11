import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

function MainTopView(props) {
  return <View style={container}></View>;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 70,
  },
});
export default MainTopView;
