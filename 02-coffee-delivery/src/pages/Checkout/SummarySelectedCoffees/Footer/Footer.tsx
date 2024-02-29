import { Button } from "components/ui/Button/Button";
import { Item, Price, TotalAndPrice, WrapperFooter } from "./styles";

export const Footer = () => {
  return (
    <WrapperFooter>
      <TotalAndPrice>
        <Item>Total de itens</Item>
        <Price>R$ 29,70</Price>
      </TotalAndPrice>
      <TotalAndPrice>
        <Item>Total de itens</Item>
        <Price>R$ 29,70</Price>
      </TotalAndPrice>
      <TotalAndPrice>
        <Item>Total</Item>
        <Price>R$ 33,20</Price>
      </TotalAndPrice>
      <Button variant="primary" text="CONFIRMAR PEDIDO" />
    </WrapperFooter>
  );
};
