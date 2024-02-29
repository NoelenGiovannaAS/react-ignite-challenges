import { Catalog } from "./Catalog/Catalog";
import { Intro } from "./Intro/Intro";
import * as Styles from "./styles";

export const Home = () => {
  return (
    <Styles.WrapperHome>
      <Intro />
      <Catalog />
    </Styles.WrapperHome>
  );
};
