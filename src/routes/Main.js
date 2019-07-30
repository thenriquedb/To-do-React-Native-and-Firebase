import React, { Component } from "react";
import { createDrawerNavigator } from "react-navigation";

import HomeNavigator from './Home';
// import Home from "../pages/tab-navigator/home/index";
import Profile from "../pages/tab-navigator/profile/index";

const DrawerNavigator = createDrawerNavigator({
  Home: HomeNavigator,
  Profile: Profile
});

export default DrawerNavigator;
