import {
  Button,
  CircularProgress,
  Collapse,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import AgentCard from "./AgentCard";
import { CloseIcon, Search2Icon } from "@chakra-ui/icons";
import { api } from "@/utils/api";

const ActiveAgents: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { data, isLoading } = api.users.getAllUsers.useQuery();

  return (
    <Stack>
      <HStack p={2}>
        <Heading size={"sm"} textAlign="left" flex={1}>
          All Agents
        </Heading>
        <Button onClick={onToggle} bg={isOpen ? "red.500" : ""}>
          {isOpen ? <CloseIcon /> : <Search2Icon />}
        </Button>
      </HStack>

      <Collapse in={isOpen} animateOpacity>
        <InputGroup>
          <Input placeholder="Enter Agent Name" />
          <InputRightAddon>
            <Search2Icon />
          </InputRightAddon>
        </InputGroup>
      </Collapse>

      <Stack
        gap={2}
        overflowY={"scroll"}
        maxH={"xs"}
        position={"relative"}
        __css={{
          "&::-webkit-scrollbar": {
            width: "0",
            height: "0",
          },
          "&::-webkit-scrollbar-track": {
            width: "0",
            height: "0",
          },
        }}
      >
        {isLoading ? (
          <Stack align={"center"} justify={"center"} p={4}>
            <CircularProgress isIndeterminate color="blue.300" />
          </Stack>
        ) : (
          data?.map((user) => (
            <AgentCard
              isActive={user.isLoggedIn}
              key={user.id}
              name={user.name!}
            />
          ))
        )}
      </Stack>
    </Stack>
  );
};

export default ActiveAgents;
