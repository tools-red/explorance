import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { type RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import { type FetchPurchasePromiseType } from "~/types/promises";
import { useEffect, useState } from "react";
import useOrder from "~/hooks/useOrder";

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
  const { handleFetchOrders } = useOrder();
  const [orders, setOrders] = useState<FetchPurchasePromiseType[] | undefined>(
    []
  );

  useEffect(() => {
    const fetchOrders = async () => {
      const initial_orders = await handleFetchOrders();
      setOrders(initial_orders || []);
    };

    fetchOrders();
  }, []);

  const handleRealTimeUpdate = async (
    payload: RealtimePostgresChangesPayload<{
      [key: string]: any;
    }>
  ) => {
    const updated_orders = await handleFetchOrders();
    setOrders(updated_orders || []);
  };

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
          <Tbody>
            {orders?.map((order, index) => {
              return <Tr key={index}>{order.name}</Tr>;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Orders;
