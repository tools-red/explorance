import { Accordion } from "@chakra-ui/react";
import FaqAccordianItem from "./FaqAccordianItem";

interface DropDownHolderProps {
  allowMultiple: boolean;
  accordianContentArray?: { Question: string; Answer: string }[];
  Question?: string;
  Answer?: string;
}

const DropDownHolder: React.FC<DropDownHolderProps> = ({
  allowMultiple,
  accordianContentArray,
  Question,
  Answer,
}) => {
  return (
    <>
      {allowMultiple ? (
        <Accordion allowMultiple allowToggle>
          {accordianContentArray?.map((content, i) => {
            return (
              <FaqAccordianItem
                key={i}
                Question={content.Question}
                Answer={content.Answer}
              />
            );
          })}
        </Accordion>
      ) : (
        <Accordion>
          <FaqAccordianItem Question={Question ?? ""} Answer={Answer ?? ""} />
        </Accordion>
      )}
    </>
  );
};

export default DropDownHolder;
