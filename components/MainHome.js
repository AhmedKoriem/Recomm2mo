import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Item,
  Input,
  Icon,
  View,
} from "native-base";
import { Actions } from "react-native-router-flux";
import MainHeader from "./MainHeader";
import MainFooter from "./Footer";
import Details from "./Details";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import {
  ImageBackground,
  Image,
  FlatList,
  Alert,
  SectionList,
} from "react-native";
import Cards from "./Cards";

export default class MainHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      mapRegion: null,
      gpsAccuracy: null,
      recommendations: [],
      lookingFor: null,
      headerLocation: null,
      last4sqCall: null,
      p: "",
      catName: "",
    };
  }
  f() {
    fetch(
      "https://api.foursquare.com/v2/venues/explore?ll=40.7,-74&client_id=3O2RFEF33A3Y101ZWKQOVRD0EUIKJ0W3SDTEM14HX2WQB50S&client_secret=GNRXWXHH4GXRWFNDQAHCNOQPEYLB3QM2ORBDKBO3D2SNIHJH&v=20200801"
    ).then((r) =>
      r
        .json()
        .then((jsr) => {
          this.setState({
            dataSource: jsr.response,
          });
          // alert(jsr.response.suggestedRadius);
        })
        .catch(() => {
          alert("there is an error");
        })
    );
  }

  showData() {
    let topic = this.props.categoryName;
    if (this.state.dataSource.length != 0) {
      return (
        <FlatList
          data={this.state.dataSource.groups}
          renderItem={({ item, index }) => (
            <View>
              {item.items.map((v, i) => (
                <>
                  {v.venue.categories[0].name == topic ? (
                    <Cards
                      PlacePhoto={`${v.venue.categories[0].icon.prefix}300x500${v.venue.categories[0].icon.suffix}`}
                      PlaceName={v.venue.name}
                      PlaceDescription={v.venue.location.address}
                      PlaceLocation={v.venue.location.crossStreet}
                      ButtonOnPress={() =>
                        Actions.Details({
                          PlaceName: v.venue.name,
                          PlaceID: v.venue.id,
                          categoryName: this.props.categoryName,
                          dataSource: this.state.dataSource,
                        })
                      }
                    />
                  ) : null}
                </>
              ))}
            </View>
          )}
          keyExtractor={({ id }, index) => id}
        />
      );
    } else {
      this.f();
    }
  }

  render() {
    return (
      <Container>
        <MainHeader title="Home" />
        <Header searchBar rounded style={{ backgroundColor: "white" }}>
          <Item>
            <IconFontAwesome name="search" size={20} />
            <Input placeholder="Search" />
            <IconFontAwesome name="location-arrow" color="black" size={20} />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <ImageBackground
          source={require("../assets/Logo/khrogaty-logo.png")}
          style={{ flex: 1, resizeMode: "cover" }}
        >
          <Content>
            <Button
              transparent
              style={{
                flexDirection: "row",
              }}
              onPress={() =>
                Actions.Filters({ categoryName: this.props.categoryName })
              }
            >
              <Icon name="filter" type="AntDesign" />
              <Text>Add Filters</Text>
            </Button>
            {/* <Text>el topic elly e5tarto howa {this.props.categoryName}</Text> */}

            {this.showData()}
          </Content>
        </ImageBackground>
        <MainFooter
          title="home"
          active={true}
          categoryName={this.props.categoryName}
          dataSource={this.state.dataSource}
        />
      </Container>
    );
  }
}
