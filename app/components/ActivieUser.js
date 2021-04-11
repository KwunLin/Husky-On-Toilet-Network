import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import colors from "../config/colors";

function ActivieUser({ image, visible = false }) {
  return (
    <TouchableOpacity>
      <View style={styles.activeProfile}>
        <Image source={image} style={styles.Image} />

        {visible && <View style={styles.activeLight} />}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  activeLight: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: colors.p_light,
    borderColor: colors.background,
    borderWidth: 3,
  },
  activeProfile: {
    paddingTop: 10,
    height: 80,
    width: 80,

    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  Image: {
    backgroundColor: colors.white,
    height: 70,
    width: 70,
    borderRadius: 25,
    marginRight: 5,
    marginTop: 10,
  },
});

export default ActivieUser;
