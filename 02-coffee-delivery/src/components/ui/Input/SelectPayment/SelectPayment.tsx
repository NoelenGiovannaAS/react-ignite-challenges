import { ReactNode, useState } from "react";
import * as Styles from "./styles";
interface Ipayment {
  icon: ReactNode;
  paymentTypeName: string;
  checked: boolean;
}
interface ISelectPaymentTypes {
  paymentsTypes: Ipayment[];
}

export const SelectPaymentType = ({ paymentsTypes }: ISelectPaymentTypes) => {
  const [paymentChecked, setPaymentChecked] = useState(paymentsTypes);

  const handleCheckPayment = (paymentToCheck: string) => {
    setPaymentChecked((state) =>
      state.map((payment) => {
        if (payment.paymentTypeName === paymentToCheck) {
          if (!payment.checked) {
            return { ...payment, checked: true };
          }
        }
        return { ...payment, checked: false };
      })
    );
  };
  return (
    <>
      {paymentChecked.map((paymentChecked) => (
        <Styles.PaymentContainer key={paymentChecked.paymentTypeName}>
          <input
            id={paymentChecked.paymentTypeName}
            type="radio"
            value={paymentChecked.paymentTypeName}
            onChange={() => handleCheckPayment(paymentChecked.paymentTypeName)}
            checked={paymentChecked.checked}
          />

          <Styles.Payment
            htmlFor={paymentChecked.paymentTypeName}
            checked={paymentChecked.checked}
          >
            {paymentChecked.icon}
            {paymentChecked.paymentTypeName}
          </Styles.Payment>
        </Styles.PaymentContainer>
      ))}
    </>
  );

  /**/
};
