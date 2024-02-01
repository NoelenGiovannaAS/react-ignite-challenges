import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import * as Styles from "./styles";

export const DescriptionItems = () => {
  return (
    <Styles.WrapperDescriptionItems>
      <Styles.Item iconColor="yellow">
        <ShoppingCart size="32px" weight="fill" />
        Compra simples e segura
      </Styles.Item>
      <Styles.Item iconColor="yellow">
        <Package size="32px" weight="fill" />
        Embalagem mantém o café intacto
      </Styles.Item>
      <Styles.Item iconColor="yellow">
        <Timer size="32px" weight="fill" />
        Entrega rápida e rastreada
      </Styles.Item>
      <Styles.Item iconColor="yellow">
        <Coffee size="32px" weight="fill" />O café chega fresquinho até você
      </Styles.Item>
    </Styles.WrapperDescriptionItems>
  );
};
