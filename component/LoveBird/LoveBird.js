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

export default function LoveBird() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../../assets/lovebird.jpg")}
        />
        <Text style={styles.headline}>How to raise Love Bird</Text>
        <Text style={styles.commonText}>
          Many people associate romance with lovebirds. There are nine different
          species of lovebirds, which are small, brightly- feathered parrots.
        </Text>
        <Text style={styles.commonText}>
          If you have lovebirds or want to own lovebirds and breed them, it
          requires a lot of consideration and commitment, especially because
          they are monogamous for life. However, by pairing the lovebirds and
          taking proper care of them and their eggs, breeding these beautiful
          birds that supposedly inspired Valentine’s Day can be a relatively
          uncomplicated process.
        </Text>

        <Text style={styles.headline2}>1. Getting Ready to Breed a Pair</Text>
        <Text style={styles.commonText}>
          Breeding love birds can come with risks, especially if a mate dies the
          other one can stop eating and most of the time dies after few days.
          Informing yourself about love birds and their mating process can help
          you figure out if this right decision for your animals and for you.
        </Text>
        <Text style={styles.commonText}>
          Lovebirds usually live in holes in trees, rocks or shrubs in the wild.
          Buy the supplies to give your lovebirds a home where they feel
          comfortable and can breed successfully.
        </Text>

        <Text style={styles.commonText}>
          Get your lovebirds a cage of no less than 18x18x12 inches with the
          bars spaced no more than 3/4" inch apart. Try and purchase a square or
          rectangular cage so they have places to hide.
        </Text>

        <Text style={styles.headline2}>
          2. Place the cage in a quite room where he/she can bread
        </Text>
        <Text style={styles.commonText}>
          Love Birds are social creatures but not much as like parrot. In the
          wild, they stay with a flock and maintain constant contact with flock
          mates. If they are kept isolated they may develop separation anxiety.
          Love Birds does not like being in rooms where their human flock hangs
          out. The love quiete place. 2 or three pair Love Bird are good choice
          for a small colony
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
          temperature for your Love Bird is between 65 and 85 degrees
          Fahrenheit. Avoid leaving your Love Bird in a chilly room or dropping
          your thermostat overnight during winter. Temperatures below 40 degrees
          can be dangerous for birds, especially thin ones. Plumper birds can
          develop heat stress to temperatures above 85 degrees. If you must keep
          your Love Bird in higher temperatures, be sure that there is plenty of
          air circulation.
        </Text>

        <Text style={styles.headline2}>4.Food and Water</Text>
        <Text style={styles.commonText}>
          Lovebirds that are breeding need dense, nutrition packed foods because
          of the stress on their bodies. Avoid giving them just seeds, which may
          not provide enough nutrients for the birds or their babies.
        </Text>
        <Text style={styles.commonText}>
          Feed them fresh fruits and vegetables. Rinse them well just like you
          would if you were preparing them for people. Many Love Birds like
          grapes, bananas, apples, carrots, berries, greens, all varieties of
          cooked squash, peas, green beans, and more. Be sure to not overdo it
          on fruit because of sugar content.
        </Text>

        <Text style={styles.commonText}>
          Do not feed Love Birds caffeine, alcohol, chocolate, sugary or salty
          snacks, greasy foods, raw or dry beans, rhubarb leaves, dill, cabbage,
          asparagus, eggplant or honey.
        </Text>
        <Text style={styles.commonText}>
          Never give a Love Bird avocado or onions! Both are toxic to Love
          Birds. Avocado can cause immediate cardiac arrest and death in a Love
          Bird.
        </Text>

        <Text style={styles.headline2}>
          5. Prevent and Treat Diseases and Injuries Accordingly
        </Text>

        <Text style={styles.commonText}>
          A healthy Love Bird is alert to his surroundings, stays upright most
          of the time, and is active. If your Love Bird starts acting sick, see
          a veterinarian. Some signs of a sick Love Bird include:
        </Text>

        <Text style={styles.footerText}>
          "Love Birds are very romantic bird, They can also love human company
          but not too much. If you follow above mentioned information then you
          will get the best result !"
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
    paddingBottom: 5,
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
});
