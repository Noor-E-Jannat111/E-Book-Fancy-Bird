import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Icon } from "native-base";
import Pigeon from "../../component/Pigeon/Pigeon";
import HomeScreen from "../../component/HomeScreen/HomeScreen";
import Bajigar from "../../component/Bajigar/Bajigar";
import Hen from "../../component/Hen/Hen";
import LoveBird from "../../component/LoveBird/LoveBird";
import Parrot from "../../component/Parrot/Parrot";

function Feed({ navigation }) {
  return (
    <View style={{ flex: 0, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pigeon"
        component={Pigeon}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="book" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Drawer.Screen
        name="Bajigar"
        component={Bajigar}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="book" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Drawer.Screen
        name="Parrot"
        component={Parrot}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="book" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Drawer.Screen
        name="Love Bird"
        component={LoveBird}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="book" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Drawer.Screen
        name="Hen"
        component={Hen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="book" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
