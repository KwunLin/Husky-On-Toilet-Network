import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import * as Yup from "yup";
import { useState } from "react";
import AppTextInput from "../components/AppTextInput";
import BasicBtn from "../components/BasicBtn";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { emailValidator } from "../Vali/emailValidator";
import { passwordValidator } from "../Vali/passwordValidator";
import { loginUser } from "../api/auth";
import Toast from "../Vali/Toast";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    setLoading(true);
    const response = await loginUser({
      email: email.value,
      password: password.value,
    });
    if (response.error) {
      setError(response.error);
    }
    setLoading(false);
  };

  return (
    <Screen>
      <View style={{ alignItems: "flex-end", marginBottom: 40 }}>
        <BasicBtn
          title="Register"
          color="p_lite"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <View style={styles.logoContainer}>
        <ImageBackground
          style={styles.logo}
          source={require("../assets/logo.png")}
        >
          <AppText style={styles.title}>On Toilet ...</AppText>
        </ImageBackground>
      </View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        placeholder="Email"
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <View style={{ height: 40, width: "100%" }} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />

      <View style={styles.buttonContainer}>
        <Button loading={loading} title="Login" onPress={onLoginPressed}>
          Login
        </Button>
      </View>
      <Toast message={error} onDismiss={() => setError("")} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 0,
    width: "100%",
    marginVertical: 80,
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 0,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
  },
  title: {
    fontSize: 20,
    color: colors.text_on_p,
  },
});
