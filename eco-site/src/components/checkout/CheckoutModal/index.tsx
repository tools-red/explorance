import { Flex, Text } from "@chakra-ui/react";
import OrderSummary from "./OrderSummary";
import { Cart } from "~/types/purchase";

interface CheckoutModalProps {
  cartItems: Cart;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ cartItems }) => {
  return (
    <Flex flexDir="row" h={500}>
      <Text bg="blue">Hi</Text>
      <OrderSummary cartItems={cartItems} />
    </Flex>
  );
};

export default CheckoutModal;
