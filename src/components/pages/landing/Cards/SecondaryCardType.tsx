import { Flex, Icon, Text } from "@chakra-ui/react";
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
    <Flex maxW={390} bg="green" flexDir="column">
      <Icon as={CardIcon} />
      <Flex flexDir="column">
        <Text>{CardTitle}</Text>
        <Text>{CardText}</Text>
      </Flex>
    </Flex>
  );
};

export default SecondaryCardType;
