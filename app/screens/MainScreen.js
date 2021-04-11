import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Switch,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import DrawerLayout from "react-native-gesture-handler/DrawerLayout";
import { Tooltip } from "react-native-elements";

import Screen from "../components/Screen";
import colors from "../config/colors";
import BasicBtn from "../components/BasicBtn";
import AppText from "../components/AppText";
import { ScrollView } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AnimatedCircle from "../components/AnimatedCircle";
import ToiletSwitch from "../components/ToiletSwitch";
import { setStatusBarTranslucent } from "expo-status-bar";

function MainScreen(props) {
  const [dog, setDog] = useState(require("../assets/onToilet_logo.png"));
  const [alert, setAlert] = useState("");
  const [visible, setVisible] = useState(0);
  const [val, setVal] = useState(false);

  useEffect(() => {
    if (val) {
      setTimeout(() => {
        setAlert((alert) => "Already 5 minutes ...");
      }, 3000);
      setTimeout(() => {
        setAlert((alert) => "Already 10 minutes ...");
      }, 6000);
      setTimeout(() => {
        setDog((dog) => require("../assets/5min.png"));
      }, 3000);
      setTimeout(() => {
        setDog((dog) => require("../assets/10min.png"));
      }, 6000);
      setVisible(false);
    } else if (!val && visible === 0) {
      setAlert((alert) => "");
      setDog((dog) => require("../assets/onToilet_logo.png"));
      console.log("Pass");
    } else {
      setAlert((alert) => "");
      setDog((dog) => require("../assets/onToilet_logo.png"));
      setVisible(1);
    }
  }, [val]);

  return (
    <Screen style={styles.scrn}>
      <AppText style={{ fontSize: 40, color: colors.text_on_s }}>
        {" "}
        Welcome User
      </AppText>
      <View style={styles.mainContainer}>
        {val && <AppText style={{ fontSize: 20 }}> {alert} </AppText>}
        <View style={styles.imgContainer}>
          {val && (
            <Image
              style={styles.thinking}
              source={require("../assets/thinking.gif")}
            />
          )}
          {val && <Image style={styles.img} source={dog} />}
          {!val && (
            <Image
              style={styles.img_false}
              source={require("../assets/logo_noShit.png")}
            />
          )}
          <ToiletSwitch visible={visible} />
        </View>
        <View style={styles.switch}>
          {val && <AppText>On Toilet</AppText>}
          {!val && <AppText>Off Toilet</AppText>}
          <Switch
            style={{ marginRight: 3 }}
            value={val}
            onValueChange={(newVal) => setVal(newVal)}
            trackColor={{ true: colors.s_dark }}
          />
        </View>
        <Tooltip
          backgroundColor={colors.s_dark}
          popover={
            <Text>
              Instruction: Turn on the switch to start on toilet. *** Most
              professionals recommend you should not spend more than 10 minutes
              on the toilet.***
            </Text>
          }
          withPointer={true}
          withOverlay={true}
          height={100}
          width={300}
        >
          <View style={styles.info}>
            <Text style={{ color: colors.text_on_s, fontWeight: "600" }}>
              ?
            </Text>
          </View>
        </Tooltip>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  imgContainer: {
    height: 400,
    width: "100%",
    justifyContent: "flex-end",
  },
  img: {
    position: "absolute",
    width: 300,
    height: 300,
  },
  img_false: {
    width: 350,
    height: 300,
  },
  img_toilet: {
    width: 160,
    height: 200,
    tintColor: colors.secondary,
  },
  info: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    backgroundColor: colors.s_light,
    borderRadius: 15,
  },
  mainContainer: {
    backgroundColor: colors.primary,
    height: "85%",
    width: "97%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    borderRadius: 70,
    opacity: 0.9,
    marginBottom: 45,
  },
  scrn: {
    backgroundColor: colors.secondary,
    justifyContent: "flex-end",
  },
  switch: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
    marginRight: 20,
  },
  thinking: {
    position: "absolute",
    top: 0,
    right: 0.1,
    width: 200,
    height: 200,
  },
});

export default MainScreen;
