import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { type FetchPurchasePromiseType } from "~/types/promises";

import Image from "next/legacy/image";

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
    <Modal size="2xl" isOpen={modalState} onClose={handleModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`Order Details : ${orderInView?.purchase_id}`}</ModalHeader>
        <ModalCloseButton />
        {orderInView ? (
          <ModalBody>
            <Flex gap={5} flexDir="column">
              <Flex gap={2} flexDir="column">
                <Text fontWeight={600} fontSize="xl">
                  {orderInView.name}
                </Text>
                <Flex fontSize="14px" gap={1} flexDir="column">
                  <Text color="gray.500">{`${orderInView.mobile}, ${orderInView.email}`}</Text>
                  <Text color="gray.500">{orderInView.address}</Text>
                  <Text color="gray.500">{`${orderInView.city}, ${orderInView.state}`}</Text>
                  <Text color="gray.500">{orderInView.postalcode}</Text>
                </Flex>
              </Flex>

              <Flex flexDir="column">
                <Text fontSize="large" fontWeight={600}>
                  Purchase Items
                </Text>
                <Flex
                  height={200}
                  overflowY="auto"
                  my={5}
                  gap={5}
                  flexDir="column"
                >
                  {orderInView.purchase_details.items.map((item, index) => {
                    return (
                      <Flex key={index}>
                        <Flex gap={3}>
                          <Image
                            src={item.productDetails.ImageURL}
                            alt={`Image-Product-${item.productDetails.productId}`}
                            width={90}
                            height={130}
                          />
                          <Flex flexDir="column">
                            <Text>{item.productDetails.productTitle}</Text>
                            <Text>x {item.cartItemAmount}</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    );
                  })}
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        ) : (
          <ModalBody>Data not present</ModalBody>
        )}

        {orderInView ? (
          <ModalFooter>
            <Button
              transition="all 0.3s"
              _hover={{ bg: "#F8E5DB" }}
              bg="#FAF1EC"
              color="#CC723F"
              mr={3}
              onClick={handleModal}
            >
              Cancel
            </Button>
            <Button
              transition="all 0.3s"
              _hover={{ bg: "#B45722" }}
              bg="#CC723F"
              color="white"
            >
              Dispatch Delivery
            </Button>
          </ModalFooter>
        ) : (
          <></>
        )}
      </ModalContent>
    </Modal>
  );
};

export default OrderDetailsModal;
