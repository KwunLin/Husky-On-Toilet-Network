import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={colors.secondary}
            style={styles.icon}
          />
        )}
        <TextInput style={styles.textInput} {...otherProps} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 0,
    width: "100%",
    paddingRight: 30,
  },
  textbox: {
    flexDirection: "row",
    width: "80%",

    paddingTop: 10,
    borderColor: colors.p_dark,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
  },
  icon: {
    marginHorizontal: 10,
  },
  textInput: {
    color: colors.p_dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Cochin",
  },
});
export default AppTextInput;
