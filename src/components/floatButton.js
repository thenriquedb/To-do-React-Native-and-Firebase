import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

export default class FloatButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.container}
        onPress={this.props.onPress}
        underlayColor="#ccc"
      >
        <Text style={styles.title}> + </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "#e4007c",
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",

    right: 10,
    top: 300,
  },

  title: {
    color: "#fff",
    fontSize: 35
  }
});
