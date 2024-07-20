import {
  Flex,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { type RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import { useState } from "react";

import useRealTimePurchases from "~/hooks/useRealTimePurchases";

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
  const [orders, setOrders] = useState([]);

  const handleRealTimeUpdate = (
    payload: RealtimePostgresChangesPayload<{
      [key: string]: any;
    }>
  ) => {};

  useRealTimePurchases(handleRealTimeUpdate);
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
