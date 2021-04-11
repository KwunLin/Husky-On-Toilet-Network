import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import { useState } from "react";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import BasicBtn from "../components/BasicBtn";
import Button from "../components/Button";

import AppText from "../components/AppText";
import { emailValidator } from "../Vali/emailValidator";
import { passwordValidator } from "../Vali/passwordValidator";
import { nameValidator } from "../Vali/nameValidator";
import { signUpUser } from "../api/auth";
import Toast from "../Vali/Toast";
import TextInput from "../components/TextInput";

function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    setLoading(true);
    const response = await signUpUser({
      name: name.value,
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
          title="Back to login"
          color="p_lite"
          onPress={() => navigation.navigate("Login")}
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
        icon="account"
        onChangeText={(text) => setName({ value: text, error: "" })}
        placeholder="User name"
        textContentType="username"
        error={!!name.error}
        errorText={name.error}
      />
      <View style={{ height: 40, width: "100%" }} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <View style={{ height: 40, width: "100%" }} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        placeholder="password"
        secureTextEntry
        textContentType="password"
      />

      <View style={styles.buttonContainer}>
        <Button loading={loading} title="Register" onPress={onSignUpPressed}>
          Register
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
  rgsBtn: {
    alignSelf: "center",
    marginTop: 50,
  },
  txtbx: {
    marginTop: 10,
  },
});
export default RegisterScreen;
