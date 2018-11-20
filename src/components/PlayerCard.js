import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";

export default props => {
  const { name, image, about } = props.item;
  const excerpt = about.slice(0, 98).trim() + "...";
  return (
    <TouchableNativeFeedback
      onPress={() => console.log("hello")}
      background={TouchableNativeFeedback.Ripple("tomato", false)}
      useForeground
    >
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.about}>{excerpt}</Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 5,
    margin: 10,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25,
  },
  info: {
    flex: 1,
  },
  name: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
  about: {
    color: "#ccc",
    flexWrap: "wrap",
    flex: 1,
  },
});
