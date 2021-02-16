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
export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }
  // showDetails() {
  //   let v = this.state.dataSource;
  //   if (v.length != 0) {
  //     return (
  //       <Card>
  //         <CardItem header bordered>
  //           <Image
  //             style={{ width: 120, height: 150, borderRadius: 20 }}
  //             resizeMode="cover"
  //             source={{
  //               uri: `${v.venue.photos.groups[0].items[0].prefix}200x200${v.venue.photos.groups[0].items[0].suffix}`,
  //             }}
  //           />
  //           <Text> {v.venue.name}</Text>
  //         </CardItem>
  //         <CardItem bordered>
  //           <Body>
  //             <Text>{v.venue.tips.groups[0].items[0].text}</Text>
  //           </Body>
  //         </CardItem>
  //         <CardItem footer bordered>
  //           <Text>{v.venue.location.formattedAddress}</Text>
  //         </CardItem>
  //         <CardItem footer bordered>
  //           <Text>Rating {v.venue.rating}</Text>
  //         </CardItem>
  //         <SocialIcon
  //           //Social Icon using react-native-elements
  //           button
  //           //To make a button type Social Icon
  //           title={v.venue.contact.twitter}
  //           //Title of Social Button
  //           type="facebook"
  //           //Type of Social Icon
  //         />
  //         <SocialIcon
  //           //Social Icon using react-native-elements
  //           button
  //           //To make a button type Social Icon
  //           title={v.venue.contact.facebookUsername}
  //           //Title of Social Button
  //           type="twitter"
  //           //Type of Social Icon
  //         />
  //         <SocialIcon
  //           //Social Icon using react-native-elements
  //           button
  //           //To make a button type Social Icon
  //           title={v.venue.contact.instagram}
  //           //Title of Social Button
  //           type="instagram"
  //           //Type of Social Icon
  //         />
  //       </Card>
  //     );
  //   }
  // }
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
  showDetails() {
    if (this.props.dataSource) {
      let i = this.props.dataSource.groups[0].items;
      if (i.length != 0)
        return (
          <View>
            {i.map((v, i) => (
              <>
                {v.venue.id == this.props.PlaceID ? (
                  <Card>
                    <CardItem header bordered>
                      <Text> 1- {v.venue.name}</Text>
                    </CardItem>

                    <CardItem footer bordered>
                      <Text>{v.venue.location.formattedAddress}</Text>
                    </CardItem>
                    <CardItem footer bordered>
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#1DA404",
                        }}
                      >
                        Scheduled Date {this.props.date}
                      </Text>
                    </CardItem>
                  </Card>
                ) : null}
              </>
            ))}
          </View>
        );
    }
  }
  render() {
    return (
      <Container>
        <MainHeader title="To Do" activeArrow={true} />
        <Content>
          <Text>{this.showDetails()}</Text>
        </Content>
        <MainFooter activeToDo={true} categoryName={this.props.categoryName} />
      </Container>
    );
  }
}
