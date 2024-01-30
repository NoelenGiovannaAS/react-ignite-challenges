import { ReactNode } from "react";
import * as Styles from "./styles";

export type ButtonType = "primary" | "secondary" | "icon";

interface IButton {
  text?: string;
  variant: ButtonType;
  icon?: ReactNode;
}

export const Button = ({ variant, text, icon }: IButton) => {
  return (
    <Styles.Button variant={variant}>
      {icon}
      {text}
    </Styles.Button>
  );
};
