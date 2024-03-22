import { styled } from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
  margin-top: 4rem;
`;
export const HeaderSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  > h5 {
    color: ${(props) => props.theme["base-span"]};
    font-weight: 400;
  }
`;
export const Input = styled.input`
  border-radius: 6px;
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-border"]};
  padding: 0.75rem 1rem;
  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
    font-size: 1rem;
  }
`;
