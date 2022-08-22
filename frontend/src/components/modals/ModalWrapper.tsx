import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { modalsHashMap } from ".";
import { useAppDispatch, useAppSelector } from "../../store";
import { onCloseModal } from "../../store/slices/modal.slice";

export default function ModalWrapper() {
  const { modalType, isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  if (modalsHashMap[modalType]) {
    return (
      <Modal isOpen={isOpen} onClose={() => dispatch(onCloseModal())}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalsHashMap[modalType].title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalsHashMap[modalType].body}</ModalBody>
        </ModalContent>
      </Modal>
    );
  }

  return null;
}
