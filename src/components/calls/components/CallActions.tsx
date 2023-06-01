import { Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { ImPause2, ImPhoneHangUp } from "react-icons/im";
import { BsFillMicMuteFill, BsRecord2Fill } from "react-icons/bs";
import { MdPhoneCallback, MdTextsms } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { FiMail, FiVoicemail } from "react-icons/fi";
import { GiDeathSkull } from "react-icons/gi";
import { FaDirections } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import Action from "./Action";

const CallActions: React.FC = () => {
  const color = useColorModeValue("grey", "whiteAlpha.300");
  const hover = useColorModeValue("blackAlpha.500", "whiteAlpha.400");
  return (
    <Stack align={"center"} justify={"center"}>
      <Flex wrap={"wrap"} gap={2}>
        <Action
          _hover={{ bg: hover }}
          tooltipMsg="Send Voicemail"
          icon={<FiVoicemail color="white" size={20} />}
        />
        <Action
          _hover={{ bg: hover }}
          tooltipMsg="Send SMS"
          icon={<MdTextsms color="white" size={20} />}
        />
        <Action
          _hover={{ bg: hover }}
          tooltipMsg="Send Email"
          icon={<FiMail color="white" size={20} />}
        />
        <Action
          _hover={{ bg: hover }}
          tooltipMsg="Callback"
          icon={<MdPhoneCallback color="white" size={20} />}
        />
        <Action
          _hover={{ bg: hover }}
          tooltipMsg="Mute Call"
          icon={<BsFillMicMuteFill color="white" size={20} />}
        />
        <Action
          bg={"red.500"}
          _hover={{ bg: hover }}
          tooltipMsg="Hangup Call"
          icon={<ImPhoneHangUp color="white" size={20} />}
        />
        <Action
          _hover={{ bg: hover }}
          tooltipMsg="Pause Call"
          icon={<ImPause2 color="white" size={20} />}
        />
        <Action
          _hover={{ bg: hover }}
          tooltipMsg="Record Call"
          icon={<BsRecord2Fill color="white" size={20} />}
          // isActive={true}
        />
        <Action
          _hover={{ bg: hover }}
          tooltipMsg="Transfer Call"
          icon={<BiTransferAlt color="white" size={20} />}
        />{" "}
        <Action
          _hover={{ bg: hover }}
          tooltipMsg="Conference Call"
          icon={<HiUsers color="white" size={20} />}
        />
        <Action
          _hover={{ bg: hover }}
          tooltipMsg="Send Directions"
          icon={<FaDirections color="white" size={20} />}
        />
        <Action
          _hover={{ bg: hover }}
          tooltipMsg="Death Call"
          icon={<GiDeathSkull color="white" size={20} />}
          onClick={() => {
            console.log("Death Call");
          }}
        />
      </Flex>
    </Stack>
  );
};

export default CallActions;
