import React, { Component } from "react";
import {
  Container,
  ListItem,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import { Image, View } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Cards extends Component<Props> {
  render() {
    return (
      <Card>
        <CardItem style={{ marginTop: 10, flexDirection: "row", flex: 5 }}>
          <Left style={{ flex: 2 }}>
            <Button
              success
              onPress={this.props.ButtonOnPress}
              style={{
                borderRadius: 11,
                width: 120,
                justifyContent: "center",
              }}
            >
              <Text uppercase={false}>Details</Text>
            </Button>
            {/* <Image
              style={{ width: 120, height: 150, borderRadius: 20 }}
              resizeMode="cover"
              source={{ uri: this.props.PlacePhoto }}
            /> */}
          </Left>

          <Body style={{ flex: 3 }}>
            <View style={{ flex: 4, flexDirection: "column" }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Text>{this.props.PlaceName}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#1DA404",
                  }}
                >
                  {this.props.PlaceLocation}
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Text note numberOfLines={4}>
                  {this.props.PlaceDescription}....
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              ></View>
            </View>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
