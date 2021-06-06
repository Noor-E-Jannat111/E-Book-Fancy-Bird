import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
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

export default function Hen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text
          style={styles.btn}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Icon name="ios-menu" style={{ fontSize: 30, color: "white" }} />
        </Text>
        <Image style={styles.image} source={require("../../assets/hen.jpg")} />
        <Text style={styles.headline}>How to raise Hen in Backyard </Text>
        <Text style={styles.commonText}>
          Raising chickens can be many things: therapeutic, rewarding, fun and
          for beginners maybe a bit nerve wracking!
        </Text>
        <Text style={styles.commonText}>
          In this definitive guide, we have put together everything you need to
          know to care for your birds – from chick to chicken to help you along
          the way. Believe me when I say that you will never stop learning or
          smiling once you have chickens.
        </Text>

        <Text style={styles.headline2}>
          1. Choosing the Correct Breed of Chicken
        </Text>
        <Text style={styles.commonText}>
          Heritage Breeds: The Livestock Conservancy defines a Heritage chicken
          as a natural breeding chicken that has a slow growth rate and can live
          a long, productive outdoor life. The breed must also conform to the
          American Poultry Associations standard for that breed.
        </Text>
        <Text style={styles.commonText}>
          Egg Laying Breeds: These hens have been bred to produce large
          quantities of eggs through their short production lifetimes. Leghorns
          are a good example of prolific egg producers as are Australorps.
        </Text>

        <Text style={styles.headline2}>
          2. Provide Secure and Comfortable Housing
        </Text>
        <Text style={styles.commonText}>
          This is the most basic need of all, a place where they are able to get
          out of the blistering sun, howling wind or blowing snow. The coop
          needs to be water resistant as there is nothing more miserable than a
          wet chicken.
        </Text>

        <Text style={styles.commonText}>
          Adequate space for birds to co-habit peacefully is essential. If they
          are crowded together they are likely to start anti-social behaviors
          like picking and pecking each other. The worst time for these
          behaviors is winter; hens get bored and create mischief.
        </Text>

        <Text style={styles.commonText}>
          Ideally, the coop should be cool in summer and warm in winter. Correct
          ventilation of your coop is crucial when it comes to temperature
          regulation. A good flow of air will keep the coop at an optimal
          temperature for your hens. If you think it’s too hot you need to add
          more ventilation holes.
        </Text>

        <Text style={styles.headline2}>
          3.Provide Enough Healthy Food and Water
        </Text>
        <Text style={styles.commonText}>
          Chicken food comes in a wide array of choices that can be confusing,
          so here’s the scoop.
        </Text>
        <Text style={styles.commonText}>
          0-8 weeks: 18-20% starter feed crumbles, 8-14 weeks: 16-18%
          starter/grower, 15-18 weeks: 16% finisher, 18 weeks upward: 16% layer
          feed
        </Text>
        <Text style={styles.commonText}>
          Chicks are messy; they will scratch their food all over the place,
          poop in it and get their bedding in it, so you need a feeder that will
          eliminate some of that mess.
        </Text>
        <Text style={styles.commonText}>
          Water is essential to the wellbeing of all creatures, chicks are no
          exception. The water should be at Goldilocks temperature – not too
          hot, not too cold, but just right.
        </Text>
        <Text style={styles.commonText}>
          You will need to dip the beak of each chick into the water at first so
          they know where it is, after this they should all be able to find the
          water dish. Do the same with the food dish too.
        </Text>

        <Text style={styles.headline2}>4.Molting</Text>

        <Text style={styles.commonText}>
          Molting is the process of losing all old, worn out feathers and
          replacing them with new plumage. It happens to all birds including
          roosters. Some birds can take up to two years to complete a molt, but
          the humble chicken is usually done in three months. Read our guide to
          molting here. If they are losing feathers and it isn’t molting read;
          Chicken Feather Loss: Cause and Cure.
        </Text>

        <Text style={styles.footerText}>
          "So there you have it – the complete guide to raising chicks and
          chickens. We have tried to distill it down to basics so that it won’t
          become confusing for you.""
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

//you can start with rncs
const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: "100%",
  },
  commonText: {
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
    color: "#8D8D8D",
    textAlign: "justify",
    lineHeight: 22,
  },
  headline: {
    fontWeight: "bold",
    fontSize: 24,
    backgroundColor: "gray",
    padding: 10,
  },
  headline2: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    color: "black",
  },
  footerText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
    padding: 20,
    fontStyle: "italic",
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
