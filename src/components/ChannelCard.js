// import { Ionicons } from "@expo/vector-icons";
import React from "react";
// import { Font } from "expo";
import { Image, TouchableOpacity } from "react-native";

export default class ChannelCard extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("Player", {
            channel: this.props.channel,
          })
        }
        style={{
          margin: 10,
          width: 64,
          height: 64,
          borderRadius: 64,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: this.props.color || "white",
          overflow: "hidden",
        }}
      >
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={this.props.img}
        />
      </TouchableOpacity>
    );
  }
}
