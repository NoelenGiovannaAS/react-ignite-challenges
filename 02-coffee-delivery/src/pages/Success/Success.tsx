import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  Details,
  Item,
  ItemIcon,
  ItemInfo,
  SummaryDetails,
  TitleContainer,
  WrapperSuccess,
} from "./styles";

import IlustrationSucess from "../../assets/IllustrationSuccess.png";
export const Success = () => {
  return (
    <WrapperSuccess>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chagará até você</p>
      </TitleContainer>
      <SummaryDetails>
        <Details>
          <Item>
            <ItemIcon iconColor="purple">
              <MapPin size="1rem" weight="fill" />
            </ItemIcon>
            <ItemInfo>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102 </strong>
              </span>
              Farrapos - Porto Alegre, RS
            </ItemInfo>
          </Item>
          <Item>
            <ItemIcon iconColor="yellow">
              <Timer size="1rem" weight="fill" />
            </ItemIcon>
            <ItemInfo>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min </strong>
            </ItemInfo>
          </Item>
          <Item>
            <ItemIcon iconColor="yellowDark">
              <CurrencyDollar size="1rem" weight="fill" />
            </ItemIcon>
            <ItemInfo>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </ItemInfo>
          </Item>
        </Details>
        <img src={IlustrationSucess} alt="A men driving a motocycle" />
      </SummaryDetails>
    </WrapperSuccess>
  );
};
