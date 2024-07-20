import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
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
import { convertDATE } from "~/utils/helpers";

const OrderTableHeader: string[] = [
  "Purchase ID",
  "Status",
  "Order date",
  "Order Amount",
  "Address",
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
    console.log(payload);
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
      <Flex align="center">
        <Text px={5} fontWeight={600} fontSize="large">
          All Orders
        </Text>
        {orders === undefined || orders.length === 0 ? (
          <Text
            px={2}
            py={1}
            borderRadius={20}
            bg="orange.100"
            fontSize="14px"
            fontWeight={500}
            color="orange.500"
          >
            You have no orders due
          </Text>
        ) : (
          <></>
        )}
      </Flex>
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
              return (
                <Tr fontSize="small" key={index}>
                  <Td>
                    <Text>{order.purchase_id}</Text>
                  </Td>
                  <Td>
                    <Text>{order.status}</Text>
                  </Td>
                  <Td>
                    <Text>{convertDATE(order.created_at)}</Text>
                  </Td>
                  <Td>
                    <Text>${order.purchase_details.totalPrice}</Text>
                  </Td>
                  <Td>
                    <Text>
                      {`${order.address} ${order.city} ${order.state} ${order.postalcode}`}
                    </Text>
                  </Td>
                  <Td>
                    <Text>{`${order.name}`}</Text>
                  </Td>
                  <Td>
                    <Text>{`${order.mobile}`}</Text>
                  </Td>
                  <Td>
                    <Text>{`${order.email}`}</Text>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Orders;
