import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import OrderSummary from "./OrderSummary";
import { type Cart } from "~/types/purchase";
import CheckoutForm from "./CheckoutForm";
import OrderSummaryMobile from "./OrderSummaryMobile";
import useWindowDimensions from "~/hooks/useWindowDemensions";

interface CheckoutModalProps {
  cartItems: Cart;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ cartItems }) => {
  const {
    isOpen: isOrderSummaryMobileOpen,
    onClose: onOrderSummaryMobileClose,
    onOpen: onOrderSummaryMobileOpen,
  } = useDisclosure();
  const { width } = useWindowDimensions();

  return (
    <Flex gap={5} flexDir={["column", "column", "row"]} h={500}>
      <CheckoutForm onOrderSummaryOpen={onOrderSummaryMobileOpen} />
      {width && width < 900 ? (
        <OrderSummaryMobile
          cartItems={cartItems}
          handleModal={onOrderSummaryMobileClose}
          modalState={isOrderSummaryMobileOpen}
        />
      ) : (
        <OrderSummary cartItems={cartItems} />
      )}
    </Flex>
  );
};

export default CheckoutModal;
