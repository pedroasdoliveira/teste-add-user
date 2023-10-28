/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { UserDatasType, useUser } from "../context/UserContext";

const Form = () => {
  const { user, setUser, handleSubmit } = useUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setUser((prevUser: UserDatasType) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <Flex as="div" w={"80%"}>
      <Box
        as="div"
        w={"100%"}
        p={"8"}
        bg={"whiteAlpha.600"}
        style={{ border: "1px solid transparent", borderRadius: "15px" }}
      >
        <FormControl isRequired>
          <FormLabel>Nome completo:</FormLabel>
          <Input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <FormLabel>Email:</FormLabel>
          <Input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <FormLabel>Data de nascimento</FormLabel>
          <Input
            type="date"
            name="date"
            value={user.date}
            onChange={handleChange}
          />

          <FormLabel>CPF</FormLabel>
          <Input
            type="text"
            name="cpf"
            value={user.cpf}
            onChange={handleChange}
          />

          <FormLabel>Telefone</FormLabel>
          <Input
            type="text"
            name="tel"
            value={user.tel}
            onChange={handleChange}
          />

          <FormLabel>Cargo</FormLabel>
          <Input
            type="text"
            name="job"
            value={user.job}
            onChange={handleChange}
          />
        </FormControl>

        <Button marginTop={"1rem"} onClick={handleSubmit}>
          Cadastrar
        </Button>
      </Box>
    </Flex>
  );
};

export default Form;
