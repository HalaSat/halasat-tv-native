import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { LinearGradient, Font } from "expo";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default class ChannelCard extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      "ubuntu-light": require("../assets/fonts/Ubuntu/Ubuntu-Light.ttf"),
      "ubuntu-regular": require("../assets/fonts/Ubuntu/Ubuntu-Regular.ttf"),
      "ubuntu-bold": require("../assets/fonts/Ubuntu/Ubuntu-Bold.ttf"),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.imageBackground} source={this.props.img}>
          <LinearGradient
            colors={["#9f240999", "#9f240911", "#0000"]}
            style={styles.gradient}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Player")}
            >
              <Ionicons
                name="ios-play"
                size={64}
                color="#fff"
                style={styles.playIcon}
              />
            </TouchableOpacity>
            {this.state.fontLoaded ? (
              <Text style={styles.title}>{this.props.title}</Text>
            ) : null}
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderRadius: 5,
    overflow: "hidden",
  },
  imageBackground: {
    width: 375,
    height: 200,
  },
  gradient: {
    position: "relative",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  playIcon: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  title: {
    position: "absolute",
    top: 5,
    left: 5,
    color: "#fff",
    fontFamily: "ubuntu-regular",
    fontSize: 20,
  },
});
