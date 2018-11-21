import React from "react";
import { ScrollView, Text, Image, StyleSheet } from "react-native";

export default class PlayerInfo extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("item").name,
    headerStyle: { backgroundColor: "#111" },
    headerTintColor: "white",
  });
  render() {
    const { image, name, about } = this.props.navigation.getParam("item");
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.info}>{about} </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#111",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
  },
  name: {
    color: "#fff",
    margin: 10,
    fontSize: 20,
  },
  info: {
    color: "#fff",
    margin: 10,
    fontSize: 15,
    backgroundColor: "#222",
    padding: 5,
    borderRadius: 5,
  },
});
