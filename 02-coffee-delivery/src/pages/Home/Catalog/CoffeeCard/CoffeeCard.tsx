import { Button } from "components/ui/Button/Button";
import { InputQuantityNumber } from "components/ui/Input/InputNumber/InputNumber";
import { CartContext } from "contexts/CartProvider";
import { ICoffee } from "interfaces/coffees";
import { Check, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import * as Styles from "./styles";

export const CoffeeCard = ({
  id,
  description,
  image,
  title,
  price,
  tags,
}: ICoffee) => {
  const { addToCart } = useContext(CartContext);
  const [quantityCatalog, setQuantityCatalog] = useState(0);
  const [itemAdded, setItemAdded] = useState(false);

  function incrementQuantity() {
    setQuantityCatalog((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantityCatalog > 0) {
      setQuantityCatalog((state) => state - 1);
    }
  }

  function editQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const editedValue = e.target.value;
    setQuantityCatalog(Number(editedValue));
  }

  function handleAddItem() {
    addToCart({ id, quantity: quantityCatalog });
    setItemAdded(true);
  }

  return (
    <Styles.Card>
      <Styles.ImageCoffee src={image} />
      <Styles.CoffeeTags>
        {tags.map((tag) => (
          <Styles.CoffeTag key={tag}>{tag.toString()}</Styles.CoffeTag>
        ))}
      </Styles.CoffeeTags>

      <Styles.CoffeDescriptionContainer>
        <Styles.CoffeName>{title}</Styles.CoffeName>
        <Styles.CoffeDescription>{description}</Styles.CoffeDescription>
      </Styles.CoffeDescriptionContainer>

      <Styles.FooterPriceQty>
        <Styles.CoffePrice>
          R$
          <strong>{price.toFixed(2)}</strong>
        </Styles.CoffePrice>

        <Styles.ActionsContainer isItemAdded={itemAdded}>
          <InputQuantityNumber
            quantity={quantityCatalog}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            editQuantity={editQuantity}
          />
          <Button
            variant="icon"
            icon={
              itemAdded ? (
                <Check weight="fill" />
              ) : (
                <ShoppingCart weight="fill" />
              )
            }
            handleClick={handleAddItem}
          />
        </Styles.ActionsContainer>
      </Styles.FooterPriceQty>
    </Styles.Card>
  );
};
