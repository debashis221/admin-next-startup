import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

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
      size="xl"
      blockScrollOnMount={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CallModal;
