import { Button, ButtonProps, Tooltip } from "@chakra-ui/react";
import React from "react";

interface Props extends ButtonProps {
  icon: any;
  tooltipMsg: string;
}
const Action: React.FC<Props> = ({ icon, tooltipMsg, ...props }) => {
  return (
    <Tooltip label={tooltipMsg} fontSize="md" hasArrow>
      <Button
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
