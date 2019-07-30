import React, { Component } from "react";
import { View, Text, Button, Picker } from "react-native";
import System from "../../config/Account";

import myComponents from "../../components/myComponents";
const Input = myComponents.Input;

export default class NewItemScreen extends Component {
  static navigationOptions = {
    title: "Nova tarefa"
  };

  constructor(props) {
    super(props);

    this.state = {
      taskTitle: "",
      taskCategory: ""
    };

    this._addNewTask = this._addNewTask.bind(this);
    // System.addAuthListener(user => {});
  }

  _addNewTask() {
    if (this.state.taskTitle && this.state.taskCategory) {
      System.addNewTask(this.state.taskTitle, this.state.taskCategory);

      let s = this.state;
      s.taskCategory = "";
      s.taskTitle = "";
      this.setState(s);
    }
  }

  render() {
    // let todoLists =

    return (
      <View>
        <Text> Titulo </Text>
        <Input
          value={this.state.taskTitle}
          onChangeText={taskTitle => this.setState({ taskTitle })}
          placeholder="Ex: Ir ao mercado"
        />

        <Text> Lista </Text>
        <Input
          value={this.state.taskCategory}
          onChangeText={taskCategory => this.setState({ taskCategory })}
          placeholder="Tarefas"
        />

        <Button onPress={this._addNewTask} title="Adcionar" />
      </View>
    );
  }
}

{
  /* <Picker
          selectedValue={this.state.taskList}
          onValueChange={(itemValue, itemIndex) => {
            this.setState((taskList = itemValue));
          }}
        >
          <Picker.Item key={0} value="10" label="Lista 1" />
          <Picker.Item key={1} value="20" label="Lista 2" />
          <Picker.Item key={3} value="30" label="Lista 3" />
        </Picker> */
}
