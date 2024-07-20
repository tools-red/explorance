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

enum STATUS {
  DISPATCHED = "DISPATCHED",
  PENDING = "PENDING",
}

interface FetchPurchasePromiseType {
  id: string;
  name: string;
  address: string;
  city: string;
  email: string;
  mobile: string;
  postalcode: string;
  state: string;
  purchase_id: string;
  status: STATUS;
}

export {
  type CreatePurchasePromiseType,
  type FetchPurchasePromiseType,
  type STATUS,
};
