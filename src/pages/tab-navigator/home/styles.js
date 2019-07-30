import React, { Component } from "react";
import { StyleSheet } from "react-native";

export default  styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#010059" },

    currentDate: {
      alignItems: "center",
      alignContent: "center",
      justifyContent: 'center'
    },

    todoArea: {
      backgroundColor: '#EEEEEE',
      padding: 25,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      width: '100%',
      height: '95%'
    }
});
