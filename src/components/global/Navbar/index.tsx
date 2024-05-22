import { Flex, Text } from "@chakra-ui/react";

interface NavbarProps {
  URLs: { url_label: string; url_location: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ URLs }) => {
  return (
    <Flex>
      {URLs.map((navItem) => {
        return (
          <Text as="a" href={navItem.url_location}>
            {navItem.url_label}
          </Text>
        );
      })}
    </Flex>
  );
};

export default Navbar;
