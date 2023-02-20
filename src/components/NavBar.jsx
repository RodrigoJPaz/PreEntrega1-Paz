import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavBar = () => {
  return (
    <>
      <Container maxW="200rem" bg="yellow.100" color="">
        <Flex alignItems="center" gap="2">
          <Avatar
            size="xl"
            src="https://previews.123rf.com/images/301librarians/301librarians1802/301librarians180200016/95299996-cosas-viejas-de-cart%C3%B3n.jpg"
          />
          <Box p="10" w="400px" h="100">
            <Heading size="lg">
              <Link to={"/"} className="tituloGradiente titulo">Venta de Garage</Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="outline"
                  colorScheme="blue"
                  m="5"
                >
                  Nuestras Cosas
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme="blue"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categorias
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Electrodomesticos"}`}>
                  <MenuItem>Electrodomesticos</MenuItem>
                </Link>
                <Link to={`/category/${"Muebles"}`}>
                  <MenuItem>Muebles</MenuItem>
                </Link>
                <Link to={`/category/${"Jugetes"}`}>
                  <MenuItem>Jugetes</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="20">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
