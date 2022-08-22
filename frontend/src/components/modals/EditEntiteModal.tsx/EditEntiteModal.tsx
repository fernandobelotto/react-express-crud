import { Box, Heading, VStack } from "@chakra-ui/react";
import EditEntiteForm from "../../forms/EditEntiteForm/EditEntiteForm";

export default function EditEntiteModal() {
  return (
    <Box p={1} pb={3}>
      <VStack alignItems='flex-start' spacing={2} w='100%'>
        <Heading>Edit sua entidade</Heading>
        <EditEntiteForm />
      </VStack>
    </Box>
  );
}
