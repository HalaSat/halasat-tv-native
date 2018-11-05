import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export class ChannelCard extends React.Component {
  render() {
    return (
      <View style={{ borderRadius: 5, overflow: "hidden" }}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("../assets/football.jpg")}
        >
          <TouchableOpacity>
            <Ionicons
              name="ios-play"
              size={64}
              color="#fff"
              style={styles.playIcon}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: 400,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  playIcon: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
