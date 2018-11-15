import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Text,
} from "react-native";
import { Video, ScreenOrientation } from "expo";
import { Ionicons } from "@expo/vector-icons";

import ChannelsList from "./ChannelsList";
import Spinner from "./Spinner";

export default class PlayerScreen extends React.Component {
  constructor() {
    super();
    this.width = Dimensions.get("window").width;
    this.state = {
      isPlaying: true,
      isMuted: false,
      isHidden: true,
      spin: true,
    };
  }
  componentDidMount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);
  }
  _togglePlaying = () => this.setState({ isPlaying: !this.state.isPlaying });
  _toggleMute = () => this.setState({ isMuted: !this.state.isMuted });
  _toggleFullScreen = () => this._video.presentFullscreenPlayer();
  _toggleControls = () => this.setState({ isHidden: !this.state.isHidden });
  _toggleSpinner = spin => this.setState({ spin });
  componentWillUnmount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
  }
  render() {
    const { navigation } = this.props;
    const channel = navigation.getParam("channel");
    const { isPlaying, isMuted, spin } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.player}>
          {spin && <Spinner style={styles.spinner} />}
          <TouchableWithoutFeedback onPress={this._toggleControls}>
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
              style={{ width: "100%", height: this.width * 0.5625 }}
              onLoadStart={() => this._toggleSpinner(true)}
              onLoad={() => this._toggleSpinner(false)}
            />
          </TouchableWithoutFeedback>
          {this.state.isHidden ? null : (
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
          )}
        </View>
        <View style={styles.detailsContainer}>
          <View
            style={{
              margin: 10,
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: channel.color,
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: "http://tv.halasat.net/" + channel.image }}
              style={styles.currentChannelImage}
            />
          </View>
          <Text style={styles.currentChannelTitle}>{channel.title}</Text>
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
    backgroundColor: "#000",
  },
  player: {
    position: "relative",
  },
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -20 }, { translateY: -20 }],

    zIndex: 10,
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
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff11",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  currentChannelImage: {
    width: "100%",
    height: "100%",
  },
  currentChannelTitle: {
    color: "#fff",
  },
});
