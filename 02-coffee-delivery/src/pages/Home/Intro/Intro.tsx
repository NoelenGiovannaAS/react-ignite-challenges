import CoffeDeliveryImage from "assets/image-coffee-delivery.png";
import { DescriptionItems } from "./DescriptionItems/DescriptionItems";
import * as Styles from "./styles";

export const Intro = () => {
  return (
    <Styles.IntroContainer>
      <Styles.DescriptionContainer>
        <Styles.TitleSubtitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Styles.TitleSubtitle>

        <DescriptionItems />
      </Styles.DescriptionContainer>

      <Styles.ImageCoffeDelivery
        src={CoffeDeliveryImage}
        alt="Image of a thermal cup write 'Coffee Delivery'"
      />
    </Styles.IntroContainer>
  );
};
