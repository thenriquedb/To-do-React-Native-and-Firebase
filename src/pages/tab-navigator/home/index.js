import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import styles from "./styles";
import System from "../../../config/Account";

import myComponents from "../../../components/myComponents";
const CurrentDate = myComponents.CurrentDate;
const Task = myComponents.Task;
const FloatButton = myComponents.FloatButton;

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = { listData: [], nome: this.props.navigation.getParam("nome") };
    this._addNewTask = this._addNewTask.bind(this);

    System.addAuthListener(user => {
      if (user) {
        System.getTodo(snapshot => {
          let s = this.state;
          s.listData = [];

          snapshot.forEach(childItem => {
            s.listData.push({
              key: childItem.key,
              done: childItem.val().done,
              title: childItem.val().title,
              category: childItem.val().category
            });
          });

          this.setState(s);
        });
      }
    });
  }

  /* Vá para a tela de adcionar uma nova tarefa */
  _addNewTask() {
    this.props.navigation.navigate("NewTaskScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> TELA INICIAL </Text>

        <View style={styles.currentDate}>
          <CurrentDate />
        </View>

        <View style={styles.todoArea}>
          <FlatList
            extraData={this.state.listData}
            data={this.state.listData}
            renderItem={({ item }) => <Task item={item} />}
          />

          <FloatButton onPress={this._addNewTask} />
        </View>
      </View>
    );
  }
}
