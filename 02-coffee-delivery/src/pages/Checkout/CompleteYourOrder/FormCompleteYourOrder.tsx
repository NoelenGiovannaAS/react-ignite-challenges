import { DeliveryAddressForm } from "./DeliveryAddressForm/DeliveryAddressForm";
import { PaymentMethod } from "./PaymentMethod/PaymentMethod";
import { WrapperCompleteYourOrder } from "./styles";

export const FormCompleteYourOrder = () => {
  return (
    <WrapperCompleteYourOrder>
      <span>Complete seu pedido</span>
      <DeliveryAddressForm />
      <PaymentMethod />
    </WrapperCompleteYourOrder>
  );
};
