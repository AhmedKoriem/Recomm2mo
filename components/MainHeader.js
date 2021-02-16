/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";

import {
  Header,
  Left,
  Body,
  Right,
  Text,
  Icon,
  Title,
  Button,
} from "native-base";
import { Actions } from "react-native-router-flux";
import { ImageBackground, Image } from "react-native";

export default class MainHeader extends Component<Props> {
  render() {
    return (
      <ImageBackground
        source={require("../assets/Backgrounds/theme-header.png")}
        style={{ width: "100%", height: 90 }}
      >
        <Header
          style={{
            backgroundColor: "transparent",
            elevation: 0,
            shadowOpacity: 0,
          }}
        >
          <Left>
            <Icon
              name={this.props.activeArrow ? "arrowleft" : ""}
              type="AntDesign"
              style={{ color: "white" }}
              onPress={() => {
                Actions.pop();
              }}
            />
          </Left>
          <Body>
            <Title style={{ color: "white" }}>{this.props.title}</Title>
          </Body>
          <Right>
            <Button hasText transparent>
              <Icon
                name="edit"
                type="FontAwesome"
                onPress={() => Actions.Topic()}
              />
            </Button>
          </Right>
        </Header>
      </ImageBackground>
    );
  }
}
