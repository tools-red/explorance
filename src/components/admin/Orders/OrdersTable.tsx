import {
  Flex,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { STATUS, type FetchPurchasePromiseType } from "~/types/promises";
import { convertDATE } from "~/utils/helpers";
import { type Dispatch, type SetStateAction } from "react";
import { GoDotFill } from "react-icons/go";

interface OrdersTableProps {
  orders: FetchPurchasePromiseType[] | undefined;
  filterState: string;
  OrderTableHeader: string[];
  onOpenOrderDetailsModal: () => void;
  setOrderInView: Dispatch<
    SetStateAction<FetchPurchasePromiseType | undefined>
  >;
}

const OrdersTable: React.FC<OrdersTableProps> = ({
  orders,
  OrderTableHeader,
  filterState,
  onOpenOrderDetailsModal,
  setOrderInView,
}) => {
  const handleOrderInViewSelect = (order: FetchPurchasePromiseType) => {
    setOrderInView(order);
    onOpenOrderDetailsModal();
  };
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
            {orders
              ?.filter((order) =>
                filterState === "All"
                  ? order.status === STATUS.DISPATCHED || STATUS.PENDING
                  : filterState === "Dispatched"
                    ? order.status === STATUS.DISPATCHED
                    : order.status === STATUS.PENDING
              )
              .map((order, index) => {
                return (
                  <Tr
                    onClick={() => {
                      handleOrderInViewSelect(order);
                    }}
                    _hover={{ bg: "green.200", transition: "all 0.3s" }}
                    cursor="pointer"
                    fontSize="small"
                    key={index}
                  >
                    <Td>
                      <Text>{order.purchase_id}</Text>
                    </Td>
                    <Td>
                      <Flex
                        w="fit-content"
                        gap={1}
                        bg={
                          order.status === STATUS.PENDING
                            ? "#F2F4F7"
                            : "#ECFDF3"
                        }
                        py={0.5}
                        px={2}
                        borderRadius={20}
                        align="center"
                        color={
                          order.status === STATUS.PENDING
                            ? "#344054"
                            : "green.400"
                        }
                      >
                        <Icon boxSize={2.5} as={GoDotFill} />
                        <Text fontWeight={500}>
                          {order.status === STATUS.PENDING
                            ? "Pending"
                            : "Dispatched"}
                        </Text>
                      </Flex>
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
