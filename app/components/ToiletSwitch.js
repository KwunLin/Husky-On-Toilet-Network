import React, { useState, useEffect } from "react";
import { View, Animated, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

function ToiletSwitch({ visible }) {
  const position = new Animated.ValueXY({ x: 50, y: -100 });

  useEffect(() => {
    if (visible === 1)
      Animated.timing(position, {
        toValue: { x: 50, y: 500 },
        duration: 6000,
      }).start();
  }, [visible]);

  return (
    <Animated.View
      style={{
        height: 40,
        width: 40,
        opacity: visible,

        transform: [{ translateX: position.x }, { translateY: position.y }],
      }}
    >
      <MaterialCommunityIcons
        name="emoticon-poop"
        size={40}
        color={colors.s_dark}
      />
    </Animated.View>
  );
}

export default ToiletSwitch;
