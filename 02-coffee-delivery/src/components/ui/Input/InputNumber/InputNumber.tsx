import { Minus, Plus } from "phosphor-react";
import { InputNumber } from "./styles";

interface Props {
  quantity?: number;
  editQuantity?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  incrementQuantity?: () => void;
  decrementQuantity?: () => void;
}
export const InputQuantityNumber = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
  editQuantity,
}: Props) => {
  return (
    <InputNumber>
      <button onClick={decrementQuantity}>
        <Minus size={14} />
      </button>

      <input
        value={quantity}
        onChange={editQuantity}
        type="number"
        min={0}
        max={999}
        onInput={(e) =>
          (e.currentTarget.value = e.currentTarget.value.slice(0, 3))
        }
      />

      <button onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </InputNumber>
  );
};
