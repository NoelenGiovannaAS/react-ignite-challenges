import { Button } from "components/ui/Button/Button";
import { InputQuantityNumber } from "components/ui/Input/InputNumber/InputNumber";
import { ShoppingCart } from "phosphor-react";
import { ICoffee } from "../Catalog";
import * as Styles from "./styles";

export const CoffeeCard = (props: ICoffee) => {
  const { description, image, name, price, tags } = props;

  return (
    <Styles.CoffeeItem>
      <Styles.ImageCoffee src={image} />
      {tags.map((tag) => (
        <Styles.CoffeTag key={tag}>{tag.toString()}</Styles.CoffeTag>
      ))}
      <Styles.CoffeName>{name}</Styles.CoffeName>
      <Styles.CoffeDescription>{description}</Styles.CoffeDescription>
      <Styles.CoffePrice>R$ {price}</Styles.CoffePrice>
      <InputQuantityNumber />
      <Button variant="icon" icon={<ShoppingCart weight="fill" />} />
    </Styles.CoffeeItem>
  );
};
