import React from "react";
import { View, Animated } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";

import ChannelsList from "../components/ChannelsList";

// Screen Wrapper
const Wrapper = props => (
  <View
    style={{ backgroundColor: "rgb(34, 34, 34)", flex: 1 }}
    children={props.children}
  />
);

// TV content screen
class AllScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <ChannelsList navigation={this.props.navigation} />
      </Wrapper>
    );
  }
}

class EntertainmentScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <ChannelsList navigation={this.props.navigation} cat="Entertainment" />
      </Wrapper>
    );
  }
}
class SportsScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <ChannelsList navigation={this.props.navigation} cat="Sports" />
      </Wrapper>
    );
  }
}
class MoviesScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <ChannelsList navigation={this.props.navigation} cat="Movies" />
      </Wrapper>
    );
  }
}

class SeriesScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <ChannelsList navigation={this.props.navigation} cat="Series" />
      </Wrapper>
    );
  }
}

class MusicScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <ChannelsList navigation={this.props.navigation} cat="Music" />
      </Wrapper>
    );
  }
}

class KidsScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <ChannelsList navigation={this.props.navigation} cat="Kids" />
      </Wrapper>
    );
  }
}

// TV tabs
export default createMaterialTopTabNavigator(
  {
    All: AllScreen,
    Entertainment: EntertainmentScreen,
    Sports: SportsScreen,
    Movies: MoviesScreen,
    // Series: SeriesScreen,
    Music: MusicScreen,
    Kids: KidsScreen,
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#202020",
        // height: 50,
      },
      activeTintColor: "tomato",
      inactiveTintColor: "#f2f2f2",
      scrollEnabled: true,
    },
  },
);
