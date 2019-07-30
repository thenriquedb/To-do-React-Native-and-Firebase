import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class CurrentDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: new Date(),
      months: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerNumberDay}>
          <Text style={styles.day}> {this.state.data.getDate()} </Text>
        </View>

        <View style={styles.containerMonth}>
          <Text style={styles.month}> {this.state.months[this.state.data.getMonth()].toUpperCase()} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    alignItems: "center"
  },
  containerNumberDay: {
    marginBottom: 5
  },

  containerMonth: {
    marginTop: -20
  },

  day: {
    fontSize: 80,
    color: "#fff",
    fontFamily: "Montserrat-Bold"
  },

  month: {
    fontSize: 22,
    width: "100%",
    color: "#fff",
    fontFamily: "Montserrat-Bold"
  }
});
