import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowUp } from "react-icons/io";

const FooterConstants: {
  title: string;
  items: { itemName: string; href: string }[];
}[] = [
  {
    title: "Indibliss",
    items: [
      { itemName: "About", href: "/" },
      { itemName: "Certification", href: "/" },
      { itemName: "FAQ", href: "/" },
      { itemName: "Recipes", href: "/" },
      { itemName: "Contact Us", href: "/" },
    ],
  },
  {
    title: "Categories",
    items: [
      { itemName: "Coconut Oil", href: "/" },
      { itemName: "Honey", href: "/" },
      { itemName: "Tea", href: "/" },
      { itemName: "Jaggery Powder", href: "/" },
      { itemName: "Special Filter Coffee", href: "/" },
    ],
  },
  {
    title: "Others",
    items: [
      { itemName: "Privacy Policy", href: "/privacy-policy" },
      { itemName: "Terms and Conditions", href: "/terms-and-conditions" },
    ],
  },
];

import Image, { type StaticImageData } from "next/image";
import BrandLogo from "../../../../public/Indibliss_Logo.svg";
import FooterImage from "../../../../public/FooterImage.png";
import FooterImageAlt from "../../../../public/FooterImageAlt.png";
import { useRouter } from "next/router";

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <Box bg={pathname === "/products/[slug]" ? "#FAF2EF" : "white"}>
      <Flex pt={20} pb={10} w={1150} marginX="auto" flexDir="column">
        <Flex justify="space-between" flexDir="row">
          <Flex gap={3} flexDir="column">
            <Image
              src={BrandLogo as StaticImageData}
              alt="Brand Image Logo"
              width={180}
              height={180}
            />
            <Text fontWeight={500} color="#575757" w={280}>
              Follow us on social media and keep up to date with our latest
              posts
            </Text>
            <Flex gap={5}>
              <Icon boxSize={5} as={FaInstagram} />
              <Icon boxSize={5} as={FaLinkedin} />
              <Icon boxSize={5} as={FaYoutube} />
            </Flex>
            {pathname === "/products/[slug]" ? (
              <Image
                src={FooterImageAlt}
                width={350}
                height={350}
                alt="Footer Image here"
              />
            ) : (
              <Image
                src={FooterImage}
                width={350}
                height={350}
                alt="Footer Image here"
              />
            )}
          </Flex>

          <Flex gap="70px" flexDir="row">
            {FooterConstants.map((constant, index) => {
              return (
                <Flex gap={3} flexDir="column" key={index}>
                  <Text fontSize="xl" className="marcellus-regular">
                    {constant.title}
                  </Text>
                  <Flex gap={3} flexDir="column">
                    {constant.items.map((item, index) => {
                      return (
                        <Flex align="center" gap={2} key={index}>
                          <Icon boxSize={3} color="#CC723F" as={GoDotFill} />
                          <Text
                            fontWeight={500}
                            color="#575757"
                            as="a"
                            href={item.href}
                          >
                            {item.itemName}
                          </Text>
                        </Flex>
                      );
                    })}
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
        <Flex justify="flex-end" w="full">
          <Flex gap={20} align="flex-end">
            <Text color="#575757">
              © 2024 Organic Delights. All rights reserved.
            </Text>
            <Button _hover={{ bg: "#B45722" }} borderRadius="none" bg="#CC723F">
              <Icon color="white" boxSize={5} as={IoIosArrowUp} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
