import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { type FetchPurchasePromiseType } from "~/types/promises";

interface OrderDetailsModalProps {
  orderInView: FetchPurchasePromiseType | undefined;
  modalState: boolean;
  handleModal: () => void;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({
  handleModal,
  modalState,
  orderInView,
}) => {
  return (
    <Modal isOpen={modalState} onClose={handleModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`Order Details - ${orderInView?.purchase_id}`}</ModalHeader>
        <ModalCloseButton />
        {orderInView ? (
          <ModalBody>Hi</ModalBody>
        ) : (
          <ModalBody>Data not present</ModalBody>
        )}

        {orderInView ? (
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleModal}>
              Cancel
            </Button>
            <Button variant="ghost">Dispatch Delivery</Button>
          </ModalFooter>
        ) : (
          <></>
        )}
      </ModalContent>
    </Modal>
  );
};

export default OrderDetailsModal;
