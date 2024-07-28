import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
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
          <ModalBody>
            <OrderSummary cartItems={cartItems} />
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default OrderSummaryMobile;
