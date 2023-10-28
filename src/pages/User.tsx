import { Button, Center, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Form from '../components/Form';
import TableInfos from '../components/TableInfos';
import { useNavigate } from 'react-router';

const User = () => {
  const navigate = useNavigate();

  return (
    <Container
      as="main"
      maxW="100%"
      h="100%"
      cursor="default"
      bg="gray.300"
      p="10"
    >
      <Flex
        as="div"
        w="100%"
        h="auto"
        direction="column"
        gap="3rem"
        justifyContent="center"
        alignItems="center"
      >
        <Center w={"100%"}>
          <Heading as={"h2"} size={"lg"}>
            Formulário de cadastro
          </Heading>
        </Center>

        <Center w={"100%"}>
          <Form />
        </Center>

        <Center w={"100%"}>
          <Heading as={"h2"} size={"lg"}>
            Tabela com os dados
          </Heading>
        </Center>

        <Center w={"100%"}>
          <TableInfos />
        </Center>

        <Center w={"100%"}>
          <Button onClick={() => navigate('/')}>Voltar</Button>
        </Center>
      </Flex>
    </Container>
  );
}

export default User