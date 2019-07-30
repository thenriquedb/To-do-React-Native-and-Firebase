import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import Modal from "react-native-modal";

import System from "../config/Account";

export default class ModalDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.item
    };
  }

  render() {
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}> Excluir tarefa </Text>
          </View>

          <View style={styles.descriptionArea}>
            <Text style={styles.description}>
              Você deseja excluir permanentemente o item "
              {this.props.item.title} " de sua lista de tarefas?
            </Text>
          </View>

          {/* Botões */}
          <View style={styles.buttonsArea}>
            <TouchableHighlight
              onPress={() => System.removemItem(this.props.item)}
              underlayColor="#eeee"
              style={styles.button}
              // onPress={System.removemItem(this.props.item)}
            >
              <Text style={[styles.buttontxt, { color: "#29b000" }]}>
                Confirmar
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor="#eeee"
              style={styles.button}
              onPress={this.props.close}
            >
              <Text style={[styles.buttontxt, { color: "#ff0000" }]}>
                Cancelar
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: 300,
    borderRadius: 8,
    backgroundColor: "#fff"
  },

  header: {
    width: 300,
    height: 30,
    backgroundColor: "#e4007c",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },

  title: {
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
    color: "#fff"
  },
  description: {
    fontSize: 15,
    fontFamily: "Montserrat-Regular"
  },

  descriptionArea: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },

  button: {
    width: 150,
    padding: 5,
    alignItems: "center",
    justifyContent: "center"
  },

  buttontxt: {
    fontFamily: "Montserrat-Regular",
    fontSize: 17
  },

  buttonsArea: {
    flexDirection: "row"
  }
});
