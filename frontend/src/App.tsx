
import { Box, Flex } from "@chakra-ui/react";
import Content from "./components/Content";
import { SideBar } from "./components/SideBar";

export default function App() {


  return (
    <Box minH="100vh" bg='green.100' display='flex'>
      <Flex minH="100%" bg='red.100' w='100%' >
        <SideBar />
        <Box p="5" flex='1'>
          <Content />
        </Box>
      </Flex>
    </Box>
  );
}
