import { Box, Flex, Text } from "@chakra-ui/react";

import Image, { type StaticImageData } from "next/image";
import BrandLogo from "../../../public/Indibliss_Logo.svg";
import Orders from "~/components/admin/Orders";

const AdminPage = () => {
  return (
    <Box py={10} maxW={1150} marginX={"auto"}>
      <Flex gap={10} flexDir="column">
        <Image
          src={BrandLogo as StaticImageData}
          width={150}
          height={150}
          alt="Brand Logo"
        />
        <Flex flexDir="column">
          <Text className="marcellus-regular" fontSize="3xl">
            Order Details
          </Text>
          <Text color="#797979">View your orders and manage transactions</Text>
        </Flex>
        <Orders />
      </Flex>
    </Box>
  );
};

export default AdminPage;
