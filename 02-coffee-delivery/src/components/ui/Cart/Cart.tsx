type CartType = "EMPTY" | "FULL";

interface ICart {
  type: CartType;
}
export const Button = ({ type }: ICart) => {
  return;
};
