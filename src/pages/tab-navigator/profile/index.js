import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import System from "../../../config/Account";
import MainNavigator from "../../../../App";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this._logout = this._logout.bind(this);
  }

  _logout() {
    System.logout();
    return <MainNavigator />;
  }
  
  render() {
    return (
      <View>
        <Text> TELA DO PERFIL </Text>
        <Button onPress={this._logout} title={"Sair"} />
      </View>
    );
  }
}
