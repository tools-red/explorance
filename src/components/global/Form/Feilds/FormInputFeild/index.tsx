import { Flex, FormLabel } from "@chakra-ui/react";

interface FormInputFeildLayoutProps {
  formLable: string;
  children: React.ReactNode;
}

const FormInputFeildLayout: React.FC<FormInputFeildLayoutProps> = ({
  formLable,
  children,
}) => (
  <Flex w="full" flexDir="column">
    <FormLabel>{formLable}</FormLabel>
    {children}
  </Flex>
);

export default FormInputFeildLayout;
