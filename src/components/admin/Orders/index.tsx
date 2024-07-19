import {
  Flex,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Orders = () => {
  return (
    <Flex
      border="1px solid"
      borderRadius={20}
      borderColor="#E4E7EC"
      p={5}
      gap={5}
      flexDir="column"
    >
      <Text fontWeight={600} fontSize="large">
        All Orders
      </Text>
      <TableContainer>
        <Table width="100%" minWidth="unset">
          <Thead bg="gray.100">
            <Tr>
              <Th>Order ID</Th>
              <Th>Status</Th>
              <Th>Order Date</Th>
              <Th>Order Amount</Th>
              <Th>Address</Th>
              <Th>Customer Name</Th>
              <Th>Phone Number</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Orders;
