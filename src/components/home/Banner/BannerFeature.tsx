import { Flex, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface BannerFeatureProps {
  imageData: StaticImageData;
  featureTitle: string;
  featureDescription: string;
}

const BannerFeature: React.FC<BannerFeatureProps> = ({
  imageData,
  featureDescription,
  featureTitle,
}) => {
  return (
    <Flex gap={2} flexDir="column">
      <Image src={imageData} alt="Banner-Image" height={70} width={70} />
      <Text fontSize="xl" className="marcellus-regular" color="#CC723F">
        {featureTitle}
      </Text>
      <Text color="#797979" w={240} fontSize="small">
        {featureDescription}
      </Text>
    </Flex>
  );
};

export default BannerFeature;
