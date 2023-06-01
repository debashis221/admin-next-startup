import { Button, ButtonProps, Tooltip, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface Props extends ButtonProps {
  icon: any;
  tooltipMsg: string;
  isActive?: boolean;
}
const Action: React.FC<Props> = ({ icon, tooltipMsg, isActive, ...props }) => {
  const color = useColorModeValue("grey", "whiteAlpha.300");
  return (
    <Tooltip label={tooltipMsg} fontSize="md" hasArrow>
      <Button
        bg={isActive ? "blue.500" : color}
        fontWeight="regular"
        fontSize="sm"
        borderRadius={"full"}
        size={"md"}
        minH={"50px"}
        {...props}
      >
        {icon}
      </Button>
    </Tooltip>
  );
};

export default Action;
