import { Box, Center, Container, Flex, Grid, GridItem, Icon } from "@chakra-ui/react";


export function Footer() {
  return (
    <Box as="footer" sx={footerStyle}>
      <Container sx={containerStyle}>
        <Grid sx={gridStyles}>
          <GridItem sx={gridItemStyle} />
          <GridItem sx={gridItemStyle} />
          <GridItem sx={gridItemStyle} />
          <Flex sx={gridItemStyle}>
            <Center h="100%" w="15%" bg="red">
            <Icon as={faBear} />

            </Center>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
}

const footerStyle = {
  backgroundColor: "pink",
  maxWidth: "100%",
  height: ["31rem", "27rem", "16rem"],
};

const containerStyle = {
  maxWidth: "70rem",
  height: "100%",
  paddingTop: ["2rem", "3rem"],
};

const gridStyles = {
  templateColumns: "repeat(1, 1fr)",
  gap: ["1rem", "1,5rem", "2rem"],
  gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"],
  placeItems: "center",
};

const gridItemStyle = {
  backgroundColor: "cardBackground",
  height: ["6rem", "10rem", "10rem"],
  width: "100%",
};
