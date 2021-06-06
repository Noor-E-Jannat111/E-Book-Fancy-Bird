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

export default function Pigeon({ navigation }) {
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
          source={require("../../assets/silver_lahori.jpg")}
        />
        <Text style={styles.headline}>How to raise PIGEON</Text>
        <Text style={styles.commonText}>
          Some people keep the domestic bird as a hobby, others as a source of
          income (to earn money from selling the pet), and others keep pigeons
          as a meat source. If you apply the right practices when raising these
          birds, then you can be sure to get the best results from your
          feathered friends. Read on to learn how to raise pigeons at home and
          what practices you should employ. For you to successfully raise
          pigeons at home, you must know the best practices for keeping them.
        </Text>

        <Text style={styles.headline2}>
          1. Raise Pigeons in Pairs: One of the Most Important Practices
        </Text>
        <Text style={styles.commonText}>
          Pigeons like to live in pairs (male and female), so when buying them,
          ensure that you get an even number. The birds usually pair themselves,
          but for the ones that cannot pair, lock them in a nest box for a few
          days and they will bond. The birds will pair only if they share
          similar characteristics and behaviors.
        </Text>

        <Text style={styles.headline2}>
          2. Provide Secure and Comfortable Housing
        </Text>
        <Text style={styles.commonText}>
          It is best to install more than one loft/coop (pigeon house) if you
          have more than one pair of the birds. Some pigeons do not get along
          well with others, and so if you have some which are aggressive, it is
          important to house them in a separate coop. Pigeons are the prey of
          some wild animals and other birds, so you need to provide secure coops
          for your pets. For maximum security, ensure that the lofts are made of
          metal sheets or wood and wire mesh. The doors should be strong and
          well-fixed to keep away the predators.
        </Text>

        <Text style={styles.commonText}>
          The loft design and materials should not affect the comfort of your
          feathered buddies in any negative way. The metal sheets and wires
          should be fixed properly to ensure that they don't scratch, pierce or
          injure your birds. You can provide some soft lining materials to
          improve the comfort of the coops. A landing board or trap is required
          at the door to help the birds access the house without any
          difficulties.
        </Text>

        <Text style={styles.headline2}>
          3.Provide Enough Healthy Food and Water
        </Text>
        <Text style={styles.commonText}>
          These birds mainly feed on grains and seeds, and it is recommended to
          provide them with dry grains since grains with high moisture content
          can cause vomiting and diarrhea. Some popular grains include: wheat,
          corn, barley, and sorghum. There are also some ready-made commercial
          feeds that you can buy to improve the diet of your pets.
        </Text>
        <Text style={styles.commonText}>
          When it comes to the seeds, the birds love to eat peas, legume seeds,
          soybeans, and peanuts. It is recommended to break the seeds into
          smaller pieces to enable the young ones feed on them without
          difficulties. You can combine 2 or more seeds to ensure that they get
          enough nutrients. The newly-hatched birds are fed by the adult ones,
          so you should not be worried about feeding them.
        </Text>
        <Text style={styles.commonText}>
          Grit is a great addition to the feed. Some grit materials include:
          oyster shell, salt, limestone, charcoal, and bone powder which
          contains calcium, sulfur, iodine, iron, and other essential minerals.
        </Text>
        <Text style={styles.commonText}>
          You should place the food in a place where they can access it anytime
          of the day. One of the best places is near their houses. Put the food
          in clean troughs or trays, and you should clean the containers
          regularly to avoid contamination. It is not recommended to place the
          food inside the lofts because there is a high chance of it mixing with
          feces and other wastes.
        </Text>
        <Text style={styles.commonText}>
          Your birds should be able to access enough and fresh water all the
          times. It is recommended to place water near the food troughs. There
          are specially designed waterers that can help them drink water with no
          difficulties. You can use these water troughs to ensure that they
          drink enough water every day. You should also clean the troughs
          regularly to prevent the occurrence of diseases.
        </Text>

        <Text style={styles.headline2}>4.Provide Well-Designed Nest Boxes</Text>

        <Text style={styles.commonText}>
          Nest boxes are lofts designed for laying eggs and raising the young
          ones. A normal nest box is 24 inches long, 12 inches wide and 14
          inches deep. A third of the box should be opened and covered with a
          wire mesh to help the birds get fresh air while staying secure. The
          interior should be lined with nesting materials.
        </Text>

        <Text style={styles.headline2}>
          5. Prevent and Treat Diseases and Injuries Accordingly
        </Text>

        <Text style={styles.commonText}>
          A poultry disease is the worst thing that can happen to your flock.
          The most deadly and infectious diseases can wipe it in less than a
          week. Some common diseases include pox, Newcastle and influenza, and
          they can be prevented by observing hygiene in places where the fowl
          live. So keep the lofts, food and water troughs, flypens, nest boxes,
          and perches as clean as possible. Another great way to control
          diseases is to vaccinate your pets.
        </Text>
        <Text style={styles.commonText}>
          In case of any disease attack, quarantine and treat the affected fowl.
          You may have to get help from a veterinarian if you do not understand
          the disease. If there are dead birds, bury or burn them to control the
          spread of the disease. You should clean and disinfect all the places
          where your flock live and hang out.
        </Text>

        <Text style={styles.footerText}>
          "When you implement these practices, you will definitely get the best
          results from your pigeons. You will be able to keep these birds in a
          hassle-free way, and the best thing is that you will own feathered
          pets that will always keep you happy and delighted. So spice up your
          hobby or maximize your income by raising your birds accordingly.""
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
