import { Footer } from "./Footer/Footer";
import { SelectedCoffees } from "./SelectedCoffees/SelectedCoffees";
import * as Styles from "./styles";

export const Cart = () => {
  return (
    <Styles.WrapperSummary>
      <SelectedCoffees />
      <Footer />
    </Styles.WrapperSummary>
  );
};
