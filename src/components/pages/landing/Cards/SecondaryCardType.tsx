import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface SecondaryCardTypeProps {
  CardIcon: IconType;
  CardTitle: string;
  CardText: string;
}

const SecondaryCardType: React.FC<SecondaryCardTypeProps> = ({
  CardIcon,
  CardText,
  CardTitle,
}) => {
  return (
    <Flex
      borderRadius={20}
      p={5}
      fontFamily="SFPro"
      gap={5}
      maxW={390}
      bgGradient="linear(to-b, #060818 0%, #0E101F 100%)"
      bg="rgba(255, 255, 255, 0.05)" // Semi-transparent background
      backdropFilter="blur(20px)" // Blur effect
      flexDir="column"
    >
      <Icon
        p={2}
        borderRadius="50%"
        border="2px solid"
        borderColor="rgba(161, 174, 229, 0.3)"
        boxSize={12}
        color="white"
        as={CardIcon}
      />
      <Flex gap={3} flexDir="column">
        <Text fontSize="xl" color="white">
          {CardTitle}
        </Text>
        <Text fontSize="15px" color="#A1AEE5">
          {CardText}
        </Text>
      </Flex>
    </Flex>
  );
};

export default SecondaryCardType;
