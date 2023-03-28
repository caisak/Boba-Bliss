import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Products } from "../components/Products";
import { TimeForTeaCard } from "../components/TimeForTeaCard";

export function HomePage() {
  return (
    <Box sx={bigGradient}>
      <Flex sx={gradientBackground} display={["row", "row", "flex"]}>
        <Container marginRight="auto">
          <Image
            src="/images/showcaseimg.png"
            alt="Image of bubble tea"
            width="auto"
            height={["100px", "150px", "auto"]}
            display={["none", "none", "flex"]}
          />
        </Container>
        <Container>
          <Heading
            fontSize={["2rem", "2.5rem", "3.5rem"]}
            color={"lightBrownText"}
          >
            {/* <Box sx={bigGradient}>
      <Flex
        sx={gradientBackground}
        display={["row", "row", "flex"]}
        paddingTop={["0rem", "0rem", "5rem"]}
        h={"100%"}
        gap={4}
      >
        <Box marginLeft={[null, null,"2vw","4vw","12%"]}marginRight={[null, null,"2vw","4vw","5vw",]} zIndex={20}>
          <Image
            className="heyy"
            src="/images/showcaseimg.png"
            alt="Image of bubble tea"
            width="auto"
            maxHeight={["auto", "auto", "30rem", "36rem"]}
            display={["none", "none", "flex"]}
          />
        </Box>
        <Container maxWidth={["auto","25rem","27rem","29rem"]}>
          <Heading
            fontSize={["2rem", "2.1rem", "3rem", "3.5rem"]}
            color={"lightBrownText"}
          > */}
            Best boba ever
          </Heading>
          <Text
            fontSize={["1.5rem", "1.3rem", "1.6rem", "2rem"]}
            color={"lightBrownText"}
            fontWeight="bold"
            display={["none", "none", "flex"]}
          >
            In love with React Next
          </Text>
          <Text
            fontSize={[".85rem", ".9rem", "1rem", "1rem"]}
            color={"lightBrownText"}
            fontFamily="Comfortaa"
            marginTop="1rem"
          >
            In love with React Next In love with React Next In love with React
            Next In love with React Next In love with React Next In love with
            React Next In love with React Next In love with React Next In love
            with React Next In love with React Next
          </Text>
          <Center>
            <Image
              zIndex={20}
              src="/images/showcaseimg.png"
              alt="Image of bubble tea"
              width="auto"
              maxHeight={["19rem", "21rem", "auto"]}
              display={["flex", "flex", "none"]}
            />
          </Center>
          <Stack
            direction={["column", null, "row"]}
            spacing={4}
            align="center"
            justifyContent="flex-start"
            marginTop="40px"
            display={["none", "none", "none", "flex"]}
          >
            <Button sx={buttonStyling}>PRODUCTS</Button>
            <Button sx={buttonStyling}>RECIPES</Button>
          </Stack>
        </Container>
      </Flex>
      <Image
        src="/images/crescent.png"
        alt=""
        width="auto"
        height="auto"
        bg={"pink"}
        marginBottom={["6rem", "4rem", "5rem"]}
      />
      <Products />
      <TimeForTeaCard />
    </Box>
  );
}

const gradientBackground = {
  background: "rgb(254, 211, 212)",
  backgroundImage:
    "linear-gradient(0deg, rgba(254, 211, 212, 1) 0%, rgba(255, 241, 221, 1) 47%, rgba(254, 211, 212, 1) 100%, rgba(255, 255, 255, 1) 100%)",
  width: "100%",
  height: "20rem",
  color: "lightBrownText",
  fontFamily: "Inconsolata",
};

const bigGradient = {
  backgroundImage: "linear-gradient(to bottom, transparent 22%, #FED3D4)",
  backgroundColor: "#fffaf4",
};

const buttonStyling = {
  colorScheme: "brown",
  variant: "outline",
  borderRadius: "50px",
  border: "2px",
  padding: "1.5rem",
  fontFamily: "Comfortaa",
  background: "none",
  transition: "all 250ms ease-in-out",
  _hover: {
    color: "white",
  },
  _active: {
    background: "none",
    transform: "scale(0.96)",
  },
};
