import { Button } from "components/ui/Button/Button";
import { InputQuantityNumber } from "components/ui/Input/InputNumber/InputNumber";
import { ShoppingCart } from "phosphor-react";
import { ICoffee } from "../Catalog";
import * as Styles from "./styles";

export const CoffeeCard = (props: ICoffee) => {
  const { description, image, name, price, tags } = props;

  return (
    <Styles.Card>
      <Styles.ImageCoffee src={image} />
      <Styles.CoffeeTags>
        {tags.map((tag) => (
          <Styles.CoffeTag key={tag}>{tag.toString()}</Styles.CoffeTag>
        ))}
      </Styles.CoffeeTags>

      <Styles.CoffeDescriptionContainer>
        <Styles.CoffeName>{name}</Styles.CoffeName>
        <Styles.CoffeDescription>{description}</Styles.CoffeDescription>
      </Styles.CoffeDescriptionContainer>

      <Styles.FooterPriceQty>
        <Styles.CoffePrice>
          R$
          <strong>{price}</strong>
        </Styles.CoffePrice>
        <Styles.ActionsContainer>
          <InputQuantityNumber />
          <Button variant="icon" icon={<ShoppingCart weight="fill" />} />
        </Styles.ActionsContainer>
      </Styles.FooterPriceQty>
    </Styles.Card>
  );
};
