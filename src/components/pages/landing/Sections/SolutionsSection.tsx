import { Box, Flex, Text } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";

import Image from "next/image";

import CubeImage from "../../../../../public/StaticImages/SolutionsSecImg.png";
import Tag from "~/components/global/Text/Tag";

const SolutionsSection = () => {
  return (
    <Flex mt="-10px" flexDir="column">
      <Box position="relative">
        <Flex
          bg="none"
          align="center"
          flexDirection="column"
          position="absolute"
          left="50%"
          bottom="9%"
          transform={`translate(-${45}%)`}
          gap={3}
          // Apply upper fade gradient here
          backgroundImage="linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #030515 100%)"
          backgroundRepeat="no-repeat"
          backgroundSize="100% 50%" // Adjust height for fade intensity
          backgroundPosition="top"
        >
          <Tag
            customColorHex="#A1AEE5"
            customColor={true}
            tag_label="Problems we solve"
            addOnLogo={true}
            addOnLogoSize={4}
            addOnLogoColor="rgba(161, 174, 229, 0.65)"
            addOnLogoValue={GoArrowUpRight}
          />
          <Text
            bg="none"
            bgGradient="linear(to-b, #B6C2F1 0%, #EBEFFF 100%)"
            bgClip="text"
            fontSize="45px"
            fontFamily="SFPro"
            fontWeight={600}
            textAlign="center"
            lineHeight={"120%"}
          >
            AI Solutions for <br /> Modern Challenges
          </Text>
          <Text
            bg="none"
            textAlign="center"
            fontFamily="SFPro"
            fontSize="medium"
            color="#A0AEE5"
          >
            Explore how our innovative AI solutions address these common
            <br />
            challenges, enhancing your exploration,learning and visual
            experiences
          </Text>
        </Flex>
        <Image alt="Card-Image" src={CubeImage ?? ""} objectFit="cover" />
      </Box>
    </Flex>
  );
};

export default SolutionsSection;
