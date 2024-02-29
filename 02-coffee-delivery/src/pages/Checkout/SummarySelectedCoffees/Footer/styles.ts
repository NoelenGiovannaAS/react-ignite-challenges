import { styled } from "styled-components";

export const WrapperFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  > button {
    width: 100%;
    margin-top: 0.75rem;
  }
  & > div:nth-child(3) {
    font-weight: bold;
    font-size: 1.25rem;
  }
`;

export const TotalAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.p``;
export const Item = styled.p`
  font-size: 0.875rem;
`;
