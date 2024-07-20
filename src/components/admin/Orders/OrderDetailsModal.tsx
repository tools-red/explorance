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

interface OrderDetailsModalProps {
  modalState: boolean;
  handleModal: () => void;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({
  handleModal,
  modalState,
}) => {
  return (
    <Modal isOpen={modalState} onClose={handleModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Hi</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleModal}>
            Cancel
          </Button>
          <Button variant="ghost">Dispatch Delivery</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderDetailsModal;
