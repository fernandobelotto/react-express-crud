import { Box, Flex, Text } from "@chakra-ui/react";
import Content from "./components/Content";

export default function App() {
  return (
    <Box h="100vh">
      <Flex h="100%" bg='gray.100' w='100%'>
        <Box h="100%" bg="gray.200" w="60" p="2">
          <Text>Menu</Text>
        </Box>
        <Box p="5" flex='1'>
          <Content />
        </Box>
      </Flex>
    </Box>
  );
}
