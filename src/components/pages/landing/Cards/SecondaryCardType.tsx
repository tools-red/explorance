import { Flex } from "@chakra-ui/react";
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
  return <Flex flexDir="column"></Flex>;
};

export default SecondaryCardType;
