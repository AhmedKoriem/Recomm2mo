import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Badge,
  Text,
  Body,
  Icon,
  CardItem,
  Card,
} from "native-base";
import { FlatList } from "react-native";
import MainHeader from "./MainHeader";
import MainFooter from "./Footer";
import Cards from "./Cards";
import { View, Image, Button } from "@shoutem/ui";
import { SocialIcon } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import Moment from "moment";
export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      date: [],
      showDate: false,
      show: true,
    };
    fetch(
      "https://api.foursquare.com/v2/venues/" +
        this.props.PlaceID +
        "?ll=40.7,-74&client_id=3O2RFEF33A3Y101ZWKQOVRD0EUIKJ0W3SDTEM14HX2WQB50S&client_secret=GNRXWXHH4GXRWFNDQAHCNOQPEYLB3QM2ORBDKBO3D2SNIHJH&v=20200801"
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
  showDetails() {
    let v = this.state.dataSource;
    if (v.length != 0) {
      return (
        <Card>
          <CardItem header bordered>
            <Image
              style={{ width: 120, height: 150, borderRadius: 20 }}
              resizeMode="cover"
              source={{
                uri: `${v.venue.photos.groups[0].items[0].prefix}200x200${v.venue.photos.groups[0].items[0].suffix}`,
              }}
            />
            <Text> {v.venue.name}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>{v.venue.tips.groups[0].items[0].text}</Text>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Text>{v.venue.location.formattedAddress}</Text>
          </CardItem>
          <CardItem footer bordered>
            <Text>Rating {v.venue.rating}</Text>
          </CardItem>
          <Button>
            <Icon reverse name="megaphone" type="Entypo" color="#517fa4" />
            <Text>Make a reservation</Text>
          </Button>
          <SocialIcon
            //Social Icon using react-native-elements
            button
            //To make a button type Social Icon
            title={v.venue.contact.twitter}
            //Title of Social Button
            type="facebook"
            //Type of Social Icon
          />
          <SocialIcon
            //Social Icon using react-native-elements
            button
            //To make a button type Social Icon
            title={v.venue.contact.facebookUsername}
            //Title of Social Button
            type="twitter"
            //Type of Social Icon
          />
          <SocialIcon
            //Social Icon using react-native-elements
            button
            //To make a button type Social Icon
            title={v.venue.contact.instagram}
            //Title of Social Button
            type="instagram"
            //Type of Social Icon
          />
          <Button onPress={() => this.setState({ showDate: true, show: true })}>
            <Icon
              reverse
              name="watch-later"
              type="MaterialIcons"
              color="#030303	"
            />
            <Text> To Do List </Text>
          </Button>
          {this.state.showDate ? this.showDate() : null}
        </Card>
      );
    }
  }
  // showDetails() {
  //   let i = this.props.data.groups[0];
  //   if (i.length != 0) {
  //     <View>
  //       {this.props.data.groups[0].items.map((v, i) => (
  //         <>
  //           {/* {v.venue.id == this.props.PlaceID ? ( */}
  //           <Card>
  //             <CardItem header bordered>
  //               {/* <Image
  //                       style={{ width: 120, height: 150, borderRadius: 20 }}
  //                       resizeMode="cover"
  //                       source={{
  //                         uri: `${v.venue.photos.groups[0].items[0].prefix}200x200${v.venue.photos.groups[0].items[0].suffix}`,
  //                       }}
  //                     /> */}
  //               <Text> {v.venue.name}</Text>
  //             </CardItem>
  //             {/* <CardItem bordered>
  //                     <Body>
  //                       <Text>{v.venue.tips.groups[0].items[0].text}</Text>
  //                     </Body>
  //                   </CardItem> */}
  //             <CardItem footer bordered>
  //               <Text>{v.venue.location.formattedAddress}</Text>
  //             </CardItem>
  //             <CardItem footer bordered>
  //               <Text>Distance {v.venue.location.distance}</Text>
  //             </CardItem>
  //             <SocialIcon
  //               //Social Icon using react-native-elements

  //               //To make a button type Social Icon
  //               // title={v.venue.contact.twitter}
  //               //Title of Social Button
  //               type="facebook"
  //               //Type of Social Icon
  //             />
  //             <SocialIcon
  //               //Social Icon using react-native-elements
  //               // button
  //               //To make a button type Social Icon
  //               // title={v.venue.contact.facebookUsername}
  //               //Title of Social Button
  //               type="twitter"
  //               //Type of Social Icon
  //             />
  //             <SocialIcon
  //               //Social Icon using react-native-elements
  //               // button
  //               //To make a button type Social Icon
  //               // title={v.venue.contact.instagram}
  //               //Title of Social Button
  //               type="instagram"
  //               //Type of Social Icon
  //             />
  //           </Card>
  //           {/* ) : null} */}
  //         </>
  //       ))}
  //     </View>;
  //   }
  // }
  setDate(event, date) {
    if (event.type === "set") {
      this.setState({
        date: Moment.utc(date).format("MM/DD/YYYY"),
        show: false,
      });
      //alert(this.state.date);
    }
  }
  showDate() {
    return (
      <View>
        {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(e, d) => this.setDate(e, d)}
          />
        )}
      </View>
      // <DateTimePicker
      //   value={new Date()}
      //   placeholder="Birthday"
      //   mode="date"
      //   format="DD-MM-YYYY"
      //   display="default"
      //   minimumDate={new Date()}
      //   isVisible={this.state.vis}
      //   shouldCloseOnSelect={true}
      //   onChange={(e, d) => this.setDate(e, d)}
      // />
    );
  }
  // showDetails() {
  //   let i = this.props.dataSource.groups[0].items;
  //   if (i.length != 0)
  //     return (
  //       <View>
  //         {i.map((v, i) => (
  //           <>
  //             {v.venue.id == this.props.PlaceID ? (
  //               <Card>
  //                 <CardItem header bordered>
  //                   <Text> {v.venue.name}</Text>
  //                 </CardItem>

  //                 <CardItem footer bordered>
  //                   <Text>{v.venue.location.formattedAddress}</Text>
  //                 </CardItem>
  //                 <CardItem footer bordered>
  //                   <Text>Distance {v.venue.location.distance}</Text>
  //                 </CardItem>
  // <Button>
  //   <Icon
  //     reverse
  //     name="megaphone"
  //     type="Entypo"
  //     color="#517fa4"
  //   />
  //   <Text>Make a reservation</Text>
  // </Button>
  //                 <SocialIcon type="facebook" />
  //                 <SocialIcon type="twitter" />
  //                 <SocialIcon type="instagram" />
  // <Button
  //   onPress={() =>
  //     this.setState({ showDate: true, show: true })
  //   }
  // >
  //   <Icon
  //     reverse
  //     name="watch-later"
  //     type="MaterialIcons"
  //     color="#030303	"
  //   />
  //   <Text> To Do List </Text>
  // </Button>
  // {this.state.showDate ? this.showDate() : null}
  //               </Card>
  //             ) : null}
  //           </>
  //         ))}
  //       </View>
  //     );
  // }
  render() {
    return (
      <Container>
        <MainHeader title="Details" activeArrow={true} />
        <Content>{this.showDetails()}</Content>
        <MainFooter
          categoryName={this.props.categoryName}
          date={this.state.date}
          PlaceID={this.props.PlaceID}
          dataSource={this.props.dataSource}
        />
      </Container>
    );
  }
}
