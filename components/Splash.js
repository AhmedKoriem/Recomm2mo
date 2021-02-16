/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";

import { ImageBackground, Image, View } from "react-native";

import { Actions } from "react-native-router-flux";

export default class Splash extends Component<Props> {
  constructor(props) {
    super(props);
    setTimeout(() => {
      Actions.reset("Topic");
    }, 1000);
  }
  render() {
    return (
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/Backgrounds/splash-bg.png")}
      >
        <View>
          <Image
            style={{ width: 150, height: 150, marginTop: 250, marginLeft: 130 }}
            source={require("../assets/Logo/khrogaty-logo.png")}
          />
        </View>
      </ImageBackground>
    );
  }
}
