import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

export default class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: this.props.done == "true" ? "#29b000" : "#5500ff"
    };
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View
          style={[
            styles.checkbox,
            {
              backgroundColor:
                this.props.done == true ? "#29b000" : "transparent"
            }
          ]}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  checkbox: {
    borderColor: "#000",
    borderWidth: 1,
    width: 26,
    height: 26,
    borderRadius: 13
  }
});
