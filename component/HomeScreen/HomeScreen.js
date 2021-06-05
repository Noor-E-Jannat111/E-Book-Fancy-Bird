import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function HomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/welcome.jpeg")}
    >
      <Image
        fadeDuration={1000}
        style={styles.logoStyle}
        source={require("../../assets/icon.png")}
      />
      <Text style={styles.bigText}>E-BooK</Text>
      <Text style={styles.smallText}>How to Take care your</Text>
      <Text style={styles.bigText}>FANCY BIRD</Text>

      {/* <View style={styles.homeFooter}>
        <View style={styles.birdListBtn}>
          <Text style={styles.btnText}>Birds List</Text>
        </View>
        <View style={styles.aboutBtn}>
          <Text style={styles.btnText}>About App</Text>
        </View>
      </View> */}
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
  logoStyle: {
    height: 100,
    width: 100,
  },
  homeFooter: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "red",
    textAlign: "center",
  },
  birdListBtn: {
    backgroundColor: "tomato",
  },
  aboutBtn: {
    backgroundColor: "gray",
  },
  btnText: {
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
    padding: 15,
  },
});

export default HomeScreen;
