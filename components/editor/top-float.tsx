import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";


class TopFloat extends React.Component {

  render(): React.ReactNode {
    return (
      <View style={styles.root}></View>
    );
  }
}

export default TopFloat;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999
  }
});