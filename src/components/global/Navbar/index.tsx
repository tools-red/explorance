import { Flex, Text } from "@chakra-ui/react";
import NavigationItems from "./NavigationItems";

interface NavbarProps {
  URLs: { url_label: string; url_location: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ URLs }) => {
  return (
    <Flex align="center" mt={5} justify="space-between">
      <Text color="white">Explorance</Text>
      <NavigationItems URLs={URLs} />
      <Text>Get Started</Text>
    </Flex>
  );
};

export default Navbar;
