import { ButtonHTMLAttributes, ReactNode } from "react";
import * as Styles from "./styles";

export type ButtonType = "primary" | "secondary" | "icon";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant: ButtonType;
  icon?: ReactNode;
  handleClick?: () => void;
}

export const Button = ({ variant, text, icon, handleClick }: IButton) => {
  return (
    <Styles.Button variant={variant} onClick={handleClick}>
      {icon}
      {text}
    </Styles.Button>
  );
};
