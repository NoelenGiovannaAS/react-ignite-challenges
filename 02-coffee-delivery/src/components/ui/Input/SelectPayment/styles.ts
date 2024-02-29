import { styled } from "styled-components";

export const WrapperSelectPayments = styled.div`
  display: flex;
  gap: 0.75rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const PaymentContainer = styled.div`
  display: flex;
  gap: 1rem;
  & > input {
    display: none;
  }
`;

export const Payment = styled.label<{ checked: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${(props) =>
    props.checked
      ? props.theme.product["purple-light"]
      : props.theme.base.button};
  border: ${(props) =>
    props.checked && `1px solid ${props.theme.product["purple"]}`};

  font-size: 0.75rem;
  line-height: 160%;
  width: 178.67px;
  height: 51px;
  border-radius: 6px;
  padding: 1rem;
  color: ${(props) => props.theme.base.subtitle};
  cursor: pointer;

  & > svg {
    color: ${(props) => props.theme.product.purple};
    width: 1rem;
    height: 1rem;
  }
  &:hover {
    background: ${(props) => props.theme.base["hover"]};
    color: ${(props) => props.theme.base.subtitle};
  }
`;
