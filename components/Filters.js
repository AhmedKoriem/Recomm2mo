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
import { Icon, Container, Content, Text } from "native-base";
import MainFooter from "./Footer";
import MainHeader from "./MainHeader";
import { Button } from "@shoutem/ui";

export default class Filters extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <MainHeader title="Filters" />
        <Content>
          <Button>
            <Icon
              name="done"
              type="MaterialIcons"
              onPress={() =>
                Actions.MainHome({ categoryName: this.props.categoryName })
              }
            />
            <Text>ana hna f el filters w el id {this.props.categoryName}</Text>
          </Button>
        </Content>
        <MainFooter active1={true} />
      </Container>
    );
  }
}
