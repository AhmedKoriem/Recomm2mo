import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Badge,
  Text,
  Icon,
  CardItem,
  Card,
} from "native-base";
import MainHeader from "./MainHeader";
import MainFooter from "./Footer";
import { Button, View } from "@shoutem/ui";
import { Actions } from "react-native-router-flux";
import { FlatList } from "react-native";
import Cards from "./Cards";
import { SocialIcon } from "react-native-elements";

export default class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rand: false,
    };
  }
  showRand() {
    let itemsArr = this.props.dataSource.groups[0].items;
    if (itemsArr.length != 0) {
      let randItem = itemsArr[Math.floor(Math.random() * itemsArr.length)];

      return (
        <View>
          {/* {randItem.venue.categories[0].name == this.props.categoryName ? ( */}
          <Card>
            <CardItem header bordered>
              {/* <Image
            style={{ width: 120, height: 150, borderRadius: 20 }}
            resizeMode="cover"
            source={{
              uri: `${v.venue.photos.groups[0].items[0].prefix}200x200${v.venue.photos.groups[0].items[0].suffix}`,
            }}
          /> */}
              <Text> {randItem.venue.name}</Text>
            </CardItem>
            {/* <CardItem bordered>
          <Body>
            <Text>{v.venue.tips.groups[0].items[0].text}</Text>
          </Body>
        </CardItem> */}
            <CardItem footer bordered>
              <Text>{randItem.venue.location.formattedAddress}</Text>
            </CardItem>
            <CardItem footer bordered>
              <Text>Distance {randItem.venue.location.distance}</Text>
            </CardItem>
            <SocialIcon
              //Social Icon using react-native-elements

              //To make a button type Social Icon
              // title={v.venue.contact.twitter}
              //Title of Social Button
              type="facebook"
              //Type of Social Icon
            />
            <SocialIcon
              //Social Icon using react-native-elements
              // button
              //To make a button type Social Icon
              // title={v.venue.contact.facebookUsername}
              //Title of Social Button
              type="twitter"
              //Type of Social Icon
            />
            <SocialIcon
              //Social Icon using react-native-elements
              // button
              //To make a button type Social Icon
              // title={v.venue.contact.instagram}
              //Title of Social Button
              type="instagram"
              //Type of Social Icon
            />
          </Card>
          {/* ) : (<Text>Try more</Text>)} */}
        </View>
      );
    }
  }

  render() {
    return (
      <Container>
        <MainHeader title="Random" />
        <Content>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <Button>
              <Icon
                name="filter"
                type="AntDesign"
                onPress={() =>
                  Actions.Filters({ categoryName: this.props.categoryName })
                }
              />
              <Text>Add Filters</Text>
            </Button>
            <Button>
              <Icon
                name="dice"
                type="FontAwesome5"
                onPress={() => {
                  this.showRand();
                  this.setState({ rand: true });
                }}
              />
            </Button>
          </View>
          {/* <Text>hna aho {this.props.categoryName}</Text> */}
          {this.state.rand ? this.showRand() : null}
        </Content>
        <MainFooter active1={true} categoryName={this.props.categoryName} />
      </Container>
    );
  }
}
