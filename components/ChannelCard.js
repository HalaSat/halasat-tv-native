import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { LinearGradient } from "expo";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default class ChannelCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.imageBackground} source={this.props.img}>
          <LinearGradient
            colors={["#9f240999", "#9f240911", "#0000"]}
            style={styles.gradient}
          >
            <TouchableOpacity>
              <Ionicons
                name="ios-play"
                size={64}
                color="#fff"
                style={styles.playIcon}
              />
            </TouchableOpacity>
            <Text style={styles.title}>{this.props.title}</Text>
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
    fontSize: 20,
    fontWeight: "400",
  },
});
