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
  _hide;
  _toggleControls = () => {
    this.setState({ isHidden: !this.state.isHidden }, () => {
      if (this._hide) clearTimeout(this._hide);
      if (!this.state.isHidden)
        this._hide = setTimeout(() => this.setState({ isHidden: true }), 5000);
    });
  };
  _close = () => this.props.navigation.navigate("Root");
  _togglePlaying = () => this.setState({ isPlaying: !this.state.isPlaying });
  _toggleMute = () => this.setState({ isMuted: !this.state.isMuted });
  _toggleFullScreen = () => this._video.presentFullscreenPlayer();
  _toggleSpinner = spin => this.setState({ spin });

  componentWillUnmount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
    clearTimeout(this._hide);
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
            <TouchableWithoutFeedback onPress={this._toggleControls}>
              <View style={styles.playerControls}>
                <TouchableOpacity onPress={this._close} style={styles.close}>
                  <Ionicons name="md-close-circle" color="#fff" size={30} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={this._togglePlaying}
                  style={styles.play}
                >
                  <Ionicons
                    name={isPlaying ? "md-pause" : "md-play"}
                    color="#fff"
                    size={30}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this._toggleMute}
                  style={styles.volume}
                >
                  <Ionicons
                    name={isMuted ? "md-volume-off" : "md-volume-up"}
                    color="#fff"
                    size={30}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this._toggleFullScreen}
                  style={styles.expand}
                >
                  <Ionicons name="md-expand" color="#fff" size={30} />
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
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
          <View>
            <Text style={styles.currentChannelTitle}>{channel.title}</Text>
            <Text style={styles.currentChannelCategory}>{channel.cat}</Text>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: "rgb(34, 34, 34)" }}>
          <ChannelsList navigation={navigation} title="Related channels" />
        </View>
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
    transform: [{ translateX: -23 }, { translateY: -19 }],
    zIndex: 10,
  },
  playerControls: {
    flexDirection: "row",
    backgroundColor: "rgba(10, 10, 10, .3)",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    top: 0,
    left: 0,
  },
  close: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  play: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -15 }, { translateY: -15 }],
  },
  expand: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  volume: {
    position: "absolute",
    top: 10,
    right: 10,
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
    fontSize: 15,
  },
  currentChannelCategory: {
    color: "#ccc",
    fontSize: 13,
  },
});
