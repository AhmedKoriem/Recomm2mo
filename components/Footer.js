import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Badge,
  Image,
  Icon,
} from "native-base";
import { Actions } from "react-native-router-flux";
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class MainFooter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Footer>
        <FooterTab style={{ backgroundColor: "white" }}>
          <Button
            vertical
            onPress={() => {
              Actions.MainHome({ categoryName: this.props.categoryName });
            }}
          >
            {this.props.active ? (
              <IconEntypo name="home" size={25} />
            ) : (
              <IconFeather name="home" size={25} />
            )}
            <Text
              style={{
                fontSize: 15,
                color: this.props.active ? "green" : "#030303",
                flex: 1,
              }}
              uppercase={false}
            >
              Home
            </Text>
          </Button>

          <Button
            vertical
            category={this.props.categoryName}
            onPress={() => {
              Actions.Random({
                categoryName: this.props.categoryName,
                dataSource: this.props.dataSource,
              });
            }}
          >
            {this.props.active1 ? (
              <IconFontAwesome5 name="dice" size={25} />
            ) : (
              <IconFontAwesome5 name="dice-six" size={25} />
            )}
            <Text
              style={{
                fontSize: 15,
                color: this.props.active1 ? "green" : "#030303",
                flex: 1,
              }}
              uppercase={false}
            >
              Random
            </Text>
          </Button>
          <Button
            vertical
            category={this.props.categoryName}
            onPress={() => {
              Actions.ToDo({
                categoryName: this.props.categoryName,
                dataSource: this.props.dataSource,
                date: this.props.date,
                PlaceID: this.props.PlaceID,
              });
            }}
          >
            {this.props.activeToDo ? (
              <Icon reverse name="tasklist" type="Octicons" color="#030303	" />
            ) : (
              <Icon reverse name="tasklist" type="Octicons" color="#517fa4" />
            )}
            <Text
              style={{
                fontSize: 15,
                color: this.props.activeToDo ? "green" : "#030303",
                flex: 1,
              }}
              uppercase={false}
            >
              To Do
            </Text>
          </Button>
          <Button
            vertical
            category={this.props.categoryName}
            onPress={() => {
              Actions.AskMe({
                categoryName: this.props.categoryName,
                dataSource: this.props.dataSource,
                date: this.props.date,
                PlaceID: this.props.PlaceID,
              });
            }}
          >
            {this.props.activeAskMe ? (
              <Icon reverse name="person" type="Fontisto" color="#030303	" />
            ) : (
              <Icon reverse name="person" type="Fontisto" color="#517fa4" />
            )}
            <Text
              style={{
                fontSize: 15,
                color: this.props.activeAskMe ? "green" : "#030303",
                flex: 1,
              }}
              uppercase={false}
            >
              AskMe
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
