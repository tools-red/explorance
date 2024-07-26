import { Flex, Text } from "@chakra-ui/react";

interface BreadCrumbProps {
  crumbArray: { crumbLabel: string; isSelected: boolean }[];
  selectedIndex: number;
}

const BreadCrumbs: React.FC<BreadCrumbProps> = ({ crumbArray }) => {
  return (
    <Flex px={[5, 5, 0]} gap={1.5}>
      {crumbArray.map((crumb, index) => {
        return (
          <Flex
            color={crumb.isSelected ? "black" : "gray.500"}
            gap={1.5}
            key={index}
          >
            <Text>{`${crumb.crumbLabel}`}</Text>
            <Text> {`${index === crumbArray.length - 1 ? "" : "/"}`}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default BreadCrumbs;
