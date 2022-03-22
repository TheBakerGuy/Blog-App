import { ReactElement } from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalProps,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import styles from './AppModal.module.css';

interface IModal extends ModalProps {
  modalHeader?: ReactElement | string;
}

const AppModal = (props: IModal) => {
  const { children, isOpen, size = "lg", modalHeader, onClose } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <ModalContent width={["90%", "90%", "100%", "100%", "100%"]}>
          <ModalCloseButton />
          <ModalHeader>{modalHeader}</ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AppModal;
