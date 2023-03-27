import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  ListItem,
  SystemStyleObject,
  Text,
  UnorderedList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsCupStraw } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";
import { useCart } from "../CartContext";

export function OrderConfirmationCard() {
  const { cartList } = useCart();
  const getContactDetails = localStorage.getItem("contactDetails");
  const contactDetails = getContactDetails
    ? JSON.parse(getContactDetails)
    : null;

  const totalPrice = cartList.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0);

  const cardBodyFontSize = useBreakpointValue({ base: "1rem", sm: "1.2rem" });
  const cardFooterFontSize = useBreakpointValue({ base: "1rem", sm: "1.2rem" });

  return (
    <Card sx={cartStyle}>
      <Flex sx={flexStyle}>
        <CardHeader p="5px">
          <Heading size="lg" padding="15px">
            Thank you {contactDetails.firstName} for your order!
            {"#Unique order number"}
          </Heading>
        </CardHeader>
        <CardBody fontSize={cardBodyFontSize} width="100%" p="0">
          <UnorderedList listStyleType="none" marginInlineStart="0">
            {cartList.map((cartItem) => (
              <ListItem key={cartItem.id}>
                <Flex sx={cartItemStyle}>
                  <Text marginRight="20px">{cartItem.quantity} x</Text>
                  <Box
                    width="70px"
                    height="70px"
                    backgroundColor={cartItem.bgColor}
                    borderRadius="5px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      sx={thumbNailStyle}
                      src={cartItem.image}
                      alt={cartItem.imageAlt}
                      width="100%"
                      height="100%"
                      objectFit="contain"
                      marginLeft="1rem" //temporär lösning
                    />
                  </Box>
                  <Text
                    paddingTop="10px"
                    flex={1}
                    textAlign="left"
                    marginLeft="1rem"
                  >
                    {cartItem.title}
                  </Text>
                  <Text paddingTop="10px">
                    ${cartItem.quantity * cartItem.price}
                  </Text>
                </Flex>
              </ListItem>
            ))}
          </UnorderedList>
        </CardBody>
        <CardFooter fontSize={cardFooterFontSize} sx={cardFooterStyle}>
          <Center>
            <Text>Your order will be delivered as soon as possible!</Text>
          </Center>
          <Flex></Flex>
          <Center marginTop="2rem">
            <Icon
              verticalAlign="sub"
              width="1.8em"
              height="1.8em"
              as={FaTruckMoving}
            />
            <Icon
              verticalAlign="sub"
              width="1.8em"
              height="1.8em"
              as={BsCupStraw}
            />
          </Center>
          <Flex justifyContent="space-between" alignItems="center">
            <Image
              src="/images/bobablissiconupdate.png"
              alt="Logo"
              height="5rem"
            />
            <Text float="right">Total: ${totalPrice}</Text>
          </Flex>
        </CardFooter>
      </Flex>
    </Card>
  );
}

const cartStyle: SystemStyleObject = {
  marginTop: "var(--chakra-space-1)",
  bg: "#FFF9F4",
  border: "1px solid rgb(0,0,0, 0.2)",
  borderRadius: "0.625rem",
  padding: "1rem",
  position: "relative",
  color: "darkBrownText",
};

const thumbNailStyle: SystemStyleObject = {
  width: "2rem",
  marginRight: "1rem",
};

const flexStyle: SystemStyleObject = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  rowGap: "1.25rem",
};

const cartItemStyle: SystemStyleObject = {
  alignItems: "center",
  my: "0.625rem",
};

const cardFooterStyle: SystemStyleObject = {
  width: "100%",
  display: "block",
  p: "0",
  color: "darkBrownText",
};
