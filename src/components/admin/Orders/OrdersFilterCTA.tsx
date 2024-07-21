import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { type Dispatch, type SetStateAction } from "react";
import { LuListFilter } from "react-icons/lu";

interface OrdersFilterCTAProps {
  MenuItems: string[];
  setIsSelected: Dispatch<SetStateAction<string>>;
  isSelected: string;
}

const OrdersFilterCTA: React.FC<OrdersFilterCTAProps> = ({
  MenuItems,
  isSelected,
  setIsSelected,
}) => {
  return (
    <Menu>
      <MenuButton
        leftIcon={<LuListFilter />}
        fontSize="small"
        variant="none"
        border="1px solid"
        borderColor="#D0D5DD"
        color="#344054"
        as={Button}
      >
        {isSelected}
      </MenuButton>
      <MenuList>
        {MenuItems.map((item, index) => {
          return (
            <MenuItem
              fontSize="small"
              fontWeight={500}
              onClick={() => setIsSelected(item)}
              key={index}
            >
              {item}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default OrdersFilterCTA;
