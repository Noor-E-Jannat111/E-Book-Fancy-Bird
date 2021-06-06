import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Icon } from "native-base";
function HomeScreen({ navigation }) {
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
      <Text
        style={styles.btn}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Icon name="ios-menu" style={{ fontSize: 30, color: "white" }} />
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
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
  btn: {
    position: "absolute",
    top: 30,
    right: 0,
    backgroundColor: "#007aa3",
    zIndex: 999999,
    color: "white",
    textAlign: "center",
    borderRadius: 5,
    padding: 10,
  },
});

export default HomeScreen;
