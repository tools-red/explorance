import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { InitalCheckoutFormValues } from "~/lib/formik/initialValues";
import { CheckoutFormSchema } from "~/lib/formik/schemas";
import { CheckoutFormType } from "~/types/form";

import FormInputFeild from "~/components/global/Form/Feilds/FormInputFeild";
import useOrder from "~/hooks/useOrder";
import { useState } from "react";

const CheckoutForm = () => {
  const toast = useToast();
  const { createOrder } = useOrder();

  const [error, setError] = useState<boolean>(false);
  const [submitting, setIsSubmitting] = useState<boolean>(false);
  const [orderState, setOrderState] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [CTAMessage, setCTAMessage] = useState<string>("Checkout");

  const handleSubmit = async (values: CheckoutFormType) => {
    try {
      setIsSubmitting(true);
      const generate_order_response = await createOrder(
        values,
        setError,
        setErrorMessage
      );
      if (generate_order_response && generate_order_response.purchase_order) {
        setOrderState(generate_order_response.order_state);
        setCTAMessage("Order Confirmed");
        window.location.href = "/";
      } else {
        setError(true);
        setErrorMessage("Couldn't generate purchase request");
      }
    } catch (err) {
      console.log(err);
      setError(true);
      setErrorMessage("Something went wrong processing order");
      throw new Error("Something went wrong processing order");
    }
  };

  return (
    <Box w={500}>
      <Formik
        validationSchema={CheckoutFormSchema}
        initialValues={InitalCheckoutFormValues}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Flex flexDir="column">
              <Flex gap={5} flexDir="column">
                <Flex gap={3}>
                  <FormInputFeild formLable="First name">
                    <Input
                      border="1px solid"
                      borderColor="rgba(0, 0, 0, 0.2)"
                      as={Field}
                      placeholder="Jhon"
                      _placeholder={{ fontWeight: 200 }}
                      name="firstname"
                      type="text"
                      isInvalid={touched.firstname && !!errors.firstname}
                    />
                    {touched.firstname && errors.firstname && (
                      <FormLabel color="red.500">{errors.firstname}</FormLabel>
                    )}
                  </FormInputFeild>
                  <FormInputFeild formLable="Last name">
                    <Input
                      border="1px solid"
                      borderColor="rgba(0, 0, 0, 0.2)"
                      as={Field}
                      placeholder="Smith"
                      _placeholder={{ fontWeight: 200 }}
                      name="lastname"
                      type="text"
                      isInvalid={touched.lastname && !!errors.lastname}
                    />
                    {touched.lastname && errors.lastname && (
                      <FormLabel color="red.500">{errors.lastname}</FormLabel>
                    )}
                  </FormInputFeild>
                </Flex>
                <FormInputFeild formLable="Address">
                  <Input
                    border="1px solid"
                    borderColor="rgba(0, 0, 0, 0.2)"
                    as={Field}
                    placeholder="001, Apt no. 01, Block A"
                    _placeholder={{ fontWeight: 200 }}
                    name="address"
                    type="text"
                    isInvalid={touched.address && !!errors.address}
                  />
                  {touched.address && errors.address && (
                    <FormLabel color="red.500">{errors.address}</FormLabel>
                  )}
                </FormInputFeild>
                <Flex gap={3}>
                  <FormInputFeild formLable="Town/City">
                    <Input
                      border="1px solid"
                      borderColor="rgba(0, 0, 0, 0.2)"
                      as={Field}
                      placeholder="Mumbai"
                      _placeholder={{ fontWeight: 200 }}
                      name="city"
                      type="text"
                      isInvalid={touched.city && !!errors.city}
                    />
                    {touched.city && errors.city && (
                      <FormLabel color="red.500">{errors.city}</FormLabel>
                    )}
                  </FormInputFeild>
                  <FormInputFeild formLable="State">
                    <Input
                      border="1px solid"
                      borderColor="rgba(0, 0, 0, 0.2)"
                      as={Field}
                      placeholder="Maharashtra"
                      _placeholder={{ fontWeight: 200 }}
                      name="state"
                      type="text"
                      isInvalid={touched.state && !!errors.state}
                    />
                    {touched.state && errors.state && (
                      <FormLabel color="red.500">{errors.state}</FormLabel>
                    )}
                  </FormInputFeild>
                  <FormInputFeild formLable="Postal Code">
                    <Input
                      border="1px solid"
                      borderColor="rgba(0, 0, 0, 0.2)"
                      as={Field}
                      placeholder="500023"
                      _placeholder={{ fontWeight: 200 }}
                      name="postalcode"
                      type="text"
                      isInvalid={touched.postalcode && !!errors.postalcode}
                    />
                    {touched.postalcode && errors.postalcode && (
                      <FormLabel color="red.500">{errors.postalcode}</FormLabel>
                    )}
                  </FormInputFeild>
                </Flex>
                <FormInputFeild formLable="Mobile">
                  <Input
                    border="1px solid"
                    borderColor="rgba(0, 0, 0, 0.2)"
                    as={Field}
                    placeholder="+91"
                    _placeholder={{ fontWeight: 200 }}
                    name="mobile"
                    type="text"
                    isInvalid={touched.mobile && !!errors.mobile}
                  />
                  {touched.mobile && errors.mobile && (
                    <FormLabel color="red.500">{errors.mobile}</FormLabel>
                  )}
                </FormInputFeild>
                <FormInputFeild formLable="Email">
                  <Input
                    border="1px solid"
                    borderColor="rgba(0, 0, 0, 0.2)"
                    as={Field}
                    placeholder="JhonSmith@gmail.com"
                    _placeholder={{ fontWeight: 200 }}
                    name="email"
                    type="text"
                    isInvalid={touched.email && !!errors.email}
                  />
                  {touched.email && errors.email && (
                    <FormLabel color="red.500">{errors.email}</FormLabel>
                  )}
                </FormInputFeild>
              </Flex>
              <Button
                isLoading={submitting}
                type="submit"
                bg={orderState ? "green.500" : "#222121"}
                _hover={{ bg: "gray.700" }}
                color="white"
                mt={5}
              >
                {CTAMessage}
              </Button>
              {error ? (
                <Text
                  mt={1}
                  color="red.500"
                  fontWeight={500}
                  textAlign="center"
                >
                  {errorMessage}
                </Text>
              ) : (
                <></>
              )}
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CheckoutForm;
