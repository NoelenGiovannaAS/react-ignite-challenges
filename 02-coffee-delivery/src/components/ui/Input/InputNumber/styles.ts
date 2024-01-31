import { styled } from "styled-components";

export const InputNumber = styled.div`
  background: ${(props) => props.theme.base.button};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 4.5rem;
  height: 2rem;
  padding: 0.5rem;
  margin: 0 0.25rem;
  color: ${(props) => props.theme.base.title};
  border-radius: 4px;
  & > input {
    background: transparent;
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
    width: 10px;
    height: 12px;
  }
  & > button {
    background: transparent;
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
    cursor: pointer;
    color: ${(props) => props.theme.product.purple};
  }
`;
