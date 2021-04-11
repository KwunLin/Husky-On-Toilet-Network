import React from "react";

import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-native-paper";
import { theme } from "./app/config/theme";
import Tabs from "./app/navigation/tab";
import firebase from "firebase/app";
import "firebase/auth";
import MainScreen from "./app/screens/MainScreen";

import AuthLoadingScreen from "./app/screens/AuthLoadingScreen";
import { FIREBASE_CONFIG } from "./app/api/config";

const Stack = createStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

function App() {
  return (
    //<ProfileScreen/>
    //<LoginScreen/>

    //<RegisterScreen/>
    //<RankScreen/>
    //<HomeScreen/>
    //<NavigationContainer>
    //<Tabs/>
    //</NavigationContainer>

    //<ChatScreen/>

    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Load"
          screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
          <Stack.Screen name="Load" component={AuthLoadingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={MainScreen} component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
