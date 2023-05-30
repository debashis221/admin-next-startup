import {
  Box,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Card from "@/components/card/Card";
import { FaPhone } from "react-icons/fa";

const HistoryCard: React.FC<{}> = () => {
  const backgroundColor = useColorModeValue("secondaryGray.400", "navy.800");
  return (
    <Card
      py={4}
      backgroundColor={backgroundColor}
      w={"52"}
      wordBreak={"break-word"}
    >
      <HStack justify={"space-between"} px={1}>
        <Stack>
          <Heading size={"sm"}>Company Name</Heading>
          <Text fontSize={"0.9rem"} color={"gray.600"}>
            +1 2055698545
          </Text>
          <Text fontSize={"0.7rem"} color={"gray.500"}>
            May 29 5:52 PM
          </Text>
        </Stack>
      </HStack>
    </Card>
  );
};

export default HistoryCard;
