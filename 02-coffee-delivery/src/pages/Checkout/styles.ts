import { styled } from "styled-components";

export const WrapperForm = styled.form`
  > div {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
