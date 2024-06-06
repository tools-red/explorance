import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";

interface FaqAccordianItemProps {
  Question: string;
  Answer: string;
}

const FaqAccordianItem: React.FC<FaqAccordianItemProps> = ({
  Question,
  Answer,
}) => {
  return (
    <AccordionItem>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          <Text>{Question}</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>{Answer}</AccordionPanel>
    </AccordionItem>
  );
};

export default FaqAccordianItem;
