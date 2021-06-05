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
      <Header>
        <Body>
          <Title style={{ textAlign: "center", width: "100%" }}>
            Native-E-Book
          </Title>
        </Body>
      </Header>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </Container>
  );
};

export default NavBarHeader;
