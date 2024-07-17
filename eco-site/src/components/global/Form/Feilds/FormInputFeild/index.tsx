import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { Field } from "formik";

interface FormInputFeildProps {
  formLable: string;
  placeholder: string;
  name: string;
  type: string;
}

const FormInputFeild: React.FC<FormInputFeildProps> = ({
  formLable,
  name,
  placeholder,
  type,
}) => {
  return (
    <Flex w="full" flexDir="column">
      <FormLabel>{formLable}</FormLabel>
      <Input
        border="1px solid"
        borderColor="rgba(0, 0, 0, 0.2)"
        placeholder={placeholder}
        _placeholder={{ fontWeight: 200 }}
        as={Field}
        name={name}
        type={type}
      />
    </Flex>
  );
};

export default FormInputFeild;
