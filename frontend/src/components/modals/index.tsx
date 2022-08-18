import { ReactElement } from "react";
import NewEntiteModal from "./NewEntiteModal";

export enum modals {
  NEW_ENTITE = "NEW_ENTITE",
}
type ModalHash = {
  [key in modals]:{
    title: string;
    body: ReactElement;
  }
};

export const modalsHashMap: ModalHash = {
  NEW_ENTITE: {
    title: "Nova Entidade",
    body: <NewEntiteModal />,
  },
};

