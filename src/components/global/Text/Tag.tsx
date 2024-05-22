import { Text } from "@chakra-ui/react";
import React from "react";

interface TagProps {
  tag_label: string;
}

const Tag: React.FC<TagProps> = ({ tag_label }) => {
  return <Text>{tag_label}</Text>;
};

export default Tag;
