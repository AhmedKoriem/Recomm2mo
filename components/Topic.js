import React, { Component } from "react";

import {
  Container,
  Header,
  Content,
  Button,
  Text,
  CardItem,
  Body,
  List,
} from "native-base";
import { View, Overlay, Heading } from "@shoutem/ui";
import { Actions } from "react-native-router-flux";
import { FlatList } from "react-native";

const TOPICS = [
  "Park",
  "Bar",
  "Pier",
  "Beach",
  "Hotel",
  "Garden",
  "Dog Run",
  "Roof Deck",
  "Playground",
  "Pizza Place",
  "Coffee Shop",
  "Music Venue",
  "Roller Rink",
  "Soccer Field",
  "Burger Joint",
  "Boat Of Ferry",
  "Scenic Lookout",
  "Ice Cream Shop",
  "Athletics & Sports",
  "American Restaurant",
];
export default class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t: "",
      topics: [],
    };
  }
  onTopicSelect = (topic) => {
    this.setState({ t: topic });
    Actions.MainHome({ categoryName: topic });
  };
  // componentDidMount() {
  //   fetch(
  //     "https://api.foursquare.com/v2/venues/explore?ll=40.7,-74&client_id=3O2RFEF33A3Y101ZWKQOVRD0EUIKJ0W3SDTEM14HX2WQB50S&client_secret=CEXPYUDB5DJ5XUPMC2DKVN4CQGT1KUOLKFSDFWQ4LBAGI3LU&v=20200801"
  //   ).then((r) =>
  //     r
  //       .json()
  //       .then((jsr) => {
  //         this.setState({
  //           topics: jsr["response"],
  //         });
  //       })
  //       .catch(() => {})
  //   );
  // }
  showTopics() {
    if (this.state.topics) {
      this.state.topics.map((c) => {
        return <Text key={c.id}>{c.name}</Text>;
      });
    }
  }

  render() {
    let list;
    if (TOPICS.length != 0) {
      list = (
        <FlatList
          data={TOPICS}
          renderItem={({ item }) => (
            <Button
              style={{ marginBottom: 15 }}
              onPress={() => this.onTopicSelect(item)}
              styleName="muted"
              rounded
            >
              <Text>{item}</Text>
            </Button>
          )}
          keyExtractor={({ id }, index) => id}
        />
      );
    } else {
      <Text>loading the topics</Text>;
    }
    return (
      <Overlay styleName="fill-parent">
        <Heading style={{ marginBottom: 15 }}>What do you feel like?</Heading>

        {list}
      </Overlay>
    );
  }
}
