import { styled } from "styled-components";

export const WrapperDeliveryAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.base.card};
  border-radius: 6px;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  div {
    display: flex;
    gap: 0.75rem;
  }
`;
