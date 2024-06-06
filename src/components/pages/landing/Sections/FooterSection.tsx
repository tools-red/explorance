import { Flex, Text } from "@chakra-ui/react";

const FooterSection = () => {
  return (
    <Flex w="full" flexDir="column">
      <Flex pb={5} w="full" flexDir="column">
        <Text>Disclaimer:</Text>
        <Text>Explorance © 2023</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
          sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
          vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
          ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
          nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
          lacus at sodales sodales. Quisque sagittis orci ut diam condimentu
        </Text>
      </Flex>
      <Flex
        justify="space-between"
        borderTop="1px solid"
        borderColor="red"
        py={5}
      >
        <Flex></Flex>
        <Flex>
          <Text>Meet the Team</Text>
          <Text>Explorance</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FooterSection;
