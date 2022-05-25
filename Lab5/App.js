import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

export default createAppContainer (
  createStackNavigator({Page1, Page2, Page3, Page4}, {initialRouteName: "Page1"})
);
