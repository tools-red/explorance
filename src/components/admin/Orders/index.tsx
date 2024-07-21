import { Flex, Input, useDisclosure } from "@chakra-ui/react";
import { type RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import { type FetchPurchasePromiseType } from "~/types/promises";
import { useEffect, useMemo, useState } from "react";
import useOrder from "~/hooks/useOrder";

import useRealTimePurchases from "~/hooks/useRealTimePurchases";
import OrdersTable from "./OrdersTable";
import OrderDetailsModal from "./OrderDetailsModal";

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
  const {
    onOpen: onOpenOrderDetailsModal,
    onClose: onCloseOrderDetailsModal,
    isOpen: isOpenOrderDetailsModal,
  } = useDisclosure();
  const { handleFetchOrders, handleDispatchOrder } = useOrder();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [orderInView, setOrderInView] = useState<
    FetchPurchasePromiseType | undefined
  >(undefined);
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

  const filteredOrdersData = useMemo(() => {
    if (!searchTerm || searchTerm.trim() === "") {
      return orders;
    }

    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return orders?.filter((order) => {
      const customerName = `${order.name}`;
      const orderID = `${order.purchase_id}`;
      return (
        customerName.toLowerCase().includes(lowercaseSearchTerm) ||
        orderID.toLowerCase().includes(lowercaseSearchTerm)
      );
    });
  }, [searchTerm, orders]);

  return (
    <Flex gap={5} flexDir="column">
      <OrderDetailsModal
        handleDispatchOrder={handleDispatchOrder}
        handleModal={onCloseOrderDetailsModal}
        modalState={isOpenOrderDetailsModal}
        orderInView={orderInView}
      />
      <Input
        onChange={(e) => setSearchTerm(e.target.value)}
        w={400}
        placeholder="Search for Orders"
      />
      <OrdersTable
        setOrderInView={setOrderInView}
        onOpenOrderDetailsModal={onOpenOrderDetailsModal}
        OrderTableHeader={OrderTableHeader}
        orders={filteredOrdersData}
      />
    </Flex>
  );
};

export default Orders;
