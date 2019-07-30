import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import styles from "./styles";
import System from "../../../config/Account";
import myComponents from "../../../components/myComponents";
const Input = myComponents.Input;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "thenriquedb@gmail.com", password: "101099" };
    this._login = this._login.bind(this);

    // System.logout();
    this._login();

    System.addAuthListener(user => {
      if (user) {
        System.getUserInfo(snapshot => {
          this.props.navigation.navigate("Home", {
            nome: snapshot.val().nome
          });
        });
      }
    });
  }

  _login() {
    System.login(this.state.email, this.state.password).catch(error => {
      alert(error.code);
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.title}> Tela de login </Text>

        <Input
          placeholder="Email"
          onChangeText={text => this.setState({ email: text })}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
        />

        <Button title="Login" onPress={this._login} />
        <Button title="Ainda não possui conta?" onPress={this._login} />
      </View>
    );
  }
}
