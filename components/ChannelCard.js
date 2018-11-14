// import { Ionicons } from "@expo/vector-icons";
import React from "react";
// import { Font } from "expo";
import { ImageBackground, TouchableOpacity } from "react-native";

export default class ChannelCard extends React.Component {
  // state = {
  //   fontLoaded: false,
  // };
  // async componentDidMount() {
  //   await Font.loadAsync({
  //     "ubuntu-light": require("../assets/fonts/Ubuntu/Ubuntu-Light.ttf"),
  //     "ubuntu-regular": require("../assets/fonts/Ubuntu/Ubuntu-Regular.ttf"),
  //     "ubuntu-bold": require("../assets/fonts/Ubuntu/Ubuntu-Bold.ttf"),
  //   });
  //   this.setState({ fontLoaded: true });
  // }

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
        <ImageBackground
          style={{
            width: 40,
            height: 40,
            shadowColor: "#000",
          }}
          source={this.props.img}
        />
      </TouchableOpacity>
    );
  }
}
