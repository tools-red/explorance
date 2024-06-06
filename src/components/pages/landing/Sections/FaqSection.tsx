import { Flex } from "@chakra-ui/react";
import FaqDropDown from "../Interactive/FaqDropDown";
import { FAQAccordingContent } from "~/constants";

const FaqSection = () => {
  return (
    <Flex fontFamily="SFPro" mb={30} mt={200} justify="space-between" w="full">
      <Flex bg="yellow" flexDir="column">
        Hi
      </Flex>
      <Flex color="white" flexDir="column">
        <FaqDropDown
          allowMultiple={true}
          accordianContentArray={FAQAccordingContent}
        />
      </Flex>
    </Flex>
  );
};

export default FaqSection;
