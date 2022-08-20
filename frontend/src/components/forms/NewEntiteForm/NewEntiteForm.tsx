import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { EntiteModel } from "../../../models/card.model";
import { useAppDispatch } from "../../../store";
import { createEntite } from "../../../store/thunks/entite.thunk";

export default function NewEntiteForm() {
  const { control, register, reset, formState, handleSubmit } = useForm<EntiteModel>();
  const dispatch = useAppDispatch()
  function onSubmit(values: EntiteModel) {
    dispatch(createEntite(values))
  }

  return (
    <>
      <Box as='form' onSubmit={handleSubmit(onSubmit)} w='100%'>
        <VStack spacing={3} alignItems='flex-start' w='100%'>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input placeholder="Nome" {...register("name")} w='100%'/>
            <FormErrorMessage>mensagem de erro</FormErrorMessage>
          </FormControl>
          <Flex justifyContent='flex-end' w='100%'>
            <Button type="submit">Submit</Button>
          </Flex>
        </VStack>
      </Box>
    </>
  );
}
