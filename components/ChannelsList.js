import React from "react";
import { ListView } from "react-native";
import ChannelCard from "./ChannelCard";

export default class ChannelsList extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(["row 1", "row 2", "row 1", "row 2"]),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={rowData => (
          <ChannelCard
            title="beIN Sports 1HD"
            img={require("../assets/card_images/football.jpg")}
          />
        )}
      />
    );
  }
}
