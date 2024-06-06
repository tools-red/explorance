import { Flex, Text, Icon, IconButton } from "@chakra-ui/react";

import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { IconType } from "react-icons/lib";

const FooterSection = () => {
  const socialIcons: IconType[] = [
    RiTwitterXFill,
    FaFacebook,
    TiSocialLinkedin,
    AiFillInstagram,
  ]; // Array of icons
  return (
    <Flex mt={100} w="full" flexDir="column">
      <Flex gap={5} pb={5} w="full" flexDir="column">
        <Text color="white" fontSize="xl">
          Disclaimer:
        </Text>
        <Text color="rgba(160, 174, 229, 0.7)">Explorance © 2023</Text>
        <Text color="rgba(161, 174, 229, 0.4)" fontSize="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. <br /> <br />
          Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
          sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
          vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
          ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
          nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
          lacus at sodales sodales. Quisque sagittis orci ut diam condimentu
        </Text>
      </Flex>
      <Flex
        mt={10}
        justify="space-between"
        borderTop="1px solid"
        borderColor="rgba(161, 174, 229, 0.2)"
        py={5}
      >
        <Flex fontSize="small" color="rgba(161, 174, 229, 0.7)" gap={10}>
          <Text>Meet the Team</Text>
          <Text>Explorance</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FooterSection;
