import { Flex, Text } from "@chakra-ui/react";

interface NavigationItemsProps {
  URLs: {
    url_label: string;
    url_location: string;
  }[];
}

const NavigationItems: React.FC<NavigationItemsProps> = ({ URLs }) => {
  return (
    <Flex
      gap={8}
      px={5}
      py={2}
      border="1px solid"
      borderColor="gray.700"
      color="white"
      borderRadius={20}
    >
      {URLs.map((navItem, index) => {
        return (
          <Flex key={index} gap={8} align="center" bg="none">
            <Text
              bgGradient="linear(to-b, #B6C2F1 0%, #EBEFFF 100%)"
              bgClip="text"
              fontSize="small"
              fontWeight={600}
              as="a"
              href={navItem.url_location}
            >
              {navItem.url_label}
            </Text>
            {index < URLs.length - 1 ? (
              <Text color="rgba(161, 174, 229, 0.65)" bg="none">
                &#x2022;
              </Text>
            ) : (
              <></>
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default NavigationItems;
