export interface AppContext {
  cart: CartObj[];
  cartTotal: number;
  manageCart: (
    action:
      | "ADD_TO_CART"
      | "REMOVE_FROM_CART"
      | "EMPTY_CART"
      | "INCREASE_ITEM_COUNT"
      | "DECREASE_ITEM_COUNT",
    payload: CartObj | ProductObj
  ) => void;
  isProductInCart: (product: ProductObj) => boolean;
}

export type DrawerParamList = {
  Home: undefined;
  Cart: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Product: undefined;
};

export interface CartObj extends ProductObj {
  count: number;
  total: number;
  size: number;
}

export interface ProductObj {
  id: string;
  name: string;
  images: Array<{
    id: string;
    source: string;
    color?: string;
  }>;
  price: number;
  description?: string;
}
