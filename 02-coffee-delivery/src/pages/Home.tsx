import { Catalog } from "./Home/Catalog/Catalog";
import { Intro } from "./Home/Intro/Intro";
import * as Styles from "./styles";

export const Home = () => {
  return (
    <Styles.WrapperHome>
      <Intro />
      <Catalog />
    </Styles.WrapperHome>
  );
};
