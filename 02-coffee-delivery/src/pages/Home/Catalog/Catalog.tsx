import { coffees } from "coffees.json";
import { CoffeeCard } from "./CoffeeCard/CoffeeCard";
import * as Styles from "./styles";
export const Catalog = () => {
  return (
    <Styles.Catalog>
      {coffees.map((coffee) => {
        return <CoffeeCard {...coffee} key={coffee.id} />;
      })}
    </Styles.Catalog>
  );
};
