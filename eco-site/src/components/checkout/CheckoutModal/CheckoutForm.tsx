import { Box, Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import FormInputFeild from "~/components/global/Form/Feilds/FormInputFeild";
import { InitalCheckoutFormValues } from "~/lib/formik/initialValues";
import { CheckoutFormSchema } from "~/lib/formik/schemas";

const CheckoutForm = () => {
  return (
    <Box w={500}>
      <Formik
        validationSchema={CheckoutFormSchema}
        initialValues={InitalCheckoutFormValues}
        onSubmit={(values) => console.log({ values })}
      >
        <Form>
          <Flex flexDir="column">
            <Flex gap={5} flexDir="column">
              <Flex gap={3}>
                <FormInputFeild
                  formLable="First name"
                  name="firstname"
                  placeholder="Jhon"
                  type="text"
                />
                <FormInputFeild
                  formLable="Last name"
                  name="lastname"
                  placeholder="Smith"
                  type="text"
                />
              </Flex>
              <FormInputFeild
                formLable="Address"
                name="address"
                placeholder="#001, Apt 02, Block A"
                type="text"
              />
              <Flex gap={3}>
                <FormInputFeild
                  formLable="City"
                  name="city"
                  placeholder="Mumbai"
                  type="text"
                />
                <FormInputFeild
                  formLable="State"
                  name="state"
                  placeholder="Maharashtra"
                  type="text"
                />
                <FormInputFeild
                  formLable="Pincode"
                  name="pincode"
                  placeholder="500032"
                  type="text"
                />
              </Flex>
              <FormInputFeild
                formLable="Mobile"
                name="mobile"
                placeholder="+91"
                type="text"
              />
              <FormInputFeild
                formLable="Email"
                name="email"
                placeholder="JhonSmith@gmail.com"
                type="text"
              />
            </Flex>
            <Button mt={5}>Proceed</Button>
          </Flex>
        </Form>
      </Formik>
    </Box>
  );
};

export default CheckoutForm;
