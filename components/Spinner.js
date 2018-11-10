import React from "react";
import { View, ActivityIndicator } from "react-native";

export default () => (
  <View style={spinnerStyles}>
    <ActivityIndicator size="large" color="#9f2400" />
  </View>
);

const spinnerStyles = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};
