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
  useToast,
} from "@chakra-ui/react";
import { STATUS, type FetchPurchasePromiseType } from "~/types/promises";

import Image from "next/legacy/image";
import { Dispatch, SetStateAction, useState } from "react";

interface OrderDetailsModalProps {
  orderInView: FetchPurchasePromiseType | undefined;
  modalState: boolean;
  handleModal: () => void;
  handleDispatchOrder: (
    customer_email: string,
    customer_name: string,
    id: string,
    purchase_Id: string,
    setError: Dispatch<SetStateAction<boolean>>,
    setErrorMessage: Dispatch<SetStateAction<string>>
  ) => Promise<boolean>;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({
  handleModal,
  handleDispatchOrder,
  modalState,
  orderInView,
}) => {
  const toast = useToast();
  const [error, setError] = useState<boolean>(false);
  const [isDispatching, setIsDispatching] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleDispatchProcedure = async (
    customer_email: string,
    customer_name: string,
    id: string,
    purchase_Id: string
  ) => {
    setIsDispatching(true);
    const dispatch_status = await handleDispatchOrder(
      customer_email,
      customer_name,
      id,
      purchase_Id,
      setError,
      setErrorMessage
    );

    if (dispatch_status) {
      setError(false);
      setIsDispatching(false);
      handleModal();
      toast({
        title: "Order Dispatched",
        description: `Order #${orderInView?.purchase_id} has been dispatched`,
        isClosable: true,
        duration: 2000,
      });
    } else {
      setIsDispatching(false);
      setError(true);
      setErrorMessage("Couldn't Dispatch order, Something went wrong");
    }
  };

  return (
    <Modal size="2xl" isOpen={modalState} onClose={handleModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`Order Details : ${orderInView?.purchase_id}`}</ModalHeader>
        <ModalCloseButton />
        {orderInView ? (
          <ModalBody>
            <Flex gap={3} flexDir="column">
              <Flex gap={2} flexDir="column">
                <Flex align="center" gap={3}>
                  <Text fontWeight={600} fontSize="xl">
                    {orderInView.name}
                  </Text>
                  <Text
                    bg={
                      orderInView.status === STATUS.DISPATCHED
                        ? "green.100"
                        : "#E4E7EC"
                    }
                    px={2}
                    borderRadius={20}
                    color={
                      orderInView.status === STATUS.DISPATCHED
                        ? "green.500"
                        : "#667085"
                    }
                    fontWeight={500}
                    fontSize="small"
                  >
                    {orderInView.status === STATUS.DISPATCHED
                      ? "Dispatched"
                      : "Pending"}
                  </Text>
                </Flex>
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
            <Flex flexDir="column">
              <Flex>
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
                  isDisabled={
                    orderInView.status === STATUS.DISPATCHED ? true : false
                  }
                  isLoading={isDispatching}
                  onClick={() => {
                    void handleDispatchProcedure(
                      orderInView.email,
                      orderInView.name,
                      orderInView.id,
                      orderInView.purchase_id
                    );
                  }}
                  transition="all 0.3s"
                  _hover={{ bg: "#B45722" }}
                  bg="#CC723F"
                  color="white"
                >
                  Dispatch Delivery
                </Button>
              </Flex>
              {error ? (
                <Text mt={1} color="red.500" fontWeight={500}>
                  Error here
                </Text>
              ) : (
                <></>
              )}
            </Flex>
          </ModalFooter>
        ) : (
          <></>
        )}
      </ModalContent>
    </Modal>
  );
};

export default OrderDetailsModal;
