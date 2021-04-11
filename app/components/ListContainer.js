import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import ActivieUser from "../components/ActivieUser";

import colors from "../config/colors";

function ListContainer({
  title,
  subtitle,
  image,
  time,
  onPress,
  visible = false,
  renderRightActions,
  notification = 0,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.listContianer}>
          <View style={styles.imgContainer}>
            <Image style={styles.image} source={image} />
            {visible && <View style={styles.statusLight} />}
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.subtitleContainer}>
              {subtitle && (
                <Text style={styles.subtitle} numberOfLines={2}>
                  {subtitle}{" "}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.timeContainer}>
            {time && (
              <Text style={{ color: colors.p_dark, alignSelf: "flex-end" }}>
                {time}
              </Text>
            )}
            {notification > 0 && (
              <View style={styles.notification}>
                <Text style={{ color: colors.text_on_s }}>{notification}</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  listContianer: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
  },
  image: {
    backgroundColor: colors.white,
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  imgContainer: {
    paddingTop: 10,
    height: 80,
    width: 80,

    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  notification: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  title: {
    paddingBottom: 10,
    fontSize: 17,
    fontWeight: "600",
    color: colors.text_on_p,
  },
  titleContainer: {
    justifyContent: "flex-start",
    width: 280,
  },
  timeContainer: {
    alignItems: "flex-end",
    width: 50,
  },
  subtitle: {
    fontSize: 14,
    paddingLeft: 5,
    color: colors.p_dark,
  },
  subtitleContainer: {
    flexDirection: "row",
    paddingRight: 20,
  },
  statusLight: {
    position: "absolute",
    right: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: colors.primary,
    backgroundColor: colors.s_dark,
    borderWidth: 2,
  },
});

export default ListContainer;
