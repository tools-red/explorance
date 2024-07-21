import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { type Dispatch, type SetStateAction } from "react";

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
        fontSize="small"
        variant="none"
        border="1px solid rgba(31, 41, 55, 0.45)"
        boxShadow="0px 3px 0px 0px rgba(0, 0, 0, 0.19)"
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
