import React, { useState, useContext, createContext, useEffect } from "react";
import { AppContext, CartObj, ProductObj } from "../types";

const Context = createContext<AppContext>({
  cart: [],
  allProducts: [],
  addProducts: () => {},
  manageCart: () => {},
  isProductInCart: () => false,
  cartTotal: 0,
});

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartObj[]>([]);
  const [allProducts, setAllProducts] = useState<ProductObj[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    calculateCartTotal();
  }, [cart]);

  const calculateCartTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.total));
    setCartTotal(Number(total.toFixed(2)));
  };

  const addProducts = (products: ProductObj[]) => {
    setAllProducts([...allProducts, ...products]);
  };

  const manageCart = (
    action:
      | "ADD_TO_CART"
      | "REMOVE_FROM_CART"
      | "EMPTY_CART"
      | "INCREASE_ITEM_COUNT"
      | "DECREASE_ITEM_COUNT",
    product: CartObj | ProductObj
  ) => {
    let tempCart: CartObj[] = [];
    let updatedProduct: CartObj | any = {};
    let updatedProductIndex = 0;
    switch (action) {
      case "ADD_TO_CART":
        if (isProductInCart(product)) {
          return;
        }
        product.count = 1;
        product.total = product.price;
        setCart([...cart, product]);
        break;
      case "REMOVE_FROM_CART":
        setCart(cart.filter((cartItem) => cartItem.id !== product.id));
        break;
      case "EMPTY_CART":
        setCart([]);
        break;
      case "INCREASE_ITEM_COUNT":
        tempCart = [...cart];
        updatedProductIndex = tempCart.findIndex(
          (item) => item.id === product.id
        );
        updatedProduct = tempCart[updatedProductIndex];
        updatedProduct.count++;
        updatedProduct.total = Number(
          (updatedProduct.count * updatedProduct.price).toFixed(2)
        );
        console.log(updatedProduct.total);
        tempCart[updatedProductIndex] = updatedProduct;
        setCart(tempCart);
        break;
      case "DECREASE_ITEM_COUNT":
        tempCart = [...cart];
        updatedProductIndex = tempCart.findIndex(
          (item) => item.id === product.id
        );
        updatedProduct = tempCart[updatedProductIndex];
        if (updatedProduct.count === 1) {
          setCart(cart.filter((item) => item.id !== product.id));
          return;
        }
        updatedProduct.count--;
        updatedProduct.total = updatedProduct.count * updatedProduct.price;
        tempCart[updatedProductIndex] = updatedProduct;
        setCart(tempCart);
        break;
      default:
        break;
    }
  };

  const isProductInCart = (product: ProductObj) => {
    if (cart.find((item) => item.id === product.id)) {
      return true;
    }
    return false;
  };

  const state: AppContext = {
    cart,
    manageCart,
    isProductInCart,
    cartTotal,
    allProducts,
    addProducts,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
