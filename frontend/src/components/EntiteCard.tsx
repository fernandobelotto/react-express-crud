import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { useAppDispatch } from "../store";
import { deleteEntite } from "../store/thunks/entite.thunk";

export default function EntiteCard({ entite }: any) {

  const dispatch = useAppDispatch()

  function handleDelete(id:string) {
    dispatch(deleteEntite(id))
  }
  function handleEdit(id:string) {
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
           size="sm" icon={<DeleteIcon />} aria-label="delete" />
          <IconButton 
          onClick={() => handleEdit(entite.id)}
          size="sm" icon={<EditIcon />} aria-label="edit" />
        </HStack>
      </Flex>
    </>
  );
}
