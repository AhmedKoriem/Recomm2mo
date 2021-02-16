import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import MainHome from "./components/MainHome";
import Details from "./components/Details";
import Splash from "./components/Splash";
import Topic from "./components/Topic";
import Random from "./components/Random";
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import ToDo from "./components/ToDo";
import AskMe from "./components/AskMe";
import * as Font from "expo-font";
import { View } from "@shoutem/ui";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      "Rubik-Regular": require("./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf"),
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <View></View>;
    }
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="Splash" component={Splash} title="Splash" />
          <Scene key="Topic" component={Topic} title="Topic" />
          <Scene key="MainHome" component={MainHome} title="MainHome" />
          <Scene key="Details" component={Details} title="Details" />
          <Scene key="Random" component={Random} title="Random" />
          <Scene key="Filters" component={Filters} title="Filters" />
          <Scene key="ToDo" component={ToDo} title="ToDo" />
          <Scene key="AskMe" component={AskMe} title="AskMe" />
        </Scene>
      </Router>
    );
  }
}
