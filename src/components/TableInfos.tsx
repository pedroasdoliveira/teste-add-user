/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { differenceInYears, parseISO } from 'date-fns';

import { useUser } from '../context/UserContext';

const TableInfos = () => {
  const { users } = useUser();

  return (
    <Box
      w={"85%"}
      p={"6"}
      bg={"whiteAlpha.600"}
      style={{ border: "1px solid transparent", borderRadius: "15px" }}
    >
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Dados do usuário</TableCaption>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>E-mail</Th>
              <Th>Idade</Th>
              <Th>CPF</Th>
              <Th>Telefone</Th>
              <Th>Cargo</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, index) => {
              const date = user.date;
              const dateObj = parseISO(date);
              
              const age = differenceInYears(new Date(), dateObj);

              return (
                <Tr key={index}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>{age}</Td>
                  <Td>{user.cpf}</Td>
                  <Td>{user.tel}</Td>
                  <Td>{user.job}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TableInfos