import { InputHTMLAttributes } from "react";
import * as Styles from "./styles";

interface IInputText extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  width?: string;
}

export const InputText = ({ placeholder, width = "27rem" }: IInputText) => {
  return <Styles.InputText placeholder={placeholder} width={width} />;
};
