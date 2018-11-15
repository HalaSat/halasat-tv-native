import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation";

import ChannelsList from "./components/ChannelsList";
import PlayerScreen from "./components/PlayerScreen";

// TV content screen
class AllScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <ChannelsList navigation={this.props.navigation} />
      </View>
    );
  }
}

class EntertainmentScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <ChannelsList navigation={this.props.navigation} cat="Entertainment" />
      </View>
    );
  }
}
class SportsScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <ChannelsList navigation={this.props.navigation} cat="Sports" />
      </View>
    );
  }
}
class MoviesScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <ChannelsList navigation={this.props.navigation} cat="Movies" />
      </View>
    );
  }
}

class SeriesScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <ChannelsList navigation={this.props.navigation} cat="Series" />
      </View>
    );
  }
}

class MusicScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <ChannelsList navigation={this.props.navigation} cat="Music" />
      </View>
    );
  }
}

class KidsScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <ChannelsList navigation={this.props.navigation} cat="Kids" />
      </View>
    );
  }
}

// TODO:
class ScoresScreen extends React.Component {
  render() {
    return (
      <View style={styles.scoresScreen}>
        <Text style={styles.commingSoon}>Comming soon...</Text>
      </View>
    );
  }
}

// TV tabs
const TvStack = createMaterialTopTabNavigator(
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
      },
      activeTintColor: "tomato",
      inactiveTintColor: "#f2f2f2",
      scrollEnabled: true,
    },
  },
);

// Bottom tabs
const RootStack = createBottomTabNavigator(
  {
    TV: TvStack,
    Scores: ScoresScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "TV") {
          iconName = `ios-desktop${focused ? "" : "-outline"}`;
        } else if (routeName === "Scores") {
          iconName = `ios-football${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
    }),
    tabBarOptions: {
      style: {
        backgroundColor: "#111",
      },
      activeTintColor: "tomato",
      inactiveTintColor: "#f2f2f2",
    },
  },
);

// Satck navigator with header
export default createStackNavigator({
  Root: {
    screen: RootStack,
    navigationOptions: {
      title: "HalaSat TV",
      headerStyle: {
        backgroundColor: "#111",
        elevation: 0,
      },
      headerTitleStyle: {
        color: "#fff",
      },
    },
  },
  Player: {
    screen: PlayerScreen,
    navigationOptions: {
      header: null,
    },
  },
});

// styles
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "rgb(34, 34, 34)",
    flex: 1,
  },
  scoresScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(34, 34, 34)",
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
  },
  commingSoon: {
    color: "tomato",
    fontSize: 22,
  },
});
