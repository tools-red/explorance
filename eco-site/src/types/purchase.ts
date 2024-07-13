import { ContentLakeProductsType } from "./contentLake";

interface CartItem {
  productDetails: ContentLakeProductsType;
  cartItemAmount: number;
}

interface Cart {
  items: CartItem[]; // Array of CartItem objects
  totalQuantity: number; // Total number of items in the cart
  totalPrice: number; // Total price of all items in the cart
}

export { type Cart };
