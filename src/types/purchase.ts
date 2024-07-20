import { type ContentLakeProductsType } from "./contentLake";

interface CartItem {
  productDetails: ContentLakeProductsType;
  cartItemAmount: number;
}

interface Cart {
  items: CartItem[]; // Array of CartItem objects
  totalPrice: number; // Total price of all items in the cart
}

export { type Cart, type CartItem };
