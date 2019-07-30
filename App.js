import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

// import AuthScreen from "./src/pages/auth/AuthScreen";
import Login from "./src/pages/auth/Login/index";
import DrawerNavigator from "./src/routes/Main";

console.disableYellowBox = true;

const Navigator = createSwitchNavigator({
  AuthScreen: Login,
  DrawerNavigator: DrawerNavigator
});

const MainNavigator = createAppContainer(Navigator)
export default MainNavigator;


