import { Button, Heading, Stack, HStack } from "@chakra-ui/react";
import { ImPhoneHangUp } from "react-icons/im";
import { FaPhone } from "react-icons/fa";

export default function SidebarDocs() {
  const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";

  return (
    <Stack
      justify="center"
      align="center"
      bg={bgColor}
      borderRadius="30px"
      me="20px"
      position="relative"
    >
      <HStack align="center" justify={"space-between"} py={7}>
        <Stack spacing={0} align={"center"} justify={"center"}>
          <Heading
            color="white"
            fontWeight="bold"
            textAlign="center"
            size={"md"}
          >
            John Wick
          </Heading>
          <Heading fontSize={"xs"} color={"white"}>
            +1 202-555-0176
          </Heading>
        </Stack>

        <Button
          bg="green.300"
          _hover={{ bg: "whiteAlpha.400" }}
          _active={{ bg: "whiteAlpha.100" }}
          fontWeight="regular"
          fontSize="sm"
          borderRadius={"full"}
          size={"md"}
          minH={"50px"}
        >
          <FaPhone size={20} color="white" />
        </Button>
        <Button
          bg="red.300"
          _hover={{ bg: "whiteAlpha.400" }}
          _active={{ bg: "whiteAlpha.100" }}
          fontWeight="regular"
          fontSize="sm"
          borderRadius={"full"}
          size={"md"}
          minH={"50px"}
        >
          <ImPhoneHangUp size={20} color="white" />
        </Button>
      </HStack>
    </Stack>
  );
}
