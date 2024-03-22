import { coffees } from "coffees.json";
import { CartContext } from "contexts/CartProvider";
import { useContext } from "react";
import { SelectedCoffee } from "./SelectedCoffee/SelectedCoffee";
import { WrapperSelectedCoffees } from "./styles";
export const SelectedCoffees = () => {
  const { cart } = useContext(CartContext);

  return (
    <WrapperSelectedCoffees>
      {cart.map((item) => {
        const coffee = coffees.find((coffee) => coffee.id === item.id);
        if (coffee) {
          return (
            <SelectedCoffee
              key={coffee.id}
              quantity={item.quantity}
              image={coffee.image}
              price={coffee.price}
              title={coffee.title}
            />
          );
        }
      })}
    </WrapperSelectedCoffees>
  );
};
