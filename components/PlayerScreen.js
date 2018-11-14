import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Video, ScreenOrientation } from "expo";
import { Ionicons } from "@expo/vector-icons";

import ChannelsList from "./ChannelsList";

export default class PlayerScreen extends React.Component {
  constructor() {
    super();
    this.width = Dimensions.get("window").width;
    this.state = { isPlaying: true, isFullScreen: false, isMuted: false };
    ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);
  }

  _togglePlaying = () => this.setState({ isPlaying: !this.state.isPlaying });

  _toggleMute = () => this.setState({ isMuted: !this.state.isMuted });

  _toggleOrientation = () => this._video.presentFullscreenPlayer();

  _toggleFullScreen = () => {
    this.setState(
      { isFullScreen: !this.state.isFullScreen },
      this._toggleOrientation,
    );
  };

  render() {
    const { navigation } = this.props;
    const channel = navigation.getParam("channel");
    const { isFullScreen, isPlaying, isMuted } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.player}>
          <Video
            ref={video => (this._video = video)}
            source={{
              uri: `http://192.168.37.2:1935/${channel.app}/${
                channel.streamname
              }/playlist.m3u8`,
            }}
            rate={1.0}
            volume={1.0}
            isMuted={isMuted}
            resizeMode={Video.RESIZE_MODE_CONTAIN}
            shouldPlay={isPlaying}
            // useNativeControls
            style={{ width: "100%", height: this.width * 0.5625 }}
          />
          <View style={styles.playerControls}>
            <TouchableOpacity onPress={this._togglePlaying}>
              <Ionicons
                name={isPlaying ? "md-pause" : "md-play"}
                color="#fff"
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this._toggleMute}>
              <Ionicons
                name={isMuted ? "md-volume-off" : "md-volume-up"}
                color="#fff"
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this._toggleFullScreen}>
              <Ionicons name="md-expand" color="#fff" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <ChannelsList navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#000",
  },
  player: {
    position: "relative",
  },
  playerControls: {
    flexDirection: "row",
    backgroundColor: "rgba(10, 10, 10, .3)",
    position: "absolute",
    width: "100%",
    justifyContent: "space-around",
    bottom: 0,
    left: 0,
  },
});
