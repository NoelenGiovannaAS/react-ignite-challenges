import Expresso from "assets/Expresso.png";
import { CoffeeCard } from "./CoffeeCard/CoffeeCard";

export interface ICoffee {
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: string;
}
const coffees: ICoffee[] = [
  {
    image: Expresso,
    tags: ["tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
];

export const Catalog = () => {
  return (
    <div>
      {coffees.map((coffee) => (
        <CoffeeCard
          key={coffee.name}
          image={coffee.image}
          tags={coffee.tags}
          name={coffee.name}
          description={coffee.description}
          price={coffee.price}
        />
      ))}
    </div>
  );
};
