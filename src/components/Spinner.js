import React from "react";
import { View, ActivityIndicator } from "react-native";

export default props => (
  <View {...props}>
    <ActivityIndicator size="large" color="#9f2400" />
  </View>
);
