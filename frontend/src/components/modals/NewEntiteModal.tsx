import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import NewEntiteForm from "../forms/NewEntiteForm/NewEntiteForm";

export default function NewEntiteModal() {
  return (
    <Box p={1} pb={3}>
      <VStack alignItems='flex-start' spacing={2} w='100%'>
        <Heading>Crie sua entidade</Heading>
        <NewEntiteForm />
      </VStack>
    </Box>
  );
}
