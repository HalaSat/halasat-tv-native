import React from "react";
import { FlatList, Dimensions, View, Text, Animated } from "react-native";

import ChannelCard from "./ChannelCard";
import Spinner from "./Spinner";
import channels from "../../assets/channels.json";

export default class ChannelsList extends React.Component {
  constructor() {
    super();

    this.state = {
      dataSource: null,
      opacity: new Animated.Value(0),
      ipInfo: null,
    };
    this.width = Dimensions.get("window").width;
    fetch("http://ip-api.com/json/")
      .then(r => r.json())
      .then(res => this.setState({ ipInfo: res }));
  }

  _keyExtractor = item => item.id;
  _renderItem = ({ item }) => {
    return (
      <ChannelCard
        title={item.title}
        navigation={this.props.navigation}
        channel={item}
        img={{ uri: "http://tv.halasat.net/" + item.image }}
        color={item.color}
      />
    );
  };
  componentDidMount() {
    // const ds = new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2,
    // });
    // fetch("http://91.106.32.84/api.php")
    //   .then(res => res.json())
    //   .then(channels => {
    //     this.setState({ dataSource: ds.cloneWithRows(channels) });
    //   });
    Animated.timing(
      // Animate value over time
      this.state.opacity, // The value to drive
      {
        toValue: 1,
        duration: 1000, // Animate to final value of 1
      },
    ).start();
    this._refreshItems();
  }
  componentDidUpdate() {
    //this._refreshItems();
  }
  _refreshItems = () => {
    const channel = this.props.navigation.getParam("channel");
    const cat = channel ? channel.cat : this.props.cat;
    let items = cat
      ? channels.filter(item => item.cat == cat)
      : //.filter(item => item.id !== channel.id)
        channels;
    // this.setState({ dataSource: null }, () =>
    this.setState({ dataSource: items });
    // );
  };

  render() {
    const numColumns = Math.floor(this.width / 74);
    return (
      /* this.state.ipInfo && this.state.ipInfo.org == "Halasat" ? ( */ <Animated.View
        style={{ opacity: this.state.opacity }}
      >
        <FlatList
          data={this.state.dataSource}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          numColumns={numColumns}
          refreshing={this.state.dataSource ? false : true}
          onRefresh={this._refreshItems}
          contentContainerStyle={{
            backgroundColor: "rgb(34, 34, 34)",
          }}
          ListHeaderComponent={
            <Text
              style={{
                color: "#ddd",
                margin: this.props.title ? 10 : 0,
                fontSize: 15,
              }}
            >
              {this.props.title || ""}
            </Text>
          }
        />
      </Animated.View>
    ); /* : this.state.ipInfo ? (
      <View
        style={{
          flex: 1,
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "tomato", fontWeight: "700", fontSize: 40 }}>
          Oops...
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          It seems like your Internet provider is not HalaSat or you are not
          connected to the internet!
        </Text>
      </View>
    ) : (
      <Spinner /> 
    ); */
  }
}
