import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Flex, HStack, IconButton, Text } from "@chakra-ui/react";

export default function EntiteCard({ entite }: any) {
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
          <IconButton size="sm" icon={<DeleteIcon />} aria-label="delete" />
          <IconButton size="sm" icon={<EditIcon />} aria-label="edit" />
        </HStack>
      </Flex>
    </>
  );
}
