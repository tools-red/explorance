import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface PrimaryCardTypeInterface {
  CardIcon: IconType;
  CardTitle: string;
  CardText: string;
  CardImage: string | StaticImport;
  CardWidth: string;
}

const PrimaryCardType: React.FC<PrimaryCardTypeInterface> = ({
  CardIcon,
  CardImage,
  CardTitle,
  CardText,
  CardWidth,
}) => {
  return (
    <Flex
      bg="rgba(24, 27, 49, 0.20)"
      pt={8}
      pb={2}
      border="1px solid"
      borderColor="rgba(161, 174, 229, 0.21)"
      w={CardWidth}
      align="flex-start"
      flexDir="column"
      borderRadius={20}
    >
      <Flex bg="none" px={7} gap={2} flexDir="column">
        <Icon bg="none" boxSize={7} color="white" as={CardIcon} />
        <Text bg="none" color="white" fontSize="2xl">
          {CardTitle}
        </Text>
        <Text bg="none" fontSize="16px" maxW={340} color="#A0AEE5">
          {CardText}
        </Text>
      </Flex>
      <Box
        mt={6}
        mx={2}
        border="8px solid"
        borderColor="rgba(161, 174, 229, 0.12)"
        borderRadius={20}
        overflow={"hidden"}
      >
        <Image alt="Card-Image" src={CardImage ?? ""} objectFit="cover" />
      </Box>
    </Flex>
  );
};

export default PrimaryCardType;
