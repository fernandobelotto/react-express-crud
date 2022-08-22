import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { EntiteModel } from "../../../models/card.model";
import { useAppDispatch, useAppSelector } from "../../../store";
import { onCloseModal } from "../../../store/slices/modal.slice";
import { getEntites, updateEntite } from "../../../store/thunks/entite.thunk";

export default function EditEntiteForm() {
  const { entitie } = useAppSelector((state) => state.entite);

  const { register, formState, handleSubmit } = useForm<EntiteModel>({
    defaultValues: entitie ? entitie : {},
  });

  const { isSubmitting } = formState;
  const dispatch = useAppDispatch();
  const toast = useToast();
  function onSubmit(values: EntiteModel) {
    if (!entitie)
      return toast({ title: "no id found in entite", status: "error" });

    dispatch(updateEntite({ id: entitie.id, entite: values }))
      .unwrap()
      .then(() => {
        dispatch(getEntites());
        dispatch(onCloseModal());
      })
      .catch(() => {
        toast({ title: "error creating entite", status: "error" });
      });
  }

  return (
    <>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} w="100%">
        <VStack spacing={3} alignItems="flex-start" w="100%">
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input placeholder="Nome" {...register("name")} w="100%" />
            <FormErrorMessage>mensagem de erro</FormErrorMessage>
          </FormControl>
          <Flex justifyContent="flex-end" w="100%">
            <Button isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </Flex>
        </VStack>
      </Box>
    </>
  );
}
