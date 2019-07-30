import { createStackNavigator } from "react-navigation";

import Home from "../pages/tab-navigator/home/index";
import NewItemScreen from "../pages/newItem/index";

const HomeNavigator = createStackNavigator({
  Home: Home,
  NewTaskScreen: NewItemScreen
});

export default HomeNavigator;
