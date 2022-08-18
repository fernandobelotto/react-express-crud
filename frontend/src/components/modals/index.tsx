import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Modal,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { onClose } from "../../store/slices/modal.slice";
import NewEntiteModal from "./NewEntiteModal";

export default function RenderModal() {
  const { modalType, isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  type ModalHash = {
    [key: string]: { title: string; body: ReactElement };
  };

  const modals: ModalHash = {
    NEW_ENTITE: { title: "Nova Entidade", body: <NewEntiteModal /> },
  };

  if (modals[modalType]) {
    return (
      <Modal isOpen={isOpen} onClose={() => dispatch(onClose())}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modals[modalType].title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modals[modalType].body}</ModalBody>
        </ModalContent>
      </Modal>
    );
  }

  return null;
}
