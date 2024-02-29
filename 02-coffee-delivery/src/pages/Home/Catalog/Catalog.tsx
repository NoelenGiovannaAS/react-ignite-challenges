import Arabe from "assets/Arabe.png";
import CafeComLeite from "assets/CafeComLeite.png";
import CafeGelado from "assets/CafeGelado.png";
import Capuccino from "assets/Capuccino.png";
import ChocolateQuente from "assets/ChocolateQuente.png";
import Cubano from "assets/Cubano.png";
import Expresso from "assets/Expresso.png";
import ExpressoCubano from "assets/ExpressoCremoso.png";
import Havaiano from "assets/Havaiano.png";
import Irlandes from "assets/Irlandes.png";
import Latte from "assets/Latte.png";
import Macchiato from "assets/Macchiato.png";
import Mochacchino from "assets/Mochaccino.png";

import { CoffeeCard } from "./CoffeeCard/CoffeeCard";
import * as Styles from "./styles";

export interface ICoffee {
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: string;
}
const coffees: ICoffee[] = [
  {
    image: Arabe,
    tags: ["Especial"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    image: CafeComLeite,
    tags: ["TRADICIONAL"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    image: CafeGelado,
    tags: ["TRADICIONAL"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    image: Capuccino,
    tags: ["TRADICIONAL"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    image: ChocolateQuente,
    tags: ["TRADICIONAL"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    image: Cubano,
    tags: ["TRADICIONAL"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    image: ExpressoCubano,
    tags: ["TRADICIONAL"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    image: Expresso,
    tags: ["TRADICIONAL"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    image: Havaiano,
    tags: ["TRADICIONAL"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    image: Irlandes,
    tags: ["TRADICIONAL"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    image: Latte,
    tags: ["TRADICIONAL"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    image: Macchiato,
    tags: ["TRADICIONAL", "Com leite"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },

  {
    image: Mochacchino,
    tags: ["TRADICIONAL", "TRADICIONAL", "TRADICIONAL"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
];

export const Catalog = () => {
  return (
    <Styles.Catalog>
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
    </Styles.Catalog>
  );
};
