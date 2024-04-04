import { Box, Text } from "@chakra-ui/react";

interface TourNavigationProps {
  displayNavigationModal: boolean;
}

const TourNavigation: React.FC<TourNavigationProps> = ({
  displayNavigationModal,
}) => {
  return (
    <Box
      display={displayNavigationModal ? "" : "none"}
      position="absolute"
      bg="red"
    >
      <Text>Hi there</Text>
    </Box>
  );
};

export default TourNavigation;
