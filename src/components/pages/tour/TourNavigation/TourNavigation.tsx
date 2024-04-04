import { Text } from "@chakra-ui/react";
import ModalLayout from "~/components/componentLayouts/ModalLayout";

interface TourNavigationProps {
  modalState: boolean;
  handleModal: () => void;
}

const TourNavigation: React.FC<TourNavigationProps> = ({
  handleModal,
  modalState,
}) => {
  return (
    <ModalLayout
      hasTitle={false}
      handleModal={handleModal}
      modalState={modalState}
    >
      <Text>Navigation Modal</Text>
    </ModalLayout>
  );
};

export default TourNavigation;
