import { Box, Flex, Spinner } from "@chakra-ui/react";

interface EventTagsDisplayProps {
  uniqueTags: string[];
}
const EventTagsDisplay: React.FC<EventTagsDisplayProps> = ({ uniqueTags }) => {
  return (
    <Flex w="full" color="white">
      {uniqueTags && uniqueTags.length > 0 ? (
        <Flex gap={3} w="full">
          {uniqueTags.slice(0, 6).map((tag) => {
            return (
              <Box
                px={3}
                py={2}
                borderRadius={20}
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.1)"
                zIndex={2}
                fontSize="small"
                bg="#1B1B1B"
                color="white"
              >
                {tag}
              </Box>
            );
          })}
        </Flex>
      ) : (
        <Spinner color="purple" />
      )}
    </Flex>
  );
};

export default EventTagsDisplay;
