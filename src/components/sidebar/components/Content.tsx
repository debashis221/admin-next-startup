// chakra imports
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
//   Custom components
import Brand from "@/components/sidebar/components/Brand";
import { IRoute } from "@/types/navigation";
import Calls from "@/components/calls/Calls";
import ActiveAgents from "./ActiveAgents";

// FUNCTIONS

interface SidebarContentProps {
  routes: IRoute[];
}

function SidebarContent(props: SidebarContentProps) {
  // SIDEBAR
  return (
    <Flex direction="column" height="100%" borderRadius="30px">
      <Brand />
      <Box
        px="20px"
        pe={{ lg: "16px", "2xl": "20px" }}
        mt="20px"
        mr={"20px"}
        borderRadius="30px"
      >
        <Calls />
      </Box>
      <Stack direction="column" mt="2px" mb="auto">
        <Box mx="20px" pe={{ lg: "16px", "2xl": "20px" }} borderRadius="30px">
          <ActiveAgents />
        </Box>
      </Stack>
    </Flex>
  );
}

export default SidebarContent;
