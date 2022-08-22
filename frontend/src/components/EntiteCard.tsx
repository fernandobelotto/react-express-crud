import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Flex, HStack, IconButton, Text, useToast } from "@chakra-ui/react";
import { useAppDispatch } from "../store";
import { onOpenModal } from "../store/slices/modal.slice";
import { deleteEntite, getEntite } from "../store/thunks/entite.thunk";
import { modals } from "./modals";

export default function EntiteCard({ entite }: any) {
  const dispatch = useAppDispatch();

  function handleDelete(id: string) {
    dispatch(deleteEntite(id));
  }

  const toast = useToast();

  function handleEdit(id: string) {
    dispatch(getEntite(id))
      .unwrap()
      .then(() => {
        dispatch(onOpenModal(modals.EDIT_ENTITE));
      })
      .catch(() => {
        toast({
          title: "error getting info",
          status: "error",
        });
      });
  }

  return (
    <>
      <Flex
        rounded="lg"
        p={4}
        shadow="md"
        w="100%"
        h="100%"
        justifyContent="space-between"
        bg="white"
        alignItems="center"
      >
        <Text>{entite.name}</Text>
        <HStack>
          <IconButton
            onClick={() => handleDelete(entite.id)}
            size="sm"
            icon={<DeleteIcon />}
            aria-label="delete"
          />
          <IconButton
            onClick={() => handleEdit(entite.id)}
            size="sm"
            icon={<EditIcon />}
            aria-label="edit"
          />
        </HStack>
      </Flex>
    </>
  );
}
