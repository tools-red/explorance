import { Flex } from "@chakra-ui/react";
import OrderSummary from "./OrderSummary";
import { type Cart } from "~/types/purchase";
import CheckoutForm from "./CheckoutForm";

interface CheckoutModalProps {
  cartItems: Cart;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ cartItems }) => {
  return (
    <Flex gap={5} flexDir="row" h={500}>
      <CheckoutForm />
      <OrderSummary cartItems={cartItems} />
    </Flex>
  );
};

export default CheckoutModal;
