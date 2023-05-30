import { Button, Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { ImPause2, ImPhoneHangUp } from "react-icons/im";
import { BsFillMicMuteFill, BsRecord2Fill, BsThreeDots } from "react-icons/bs";
import { MdPhoneCallback, MdTextsms } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { FiMail, FiVoicemail } from "react-icons/fi";
import { GiDeathSkull } from "react-icons/gi";
import { FaDirections } from "react-icons/fa";

const CallActions: React.FC = () => {
  const color = useColorModeValue("grey", "whiteAlpha.300");
  const hover = useColorModeValue("blackAlpha.500", "whiteAlpha.400");
  return (
    <Stack align={"center"} justify={"center"}>
      <Flex wrap={"wrap"} gap={2}>
        <Button
          bg={color}
          _hover={{ bg: hover }}
          fontWeight="regular"
          fontSize="sm"
          borderRadius={"full"}
          size={"md"}
          minH={"50px"}
        >
          <FiVoicemail size={20} color="white" />
        </Button>
        <Button
          bg={color}
          _hover={{ bg: hover }}
          fontWeight="regular"
          fontSize="sm"
          borderRadius={"full"}
          size={"md"}
          minH={"50px"}
        >
          <FiMail size={20} color="white" />
        </Button>
        <Button
          bg={color}
          _hover={{ bg: hover }}
          fontWeight="regular"
          fontSize="sm"
          borderRadius={"full"}
          size={"md"}
          minH={"50px"}
        >
          <MdTextsms size={20} color="white" />
        </Button>
        <Button
          bg={color}
          _hover={{ bg: hover }}
          fontWeight="regular"
          fontSize="sm"
          borderRadius={"full"}
          size={"md"}
          minH={"50px"}
        >
          <MdPhoneCallback size={20} color="white" />
        </Button>
        <Button
          bg={color}
          _hover={{ bg: hover }}
          fontWeight="regular"
          fontSize="sm"
          borderRadius={"full"}
          size={"md"}
          minH={"50px"}
        >
          <BsFillMicMuteFill size={20} color="white" />
        </Button>
        <Button
          bg="red.400"
          _hover={{ bg: hover }}
          fontWeight="regular"
          fontSize="sm"
          borderRadius={"full"}
          size={"md"}
          minH={"50px"}
        >
          <ImPhoneHangUp size={20} color="white" />
        </Button>
        <Button
          bg={color}
          _hover={{ bg: hover }}
          fontWeight="regular"
          fontSize="sm"
          borderRadius={"full"}
          size={"md"}
          minH={"50px"}
        >
          <ImPause2 size={20} color="white" />
        </Button>
        <Button
          bg={color}
          _hover={{ bg: hover }}
          fontWeight="regular"
          fontSize="sm"
          borderRadius={"full"}
          size={"md"}
          minH={"50px"}
        >
          <BsRecord2Fill size={20} color="white" />
        </Button>
        <Button
          bg={color}
          _hover={{ bg: hover }}
          fontWeight="regular"
          fontSize="sm"
          borderRadius={"full"}
          size={"md"}
          minH={"50px"}
        >
          <BiTransferAlt size={20} color="white" />
        </Button>
        <Button
          bg={color}
          _hover={{ bg: hover }}
          fontWeight="regular"
          fontSize="sm"
          borderRadius={"full"}
          size={"md"}
          minH={"50px"}
        >
          <FaDirections size={20} color="white" />
        </Button>
        <Button
          bg={"red.300"}
          _hover={{ bg: hover }}
          fontWeight="regular"
          fontSize="sm"
          borderRadius={"full"}
          size={"md"}
          minH={"50px"}
        >
          <GiDeathSkull size={20} color="white" />
        </Button>
      </Flex>
    </Stack>
  );
};

export default CallActions;
