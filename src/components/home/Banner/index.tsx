import { Box, Flex } from "@chakra-ui/react";
import BannerImage1 from "../../../../public/BannerImage1.png";
import BannerImage2 from "../../../../public/BannerImage2.png";
import BannerImage3 from "../../../../public/BannerImage3.png";
import BannerImage4 from "../../../../public/BannerImage4.png";
import { type StaticImageData } from "next/image";
import BannerFeature from "./BannerFeature";

const Banner = () => {
  const BannerFeatureData: {
    BannerImage: StaticImageData;
    BannerFeatureTitle: string;
    BannerFeatureDescription: string;
  }[] = [
    {
      BannerImage: BannerImage1,
      BannerFeatureTitle: "FDA Certified",
      BannerFeatureDescription:
        "Our skin products and toys are FDA-certified for safety and sustainability, ensuring peace of mind for parents.",
    },
    {
      BannerImage: BannerImage2,
      BannerFeatureTitle: "Made in India",
      BannerFeatureDescription:
        "Our products feature handpicked, natural ingredients from India for superior care.",
    },
    {
      BannerImage: BannerImage3,
      BannerFeatureTitle: "Cruelty-Free",
      BannerFeatureDescription:
        "Certified cruelty-free by PETA, our commitment to natural sustainability & ethical practices.",
    },
    {
      BannerImage: BannerImage4,
      BannerFeatureTitle: "Plant Based",
      BannerFeatureDescription:
        "We use plant-based formulations with golden ingredients like veldt grape, saffron, and raktachandan.",
    },
  ];
  return (
    <Box py={20} bg="#FAF0EB">
      <Flex
        flexDir={["column", "column", "row"]}
        gap={[5, 0, 0]}
        align={["center", "center", ""]}
        justify="space-between"
        w="100%"
        maxW={1150}
        marginX="auto"
      >
        {BannerFeatureData.map((feature, index) => {
          return (
            <BannerFeature
              key={index}
              featureDescription={feature.BannerFeatureDescription}
              featureTitle={feature.BannerFeatureTitle}
              imageData={feature.BannerImage}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default Banner;
