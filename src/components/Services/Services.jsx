import React from "react";

import {
  Flex,
  Box,
  Icon,
  chakra,
  SimpleGrid,
  GridItem,
  Stack,
} from "@chakra-ui/react";
import { Button } from "../ButtonElement";

const Services = () => {
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            color="white"
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color="#F6AE84">
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      id="services"
      p={10}
      w="auto"
      justifyContent="center"
      alignItems="center"
      mt={10}
      bg="#3e518d"
    >
      <Box shadow="xl" bg="#495FA6" px={8} py={20} mx="fit-content" x="auto">
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 3 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box alignSelf="start">
            <chakra.h2
              color="#F6AE84"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Services
            </chakra.h2>
            <chakra.h2
              mb={3}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "left", sm: "left" }}
              color="white"
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Everything you need
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "left", sm: "left" }}
              color="#F6AE84"
            >
              PAL will help you fill the loop holes in your learning process. We
              will help you find the right tutor, schedule a time, and get you
              the help you need.
            </chakra.p>
            <Button
              to="contactus"
              // onMouseEnter={onHover}
              // onMouseLeave={onHover}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary="true"
              dark="true"
            >
              Sign Up
            </Button>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature title="SAT"></Feature>
              <Feature title="ACT"></Feature>
              <Feature title="Algebra"></Feature>
              <Feature title="Geometry"></Feature>
              <Feature title="Pre Calculus"></Feature>
              <Feature title="General High School Help"></Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Services;
