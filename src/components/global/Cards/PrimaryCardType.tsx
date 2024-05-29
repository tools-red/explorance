import { IconType } from "react-icons/lib";

interface PrimaryCardTypeInterface {
  CardIcon: IconType;
  CardText: string;
  CardImageURL: string;
}

const PrimaryCardType: React.FC<PrimaryCardTypeInterface> = ({
  CardIcon,
  CardImageURL,
  CardText,
}) => {
  return;
};

export default PrimaryCardType;
