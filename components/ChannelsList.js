import React from "react";
import { ListView } from "react-native";
import Spinner from "./Spinner";
import ChannelCard from "./ChannelCard";

export default class ChannelsList extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: null,
    };
  }

  componentDidMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    fetch("http://91.106.32.84/api.php")
      .then(res => res.json())
      .then(channels => {
        this.setState({ dataSource: ds.cloneWithRows(channels) });
      });
  }

  render() {
    return this.state.dataSource ? (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={rowData => {
          const imageUrl = "../assets/" + rowData.image;
          console.log(imageUrl);
          // const image = require(imageUrl);
          // conosle.log("this is the image" + image);
          return (
            <ChannelCard
              title={rowData.title}
              img={require("../assets/card_images/football.jpg")}
              navigation={this.props.navigation}
            />
          );
        }}
      />
    ) : (
      <Spinner />
    );
  }
}
