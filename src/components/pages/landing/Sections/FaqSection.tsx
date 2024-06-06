import { Flex } from "@chakra-ui/react";
import FaqDropDown from "../Interactive/FaqDropDown";
import { FAQAccordingContent } from "~/constants";

const FaqSection = () => {
  return (
    <Flex justify="space-between" w="full" bg="red">
      <Flex bg="yellow" flexDir="column">
        Hi
      </Flex>
      <Flex bg="green" flexDir="column">
        <FaqDropDown
          allowMultiple={true}
          accordianContentArray={FAQAccordingContent}
        />
      </Flex>
    </Flex>
  );
};

export default FaqSection;
