import React from "react";
import { Box, Icon, useColorModeValue, chakra, Image } from "@chakra-ui/react";
import { Button } from "../ButtonElement";

const Hero = () => {
  const bg = useColorModeValue("#495FA6", "gray.800");

  return (
    <Box id="home" pos="relative" overflow="hidden" bg={bg}>
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          maxW={{ lg: "2xl" }}
          w={{ lg: "full" }}
          zIndex={1}
          bg={bg}
        >
          <Icon
            display={{ base: "none", lg: "block" }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              w="full"
              textAlign={{ sm: "center", lg: "left" }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color="white"
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  Peer Assisted Learning
                </chakra.span>
                <chakra.span
                  display={{ base: "block", xl: "inline" }}
                  color={useColorModeValue("brand.600", "brand.400")}
                ></chakra.span>
              </chakra.h1>
              <chakra.h6
                fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                fontWeight="extrabold"
                color="white"
              >
                FROM THE FOUNDERS OF INFINITY PREP
              </chakra.h6>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                color="#f6ae84"
              >
                Need one on one tutoring for the SAT? ACT? Algebra, Geometry,
                Precal, and more? Check out PAL your one stop shop to find
                success in your academic career.
              </chakra.p>
              <Box
                mt={{ base: 5, sm: 8 }}
                display={{ sm: "flex" }}
                justifyContent={{ sm: "center", lg: "start" }}
                fontWeight="extrabold"
              >
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
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{ lg: "absolute" }}
        top={{ lg: 0 }}
        bottom={{ lg: 0 }}
        right={{ lg: 0 }}
        w={{ lg: "50%" }}
      >
        <Image
          h={[56, 72, 96, "full"]}
          w="full"
          fit="cover"
          src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default Hero;
