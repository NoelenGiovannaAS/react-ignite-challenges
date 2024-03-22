import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import zod from "zod";
import { FormCompleteYourOrder } from "./CompleteYourOrder/FormCompleteYourOrder";
import { Cart } from "./SummarySelectedCoffees/Cart/Cart";
import { WrapperForm } from "./styles";
export const Checkout = () => {
  const newCheckoutFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o Cep"),
    rua: zod.string().min(1, "Informe a Rua"),
    numero: zod.string().min(1, "Infordme o Número"),
    bairro: zod.string().min(1, "Informe o Bairro"),
    cidade: zod.string().min(1, "Informe a Cidade"),
    estado: zod.string().min(1, "Informe o Estado"),
  });

  type newCheckoutFormData = zod.infer<typeof newCheckoutFormValidationSchema>;

  const newCheckoutForm = useForm<newCheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
    },
  });

  const { handleSubmit, reset } = newCheckoutForm;

  function handleCreateNewOrder(data: newCheckoutFormData) {
    console.log("Novo pedido", data);
    reset();
  }

  return (
    <WrapperForm onSubmit={handleSubmit(handleCreateNewOrder)}>
      <FormProvider {...newCheckoutForm}>
        <div>
          <FormCompleteYourOrder />
          <Cart />
        </div>
      </FormProvider>
    </WrapperForm>
  );
};
