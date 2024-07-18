interface CreatePurchasePromiseType {
  purchase_order: {
    id: string;
    name: string;
    address: string;
    city: string;
    email: string;
    mobile: string;
    postalcode: string;
    state: string;
    purchase_id: string;
  };
  order_state: boolean;
}

export { type CreatePurchasePromiseType };
