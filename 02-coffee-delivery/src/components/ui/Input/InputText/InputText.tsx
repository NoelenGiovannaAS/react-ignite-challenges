import * as Styles from "./styles";

interface IInputText {
  placeholder: string;
  width?: string;
}

export const InputText = ({ placeholder, width = "27rem" }: IInputText) => {
  return <Styles.InputText placeholder={placeholder} width={width} />;
};
