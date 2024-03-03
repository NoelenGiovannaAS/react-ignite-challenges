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
          //list="task-suggestions"
          //disabled={!!activeCycle}
          {...register("cep")}
          width="33.33%"
        />

        <InputText
          placeholder="Rua"
          id="rua"
          type="text"
          //width="100%"
          //list="task-suggestions"
          //disabled={!!activeCycle}
          {...register("rua")}
        />

        <div>
          <InputText
            placeholder="Número"
            id="numero"
            type="number"
            //list="task-suggestions"
            //disabled={!!activeCycle}
            {...register("numero")}
          />

          <InputText
            placeholder="Complemento"
            id="rua"
            //list="task-suggestions"
            //disabled={!!activeCycle}
            {...register("complemento")}
            width="75%"
          />
        </div>

        <div>
          <InputText
            placeholder="Bairro"
            id="bairro"
            //list="task-suggestions"
            //disabled={!!activeCycle}

            {...register("bairro")}
          />

          <InputText
            placeholder="Cidade"
            id="cidade"
            //list="task-suggestions"
            //disabled={!!activeCycle}
            {...register("cidade")}
            width="85%"
          />

          <InputText
            placeholder="UF"
            id="uf"
            //list="task-suggestions"
            //disabled={!!activeCycle}
            {...register("uf")}
            width="15%"
          />
        </div>
      </FormContainer>
    </WrapperDeliveryAddress>
  );
};
