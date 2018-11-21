import React from "react";
import { StyleSheet, FlatList } from "react-native";

import players from "../../assets/players.json";
import PlayerCard from "../components/PlayerCard";

// TODO:
export default class PlayersScreen extends React.Component {
  _keyExtractor = item => item.id.toString();
  _renderItem = ({ item }) => (
    <PlayerCard item={item} navigation={this.props.navigation} />
  );
  render() {
    return (
      <FlatList
        data={players}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        contentContainerStyle={{
          backgroundColor: "rgb(34, 34, 34)",
        }}
        // refreshing={this.state.dataSource ? false : true}
        // onRefresh={this._refreshItems}
        // contentContainerStyle={{
        //   backgroundColor: "rgb(34, 34, 34)",
        // }}
        // ListHeaderComponent={
        //   <Text
        //     style={{
        //       color: "#ddd",
        //       margin: 10,
        //       fontSize: 15,
        //     }}
        //   >
        //     Scores
        //   </Text>
        // }
      />
    );
  }
}

const styles = StyleSheet.create({
  commingSoon: {
    color: "tomato",
    fontSize: 22,
  },
});
