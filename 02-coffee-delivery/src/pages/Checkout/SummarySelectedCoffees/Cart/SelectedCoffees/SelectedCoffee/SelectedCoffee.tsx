import { Button } from "components/ui/Button/Button";
import { InputQuantityNumber } from "components/ui/Input/InputNumber/InputNumber";
import { ICoffee } from "interfaces/coffees";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";
import {
  ActionsContainer,
  CoffePrice,
  CoffeeInfoContainer,
  CoffeeInfoNamePrice,
  CoffeeName,
  ImageCoffee,
  WrapperSelectedCoffee,
} from "./styles";

export const SelectedCoffee = ({
  image,
  price,
  title,
  quantity,
}: Pick<ICoffee, "image" | "price" | "title" | "quantity">) => {
  return (
    <WrapperSelectedCoffee>
      <ImageCoffee src={image} />
      <CoffeeInfoContainer>
        <CoffeeInfoNamePrice>
          <CoffeeName>{title}</CoffeeName>
          <CoffePrice>{price.toFixed(2)}</CoffePrice>
        </CoffeeInfoNamePrice>

        <ActionsContainer>
          <InputQuantityNumber quantity={quantity} />
          <Button
            variant="secondary"
            icon={<Trash size={16} color={`${useTheme().product["purple"]}`} />}
            text="REMOVER"
          />
        </ActionsContainer>
      </CoffeeInfoContainer>
    </WrapperSelectedCoffee>
  );
};
