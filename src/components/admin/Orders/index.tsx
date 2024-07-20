import {
  Flex,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";

const OrderTableHeader: string[] = [
  "Orders ID",
  "Status",
  "Order Amount",
  "Customer name",
  "Phone number",
  "Email",
];

interface OrdersTableProps {}

const Orders: React.FC<OrdersTableProps> = ({}) => {
  useEffect(() => {}, []);

  return (
    <Flex
      border="1px solid"
      borderRadius={20}
      borderColor="#E4E7EC"
      pt={5}
      gap={5}
      flexDir="column"
    >
      <Text px={5} fontWeight={600} fontSize="large">
        All Orders
      </Text>
      <TableContainer>
        <Table width="100%" minWidth="unset">
          <Thead>
            <Tr>
              {OrderTableHeader.map((header, index) => {
                return (
                  <Th
                    borderTop="1px solid"
                    borderBottom="1px solid"
                    borderColor="#E4E7EC"
                    bg="#F9FAFB"
                    key={index}
                  >
                    <Text
                      color="#475467"
                      fontWeight={500}
                      textTransform="capitalize"
                    >
                      {header}
                    </Text>
                  </Th>
                );
              })}
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Orders;
