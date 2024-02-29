import { EmptyStateCart } from "./EmptyState/EmptyStateCart";
import { SelectedCoffee } from "./SelectedCoffee/SelectedCoffee";
import { WrapperSelectedCoffees } from "./styles";

export const SelectedCoffees = () => {
  const hasCoffees = false;
  return (
    <WrapperSelectedCoffees>
      {hasCoffees ? <SelectedCoffee /> : <EmptyStateCart />}
    </WrapperSelectedCoffees>
  );
};
