import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Collapse,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import AgentCard from "./AgentCard";
import { CloseIcon, Search2Icon } from "@chakra-ui/icons";

const ActiveAgents: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

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
        maxH={"15rem"}
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
        <AgentCard isActive={true} />
        <AgentCard isActive={true} />
        <AgentCard isActive={false} />
        <AgentCard isActive={true} />
        <AgentCard isActive={false} />
        <AgentCard isActive={false} />
        <AgentCard isActive={true} />
        <AgentCard isActive={false} />
      </Stack>
    </Stack>
  );
};

export default ActiveAgents;
