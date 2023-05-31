import {
  Badge,
  HStack,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Card from "@/components/card/Card";

const HistoryCard: React.FC<{ isDeathCall?: boolean; isActive?: boolean }> = ({
  isDeathCall,
  isActive,
}) => {
  const backgroundColor = useColorModeValue("secondaryGray.400", "navy.800");
  const activeColor = useColorModeValue("secondaryGray.500", "navy.500");
  return (
    <Card
      py={4}
      backgroundColor={isActive ? activeColor : backgroundColor}
      w={"52"}
      wordBreak={"break-word"}
      cursor={"pointer"}
    >
      <Stack>
        <Heading size={"sm"}>Company Name</Heading>
        <Text fontSize={"0.9rem"} color={isActive ? "whiteAlpha" : "gray.500"}>
          +1 2055698545
        </Text>
        <Text fontSize={"0.7rem"} color={isActive ? "whiteAlpha" : "gray.500"}>
          May 29 5:52 PM
        </Text>
        {isDeathCall && (
          <HStack justify={"flex-end"} w={"full"}>
            <Badge colorScheme="red" size={"xs"}>
              Death Call
            </Badge>
          </HStack>
        )}
      </Stack>
    </Card>
  );
};

export default HistoryCard;
