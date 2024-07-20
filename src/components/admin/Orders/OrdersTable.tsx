import {
  Checkbox,
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
import { type FetchPurchasePromiseType } from "~/types/promises";
import { convertDATE } from "~/utils/helpers";

interface OrdersTableProps {
  orders: FetchPurchasePromiseType[] | undefined;
  OrderTableHeader: string[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({
  orders,
  OrderTableHeader,
}) => {
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
            No orders due
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
                    <Flex justify="center">
                      <Checkbox />
                    </Flex>
                  </Td>
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

export default OrdersTable;
