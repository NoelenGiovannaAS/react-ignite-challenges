import { Minus, Plus } from "phosphor-react";
import * as Styles from "./styles";

export const InputQuantityNumber = () => {
  return (
    <Styles.InputNumber>
      <button>
        <Minus size={14} />
      </button>

      <input value={1} />

      <button>
        <Plus size={14} />
      </button>
    </Styles.InputNumber>
  );
};
