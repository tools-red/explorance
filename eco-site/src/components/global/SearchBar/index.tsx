import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <InputGroup
      w={350}
      border="none"
      borderRadius={20}
      bg="rgba(204, 114, 63, 0.1)"
    >
      <InputLeftElement>
        <Icon color="#CC723F" ml={1} boxSize={5} as={IoSearchOutline} />
      </InputLeftElement>
      <Input
        border="none"
        w={"full"}
        borderRadius={20}
        color={"#CC723F"}
        fontWeight={500}
        _placeholder={{
          fontWeight: 500,
          fontSize: "14.5px",
          color: "#CC723F",
        }}
        placeholder="Search for Roasted Coffee"
      />
    </InputGroup>
  );
};

export default SearchBar;
