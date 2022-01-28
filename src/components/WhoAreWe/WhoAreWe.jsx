import React from "react";
import { chakra, Image, SimpleGrid, Flex } from "@chakra-ui/react";
import Logo from "../../images/Logo.png";

const WhoAreWe = () => {
  return (
    <SimpleGrid  columns={{ base: 1, md: 2 }} spacing={0}>
      <Flex id="whoarewe" bg="#495FA6">
        <Image
          src={Logo}
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={24}
        zIndex={3}
      >
        <chakra.span
          color="white"
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
         Who are we?
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="white"
          lineHeight="shorter"
          textShadow="2px 0 currentcolor"
        >
          Peer Assisted Learning
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color="#f6ae84"
          letterSpacing="wider"
        >
          Peer Assisted Learning was club created by Nitish Elango and Bhavesh
          Mandalapu.
        </chakra.p>
      </Flex>
    </SimpleGrid>
  );
};

export default WhoAreWe;
