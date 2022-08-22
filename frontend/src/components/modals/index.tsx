import { ReactElement } from "react";
import EditEntiteModal from "./EditEntiteModal.tsx/EditEntiteModal";
import NewEntiteModal from "./NewEntiteModal";

export enum modals {
  NEW_ENTITE = "NEW_ENTITE",
  EDIT_ENTITE = "EDIT_ENTITE",
}
type ModalHash = {
  [key in modals]: {
    title: string;
    body: ReactElement;
  };
};

export const modalsHashMap: ModalHash = {
  NEW_ENTITE: {
    title: "Nova Entidade",
    body: <NewEntiteModal />,
  },
  EDIT_ENTITE: {
    title: "Editar Entidade",
    body: <EditEntiteModal />,
  },
};
