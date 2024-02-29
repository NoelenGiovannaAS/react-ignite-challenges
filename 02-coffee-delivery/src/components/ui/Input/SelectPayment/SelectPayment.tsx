import { ReactNode, useState } from "react";
import { Payment, PaymentContainer, WrapperSelectPayments } from "./styles";
interface Ipayment {
  icon: ReactNode;
  paymentTypeName: string;
  checked: boolean;
}
interface ISelectPaymentTypes {
  paymentsTypes: Ipayment[];
}

export const SelectPayment = ({ paymentsTypes }: ISelectPaymentTypes) => {
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
    <WrapperSelectPayments>
      {paymentChecked.map((paymentChecked) => (
        <PaymentContainer key={paymentChecked.paymentTypeName}>
          <input
            id={paymentChecked.paymentTypeName}
            type="radio"
            value={paymentChecked.paymentTypeName}
            onChange={() => handleCheckPayment(paymentChecked.paymentTypeName)}
            checked={paymentChecked.checked}
          />

          <Payment
            htmlFor={paymentChecked.paymentTypeName}
            checked={paymentChecked.checked}
          >
            {paymentChecked.icon}
            {paymentChecked.paymentTypeName}
          </Payment>
        </PaymentContainer>
      ))}
    </WrapperSelectPayments>
  );
};
