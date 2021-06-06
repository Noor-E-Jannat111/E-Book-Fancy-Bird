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

export default function Parrot({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text
          style={styles.btn}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Icon name="ios-menu" style={{ fontSize: 30, color: "white" }} />
        </Text>
        <Image
          style={styles.image}
          source={require("../../assets/parrot.jpg")}
        />
        <Text style={styles.headline}>How to raise Parrot</Text>
        <Text style={styles.commonText}>
          Parrots are highly intelligent birds and can make wonderful pets, but
          there are some things to know about them and their care requirements
          before making the decision to get one. First, parrots are wild by
          nature, not domesticated (like dogs and cats), so they retain many
          behaviors and instincts of their cousins in the wild.
        </Text>

        <Text style={styles.headline2}>1. Nesting</Text>
        <Text style={styles.commonText}>
          Square or rectangular cages are more appropriate for parrots; they
          feel unsafe in round cages that do not have corners. Ensure your cage
          is large enough for your parrot to climb and move comfortably in.
          Cages should have enough room for perches, toys, food bowls, water
          bowls, and rest areas. Choose the size of your parrot cage based on
          the size of your parrot
        </Text>

        <Text style={styles.headline2}>
          2. Place the cage in a room where he can interact
        </Text>
        <Text style={styles.commonText}>
          Parrots are social creatures. In the wild, they stay with a flock and
          maintain constant contact with flock mates. If they are kept isolated
          they may develop separation anxiety. Parrots like being in rooms where
          their human flock hangs out.
        </Text>

        <Text style={styles.commonText}>
          If you have other pets, you will want to keep your bird cage in a room
          that can be closed off while you are gone from the house. Be sure that
          you supervise your other pets around the bird, and keep them out of
          the room if they are causing stress to the bird.
        </Text>

        <Text style={styles.headline2}>3.Keep temperatures steady</Text>
        <Text style={styles.commonText}>
          Birds can tolerate a large range of temperature, but the ideal
          temperature for your parrot is between 65 and 85 degrees Fahrenheit.
          Avoid leaving your parrot in a chilly room or dropping your thermostat
          overnight during winter. Temperatures below 40 degrees can be
          dangerous for birds, especially thin ones. Plumper birds can develop
          heat stress to temperatures above 85 degrees. If you must keep your
          parrot in higher temperatures, be sure that there is plenty of air
          circulation.
        </Text>

        <Text style={styles.headline2}>4.Food and Water</Text>
        <Text style={styles.commonText}>
          Parrots need a varied diet with a broad range of nutritional value.
          They should ideally not be kept on a diet of seeds and pellets only,
          though the bird seed and pellet mixes at pet stores are good to use as
          the base for their diet. Here are some basics for supplementing the
          seed or pellet mixtures:
        </Text>
        <Text style={styles.commonText}>
          Do feed fresh fruits and vegetables. Rinse them well just like you
          would if you were preparing them for people. Many parrots like grapes,
          bananas, apples, carrots, berries, greens, all varieties of cooked
          squash, peas, green beans, and more. Be sure to not overdo it on fruit
          because of sugar content.
        </Text>
        <Text style={styles.commonText}>
          Some types of parrots, such as macaws, love to open the shells of nuts
          to get the meat out. Try giving your parrot pistachios, pecans, and
          macadamias.
        </Text>
        <Text style={styles.commonText}>
          Do not feed parrots caffeine, alcohol, chocolate, sugary or salty
          snacks, greasy foods, raw or dry beans, rhubarb leaves, dill, cabbage,
          asparagus, eggplant or honey.
        </Text>
        <Text style={styles.commonText}>
          Never give a parrot avocado or onions! Both are toxic to parrots.
          Avocado can cause immediate cardiac arrest and death in a parrot.
        </Text>

        <Text style={styles.headline2}>
          5. Prevent and Treat Diseases and Injuries Accordingly
        </Text>

        <Text style={styles.commonText}>
          A healthy parrot is alert to his surroundings, stays upright most of
          the time, and is active. If your parrot starts acting sick, see a
          veterinarian. Some signs of a sick parrot include:
        </Text>

        <Text style={styles.footerText}>
          "Choose good toys for your parrot. Toys provide mental stimulation and
          relief from boredom. You should offer toys that have a variety of
          textures, colors, and sounds. It’s a good idea to rotate the toys
          weekly so your parrot doesn’t get bored of the same toys day in and
          day out.""
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
