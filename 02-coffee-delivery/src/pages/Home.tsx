import { CircleDashed } from "phosphor-react";
import { CartLink } from "../components/ui/CartLink/CartLink";
import { SelectPaymentType } from "../components/ui/Input/SelectPayment/SelectPayment";

export const Home = () => {
  return (
    <div>
      <CartLink quantity={1} />
      <SelectPaymentType
        paymentsTypes={[
          {
            icon: <CircleDashed />,
            paymentTypeName: "Cartão",
            checked: true,
          },
          {
            icon: <CircleDashed />,
            paymentTypeName: "Cartão Crédito",
            checked: false,
          },
        ]}
      />
    </div>
  );
};
