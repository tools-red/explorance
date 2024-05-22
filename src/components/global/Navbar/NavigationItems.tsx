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
          <Flex key={index} gap={6} align="center" bg="none">
            <Text fontSize="small" as="a" href={navItem.url_location}>
              {navItem.url_label}
            </Text>
            {index < URLs.length - 1 ? (
              <Text color="#A0AEE5" bg="none">
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
