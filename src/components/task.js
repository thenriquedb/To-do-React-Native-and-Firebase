import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import ModalDelete from "./modalDelete";
import CheckBox from "./checkBox";
import System from "../config/Account";

export default class Task extends Component {
  constructor(props) {
    super(props);
    // this._checkTask = this._checkTask.bind(this);
    this._controlModal = this._controlModal.bind(this);
    this._checkTask = this._checkTask.bind(this);

    this.state = {
      item: this.props.item,
      title: this.props.item.title,
      category: this.props.item.category,
      isVisible: false
    };
  }

  _checkTask() {
    let s = this.state;
    s.item.done = s.item.done == true ? false : true;
    System.checkTask(s.item);
    this.setState(s);
  }

  _controlModal() {
    let s = this.state;
    if (this.state.isVisible) {
      s.isVisible = false;
    } else {
      s.isVisible = true;
    }
    this.setState(s);
  }

  render() {
    return (
      <View>
        <TouchableOpacity onLongPress={this._controlModal}>
          <View style={styles.container}>
            <View style={styles.checkboxArea}>
              <CheckBox done={this.state.item.done} onPress={this._checkTask} />
            </View>

            <View>
              <Text style={styles.title}> {this.state.title} </Text>
              <Text style={styles.category}> {this.state.category} </Text>
            </View>
          </View>
        </TouchableOpacity>

        <ModalDelete
          item={this.state.item}
          isVisible={this.state.isVisible}
          close={this._controlModal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 8,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 10
  },

  checkboxArea: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000"
  },

  category: {
    fontSize: 14,
    color: "#707070"
  }
});
