import { Flex, Text } from "@chakra-ui/react";
import NavigationItems from "./NavigationItems";
import PrimaryLinkCTA from "../Buttons/PrimaryLinkCTA";
import PrimaryGradientText from "../Text/PrimaryGradientText";

interface NavbarProps {
  URLs: { url_label: string; url_location: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ URLs }) => {
  return (
    <Flex align="center" mt={5} justify="space-between">
      <PrimaryGradientText label="Explorance" />
      <NavigationItems URLs={URLs} />
      <PrimaryLinkCTA
        CTA_addOn={false}
        CTA_label="Get Started"
        CTA_location="/tour"
      />
    </Flex>
  );
};

export default Navbar;
