import { Flex, Text } from "@chakra-ui/react";
import OrderSummary from "./OrderSummary";
import { Cart } from "~/types/purchase";

interface CheckoutModalProps {
  cartItems: Cart;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ cartItems }) => {
  return (
    <Flex flexDir="row" h={500}>
      <Flex w={450} flexDir="column"></Flex>
      <OrderSummary cartItems={cartItems} />
    </Flex>
  );
};

export default CheckoutModal;
