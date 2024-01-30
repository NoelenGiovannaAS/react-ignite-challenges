import { ShoppingCart } from "phosphor-react";
import * as Styles from "./styles";

interface ICartLink {
  quantity?: number;
}
export const CartLink = ({ quantity = 0 }: ICartLink) => {
  return (
    <Styles.Cart qty={quantity}>
      <ShoppingCart size={32} weight="fill" />
    </Styles.Cart>
  );
};
