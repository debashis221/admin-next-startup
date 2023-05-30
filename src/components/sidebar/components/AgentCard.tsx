import {
  Avatar,
  AvatarBadge,
  HStack,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Card from "@/components/card/Card";

const AgentCard: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const backgroundColor = useColorModeValue("secondaryGray.400", "navy.900");
  return (
    <Card p={2} backgroundColor={backgroundColor}>
      <HStack>
        <Avatar>
          <AvatarBadge
            boxSize="1.25em"
            bg={isActive ? "green.500" : "red.500"}
          />
        </Avatar>
        <Stack>
          <Heading size={"sm"}>Company Name</Heading>
        </Stack>
      </HStack>
    </Card>
  );
};

export default AgentCard;
