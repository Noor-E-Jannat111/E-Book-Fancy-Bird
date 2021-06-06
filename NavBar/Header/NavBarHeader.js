import { NavigationContainer } from "@react-navigation/native";
import {
  Body,
  Header,
  Button,
  Container,
  Icon,
  Left,
  Right,
  Title,
} from "native-base";
import React from "react";
import MyDrawer from "../DrawerNavbar/DrawerNavBar";

const NavBarHeader = () => {
  return (
    <Container>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </Container>
  );
};

export default NavBarHeader;
