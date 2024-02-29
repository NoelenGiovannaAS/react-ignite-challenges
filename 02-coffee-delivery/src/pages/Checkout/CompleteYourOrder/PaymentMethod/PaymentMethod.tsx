import { SelectPayment } from "components/ui/Input/SelectPayment/SelectPayment";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { SubtitleForm } from "../SubtitleForm/SubtitleForm";
import { FormContainer, WrapperPaymentMethod } from "./styles";
export const PaymentMethod = () => {
  //const { register } = useFormContext();

  return (
    <WrapperPaymentMethod>
      <SubtitleForm
        icon={
          <CurrencyDollar size={22} color={`${useTheme().product["purple"]}`} />
        }
        title={"Pagamento"}
        subtitle={"Informe o endereço onde deseja receber seu pedido"}
      />
      <FormContainer>
        <SelectPayment
          paymentsTypes={[
            {
              icon: <CreditCard size={32} />,
              paymentTypeName: "CARTÃO DE CRÉDITO",
              checked: false,
            },
            {
              icon: <Bank size={32} />,
              paymentTypeName: "CARTÃO DE DÉBITO",
              checked: true,
            },
            {
              icon: <Money size={32} />,
              paymentTypeName: "DINHEIRO",
              checked: false,
            },
          ]}
        />
      </FormContainer>
    </WrapperPaymentMethod>
  );
};
