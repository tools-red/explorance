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
  index?: number;
  lenght?: number;
}

const FaqAccordianItem: React.FC<FaqAccordianItemProps> = ({
  Question,
  Answer,
  index,
  lenght,
}) => {
  return (
    <AccordionItem
      borderColor="rgba(161, 174, 229, 0.4)"
      borderBottom={index && lenght ? (index === lenght - 1 ? "none" : "") : ""}
      borderTop={index === 0 ? "none" : ""}
      py={4}
    >
      <AccordionButton>
        <Box pr={5} as="span" flex="1" textAlign="left">
          <Text color="#D3DCFF">{Question}</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>{Answer}</AccordionPanel>
    </AccordionItem>
  );
};

export default FaqAccordianItem;
