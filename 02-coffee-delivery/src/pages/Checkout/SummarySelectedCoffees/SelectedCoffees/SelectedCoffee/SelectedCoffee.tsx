import Mochacchino from "assets/Mochaccino.png";
import { Button } from "components/ui/Button/Button";
import { InputQuantityNumber } from "components/ui/Input/InputNumber/InputNumber";
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

export const SelectedCoffee = () => {
  return (
    <WrapperSelectedCoffee>
      <ImageCoffee src={Mochacchino} />
      <CoffeeInfoContainer>
        <CoffeeInfoNamePrice>
          <CoffeeName>Café com leite</CoffeeName>
          <CoffePrice>R$ 10,00</CoffePrice>
        </CoffeeInfoNamePrice>

        <ActionsContainer>
          <InputQuantityNumber />
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
