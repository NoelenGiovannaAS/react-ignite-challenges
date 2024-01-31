import { styled } from "styled-components";

export const InputText = styled.input<{ width: string }>`
  background: ${(props) => props.theme.base.input};
  width: ${(props) => props.width};
  height: 2.625rem;
  padding: 0.75rem;
  margin: 0 0.25rem;
  color: ${(props) => props.theme.base.text};
  border-radius: 4px;
  &:focus {
    border: 1.1px solid ${(props) => props.theme.product["yellow-dark"]};
    box-shadow: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.base.label};
  }
  border: none;
`;
