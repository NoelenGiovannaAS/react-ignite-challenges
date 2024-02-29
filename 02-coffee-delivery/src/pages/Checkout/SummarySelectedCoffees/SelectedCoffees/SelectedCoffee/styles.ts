import styled from "styled-components";

export const WrapperSelectedCoffee = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.25rem;
  flex: 2;
  border-bottom: 1px solid ${(props) => props.theme.base.button};
  padding: 1.5rem 0;
`;

export const ImageCoffee = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const CoffeeInfoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const CoffeeInfoNamePrice = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const CoffeeName = styled.div``;

export const CoffePrice = styled.div`
  text-align: start;
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    font-weight: 400;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    justify-content: space-between;
    height: 100%;
  }
`;
