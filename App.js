import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { ChannelCard } from "./components/ChannelCard";

class TvScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <ChannelCard />
      </View>
    );
  }
}

class ScoresScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Scores</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    TV: TvScreen,
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

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#050001",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
