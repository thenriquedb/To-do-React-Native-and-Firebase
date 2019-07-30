import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import Login from "./Login/index";
import Register from "./Register/index";

const TabNavigator = createMaterialTopTabNavigator({
  Login: Login,
  Registro: Register
});

const Tabs = createAppContainer(TabNavigator);

export default class AuthScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 30 }}> NOME DO APLICATIVO </Text>
        <Tabs />
      </View>
    );
  }
}
