import { Minus, Plus } from "phosphor-react";
import { InputNumber } from "./styles";

export const InputQuantityNumber = () => {
  return (
    <InputNumber>
      <button>
        <Minus size={14} />
      </button>

      <input value={1} />

      <button>
        <Plus size={14} />
      </button>
    </InputNumber>
  );
};
