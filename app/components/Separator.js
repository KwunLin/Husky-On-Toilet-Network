import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

function Separator({ title, fontColor, fontSize }) {
  return (
    <View style={styles.container}>
      <View style={styles.seperator} />
      <AppText style={{ colors: fontColor, fontSize }}>{title}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  seperator: {
    //backgroundColor:colors.white,
    width: "100%",
    height: 1,
  },
  container: {
    backgroundColor: colors.separator,
    width: "100%",
    paddingBottom: 5,
  },
});
export default Separator;
