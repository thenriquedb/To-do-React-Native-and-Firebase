import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default class Input extends Component {
  constructor(props) {
    super(props);

    if (this.props.secureTextEntry) {
      this.state = { secureTextEntry: this.props.secureTextEntry };
    } else {
      this.state = { secureTextEntry: false };
    }
  }

  render() {
    return (
      <TextInput
        value={this.props.value}
        secureTextEntry={this.state.secureTextEntry}
        onChangeText={this.props.onChangeText}
        style={styles.input}
        placeholder={this.props.placeholder}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
    margin: 10,
    height: 40
  }
});
