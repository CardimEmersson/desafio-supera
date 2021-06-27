import { ProductsProps } from "data/hooks/useProducts";
import { Context, ReactNode, createContext, useState } from "react";

interface ContextApiProps {
  isOpenCart: boolean;
  handleIsOpenCart: (isOpen: boolean) => void;
  cartData: CartDataProps[];
  handleCartData: (data: CartDataProps[]) => void;
  isOpenModal: boolean;
  handleIsOpenModal: (isOpen: boolean) => void;
  filter: (
    type: string,
    productA: ProductsProps,
    productB: ProductsProps
  ) => 1 | -1;
}

interface ProviderProps {
  children: ReactNode;
}

export interface CartDataProps extends ProductsProps {
  quantity: number;
}

const ContextApi: Context<ContextApiProps> = createContext(
  {} as ContextApiProps
);

function Provider({ children }: ProviderProps) {
  // Cart
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleIsOpenCart = (isOpen: boolean) => {
    setIsOpenCart(isOpen);
  };

  // CartData
  const [cartData, setCartData] = useState<CartDataProps[]>([]);

  const handleCartData = (data: CartDataProps[]) => {
    setCartData(data);
  };

  // Modal

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleIsOpenModal = (isOpen: boolean) => {
    setIsOpenModal(isOpen);
  };

  // filter

  const filter = (
    type: string,
    productA: ProductsProps,
    productB: ProductsProps
  ) => {
    switch (type) {
      case "biggestPrice":
        return productA.price > productB.price ? -1 : 1;
      case "lowestPrice":
        return productA.price < productB.price ? -1 : 1;
      case "morePopular":
        return productA.score > productB.score ? -1 : 1;
      case "lessPopular":
        return productA.score < productB.score ? -1 : 1;
      case "alphabeticalOrder":
        return productA.name < productB.name ? -1 : 1;
      default:
        return productA.name < productB.name ? -1 : 1;
    }
  };

  return (
    <ContextApi.Provider
      value={{
        isOpenCart,
        handleIsOpenCart,
        cartData,
        handleCartData,
        isOpenModal,
        handleIsOpenModal,
        filter,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}

export { ContextApi, Provider };
