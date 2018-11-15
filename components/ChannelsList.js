import React from "react";
import { FlatList, Dimensions } from "react-native";
import Spinner from "./Spinner";
import ChannelCard from "./ChannelCard";
import channels from "../assets/channels.json";

export default class ChannelsList extends React.Component {
  constructor() {
    super();

    this.state = {
      dataSource: null,
    };
    this.width = Dimensions.get("window").width;
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
    this._refreshItems();
  }
  _refreshItems = () => {
    let items = this.props.cat
      ? channels.filter(item => item.cat == this.props.cat)
      : channels;
    this.setState({ dataSource: null }, () =>
      this.setState({ dataSource: items }),
    );
  };
  render() {
    const numColumns = Math.floor(this.width / 74);
    return (
      <FlatList
        data={this.state.dataSource}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        numColumns={numColumns}
        refreshing={this.state.dataSource ? false : true}
        onRefresh={this._refreshItems}
        contentContainerStyle={{ backgroundColor: "rgb(34, 34, 34)" }}
      />
    );
  }
}
