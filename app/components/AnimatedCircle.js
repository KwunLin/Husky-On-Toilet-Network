import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";
import colors from "../config/colors";

function AnimatedCircle(props) {
  const [liked, setLiked] = useEffect(false);
  const animatedIcon = Animated.createAnimatedComponent(View);
  const currentValue = new Animated.Value(1);

  return (
    <View>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: colors.brown,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
export default AnimatedCircle;
