import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import CallActions from "./CallActions";

const CallModal: React.FC<{ onClose: () => void; isOpen: boolean }> = ({
  onClose,
  isOpen,
}) => {
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      // closeOnOverlayClick={false}
      size="5xl"
      blockScrollOnMount={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={5}>
          <Tabs variant="soft-rounded" colorScheme="green" isFitted>
            <TabList>
              <Tab>Call Information</Tab>
              <Tab>Caller Information</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Stack
                  w={"full"}
                  h={"full"}
                  justify={"center"}
                  align={"center"}
                >
                  <CallActions />
                </Stack>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CallModal;
