import { InputText } from "components/ui/Input/InputText/InputText";
import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { useTheme } from "styled-components";
import { SubtitleForm } from "../SubtitleForm/SubtitleForm";
import { FormContainer, WrapperDeliveryAddress } from "./styles";
export const DeliveryAddressForm = () => {
  const { register } = useFormContext();

  return (
    <WrapperDeliveryAddress>
      <SubtitleForm
        icon={
          <MapPinLine
            size={22}
            color={`${useTheme().product["yellow-dark"]}`}
          />
        }
        title={"Endereço de Entrega"}
        subtitle={"Informe o endereço onde deseja receber seu pedido"}
      />

      <FormContainer>
        <InputText
          placeholder="CEP"
          id="cep"
          type="text"
          width="25%"
          //list="task-suggestions"
          //disabled={!!activeCycle}
          {...register("cep")}
        />

        <InputText
          placeholder="Rua"
          id="rua"
          type="text"
          width="100%"
          //list="task-suggestions"
          //disabled={!!activeCycle}
          {...register("rua")}
        />

        <InputText
          placeholder="Número"
          id="numero"
          type="number"
          width="25%"
          //list="task-suggestions"
          //disabled={!!activeCycle}
          {...register("numero")}
        />

        <InputText
          placeholder="Complemento"
          id="rua"
          width="75%"
          //list="task-suggestions"
          //disabled={!!activeCycle}
          {...register("complemento")}
        />

        <InputText
          placeholder="Bairro"
          id="bairro"
          width="25%"
          //list="task-suggestions"
          //disabled={!!activeCycle}
          {...register("bairro")}
        />

        <InputText
          placeholder="Cidade"
          id="cidade"
          width="60%"
          //list="task-suggestions"
          //disabled={!!activeCycle}
          {...register("cidade")}
        />

        <InputText
          placeholder="UF"
          id="uf"
          width="15%"
          //list="task-suggestions"
          //disabled={!!activeCycle}
          {...register("uf")}
        />
      </FormContainer>
    </WrapperDeliveryAddress>
  );
};
