import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import * as Styles from "./styles";

export const DescriptionItems = () => {
  return (
    <Styles.WrapperDescriptionItems>
      <Styles.Item>
        <Styles.ItemIcon iconColor="yellowDark">
          <ShoppingCart size="1rem" weight="fill" />
        </Styles.ItemIcon>
        Compra simples e segura
      </Styles.Item>
      <Styles.Item>
        <Styles.ItemIcon iconColor="text">
          <Package size="1rem" weight="fill" />
        </Styles.ItemIcon>
        Embalagem mantém o café intacto
      </Styles.Item>
      <Styles.Item>
        <Styles.ItemIcon iconColor="yellow">
          <Timer size="1rem" weight="fill" />
        </Styles.ItemIcon>
        Entrega rápida e rastreada
      </Styles.Item>
      <Styles.Item>
        <Styles.ItemIcon iconColor="purple">
          <Coffee size="1rem" weight="fill" />
        </Styles.ItemIcon>
        O café chega fresquinho até você
      </Styles.Item>
    </Styles.WrapperDescriptionItems>
  );
};
