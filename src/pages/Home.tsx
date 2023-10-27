import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router";

import { PathsRoutes } from "../router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container as="main" maxW="100%" h="100vh" cursor="default" bg="gray.300" p="10" style={{ display: 'flex', textAlign: 'center', margin: '0 auto' }}>
      <Flex as="div" w="100%" h="auto" direction="column" gap="2rem" justifyContent="center" alignItems="center">
        <Center width="100%">
          <Heading as="h1" size="3xl" fontWeight="bold" color="cyan.700">
            {" "}
            Bem vindo!
          </Heading>
        </Center>

        <Center>
          <Text fontSize="2xl">
            Cadastre as suas informações de usuário aqui.
          </Text>
        </Center>

        <Center>
          <Button
            leftIcon={<AiOutlineUser />}
            colorScheme="purple"
            variant="ghost"
            onClick={() => navigate(PathsRoutes.USER)}
          >
            Cadastrar
          </Button>
        </Center>
      </Flex>
    </Container>
  );
};

export default Home;
