import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";

function HomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/welcome.jpeg")}
    >
      <Text style={styles.bigText}>E-BooK</Text>
      <Text style={styles.smallText}>How to Take care your</Text>
      <Text style={styles.bigText}>FANCY BIRD</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bigText: {
    fontSize: 48,
    color: "orange",
    fontWeight: "bold",
  },
  smallText: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },
});

export default HomeScreen;
