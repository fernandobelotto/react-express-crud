import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { AppDispatch, useAppDispatch, useAppSelector } from "../store";
import { onOpenModal } from "../store/slices/modal.slice";
import EntiteCard from "./EntiteCard";
import { modals } from "./modals";


export default function Content() {
  const dispatch = useAppDispatch();
  const entites = useAppSelector((state) => state.entite.entities);

  function handleNewEntite() {
    dispatch(onOpenModal(modals.NEW_ENTITE));
  }

  return (
    <>
      <SimpleGrid minChildWidth={300} columns={10} spacing={5}>
        <Flex
          rounded="lg"
          p={4}
          shadow="md"
          h="100%"
          justifyContent="space-between"
          bg="white"
          alignItems="center"
        >
          <Button onClick={handleNewEntite}>New Item</Button>
        </Flex>

        {entites.map((entite) => (
          <EntiteCard entite={entite} />
        ))}
      </SimpleGrid>
    </>
  );
}
