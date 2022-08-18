import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function NewEntiteForm() {
  const { control, register, reset, formState, handleSubmit } = useForm();

  function onSubmit(values: any) {
    console.log(values);
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
