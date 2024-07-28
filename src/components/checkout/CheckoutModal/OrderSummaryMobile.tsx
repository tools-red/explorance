import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import OrderSummary from "./OrderSummary";
import { Cart } from "~/types/purchase";

interface OrderSummaryMobileProps {
  cartItems: Cart;
  modalState: boolean;
  handleModal: () => void;
}

const OrderSummaryMobile: React.FC<OrderSummaryMobileProps> = ({
  cartItems,
  handleModal,
  modalState,
}) => {
  return (
    <Modal isOpen={modalState} onClose={handleModal}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>
            <Text fontSize="2xl" className="marcellus-regular">
              Order Summary
            </Text>
          </ModalHeader>
          <ModalBody>
            <OrderSummary cartItems={cartItems} />
          </ModalBody>
          <ModalFooter>
            <Flex align="center" gap={3}>
              <Button
                onClick={() => (window.location.href = "/")}
                bg="black"
                color="white"
                _hover={{ bg: "gray.800" }}
              >
                Cancel Purchase
              </Button>
              <Button
                onClick={handleModal}
                color="white"
                bg="#CC723F"
                _hover={{ bg: "#B45722" }}
              >
                Back to Checkout
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default OrderSummaryMobile;
