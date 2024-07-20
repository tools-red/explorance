import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { type ContentLakeProductsType } from "~/types/contentLake";

interface SearchBarProps {
  products: ContentLakeProductsType[];
}

const SearchBar: React.FC<SearchBarProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const productSuggestions = useMemo(() => {
    if (!searchTerm || searchTerm.trim() === "") {
      return [];
    }

    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return products.filter((product) =>
      product.productTitle.toLowerCase().includes(lowercaseSearchTerm)
    );
  }, [searchTerm, products]);

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchTerm) {
      // Perform search logic (e.g., API call, filtering)
      const selectedProduct = productSuggestions.find(
        (product) =>
          product.productTitle.toLowerCase() === searchTerm.toLowerCase()
      );

      if (selectedProduct) {
        window.location.href = `/products/${selectedProduct.slug}`;
      } else {
        // Handle no results scenario (optional)
      }

      // Optionally clear search term after search
      setSearchTerm("");
    }
  };

  return (
    <Box position="relative">
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
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search for Roasted Coffee"
        />
      </InputGroup>
      {productSuggestions.length > 0 && ( // Only show suggestions if there's a search term
        <Flex
          mt={1}
          flexDirection="column"
          transition="all 0.3s"
          borderRadius={10}
          zIndex={1}
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          w={"100%"}
          position="absolute" // Position the suggestions below the search bar
          top="100%"
          left={0} // Align to the left of the search bar
        >
          {productSuggestions.map((suggestion, index) => (
            <Text
              onClick={() =>
                (window.location.href = `/products/${suggestion.slug}`)
              }
              transition="all 0.3s"
              borderTopRadius={index === 0 ? 10 : 0}
              borderBottomRadius={
                index === productSuggestions.length - 1 ? 10 : 0
              }
              py={1}
              px={3}
              cursor="pointer"
              _hover={{ bg: "gray.100" }}
              key={index}
            >
              {suggestion.productTitle}
            </Text>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default SearchBar;
