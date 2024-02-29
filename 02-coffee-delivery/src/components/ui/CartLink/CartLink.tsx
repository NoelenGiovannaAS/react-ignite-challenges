import { ShoppingCart } from "phosphor-react";
import { Cart } from "./styles";

interface ICartLink {
  quantity?: number;
}
export const CartLink = ({ quantity = 0 }: ICartLink) => {
  return (
    <Cart qty={quantity}>
      <ShoppingCart size={32} weight="fill" />
    </Cart>
  );
};
